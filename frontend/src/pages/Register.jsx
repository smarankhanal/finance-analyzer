import Input from "../components/Input";
import Button from "../components/Button";
export default function Register() {
  return (
    <div className="flex flex-col mx-auto mt-20 sm:mt-10  w-auto max-w-100 bg-white/20  rounded-lg p-3 h-auto   shadow-lg">
      <p className="text-center mb-4 text-text-body font-bold text-lg">
        Register
      </p>
      <div className="space-y-2">
        <Input label="Email" placeholder="Enter the email" />
        <Input label="Username" placeholder="Enter the username" />
        <Input label="Fullname" placeholder="Enter the fullname" />
        <Input label="Password" placeholder="Enter the password" />
        <Input
          type="file"
          accept="image/*"
          label="Photo"
          className="
    block w-full text-sm text-gray-500
    file:mr-4 file:py-2 file:px-4
    file:rounded-lg file:border-0
    file:text-sm file:font-medium
    file:bg-primary file:text-white
    hover:file:bg-primary/90
  "
        />
      </div>
      <div className="flex justify-center w-full">
        <Button text="Register" className="w-30 items btn-shadow bg-red-500" />
      </div>
    </div>
  );
}
