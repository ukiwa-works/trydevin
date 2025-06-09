"use server";

export async function loginAction(formData: FormData) {
  console.log("Login action called", formData);
}

export async function logoutAction() {
  console.log("Logout action called");
}
