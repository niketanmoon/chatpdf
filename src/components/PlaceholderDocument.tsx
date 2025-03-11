"use client";
import { FrownIcon, PlusCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import useSubscription from "@/hooks/useSubsription";

const PlaceholderDocument = () => {
  const router = useRouter();
  const { isOverFileLimit } = useSubscription();
  const handleClick = () => {
    // Check if user is FREE tier and if theyre over the file limit, push to the upgrade page
    if (isOverFileLimit) {
      router.push("/dashboard/upgrade");
    } else {
      router.push("/dashboard/upload");
    }
  };
  return (
    <Button
      onClick={handleClick}
      className="flex flex-col w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400 cursor-pointer"
    >
      {isOverFileLimit ? (
        <FrownIcon className="h-16 w-16" />
      ) : (
        <PlusCircleIcon className="h-16 w-16" />
      )}

      <p className="font-semibold">
        {isOverFileLimit ? "Upgrade to add more documents" : "Add a document"}
      </p>
    </Button>
  );
};
export default PlaceholderDocument;
