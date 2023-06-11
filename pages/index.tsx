import GoogleButton from "react-google-button";
import { useSession, signIn, signOut } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()} className="mx-auto mt-16">
          Sign out
        </button>
      </>
    );
  }

  return (
    <main className="text-center w-full mx-auto max-w-[1240px] mt-16">
      <h1 className="text-4xl font-bold">Home Page</h1>
      <GoogleButton
        onClick={() => signIn("google")}
        className="mx-auto mt-16"
      />
    </main>
  );
};

export default Home;
