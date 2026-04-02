interface Trade {
  id: number;
  round: number;
  givenItem: string;
  receivedItem: string;
  givenImage: string;
  receivedImage: string;
  givenCutout?: string;
  receivedCutout?: string;
  personName: string;
  location: string;
  date: string;
  note: string;
}

const trades: Trade[] = [
  {
    id: 1,
    round: 1,
    givenItem: "모나미 볼펜",
    receivedItem: "왕꿈틀이",
    givenImage: "/trades/round1-given.jpg",
    receivedImage: "/trades/round1-received.jpg",
    // 누끼(배경 제거) 사진: /trades/cutout/ 폴더에 PNG로 저장
    // givenCutout: "/trades/cutout/monami-pen.png",
    // receivedCutout: "/trades/cutout/wang-kkumteul.png",
    personName: "???",
    location: "???",
    date: "2026-04-02",
    note: "첫 번째 교환! 모나미 볼펜에서 왕꿈틀이로.",
  },
  {
    id: 2,
    round: 2,
    givenItem: "왕꿈틀이",
    receivedItem: "수능시계",
    givenImage: "/trades/round2-given.jpg",
    receivedImage: "/trades/round2-received.jpg",
    // givenCutout: "/trades/cutout/wang-kkumteul.png",
    // receivedCutout: "/trades/cutout/suneung-clock.png",
    personName: "???",
    location: "???",
    date: "2026-04-02",
    note: "왕꿈틀이에서 수능시계로 업그레이드!",
  },
  // 새 교환을 추가하려면 아래에 객체를 복사해서 넣으세요
  // {
  //   id: 3,
  //   round: 3,
  //   givenItem: "수능시계",
  //   receivedItem: "새로 받은 물건",
  //   givenImage: "/trades/round3-given.jpg",
  //   receivedImage: "/trades/round3-received.jpg",
  //   personName: "교환 상대 이름",
  //   location: "장소",
  //   date: "2026-04-XX",
  //   note: "메모",
  // },
];

export type { Trade };
export { trades };
