export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center ">
      <h2 className="text-red-600 font-bold text-4xl mx-8 mt-5">
        Page not found!
      </h2>
      <p className="font-bold text-1xl text-red-200 mx-8 mt-5">
        Could not find requested resource
      </p>
    </div>
  );
}
