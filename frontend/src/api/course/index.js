import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const AuthAPI = () => {
  if (typeof window !== "undefined") {
    return axios.create({
      baseURL: `http://localhost:5000/v1/`,
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
  } else {
    return axios.create({
      baseURL: `http://localhost:5000/v1/`,
      headers: {
        authorization: `Bearer }`,
        "Content-Type": "application/json",
      },
    });
  }
};

const getCoursesByClass = async (classname) => {
  const { data } = await AuthAPI().get(
    `/user/get-course?classname=${classname}`
  );
  return data;
};

const getCoursesQuery = (classId) =>
  useQuery({
    queryKey: ["courses", classId],
    queryFn: () => getCoursesByClass(classId),
    select: (data) => {
      const res = data.message;
      return res;
    },
  });

export { getCoursesQuery };
