interface Trade {
  id: number;
  round: number;
  givenItem: string;
  receivedItem: string;
  givenImage: string;
  receivedImage: string;
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
    receivedItem: "???",
    givenImage: "/trades/round1-given.jpg",
    receivedImage: "/trades/round1-received.jpg",
    personName: "???",
    location: "???",
    date: "2026-04-02",
    note: "첫 번째 교환! 모나미 볼펜에서 시작.",
  },
  // 새 교환을 추가하려면 아래에 객체를 복사해서 넣으세요
  // {
  //   id: 2,
  //   round: 2,
  //   givenItem: "이전에 받은 물건",
  //   receivedItem: "새로 받은 물건",
  //   givenImage: "/trades/round2-given.jpg",
  //   receivedImage: "/trades/round2-received.jpg",
  //   personName: "교환 상대 이름",
  //   location: "장소",
  //   date: "2026-04-XX",
  //   note: "메모",
  // },
];

export type { Trade };
export { trades };
