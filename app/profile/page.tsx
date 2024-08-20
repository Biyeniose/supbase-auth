import TeamForm from "@/components/TeamForm";

export default async function Profile() {
  return (
    <div className="flex flex-col items-center  min-h-screen">
      <div className="text-center text-2xl mb-4 py-4">Profile Page</div>
      <TeamForm />
    </div>
  );
}
