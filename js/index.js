import regionData from "./region.js"; // 지역 데이터 가져오기
import travelApi from "./api/travelApi.js"; // 지역 데이터 가져오기

// console.log("!!");

// let areaBasedList =
//     "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?pageNo=1&MobileOS=%20IOS%2C%20AND%2C%20WIN%2C%20ETC&MobileApp=test&_type=json&serviceKey=%2F%2FyNWMYBpj%2BUWMNJOecVH1q6KYhP2UrjZA8nDYMreg0vjscQMgKCI8uqHwT9CLP1g5C5xVnHzwK7I9%2BxwO%2FqAA%3D%3D"; // 관광지, 이미지, 시도

// let areaCode =
//     "https://apis.data.go.kr/B551011/KorService1/areaCode1?pageNo=1&MobileOS=%20IOS%2C%20AND%2C%20WIN%2C%20ETC&MobileApp=test&_type=json&serviceKey=%2F%2FyNWMYBpj%2BUWMNJOecVH1q6KYhP2UrjZA8nDYMreg0vjscQMgKCI8uqHwT9CLP1g5C5xVnHzwK7I9%2BxwO%2FqAA%3D%3D"; // 지역코드
// let a =
//     "https://apis.data.go.kr/B551011/KorService1/areaCode1?numOfRows=18&pageNo=1&MobileOS=%20IOS%2C%20AND%2C%20WIN%2C%20ETC&MobileApp=test&areaCode=1&_type=json&serviceKey=%2F%2FyNWMYBpj%2BUWMNJOecVH1q6KYhP2UrjZA8nDYMreg0vjscQMgKCI8uqHwT9CLP1g5C5xVnHzwK7I9%2BxwO%2FqAA%3D%3D";
// console.log(a);
// // let areaCode = {
// //     code1: " 서울특별시",
// // };
// fetch(areaBasedList)
//     .then((response) => response.json())
//     .then((data) => {
//         let list = data.response.body.items.item;

//         console.log(list);
//     });

// fetch(areaCode)
//     .then((response) => response.json())
//     .then((data) => {
//         let list = data.response.body.items.item;

//         console.log(list);
//     });
console.log("연결");

//* 시도 선택 select
const citySelect = document.getElementById("city");
//* 시군구 선택 select
// const regionSelect = document.getElementById("region");
//* regionData의 키 값을 가져와 city option에 추가
travelApi().then((data) => {
  Object.keys(data).forEach((key) => {
    citySelect.innerHTML += `<option value="${key}">${key}</option>`;
  });

  citySelect.addEventListener("change", () => {
    const selectedCity = citySelect.value;
    console.log(citySelect.value);
    const regions = data[selectedCity] || [];
    //* 시군구 초기화
    // regionSelect.innerHTML = '<option value="">시군구</option>';

    //* 시군구 뿌려줌
    regions.forEach((data) => {
      console.log(data);
      document.getElementById("travelDataWrapContainer").innerHTML = `
        <div class="contentWrap">
                <h4>${data.name}</h4>
                <img src="img/gaga.png" alt="">
                <p>${data.description}</p>
              </div>
              <div>
                <h4>기본정보</h4>
                <div class="mapContent">
                  <img src="img/map.png" alt="">
                </div>
                <div class="addInfo flex align-items-center">
                  <p>주소</p>
                  <!-- 클릭하면 복사 -->
                  <span>${data.location}</span>
                </div>
                <div class="addInfo flex align-items-center">
                  <p>영업시간</p>
                  <span> ${data.openingHours} </span>
                </div>
                <div class="addInfo flex align-items-center">
                  <p>정기 휴무일</p>
                  <span>${data.closedDays}</span>
                </div>
              </div>
            </div>
            `;
    });
  });
});

// //* city select에서 선택된 값에 따라 region select 업데이트
// citySelect.addEventListener("change", () => {
//   const selectedCity = citySelect.value;
//   console.log(citySelect.value);
//   const regions = regionData[selectedCity] || [];
//   //* 시군구 초기화
//   regionSelect.innerHTML = '<option value="">시군구</option>';

//   //* 시군구 뿌려줌
//   regions.forEach((region) => {
//     regionSelect.innerHTML += `<option value="${region}">${region}</option>`;
//   });
// });

// travelApi().then((data) => {
//
//   console.log("랜덤어행지 api", data);
// });
