const form = document.getElementById("subscribeForm");

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();

  const emailOrPhone = document.getElementById("emailOrPhone").value.trim();

  if (emailOrPhone === "") {
    alert("Vui lòng nhập email hoặc số điện thoại");
    return;
  }

  let email = "";
  let phone = "";

  //regex check email or phone
  if (emailPattern.test(emailOrPhone)) {
    email = emailOrPhone;
  } else if (phonePattern.test(emailOrPhone)) {
    phone = emailOrPhone;
  } else {
    alert("Email hoặc số điện thoại không hợp lệ");
    return;
  }

  try {
    await fetch(
      `https://script.google.com/macros/s/AKfycbwYIOu3LuIk1hmPGlWIb-8-v2KZtSWBj--NOsK9eyKU1tNu-XApTT8E_SpjXmvJg6WQlw/exec?date=${new Date().toLocaleString()}&email=${email}&phone='${phone}&name=${name}`,
      {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    alert("Cảm ơn bạn đã đăng ký, chúng tôi sẽ liên hệ với bạn sớm nhất có thể");
  } catch (error) {
    console.error("Error:", error);
  }
});
