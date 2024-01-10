import Button from "../components/Button";
import { useMutation } from "react-query";
import { takeScreenshot } from "../utils/utils";
import uploadScreenshot from "../../api/api";
const Home = () => {
  const uploadScreenshotMutation = useMutation({
    mutationFn: uploadScreenshot,
    onSuccess(data) {
      if (data.status === 200) {
        console.log(data)
      }
    },
    onError(error: { message: string }) {
      console.log(error.message);
    },
  });

  const captureScreenshot = async (event: { preventDefault: () => void }) => {
    takeScreenshot()
      .then((screenshot) => {
        console.log("This is the screenshot", screenshot);
        event.preventDefault();
        uploadScreenshotMutation.mutate(screenshot);
      })
      .catch((error) => {
        console.error("Error capturing screenshot", error);
      });
  };

  return (
    <div className="flex items-center justify-center">
      <Button onClick={captureScreenshot} />
    </div>
  );
};

export default Home;
