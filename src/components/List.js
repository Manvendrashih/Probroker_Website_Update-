import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaMapMarked,
  FaBed,
  FaShareAlt,
  FaRegBookmark,
  FaBookmark,
  FaMapMarker,
} from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuUserSquare2 } from "react-icons/lu";
import {
  MdOutlineCalendarMonth,
  MdOutlinePhone,
  MdNoteAlt,
} from "react-icons/md";
import { RxDimensions } from "react-icons/rx";
import { TbLamp } from "react-icons/tb";
import Cookies from "js-cookie"; // Import js-cookie if not already imported
import Dropdown from "./CustomDropdown";
import { toast } from "react-toastify";
import PropertyCard from "./PropertyCard"; // Ensure this import is present
import './List.css'; // Import the CSS file for styling

function List({ properties }) {  // Accept properties as a prop
  return (
    <div className="properties-list">
      {properties.length > 0 ? (
        properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))
      ) : (
        <div>No properties found</div>
      )}
    </div>
  );
}

export default List;
