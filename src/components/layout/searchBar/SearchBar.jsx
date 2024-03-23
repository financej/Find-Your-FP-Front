import { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import SearchButton from "./SearchButton";
import { putAddressApi } from "../../../api/address";

export default function SearchBar() {
  const [address, setAddress] = useState();
  const open = useDaumPostcodePopup();

  const handleComplete = async (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setAddress(data.jibunAddress.split("동")[0] + "동");
    await putAddressApi(data.jibunAddress.split("동")[0] + "동");
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <>
      <SearchButton type="button" address={address} onClick={handleClick} />
    </>
  );
}
