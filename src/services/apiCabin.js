import { supabase, supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error("cabins could not be loaded");
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("cabins could not be deleted");
  }
  return data;
}

export async function createCabin(cabin) {
  const imageName = `${Math.random()}-${cabin.image.name}`.replaceAll("/", "");

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. create new cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...cabin, image: imagePath }])
    .select();

  if (error) {
    console.log(error);
    throw new Error("cabin could not be created");
  }

  // 2. upload image

  const { error: uploadError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, cabin.image);

  // 3. delete cabin if image fail to uplode

  if (uploadError) {
    await supabase.from("cabins").delete().eq("id", data[0].id);
    console.log(uploadError);
    throw new Error(
      "cabin image could not be uploaded and cabin could not be created"
    );
  }

  return data;
}
