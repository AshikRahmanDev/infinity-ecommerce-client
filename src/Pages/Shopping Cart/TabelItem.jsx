import React from "react";
import { toast } from "react-hot-toast";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const TabelItem = ({ item }) => {
  const { img1, title, price, amount } = item;
  const handleDelete = () => {
    toast.success("Look at my styles.", {
      style: {
        border: "1px solid #928656",
        padding: "10px 16px",
        color: "#928656",
      },
      iconTheme: {
        primary: "#928656",
        secondary: "#FFFAEE",
      },
    });
  };
  return (
    <>
      {/* row 1 */}
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask w-12 h-12">
                <img src={img1} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="text-[13px] logo-font">{title}</div>
              <Link className="py-1 px-2 bg-primary rounded-sm text-white font-normal mt-2 uppercase logo-font text-[10px]">
                checkout
              </Link>
            </div>
          </div>
        </td>
        {/* price */}
        <td className="logo-font text-[12px]">$ {price}</td>
        {/* amount */}
        <td className="logo-font text-[12px]">{amount}</td>
        {/* subtotal  */}
        <td className="logo-font text-[12px]">$ {price * amount}</td>
        {/* delete  */}
        <td onClick={() => handleDelete()} className="text-[23px] text-primary">
          <MdOutlineDeleteOutline />
        </td>
      </tr>
    </>
  );
};

export default TabelItem;
