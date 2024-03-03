const onboarding_screens = [
  {
    id: 1,
    image: require("../assets/images/download5.png"),
    title: "Detect Crop Diseases with Ease",
    desc: "Identify and diagnose crop diseases swiftly using advanced image recognition technology. Get insights and recommendations to protect your crops and maximize yields.",
  },
  {
    id: 2,
    image: require("../assets/images/download4.png"),
    title: "Stay Ahead with Weather Predictions",
    desc: "Access accurate weather forecasts tailored to your farm's location. Plan your agricultural activities effectively and mitigate risks associated with adverse weather conditions.",
  },
  {
    id: 3,
    image: require("../assets/images/download1.png"),
    title: "Maximize Profit by Selling Smart",
    desc: "Discover the best markets and buyers for your produce. Access real-time pricing information and connect directly with potential buyers to optimize your sales strategy.",
  },
];

const login = "LOGIN"
const register = "REGISTER"
const forgot_password = "FORGOT_PASSWORD"

export default {
    onboarding_screens,
    login,
    register,
    forgot_password
}