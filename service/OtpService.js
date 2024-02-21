const OtpModel = require("../model/EmailOtpModel");

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "shoppingcartbyrohan@gmail.com",
    pass: "ghomoftgptrarhan",
  },
  debug: true,
});

exports.sendOTP = async (req, res) => {
  const { Email } = req.body;
  console.log(req.body);
  console.log(Email);

  const generateOtp = () => Math.floor(100000 + Math.random() * 900000);
  const otp = generateOtp();

  await OtpModel.create({ email: Email, otp: otp });

  const mailOptions = {
    from: "shoppingcartbyrohan@gmail.com",
    to: Email,
    subject: "OTP for Registration",
    text: `Your OTP is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending OTP email", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    console.log("OTP email sent:", info.response);
    res.status(200).json({ message: "OTP sent successfully" });
  });
};

exports.verifyOTP = async (req, res) => {
  const { Email, OTP } = req.body;

  try {
    // Retrieve the stored OTP for the provided email
    const otpRecord = await OtpModel.findOne({ where: { Email } });

    if (!otpRecord) {
      return res.status(400).json({ error: "OTP record not found" });
    }

    // Compare the user-entered OTP with the stored OTP
    if (OTP === otpRecord.otp) {
      // OTP is correct
      res.status(200).json({ message: "OTP verification successful" });
    } else {
      // OTP is incorrect
      res.status(400).json({ error: "Incorrect OTP" });
    }
  } catch (error) {
    console.error("Error verifying OTP in the database", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
