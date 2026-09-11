import { Toaster, toast } from "sonner";
import { Button, Input } from "@heroui/react";
import { useForm } from "react-hook-form";
import {
  useGetUsersQuery,
  useLoginMutation,
} from "../../services/api";

function Home() {
  const {
    register,
    handleSubmit,
  } = useForm();

  // GET
  const {
    data,
    isLoading,
    error,
  } = useGetUsersQuery();

  // POST
  const [
    login,
    { isLoading: isLoggingIn },
  ] = useLoginMutation();

  const onSubmit = async (data) => {
    try {
      const result = await login(data).unwrap();

      console.log(result);

      toast.success("Ma'lumot muvaffaqiyatli yuborildi!");
    } catch (error) {
      console.log(error);

      toast.error("Xatolik yuz berdi!");
    }
  };

  return (
    <>
      <Toaster position="top-right" />

      <div className="p-10 max-w-md">
        <h1 className="text-3xl font-bold mb-6">
          Login
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <Input
            label="Email"
            placeholder="Emailingizni kiriting"
            {...register("email")}
          />

          <Input
            label="Password"
            placeholder="Parolingizni kiriting"
            type="password"
            {...register("password")}
          />

          <Button
            type="submit"
            variant="primary"
            isPending={isLoggingIn}
          >
            Kirish
          </Button>
        </form>

        <div className="mt-8">
          {isLoading && <p>Yuklanmoqda...</p>}

          {error && <p>Xatolik yuz berdi</p>}

          {data && (
            <div>
              <h2 className="text-xl font-bold mb-3">
                Users:
              </h2>

              {data.map((user) => (
                <p key={user.id}>
                  {user.name}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;