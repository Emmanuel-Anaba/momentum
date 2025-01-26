"use client";
import * as y from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categoriesWithIcon } from "@/lib";
import { slugify } from "@/lib/utils";
import { addHabit, editHabit } from "@/actions";
import { toast } from "@/hooks/use-toast";
import { useHabit, useHabitsContext } from "@/components/habits-provider";
import { Habit } from "@/types";
import { Plus, Save } from "lucide-react";

interface HabitFormProps {
  closeDialog: () => void;
  isEdit?: boolean;
  initialValues?: Pick<Habit, "title" | "category">;
}

export default function HabitForm({
  closeDialog,
  isEdit = false,
  initialValues = {
    title: "",
    category: "",
  },
}: HabitFormProps) {
  const { setHabits } = useHabitsContext();
  const { id } = useHabit();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={y.object().shape({
        title: y.string().max(25).required(),
        category: y.string().required(),
      })}
      onSubmit={({ title, category }, { resetForm }) => {
        const habits = isEdit
          ? editHabit(id, title, category)
          : addHabit(title, category);
        setHabits(habits);
        toast({
          title: isEdit ? "Edited Habit!" : `Added Habit: '${title}'!`,
        });
        resetForm();
        closeDialog();
      }}>
      {({ values: { category }, isSubmitting, setFieldValue }) => (
        <Form className="grid gap-4">
          <div>
            <Label>Title</Label>
            <Field
              as={Input}
              name="title"
              placeholder="Habit title e.g Wake Up"
            />
            <ErrorMessage
              className="text-destructive text-xs"
              name="title"
              component="p"
            />
          </div>
          <div>
            <Label>Category</Label>
            <Select
              value={category}
              onValueChange={(value) => setFieldValue("category", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categoriesWithIcon.map(({ Icon, item }, i) => (
                  <SelectItem key={i} value={slugify(item)}>
                    <Icon className="mr-2" />
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <ErrorMessage
              className="text-destructive text-xs"
              name="category"
              component="p"
            />
          </div>
          <DialogFooter>
            <Button disabled={isSubmitting} type="submit">
              {isEdit ? (
                <>
                  <Save />
                  Save
                </>
              ) : (
                <>
                  <Plus />
                  Add
                </>
              )}
            </Button>
          </DialogFooter>
        </Form>
      )}
    </Formik>
  );
}
