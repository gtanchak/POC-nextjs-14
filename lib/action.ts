import { redirect } from "next/navigation";

export async function shareMeals(formData: any) {
  "use server";
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  redirect("/meals");
}

export function SenesitiveData() {
  "use server";
  return { data: "Senesitive data" };
}
