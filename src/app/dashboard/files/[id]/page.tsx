import { auth } from "@clerk/nextjs/server";
import { adminDb } from "../../../../../firebaseAdmin";
import PdfView from "@/components/PdfView";
import Chat from "@/components/Chat";

const ChatToFilePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  auth.protect();
  const { userId } = await auth();

  const ref = await adminDb
    .collection("users")
    .doc(userId!)
    .collection("files")
    .doc(id)
    .get();

  const url = ref.data()?.downloadUrl;

  return (
    <div className="grid lg:grid-cols-5 overflow-hidden">
      {/* Right */}
      <div className="col-span-5 lg:col-span-2 overflow-y-auto">
        {/* Chat */}
        <Chat id={id} />
      </div>

      {/* Left */}
      <div className="col-span-5 lg:col-span-3 bg-gray-100 border-r-2 lg:border-indigo-600 lg:-order-1 overflow-auto">
        {/* PDFView */}
        <PdfView url={url} />
      </div>
    </div>
  );
};
export default ChatToFilePage;
