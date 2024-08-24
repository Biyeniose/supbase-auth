import { redirect } from "next/navigation";

export default async function Data() {
  const handlePredictClick = async () => {
    "use server";
    return redirect("/predict");
  };
  return (
    <div className="flex flex-col items-center  min-h-screen">
      <div className="text-center text-2xl mb-4 py-4">Data Page</div>

      <form action={handlePredictClick}>
        <button
          type="submit"
          className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
        >
          Predict
        </button>
      </form>
    </div>
  );
}
