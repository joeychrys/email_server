import axiosInstance from "./axiosConfig";

class EmailAPI {
  registerAddress(address) {
    return axiosInstance.post("api/email/", { address });
  }
}

export default new EmailAPI();
