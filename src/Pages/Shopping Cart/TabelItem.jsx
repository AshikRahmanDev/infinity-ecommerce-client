import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const TabelItem = ({ item, refetch }) => {
  const { img1, title, price, amount, id } = item;
  const { user } = useContext(AuthContext);
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/deleteItemFromCart/${user?.email}/?id=${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount === 1) {
          refetch();
          toast.success("Item deleted!");
        }
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
              <Link
                to={`/main/checkoutFromCart/${id + " " + user?.email}`}
                className="py-1 px-2 bg-primary rounded-sm text-white font-normal mt-2 uppercase logo-font text-[10px]"
              >
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
        <td
          onClick={() => handleDelete(id)}
          className="text-[23px] text-primary"
        >
          <MdOutlineDeleteOutline />
        </td>
      </tr>
    </>
  );
};

export default TabelItem;
