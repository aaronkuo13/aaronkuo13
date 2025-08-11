// src/app/data/projects.ts
export type Project = {
    slug: string;
    title: string;
    summary: string;
    kpis?: string[];
    role?: string;
    timeframe?: string;
    stack: string[];
    link?: string;
    content?: string;
  };
  
  export const projects: Project[] = [
    {
      slug: "iot-integration",
      title: "物聯網解決方案",
      summary:
        "從零打造內部數據追蹤系統，將損耗數據化並建立預警機制，降低機器故障風險與維運成本。",
      kpis: [
        "機器故障率 ↓25%（IoT 預警 + 儀表板，提前發現異常）",
        "MTTR（平均修復時間）縮短（告警路由與維修流程標準化）",
        "維運成本下降（備品/停機損失可視化，維護計畫前置）",
      ],
      role: "產品經理（需求訪談 / 規劃 / 推動落地）",
      timeframe: "2020–2021",
      stack: ["AWS DynamoDB", "AWS Lambda", "MQTT"],
      link: "https://www.nexense.com.tw/solutions",
      content:
        "· 問題定義：傳統產線損耗無法追蹤，維修反應慢。\n" +
        "· 解決方案：設計 IoT 數據流與事件預警，建立儀表板與日誌。\n" +
        "· 成果：故障率顯著下降，維修與停機時間可視化。",
    },
    {
      slug: "finance-data-platform",
      title: "國泰投信官網",
      summary:
        "整合數據中心與即時交易資訊，打造直觀的投資資訊平台，提升投資者體驗與決策效率。",
      kpis: [
        "平台使用量 ↑40%（首頁資訊架構重構 + 關鍵任務路徑優化）",
        "關鍵任務完成率提升（自選清單 / 商品比較的到達率與完成率上升）",
        "客服詢問量下降（FAQ 與說明頁導流，降低重複性問題）",
      ],
      role: "產品經理（用戶訪談 / 路徑設計 / 成效追蹤）",
      timeframe: "2023",
      stack: ["用戶訪談", "用戶模型", "使用者旅程"],
      link: "https://www.cathaysite.com.tw/",
      content:
        "· 研究：用戶訪談與旅程分析，找出卡點與需求。\n" +
        "· 設計：以 KPI 導向資訊架構，關鍵數據優先呈現。\n" +
        "· 上線：建立量化指標與迭代節奏。",
    },
    {
      slug: "ticketing-platform",
      title: "FunOne Tickets 售票平台",
      summary:
        "主導打造 FunOne Tickets，五個月 3000+ 會員、破百萬營收，涵蓋 UX、金流與實體票整合。",
      kpis: [
        "5 個月 3000+ 會員（0→1 上線，快速取得市場驗證）",
        "營收破百萬（促案活動與行銷節奏帶動轉化）",
        "高峰期 0 重大事故（高併發架構 + 金流/票務整合穩定運行）",
      ],
      role: "產品負責人（0→1 / 流程設計 / 商業化）",
      timeframe: "2024–2025",
      stack: ["GCP", "高併發", "UX", "金流串接", "實體票串接"],
      link: "https://tickets.funone.io/",
      content:
        "· 0→1：定位、商模、流程設計與驗證。\n" +
        "· 系統：高併發、金流、票務與驗票整合。\n" +
        "· 成果：快速證明市場吸引力與商業價值。",
    },
  ];
  