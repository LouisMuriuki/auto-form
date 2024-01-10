import axios from "axios";
const uploadScreenshot = async (screenshot: any) => {
  const res = await axios.post(
    "http://localhost:3000/thirdeye/api/v1/formvision",
    screenshot
  );
  return res.data;
};
export default uploadScreenshot;
