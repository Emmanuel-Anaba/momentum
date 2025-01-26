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
import { categories } from "@/lib";
import { slugify } from "@/lib/utils";

export default function HabitForm() {
  return (
    <Formik
      initialValues={{
        title: "",
        category: "",
      }}
      validationSchema={y.object().shape({
        title: y.string().max(25).required(),
        category: y.string().required(),
      })}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
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
                {categories.map((item, i) => (
                  <SelectItem key={i} value={slugify(item)}>
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
              Submit
            </Button>
          </DialogFooter>
        </Form>
      )}
    </Formik>
  );
}
