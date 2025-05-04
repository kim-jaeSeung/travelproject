async function travelApi() {
  try {
    const travelUrl = await fetch("../../travelData/Recommendation.json");
    const travelData = await travelUrl.json();
    console.log(travelData);
    return travelData;
  } catch (error) {
    console.error("랜덤여행지 api 호출 실패", error);
  }
}

export default travelApi;
