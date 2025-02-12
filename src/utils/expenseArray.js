import {
    createListCollection
} from "@chakra-ui/react";

//array data used in create expense form
export const currencyOptions = createListCollection({
    items: [{
            label: "NGN",
            value: "NGN"
        },
        {
            label: "USD",
            value: "USD"
        },
        {
            label: "EUR",
            value: "EUR"
        },
        {
            label: "GBP",
            value: "GBP"
        },
        {
            label: "CAD",
            value: "CAD"
        },
        {
            label: "AUD",
            value: "AUD"
        },
        {
            label: "JPY",
            value: "JPY"
        },
        {
            label: "CNY",
            value: "CNY"
        },
        {
            label: "INR",
            value: "INR"
        },
        {
            label: "ZAR",
            value: "ZAR"
        },
    ],
});

export const categoryOptions = createListCollection({
    items: [{
            label: "Food & Groceries",
            value: "Food & Groceries"
        },
        {
            label: "Transportation",
            value: "Transportation"
        },
        {
            label: "Entertainment",
            value: "Entertainment"
        },
        {
            label: "Rent",
            value: "Rent"
        },
        {
            label: "Health & Medical",
            value: "Health & Medical"
        },
        {
            label: "Shopping",
            value: "Shopping"
        },
        {
            label: "Utilities",
            value: "Utilities"
        },
        {
            label: "Dining Out",
            value: "Dining Out"
        },
        {
            label: "Tech Gadgets",
            value: "Tech Gadgets"
        },
        {
            label: "Fitness & Gym",
            value: "Fitness & Gym"
        },
        {
            label: "Home Cleaning",
            value: "Home Cleaning"
        },
        {
            label: "Mobile Accessories",
            value: "Mobile Accessories"
        },
        {
            label: "Legal Services",
            value: "Legal Services"
        },
        {
            label: "Gardening & Landscaping",
            value: "Gardening & Landscaping"
        },
        {
            label: "Pet Care",
            value: "Pet Care"
        },
        {
            label: "Event Planning",
            value: "Event Planning"
        },
        {
            label: "Fuel",
            value: "Fuel"
        },
        {
            label: "Gadgets & Electronics",
            value: "Gadgets & Electronics"
        },
        {
            label: "Internet & Subscriptions",
            value: "Internet & Subscriptions"
        },
        {
            label: "Dining & Entertainment",
            value: "Dining & Entertainment"
        },
        {
            label: "Books & Training",
            value: "Books & Training"
        },
        {
            label: "Work Equipment",
            value: "Work Equipment"
        },
        {
            label: "Marketing & Ads",
            value: "Marketing & Ads"
        },
        {
            label: "Office Supplies",
            value: "Office Supplies"
        },
        {
            label: "Childcare Services",
            value: "Childcare Services"
        },
        {
            label: "Car Maintenance",
            value: "Car Maintenance"
        },
        {
            label: "Travel & Vacation",
            value: "Travel & Vacation"
        },
        {
            label: "Insurance",
            value: "Insurance"
        },
        {
            label: "Education",
            value: "Education"
        },
        {
            label: "Charity & Donations",
            value: "Charity & Donations"
        },
        {
            label: "Furniture & Decor",
            value: "Furniture & Decor"
        },
        {
            label: "Software & Apps",
            value: "Software & Apps"
        },
    ],
});

export const paymentOptions = createListCollection({
    items: [{
            label: "Credit Card",
            value: "Credit Card"
        },
        {
            label: "Debit Card",
            value: "Debit Card"
        },
        {
            label: "PayPal",
            value: "PayPal"
        },
        {
            label: "Apple Pay",
            value: "Apple Pay"
        },
        {
            label: "Google Pay",
            value: "Google Pay"
        },
        {
            label: "Bank Transfer",
            value: "Bank Transfer"
        },
        {
            label: "Cryptocurrency",
            value: "Cryptocurrency"
        },
        {
            label: "Cash",
            value: "Cash"
        },
        {
            label: "Mobile Money",
            value: "Mobile Money"
        },
        {
            label: "Venmo",
            value: "Venmo"
        },
    ],
});