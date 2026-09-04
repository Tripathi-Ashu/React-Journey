import React, { createContext } from "react";

export const UserContext = createContext();

const userData = {

  profile: {
    name: "John McMohan",
    country: "South Africa",
    orders: "5000",
    revenue: "$ 4500.05",
    leads: "2.50 k",
    image: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
  },

  purchases: [
    {
      business: "Open Field",
      location: "Beijing, China",
      total: "5250",
      status: "Medium",
      price: "$250"
    },
    {
      business: "MarsXspace",
      location: "New Jersey, UK",
      total: "3250",
      status: "Normal",
      price: "$250"
    },
    {
      business: "Chimanayalaya",
      location: "New York, USA",
      total: "1250",
      status: "High",
      price: "$250"
    }
  ],

  comments: [
    {
      name: "Alizee Johnson",
      message: "Hello, This is very good job done!.",
      image: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
    },
    {
      name: "Will Smith",
      message: "Taste is better than previous for all.",
      image: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
    },
    {
      name: "Nilli Doe",
      message: "Back to the work.",
      image: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
    }
  ],

  topUsers: [
    {
      name: "Jinny Madam",
      location: "Delhi, IN",
      task: "2121",
      earning: "$ 3521.26",
      image: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
    },
    {
      name: "Rennie D'Souza",
      location: "Doha, Qatar",
      task: "1524",
      earning: "$ 958.25",
      image: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
    },
    {
      name: "Will Smith",
      location: "Los Angeles, Ca, USA",
      task: "7584",
      earning: "$ 9582.05",
      image: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
    },
    {
      name: "John Doe",
      location: "New Jersey, UK",
      task: "3250",
      earning: "$ 1554.05",
      image: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
    }
  ]
};

export function UserProvider({ children }) {
  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
}