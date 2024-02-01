import { useQuery } from "@tanstack/vue-query";

export default () => {
   return useQuery({
      queryKey: ["dashboard"],
      queryFn: () =>
         axios.call("get", "https://sfe-m3if.onrender.com/api/v1/dashboard"),
      select: (response) => response.data,
   });
};
