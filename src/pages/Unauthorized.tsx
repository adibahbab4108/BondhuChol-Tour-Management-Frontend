import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function Unauthorized() {
  return (
    <>
      <h1>Unauthorized</h1>
      <p>You do not have permission to access this page.</p>
      <p>Please contact your administrator if you believe this is an error.</p>
      <Link to="/login">
        <Button>Go to Login</Button>
      </Link>
      <Link to="/">
        <Button variant="outline" >Go to Home</Button>
      </Link>
    </>
  );
}
