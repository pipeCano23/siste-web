import { APP_ROUTES } from "@/constants";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(APP_ROUTES.LOGIN);
}
