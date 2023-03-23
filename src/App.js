import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src="http://images.squarespace-cdn.com/content/v1/57afadd3e3df28c4ce9b419c/1488265898063-D5HHHS234NM9V24QM4XL/boulevardlogo.png?format=1500w"
      />
    </a>
  );
};
const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resturantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "371422",
      name: "Handi punjab ki",
      uuid: "a694bfb9-4dc9-4818-9e9a-d8be5389944d",
      city: "22",
      area: "Hathibarkala Salwala",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "vozwrqdkvfcfutehx4ld",
      cuisines: ["North Indian", "Chinese", "Tandoor"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 27,
      minDeliveryTime: 27,
      maxDeliveryTime: 27,
      slaString: "27 MINS",
      lastMileTravel: 3.700000047683716,
      slugs: {
        restaurant: "handi-punjab-ki-hathibarkala-hathibarkala",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "Water Works Dilaram bazar, Dilaram Chowk, Karanpur, Dehradun, Uttarakhand, India",
      locality: "Rajpur Road",
      parentId: 93115,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6065497~p=1~eid=00000187-0a47-4c67-2c11-406300600174",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "371422",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        lastMileTravel: 3.700000047683716,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.1",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "69769",
      name: "Aman Vegetarian",
      uuid: "4ef9eafb-9c6d-4e9b-b1e9-0bbd0e88f9ef",
      city: "22",
      area: "Paltan Bazaar",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "ygczg6efdbjietl1req7",
      cuisines: ["North Indian", "Chinese", "Continental"],
      tags: [],
      costForTwo: 27500,
      costForTwoString: "₹275 FOR TWO",
      deliveryTime: 16,
      minDeliveryTime: 16,
      maxDeliveryTime: 16,
      slaString: "16 MINS",
      lastMileTravel: 0.4000000059604645,
      slugs: {
        restaurant:
          "aman-vegetarian-paltan-bazar-near-railway-station-hathibarkala",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "Darshini Gate, Jhanda Mohalla, Paltan Bazaar,near railway station Dehradun",
      locality: "Paltan Bazaar Road",
      parentId: 13687,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "69769",
        deliveryTime: 16,
        minDeliveryTime: 16,
        maxDeliveryTime: 16,
        lastMileTravel: 0.4000000059604645,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.9",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "363168",
      name: "Doon Darbar",
      uuid: "19724ef9-f91b-414c-8014-6d443adbefad",
      city: "22",
      area: "Dharampur",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "jbtwi5gn0rqott22goqm",
      cuisines: ["North Indian", "Tandoor"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 27,
      minDeliveryTime: 27,
      maxDeliveryTime: 27,
      slaString: "27 MINS",
      lastMileTravel: 4.199999809265137,
      slugs: {
        restaurant: "doon-darbar-dharampur-dharampur",
        city: "dehradun",
      },
      cityState: "22",
      address: "SHASTRI NAGAR HARIDWAR ROAD  248001",
      locality: "Shastri Nagar Market",
      parentId: 13207,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6082376~p=25~eid=00000187-0a47-4c67-2c11-406b00601948",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "363168",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        lastMileTravel: 4.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.6",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "95048",
      name: "Walk In Woods (Sahastradhara Road)",
      uuid: "6ef373fe-8610-42d8-bc3f-acc75dbbfd05",
      city: "22",
      area: "Chironwali",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "zgkkairefnvffmiq77dh",
      cuisines: ["North Indian", "Chinese", "Desserts", "Beverages"],
      tags: [],
      costForTwo: 27500,
      costForTwoString: "₹275 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 30,
      slaString: "30 MINS",
      lastMileTravel: 6.199999809265137,
      slugs: {
        restaurant: "walk-in-woods-sahasradhara-sahasradhara",
        city: "dehradun",
      },
      cityState: "22",
      address: "K32 Mandakni Vihar, Sahastradhara Road, Chironwali, Dehradun",
      locality: "Sahastradhara Road",
      parentId: 359024,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6234587~p=4~eid=00000187-0a47-4c67-2c11-406400600432",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "95048",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        lastMileTravel: 6.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.1",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "586794",
      name: "New Paradise Bakers",
      uuid: "847acaf3-2e9b-4763-8461-b05f82db8af6",
      city: "22",
      area: "Chukkuwala",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "473ad54c71b416ae36fd0f62a2519e51",
      cuisines: ["Bakery", "Desserts", "Snacks"],
      tags: [],
      costForTwo: 10000,
      costForTwoString: "₹100 FOR TWO",
      deliveryTime: 15,
      minDeliveryTime: 15,
      maxDeliveryTime: 15,
      slaString: "15 MINS",
      lastMileTravel: 0.20000000298023224,
      slugs: {
        restaurant: "new-paradise-bakers-chukkuwala-chukkuwala",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "12 Darshani Gate Dehradun, Dehradun Nagar Nigam, Dehradun, Uttarakhand - 248001",
      locality: "Gandhi Road",
      parentId: 351098,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "586794",
        deliveryTime: 15,
        minDeliveryTime: 15,
        maxDeliveryTime: 15,
        lastMileTravel: 0.20000000298023224,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
];

const ResturantCard = ({
  name,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
      />
      <h2>{name}</h2>
      <h4>{cuisines}</h4>
      <h5>{lastMileTravelString}</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="resturant-list">
      {resturantList.map((restaurant) => {
        return <ResturantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
  );
};

const Footer = () => {
  return <h1>Footer</h1>;
};
const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
