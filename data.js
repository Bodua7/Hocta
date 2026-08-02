// Kho dữ liệu 3600 câu giao tiếp Anh - Trung - Việt (Ngày 1 đến Ngày 366)
const LESSON_DATA = [];
  // --- NGÀY 1: CHÀO HỎI & XÃ GIAO CƠ BẢN ---
LESSON_DATA.push(
  { day: 1, id: 1, en: "Hello!", cn: "你好！", pinyin: "Nǐ hǎo!", vi: "Xin chào!" },
  { day: 1, id: 2, en: "How are you?", cn: "你好吗？", pinyin: "Nǐ hǎo ma?", vi: "Bạn khỏe không?" },
  { day: 1, id: 3, en: "I'm fine, thank you.", cn: "我很好，谢谢。", pinyin: "Wǒ hěn hǎo, xièxie.", vi: "Tôi khỏe, cảm ơn." },
  { day: 1, id: 4, en: "Good morning!", cn: "早上好！", pinyin: "Zǎoshang hǎo!", vi: "Chào buổi sáng!" },
  { day: 1, id: 5, en: "Good night!", cn: "晚安！", pinyin: "Wǎn'ān!", vi: "Chúc ngủ ngon!" },
  { day: 1, id: 6, en: "What is your name?", cn: "你叫什么名字？", pinyin: "Nǐ jiào shénme míngzi?", vi: "Bạn tên là gì?" },
  { day: 1, id: 7, en: "My name is...", cn: "我叫...", pinyin: "Wǒ jiào...", vi: "Tôi tên là..." },
  { day: 1, id: 8, en: "Nice to meet you.", cn: "很高兴认识你。", pinyin: "Hěn gāoxìng rènshi nǐ.", vi: "Rất vui được gặp bạn." },
  { day: 1, id: 9, en: "Thank you very much.", cn: "非常感谢。", pinyin: "Fēicháng gǎnxiè.", vi: "Cảm ơn bạn rất nhiều." },
  { day: 1, id: 10, en: "You're welcome.", cn: "不客气。", pinyin: "Bú kèqi.", vi: "Không có gì." },
);

  // --- NGÀY 2: TẠM BIỆT & LỊCH SỰ ---
 LESSON_DATA.push(
 { day: 2, id: 11, en: "Goodbye!", cn: "再见！", pinyin: "Zàijiàn!", vi: "Tạm biệt!" },
  { day: 2, id: 12, en: "See you tomorrow.", cn: "明天见。", pinyin: "Míngtiān jiàn.", vi: "Hẹn gặp lại ngày mai." },
  { day: 2, id: 13, en: "Sorry / Excuse me.", cn: "对不起。", pinyin: "Duìbuqǐ.", vi: "Xin lỗi." },
  { day: 2, id: 14, en: "It's okay / No problem.", cn: "没关系。", pinyin: "Méi guānxi.", vi: "Không sao đâu." },
  { day: 2, id: 15, en: "Please.", cn: "请。", pinyin: "Qǐng.", vi: "Xin vui lòng / Mời." },
  { day: 2, id: 16, en: "Can you help me?", cn: "你能帮我吗？", pinyin: "Nǐ néng bāng wǒ ma?", vi: "Bạn có thể giúp tôi không?" },
  { day: 2, id: 17, en: "Of course.", cn: "当然可以。", pinyin: "Dāngrán kěyǐ.", vi: "Đương nhiên có thể." },
  { day: 2, id: 18, en: "No problem!", cn: "没问题！", pinyin: "Méi wèntí!", vi: "Không vấn đề gì!" },
  { day: 2, id: 19, en: "Take care!", cn: "保重！", pinyin: "Bǎozhòng!", vi: "Bảo trọng / Giữ gìn sức khỏe!" },
  { day: 2, id: 20, en: "Have a nice day!", cn: "祝你今天愉快！", pinyin: "Zhù nǐ jīntiān yúkuài!", vi: "Chúc bạn một ngày vui vẻ!" },
);

  // --- NGÀY 3: HỎI ĐƯỜNG & DI CHUYỂN ---
 LESSON_DATA.push(
 { day: 3, id: 21, en: "Where is the bathroom?", cn: "洗手间在哪里？", pinyin: "Xǐshǒujiān zài nǎlǐ?", vi: "Nhà vệ sinh ở đâu?" },
  { day: 3, id: 22, en: "How do I get to...?", cn: "怎么去...？", pinyin: "Zěnme qù...?", vi: "Đi đến... như thế nào?" },
  { day: 3, id: 23, en: "Is it far from here?", cn: "离这里远吗？", pinyin: "Lí zhèlǐ yuǎn ma?", vi: "Có xa đây không?" },
  { day: 3, id: 24, en: "Turn left.", cn: "向左转。", pinyin: "Xiàng zuǒ zhuǎn.", vi: "Rẽ trái." },
  { day: 3, id: 25, en: "Turn right.", cn: "向右转。", pinyin: "Xiàng yòu zhuǎn.", vi: "Rẽ phải." },
  { day: 3, id: 26, en: "Go straight ahead.", cn: "一直往前走。", pinyin: "Yìzhí wǎng qián zǒu.", vi: "Đi thẳng về phía trước." },
  { day: 3, id: 27, en: "Stop here, please.", cn: "请在这里停车。", pinyin: "Qǐng zài zhèlǐ tíngchē.", vi: "Xin dừng xe ở đây." },
  { day: 3, id: 28, en: "Where can I get a taxi?", cn: "在哪里可以打车？", pinyin: "Zài nǎlǐ kěyǐ dǎchē?", vi: "Bắt xe taxi ở đâu?" },
  { day: 3, id: 29, en: "How long does it take?", cn: "需要多长时间？", pinyin: "Xūyào duō cháng shíjiān?", vi: "Mất bao lâu thời gian?" },
  { day: 3, id: 30, en: "I'm lost.", cn: "我迷路了。", pinyin: "Wǒ mílù le.", vi: "Tôi bị lạc đường rồi." },
);

  // --- NGÀY 4: MUA SẮM & GIÁ CẢ ---
 LESSON_DATA.push(
 { day: 4, id: 31, en: "How much is this?", cn: "这个多少钱？", pinyin: "Zhège duōshǎo qián?", vi: "Cái này bao nhiêu tiền?" },
  { day: 4, id: 32, en: "It's too expensive.", cn: "太贵了。", pinyin: "Tài guì le.", vi: "Đắt quá." },
  { day: 4, id: 33, en: "Can you make it cheaper?", cn: "能便宜一点吗？", pinyin: "Néng piányi yìdiǎn ma?", vi: "Có thể giảm giá một chút không?" },
  { day: 4, id: 34, en: "I'll take this one.", cn: "我要这个。", pinyin: "Wǒ yào zhège.", vi: "Tôi lấy cái này." },
  { day: 4, id: 35, en: "Can I pay by WeChat?", cn: "可以微信支付吗？", pinyin: "Kěyǐ Wēixìn zhīfù ma?", vi: "Có thể thanh toán qua WeChat không?" },
  { day: 4, id: 36, en: "Do you have a smaller size?", cn: "有小一点的吗？", pinyin: "Yǒu xiǎo yìdiǎn de ma?", vi: "Có cỡ nhỏ hơn không?" },
  { day: 4, id: 37, en: "Do you have a bigger size?", cn: "有大一点的吗？", pinyin: "Yǒu dà yìdiǎn de ma?", vi: "Có cỡ lớn hơn không?" },
  { day: 4, id: 38, en: "Can I try it on?", cn: "我可以试一下吗？", pinyin: "Wǒ kěyǐ shì yíxià ma?", vi: "Tôi thử một chút được không?" },
  { day: 4, id: 39, en: "Keep the change.", cn: "不用找钱了。", pinyin: "Búyòng zhǎoqián le.", vi: "Không cần trả lại tiền thừa đâu." },
  { day: 4, id: 40, en: "Here is your receipt.", cn: "这是您的小票。", pinyin: "Zhè shì nín de xiǎopiào.", vi: "Đây là hóa đơn của bạn." },
);

  // --- NGÀY 5: ĂN UỐNG & NHÀ HÀNG ---
LESSON_DATA.push(
  { day: 5, id: 41, en: "I'm hungry.", cn: "我饿了。", pinyin: "Wǒ è le.", vi: "Tôi đói rồi." },
  { day: 5, id: 42, en: "I'm thirsty.", cn: "我渴了。", pinyin: "Wǒ kě le.", vi: "Tôi khát rồi." },
  { day: 5, id: 43, en: "Menu, please.", cn: "请给我菜单。", pinyin: "Qǐng gěi wǒ càidān.", vi: "Cho tôi xem thực đơn." },
  { day: 5, id: 44, en: "What do you recommend?", cn: "你有什么推荐的？", pinyin: "Nǐ yǒu shénme tuījiàn de?", vi: "Bạn có gợi ý món nào ngon không?" },
  { day: 5, id: 45, en: "Water, please.", cn: "请给我水。", pinyin: "Qǐng gěi wǒ shuǐ.", vi: "Cho tôi xin nước uống." },
  { day: 5, id: 46, en: "Not spicy, please.", cn: "请不要放辣。", pinyin: "Qǐng búyào fàng là.", vi: "Xin đừng bỏ cay." },
  { day: 5, id: 47, en: "Delicious!", cn: "很好吃！", pinyin: "Hěn hǎochī!", vi: "Rất ngon!" },
  { day: 5, id: 48, en: "Check, please.", cn: "请结账。", pinyin: "Qǐng jiézhàng.", vi: "Cho tôi thanh toán tiền." },
  { day: 5, id: 49, en: "Enjoy your meal.", cn: "慢用。", pinyin: "Màn yòng.", vi: "Mời dùng bữa." },
  { day: 5, id: 50, en: "I'm full.", cn: "我饱了。", pinyin: "Wǒ bǎo le.", vi: "Tôi no rồi." }
  );
  
  // --- NGÀY 6: THỜI GIAN & THỜI TIẾT ---
 LESSON_DATA.push(
 { day: 6, id: 51, en: "What time is it?", cn: "现在几点了？", pinyin: "Xiànzài jǐ diǎn le?", vi: "Bây giờ là mấy giờ?" },
  { day: 6, id: 52, en: "It's 8 o'clock.", cn: "现在八点。", pinyin: "Xiànzài bā diǎn.", vi: "Bây giờ là 8 giờ." },
  { day: 6, id: 53, en: "What's the weather like today?", cn: "今天天气怎么样？", pinyin: "Jīntiān tiānqì zěnmeyàng?", vi: "Thời tiết hôm nay thế nào?" },
  { day: 6, id: 54, en: "It's sunny today.", cn: "今天天气晴朗。", pinyin: "Jīntiān tiānqì qínglǎng.", vi: "Hôm nay trời nắng." },
  { day: 6, id: 55, en: "It's raining.", cn: "下雨了。", pinyin: "Xià yǔ le.", vi: "Trời đang mưa." },
  { day: 6, id: 56, en: "It's very hot.", cn: "天气很热。", pinyin: "Tiānqì hěn rè.", vi: "Thời tiết rất nóng." },
  { day: 6, id: 57, en: "It's very cold.", cn: "天气很冷。", pinyin: "Tiānqì hěn lěng.", vi: "Thời tiết rất lạnh." },
  { day: 6, id: 58, en: "What day is today?", cn: "今天星期几？", pinyin: "Jīntiān xīngqījǐ?", vi: "Hôm nay là thứ mấy?" },
  { day: 6, id: 59, en: "Today is Monday.", cn: "今天是星期一。", pinyin: "Jīntiān shì xīngqīyī.", vi: "Hôm nay là thứ Hai." },
  { day: 6, id: 60, en: "See you later!", cn: "回头见！", pinyin: "Huítóu jiàn!", vi: "Hẹn gặp lại sau!" },
);

  // --- NGÀY 7: KHÁCH SẠN & ĐẶT PHÒNG ---
LESSON_DATA.push(
  { day: 7, id: 61, en: "I have a reservation.", cn: "我有预订。", pinyin: "Wǒ yǒu yùdìng.", vi: "Tôi đã đặt phòng trước." },
  { day: 7, id: 62, en: "I'd like to check in.", cn: "我想办理入住。", pinyin: "Wǒ xiǎng bànlǐ rùzhù.", vi: "Tôi muốn nhận phòng." },
  { day: 7, id: 63, en: "I'd like to check out.", cn: "我想退房。", pinyin: "Wǒ xiǎng tuìfáng.", vi: "Tôi muốn trả phòng." },
  { day: 7, id: 64, en: "Is Wi-Fi available here?", cn: "这里有无线网络吗？", pinyin: "Zhèlǐ yǒu wúxiàn wǎnglù ma?", vi: "Ở đây có Wi-Fi không?" },
  { day: 7, id: 65, en: "What's the Wi-Fi password?", cn: "Wi-Fi密码是什么？", pinyin: "Wi-Fi mìmǎ shì shénme?", vi: "Mật khẩu Wi-Fi là gì?" },
  { day: 7, id: 66, en: "Can I leave my luggage here?", cn: "我可以把行李寄存吗？", pinyin: "Wǒ kěyǐ bǎ xíngli jìcún ma?", vi: "Tôi có thể gửi hành lý ở đây không?" },
  { day: 7, id: 67, en: "Room service, please.", cn: "请提供客房服务。", pinyin: "Qǐng tígōng kèfáng fúwù.", vi: "Cho tôi dịch vụ phòng." },
  { day: 7, id: 68, en: "The air conditioner isn't working.", cn: "空调坏了。", pinyin: "Kōngtiáo huài le.", vi: "Máy lạnh bị hỏng rồi." },
  { day: 7, id: 69, en: "Where is the elevator?", cn: "电梯在哪里？", pinyin: "Diàntī zài nǎlǐ?", vi: "Thang máy ở đâu?" },
  { day: 7, id: 70, en: "Can I get a wake-up call?", cn: "能给我安排叫醒服务吗？", pinyin: "Néng gěi wǒ ānpái jiàoxǐng fúwù ma?", vi: "Cho tôi dịch vụ báo thức được không?" },
);

  // --- NGÀY 8: GIAO TIẾP HẰNG NGÀY & Ý KIẾN ---
 LESSON_DATA.push(
 { day: 8, id: 71, en: "What are you doing?", cn: "你在做什么？", pinyin: "Nǐ zài zuò shénme?", vi: "Bạn đang làm gì đấy?" },
  { day: 8, id: 72, en: "What do you think?", cn: "你觉得怎么样？", pinyin: "Nǐ juéde zěnmeyàng?", vi: "Bạn thấy thế nào?" },
  { day: 8, id: 73, en: "I agree.", cn: "我同意。", pinyin: "Wǒ tóngyì.", vi: "Tôi đồng ý." },
  { day: 8, id: 74, en: "I don't think so.", cn: "我觉得不尽然。", pinyin: "Wǒ juéde bújìnrán.", vi: "Tôi không nghĩ vậy." },
  { day: 8, id: 75, en: "Don't worry.", cn: "别担心。", pinyin: "Bié dānxīn.", vi: "Đừng lo lắng." },
  { day: 8, id: 76, en: "Calm down.", cn: "冷静一点。", pinyin: "Lěngjìng yìdiǎn.", vi: "Bình tĩnh nào." },
  { day: 8, id: 77, en: "That's awesome!", cn: "太棒了！", pinyin: "Tài bàng le!", vi: "Tuyệt vời quá!" },
  { day: 8, id: 78, en: "Really?", cn: "真的吗？", pinyin: "Zhēn de ma?", vi: "Thật sao?" },
  { day: 8, id: 79, en: "I understand.", cn: "我明白了。", pinyin: "Wǒ míngbai le.", vi: "Tôi hiểu rồi." },
  { day: 8, id: 80, en: "I don't understand.", cn: "我不明白。", pinyin: "Wǒ bù míngbai.", vi: "Tôi không hiểu." },
);

  // --- NGÀY 9: KHẨN CẤP & SỨC KHỎE ---
 LESSON_DATA.push(
 { day: 9, id: 81, en: "Help!", cn: "救命！", pinyin: "Jiùmìng!", vi: "Cứu với!" },
  { day: 9, id: 82, en: "I need a doctor.", cn: "我需要看医生。", pinyin: "Wǒ xūyào kàn yīshēng.", vi: "Tôi cần gặp bác sĩ." },
  { day: 9, id: 83, en: "I feel sick.", cn: "我感觉不舒服。", pinyin: "Wǒ gǎnjué bù shūfu.", vi: "Tôi cảm thấy không khỏe." },
  { day: 9, id: 84, en: "I have a headache.", cn: "我头痛。", pinyin: "Wǒ tóutòng.", vi: "Tôi bị đau đầu." },
  { day: 9, id: 85, en: "I have a fever.", cn: "我发烧了。", pinyin: "Wǒ fāshāo le.", vi: "Tôi bị sốt." },
  { day: 9, id: 86, en: "Call an ambulance!", cn: "叫救护车！", pinyin: "Jiào jiùhùchē!", vi: "Gọi xe cấp cứu đi!" },
  { day: 9, id: 87, en: "Where is the pharmacy?", cn: "药店在哪里？", pinyin: "Yàodiàn zài nǎlǐ?", vi: "Hiệu thuốc ở đâu?" },
  { day: 9, id: 88, en: "I lost my passport.", cn: "我的护照丢了。", pinyin: "Wǒ de hùzhào diū le.", vi: "Tôi bị mất hộ chiếu rồi." },
  { day: 9, id: 89, en: "Call the police!", cn: "报警！", pinyin: "Bào jǐng!", vi: "Báo cảnh sát đi!" },
  { day: 9, id: 90, en: "Be careful!", cn: "小心！", pinyin: "Xiǎoxīn!", vi: "Cẩn thận!" },
);

  // --- NGÀY 10: SỞ THÍCH & CÔNG VIỆC ---
LESSON_DATA.push(
  { day: 10, id: 91, en: "What is your job?", cn: "你做什么工作？", pinyin: "Nǐ zuò shénme gōngzuò?", vi: "Bạn làm nghề gì?" },
  { day: 10, id: 92, en: "What are your hobbies?", cn: "你的爱好是什么？", pinyin: "Nǐ de àihào shì shénme?", vi: "Sở thích của bạn là gì?" },
  { day: 10, id: 93, en: "I like listening to music.", cn: "我喜欢听音乐。", pinyin: "Wǒ xǐhuan tīng yīnyuè.", vi: "Tôi thích nghe nhạc." },
  { day: 10, id: 94, en: "I like traveling.", cn: "我喜欢旅游。", pinyin: "Wǒ xǐhuan lǚyóu.", vi: "Tôi thích đi du lịch." },
  { day: 10, id: 95, en: "Are you busy today?", cn: "你今天忙吗？", pinyin: "Nǐ jīntiān máng ma?", vi: "Hôm nay bạn có bận không?" },
  { day: 10, id: 96, en: "I am very busy.", cn: "我很忙。", pinyin: "Wǒ hěn máng.", vi: "Tôi rất bận." },
  { day: 10, id: 97, en: "Let me think about it.", cn: "让我想想。", pinyin: "Ràng wǒ xiǎngxiang.", vi: "Để tôi suy nghĩ thêm." },
  { day: 10, id: 98, en: "I'm free tomorrow.", cn: "我明天有空。", pinyin: "Wǒ míngtiān yǒu kòng.", vi: "Tôi rảnh vào ngày mai." },
  { day: 10, id: 99, en: "Good luck!", cn: "祝你好运！", pinyin: "Zhù nǐ hǎoyùn!", vi: "Chúc bạn may mắn!" },
  { day: 10, id: 100, en: "See you next time!", cn: "下次见！", pinyin: "Xiàcì jiàn!", vi: "Hẹn gặp lại lần sau!" }
);

  // --- NGÀY 11: MUA SẮM & MẶC CẢ NÂNG CẠO ---
LESSON_DATA.push(
  { day: 11, id: 101, en: "Do you have this in other colors?", cn: "有别的颜色吗？", pinyin: "Yǒu bié de yánsè ma?", vi: "Có màu khác không?" },
  { day: 11, id: 102, en: "Can I get a discount?", cn: "能打折吗？", pinyin: "Néng dǎzhé ma?", vi: "Có được giảm giá không?" },
  { day: 11, id: 103, en: "Is this on sale?", cn: "这个打折吗？", pinyin: "Zhège dǎzhé ma?", vi: "Cái này có đang giảm giá không?" },
  { day: 11, id: 104, en: "I'm just looking, thanks.", cn: "我只是看看，谢谢。", pinyin: "Wǒ zhǐshì kànkan, xièxie.", vi: "Tôi chỉ xem thôi, cảm ơn." },
  { day: 11, id: 105, en: "Where is the fitting room?", cn: "试衣间在哪里？", pinyin: "Shìyījiān zài nǎlǐ?", vi: "Phòng thử đồ ở đâu?" },
  { day: 11, id: 106, en: "It fits me very well.", cn: "很合身。", pinyin: "Hěn héshēn.", vi: "Rất vừa vặn." },
  { day: 11, id: 107, en: "It's a bit too small.", cn: "有点太小了。", pinyin: "Yǒudiǎn tài xiǎo le.", vi: "Hơi nhỏ một chút." },
  { day: 11, id: 108, en: "It's a bit too big.", cn: "有点太大。", pinyin: "Yǒudiǎn tài dà.", vi: "Hơi to một chút." },
  { day: 11, id: 109, en: "Can I return this?", cn: "这个可以退吗？", pinyin: "Zhège kěyǐ tuì ma?", vi: "Cái này có thể trả lại không?" },
  { day: 11, id: 110, en: "Can I exchange this?", cn: "这个可以换吗？", pinyin: "Zhège kěyǐ huàn ma?", vi: "Cái này có thể đổi không?" },
);

  // --- NGÀY 12: ĐIỆN THOẠI & LIÊN LẠC ---
 LESSON_DATA.push(
 { day: 12, id: 111, en: "Hello, who is this?", cn: "喂，请问是谁？", pinyin: "Wèi, qǐngwèn shì shéi?", vi: "Alo, xin hỏi ai đấy?" },
  { day: 12, id: 112, en: "Can I speak to...?", cn: "我可以和...说话吗？", pinyin: "Wǒ kěyǐ hé... shuōhuà ma?", vi: "Tôi có thể nói chuyện với... không?" },
  { day: 12, id: 113, en: "Please hold on a moment.", cn: "请稍等一下。", pinyin: "Qǐng shāo děng yíxià.", vi: "Xin chờ một chút." },
  { day: 12, id: 114, en: "The line is busy.", cn: "电话占线。", pinyin: "Diànhuà zhànxiàn.", vi: "Máy đang bận." },
  { day: 12, id: 115, en: "Can you speak slower?", cn: "你能说慢一点吗？", pinyin: "Nǐ néng shuō màn yìdiǎn ma?", vi: "Bạn nói chậm hơn chút được không?" },
  { day: 12, id: 116, en: "Can you repeat that?", cn: "你能再说一遍吗？", pinyin: "Nǐ néng zài shuō yí biàn ma?", vi: "Bạn nói lại một lần nữa được không?" },
  { day: 12, id: 117, en: "What is your phone number?", cn: "你的电话号码是多少？", pinyin: "Nǐ de diànhuà hàomǎ shì duōshao?", vi: "Số điện thoại của bạn là bao nhiêu?" },
  { day: 12, id: 118, en: "Please send me a message.", cn: "请给我发信息。", pinyin: "Qǐng gěi wǒ fā xìnxī.", vi: "Xin gửi tin nhắn cho tôi." },
  { day: 12, id: 119, en: "I'll call you back later.", cn: "我过会儿给你打电话。", pinyin: "Wǒ guòhuìr gěi nǐ dǎ diànhuà.", vi: "Tôi sẽ gọi lại cho bạn sau." },
  { day: 12, id: 120, en: "I didn't catch what you said.", cn: "我没听清你说什么。", pinyin: "Wǒ méi tīng qīng nǐ shuō shénme.", vi: "Tôi nghe không rõ bạn nói gì." },
);

  // --- NGÀY 13: CẢM XÚC & THÁI ĐỘ ---
 LESSON_DATA.push(
 { day: 13, id: 121, en: "I'm very happy today.", cn: "我今天很高兴。", pinyin: "Wǒ jīntiān hěn gāoxìng.", vi: "Hôm nay tôi rất vui." },
  { day: 13, id: 122, en: "I'm so tired.", cn: "我太累了。", pinyin: "Wǒ tài lèi le.", vi: "Tôi mệt quá." },
  { day: 13, id: 123, en: "Don't be angry.", cn: "别生气。", pinyin: "Bié shēngqì.", vi: "Đừng tức giận." },
  { day: 13, id: 124, en: "I'm bored.", cn: "我很无聊。", pinyin: "Wǒ hěn wúliáo.", vi: "Tôi cảm thấy chán quá." },
  { day: 13, id: 125, en: "That's really interesting!", cn: "真有趣！", pinyin: "Zhēn yǒuqù!", vi: "Thật là thú vị!" },
  { day: 13, id: 126, en: "I'm a bit nervous.", cn: "我有点紧张。", pinyin: "Wǒ yǒudiǎn jǐnzhāng.", vi: "Tôi hơi căng thẳng." },
  { day: 13, id: 127, en: "Are you sure?", cn: "你确定吗？", pinyin: "Nǐ quèdìng ma?", vi: "Bạn có chắc chắn không?" },
  { day: 13, id: 128, en: "I am very proud of you.", cn: "我为你感到骄傲。", pinyin: "Wǒ wèi nǐ gǎndào jiāo'ào.", vi: "Tôi rất tự hào về bạn." },
  { day: 13, id: 129, en: "Don't give up!", cn: "不要放弃！", pinyin: "Búyào fàngqì!", vi: "Đừng bỏ cuộc!" },
  { day: 13, id: 130, en: "Take it easy.", cn: "放轻松。", pinyin: "Fàng qīngsōng.", vi: "Thư giãn đi / Thong thả thôi." },
);

  // --- NGÀY 14: ĐI LẠI & GIAO THÔNG ---
 LESSON_DATA.push(
 { day: 14, id: 131, en: "Where is the bus stop?", cn: "公交车站在哪里？", pinyin: "Gōngjiāochē zhàn zài nǎlǐ?", vi: "Trạm xe buýt ở đâu?" },
  { day: 14, id: 132, en: "Which bus goes to...?", cn: "哪路公交车到...？", pinyin: "Nǎ lù gōngjiāochē dào...?", vi: "Xe buýt số mấy đi đến...?" },
  { day: 14, id: 133, en: "Where is the subway station?", cn: "地铁站在哪里？", pinyin: "Dìtiězhàn zài nǎlǐ?", vi: "Ga tàu điện ngầm ở đâu?" },
  { day: 14, id: 134, en: "I'd like one ticket to...", cn: "我想要一张去...的票。", pinyin: "Wǒ xiǎng yào yì zhāng qù... de piào.", vi: "Cho tôi một vé đi..." },
  { day: 14, id: 135, en: "What time does the train leave?", cn: "火车几点开？", pinyin: "Huǒchē jǐ diǎn kāi?", vi: "Tàu hỏa mấy giờ chạy?" },
  { day: 14, id: 136, en: "Where do I change trains?", cn: "我在哪里换乘？", pinyin: "Wǒ zài nǎlǐ huànchéng?", vi: "Tôi đổi tàu ở đâu?" },
  { day: 14, id: 137, en: "How much is the fare?", cn: "票价是多少？", pinyin: "Piàojià shì duōshao?", vi: "Giá vé là bao nhiêu?" },
  { day: 14, id: 138, en: "I want to rent a car.", cn: "我想租车。", pinyin: "Wǒ xiǎng zūchē.", vi: "Tôi muốn thuê xe ô tô." },
  { day: 14, id: 139, en: "Is this seat taken?", cn: "这个座位有人吗？", pinyin: "Zhège zuòwèi yǒu rén ma?", vi: "Chỗ này có ai ngồi chưa?" },
  { day: 14, id: 140, en: "Have a safe trip!", cn: "一路顺风！", pinyin: "Yílù shùnfēng!", vi: "Thượng lộ bình an!" },
);

  // --- NGÀY 15: TẠI NGÂN HÀNG & TIỀN BẠC ---
 LESSON_DATA.push(
 { day: 15, id: 141, en: "Where is the nearest ATM?", cn: "最近的自动取款机在哪里？", pinyin: "Zuì jìn de zìdòng qǔkuǎnjī zài nǎlǐ?", vi: "Cây ATM gần nhất ở đâu?" },
  { day: 15, id: 142, en: "I want to exchange currency.", cn: "我想换钱。", pinyin: "Wǒ xiǎng huànqián.", vi: "Tôi muốn đổi tiền." },
  { day: 15, id: 143, en: "What is the exchange rate?", cn: "汇率是多少？", pinyin: "Huìlǜ shì duōshao?", vi: "Tỷ giá hối đoái là bao nhiêu?" },
  { day: 15, id: 144, en: "I want to withdraw money.", cn: "我想取钱。", pinyin: "Wǒ xiǎng qǔqián.", vi: "Tôi muốn rút tiền." },
  { day: 15, id: 145, en: "I want to deposit money.", cn: "我想存钱。", pinyin: "Wǒ xiǎng cúnqián.", vi: "Tôi muốn gửi tiền." },
  { day: 15, id: 146, en: "Do you accept credit cards?", cn: "你们接受信用卡吗？", pinyin: "Nǐmen jiēshòu xìnyòngkǎ ma?", vi: "Ở đây có chấp nhận thẻ tín dụng không?" },
  { day: 15, id: 147, en: "Can I pay cash?", cn: "我可以用现金付款吗？", pinyin: "Wǒ kěyǐ yòng xiànjīn fùkuǎn ma?", vi: "Tôi thanh toán bằng tiền mặt được không?" },
  { day: 15, id: 148, en: "Scan this QR code, please.", cn: "请扫这个二维码。", pinyin: "Qǐng sǎo zhège èrwéimǎ.", vi: "Xin mời quét mã QR này." },
  { day: 15, id: 149, en: "My card got stuck.", cn: "我的卡被吞了。", pinyin: "Wǒ de kǎ bèi tūn le.", vi: "Thẻ của tôi bị nuốt rồi." },
  { day: 15, id: 150, en: "Here is your change.", cn: "这是找您的钱。", pinyin: "Zhè shì zhǎo nín de qián.", vi: "Đây là tiền thừa của bạn." }
);

  // --- NGÀY 16: LỊCH HẸN & THỜI GIANG BIEU ---
LESSON_DATA.push(
  { day: 16, id: 151, en: "Are you free this weekend?", cn: "你周末有空吗？", pinyin: "Nǐ zhōumò yǒu kòng ma?", vi: "Bạn cuối tuần có rảnh không?" },
  { day: 16, id: 152, en: "Let's meet at 3 PM.", cn: "我们下午三点见吧。", pinyin: "Wǒmen xiàwǔ sān diǎn jiàn ba.", vi: "Chúng ta gặp nhau lúc 3 giờ chiều nhé." },
  { day: 16, id: 153, en: "Where shall we meet?", cn: "我们在哪里见面？", pinyin: "Wǒmen zài nǎlǐ jiànmiàn?", vi: "Chúng ta gặp nhau ở đâu?" },
  { day: 16, id: 154, en: "I'm running late.", cn: "我要晚一点到。", pinyin: "Wǒ yào wǎn yìdiǎn dào.", vi: "Tôi sẽ đến muộn một chút." },
  { day: 16, id: 155, en: "Sorry to keep you waiting.", cn: "不好意思，让你久等了。", pinyin: "Bù hǎoyìsi, ràng nǐ jiǔ děng le.", vi: "Xin lỗi vì để bạn chờ lâu." },
  { day: 16, id: 156, en: "Can we change the time?", cn: "我们能改个时间吗？", pinyin: "Wǒmen néng gǎi gè shíjiān ma?", vi: "Chúng ta có thể đổi thời gian được không?" },
  { day: 16, id: 157, en: "I have to leave now.", cn: "我现在得走了。", pinyin: "Wǒ xiànzài děi zǒu le.", vi: "Tôi phải đi bây giờ rồi." },
  { day: 16, id: 158, en: "What's your plan for tomorrow?", cn: "你明天有什么打算？", pinyin: "Nǐ míngtiān yǒu shénme dǎsuàn?", vi: "Bạn có kế hoạch gì cho ngày mai?" },
  { day: 16, id: 159, en: "I'm free all day.", cn: "我整天都有空。", pinyin: "Wǒ zhěngtiān dōu yǒu kòng.", vi: "Tôi rảnh cả ngày." },
  { day: 16, id: 160, en: "Let's keep in touch.", cn: "保持联系。", pinyin: "Bǎochí liánxì.", vi: "Giữ liên lạc nhé." },
);

  // --- NGÀY 17: TẠI SÂN BAY & XUẤT NHẬP CẢNH ---
LESSON_DATA.push(
  { day: 17, id: 161, en: "Where is the check-in counter?", cn: "值机柜台在哪里？", pinyin: "Zhíjī guìtái zài nǎlǐ?", vi: "Quầy làm thủ tục ở đâu?" },
  { day: 17, id: 162, en: "Here is my passport and ticket.", cn: "这是我的护照和机票。", pinyin: "Zhè shì wǒ de hùzhào hé jīpiào.", vi: "Đây là hộ chiếu và vé máy bay của tôi." },
  { day: 17, id: 163, en: "Window seat or aisle seat?", cn: "靠窗还是靠走道的位置？", pinyin: "Kào chuāng háishì kào zǒudào de wèi zì?", vi: "Chỗ ngồi gần cửa sổ hay gần lối đi?" },
  { day: 17, id: 164, en: "How many bags are you checking in?", cn: "你托运几件行李？", pinyin: "Nǐ tuōyùn jǐ jiàn xíngli?", vi: "Bạn ký gửi mấy kiện hành lý?" },
  { day: 17, id: 165, en: "Is my luggage overweight?", cn: "我的行李超重了吗？", pinyin: "Wǒ de xíngli chāozhòng le ma?", vi: "Hành lý của tôi có bị quá cước không?" },
  { day: 17, id: 166, en: "Where is boarding gate 5?", cn: "五号登机口在哪里？", pinyin: "Wǔ hào dēngjīkǒu zài nǎlǐ?", vi: "Cổng lên máy bay số 5 ở đâu?" },
  { day: 17, id: 167, en: "The flight is delayed.", cn: "航班延误了。", pinyin: "Hángbān yánwù le.", vi: "Chuyến bay bị hoãn." },
  { day: 17, id: 168, en: "What is the purpose of your visit?", cn: "你入境的目的是什么？", pinyin: "Nǐ rùjìng de mùdì shì shénme?", vi: "Mục đích nhập cảnh của bạn là gì?" },
  { day: 17, id: 169, en: "I'm here for sightseeing.", cn: "我是来观光的。", pinyin: "Wǒ shì lái guānguāng de.", vi: "Tôi đến đây để tham quan." },
  { day: 17, id: 170, en: "How long will you stay?", cn: "你要停留多久？", pinyin: "Nǐ yào tíngliú duōjiǔ?", vi: "Bạn sẽ ở lại bao lâu?" },
);

  // --- NGÀY 18: ĂN UỐNG & CHI TIẾT KHẨU VỊ ---
  LESSON_DATA.push(
{ day: 18, id: 171, en: "I'm a vegetarian.", cn: "我吃素。", pinyin: "Wǒ chī sù.", vi: "Tôi ăn chay." },
  { day: 18, id: 172, en: "Is this dish spicy?", cn: "这道菜辣吗？", pinyin: "Zhè dào cài là ma?", vi: "Món này có cay không?" },
  { day: 18, id: 173, en: "A bit less sugar, please.", cn: "请少放点糖。", pinyin: "Qǐng shǎo fàng diǎn táng.", vi: "Xin ít đường một chút." },
  { day: 18, id: 174, en: "One bottle of beer, please.", cn: "请来瓶啤酒。", pinyin: "Qǐng lái píng píjiǔ.", vi: "Cho một chai bia." },
  { day: 18, id: 175, en: "Can I have some ice water?", cn: "能给我一杯冰水吗？", pinyin: "Néng gěi wǒ yì bēi bīngshuǐ ma?", vi: "Cho tôi một cốc nước đá được không?" },
  { day: 18, id: 176, en: "Enjoy your meal!", cn: "祝你胃口好！", pinyin: "Zhù nǐ wèikǒu hǎo!", vi: "Chúc ngon miệng!" },
  { day: 18, id: 177, en: "I'm allergic to peanuts.", cn: "我对花生过敏。", pinyin: "Wǒ duì huāsheng guòmǐn.", vi: "Tôi bị dị ứng với đậu phộng." },
  { day: 18, id: 178, en: "Wrap it up to go, please.", cn: "请打包。", pinyin: "Qǐng dǎbāo.", vi: "Cho tôi gói mang về." },
  { day: 18, id: 179, en: "Can we split the bill?", cn: "我们可以分开付吗？", pinyin: "Wǒmen kěyǐ fēnkāi fù ma?", vi: "Chúng ta chia nhau trả tiền được không?" },
  { day: 18, id: 180, en: "This tastes amazing!", cn: "这个味道太棒了！", pinyin: "Zhège wèidào tài bàng le!", vi: "Món này vị tuyệt vời quá!" },
);

  // --- NGÀY 19: NHÀ CỬA & CUỘC SỐNG SINH HOẠT ---
 LESSON_DATA.push(
 { day: 19, id: 181, en: "I wake up at 6 AM every day.", cn: "我每天早上六点起床。", pinyin: "Wǒ měitiān zǎoshang liù diǎn qǐchuáng.", vi: "Tôi thức dậy lúc 6 giờ sáng mỗi ngày." },
  { day: 19, id: 182, en: "I'm going to take a shower.", cn: "我去洗个澡。", pinyin: "Wǒ qù xǐ gè zǎo.", vi: "Tôi đi tắm đây." },
  { day: 19, id: 183, en: "Remember to lock the door.", cn: "记得锁门。", pinyin: "Jìde suǒ mén.", vi: "Nhớ khóa cửa nhé." },
  { day: 19, id: 184, en: "Turn off the lights, please.", cn: "请关灯。", pinyin: "Qǐng guān dēng.", vi: "Xin hãy tắt đèn." },
  { day: 19, id: 185, en: "Turn on the air conditioner.", cn: "打开空调。", pinyin: "Dǎkāi kōngtiáo.", vi: "Bật máy lạnh lên." },
  { day: 19, id: 186, en: "Where did I put my keys?", cn: "我的钥匙放在哪里了？", pinyin: "Wǒ de yàoshi fàng zài nǎlǐ le?", vi: "Chìa khóa của tôi để đâu rồi nhỉ?" },
  { day: 19, id: 187, en: "I need to do the laundry.", cn: "我需要洗衣服。", pinyin: "Wǒ xūyào xǐ yīfu.", vi: "Tôi cần giặt quần áo." },
  { day: 19, id: 188, en: "Dinner is ready!", cn: "开饭了！", pinyin: "Kāifàn le!", vi: "Đến giờ ăn cơm rồi!" },
  { day: 19, id: 189, en: "I'm going to bed now.", cn: "我要睡觉了。", pinyin: "Wǒ yào shuìjiào le.", vi: "Tôi đi ngủ đây." },
  { day: 19, id: 190, en: "Have a good dream!", cn: "做个好梦！", pinyin: "Zuò gè hǎo mèng!", vi: "Chúc có giấc mơ đẹp!" },
);

  // --- NGÀY 20: CÔNG NGHỆ & MẠNG XÃ HỘI ---
LESSON_DATA.push(
  { day: 20, id: 191, en: "Can I charge my phone here?", cn: "我可以在这里给手机充电吗？", pinyin: "Wǒ kěyǐ zài zhèlǐ gěi shǒujī chōngdiàn ma?", vi: "Tôi có thể sạc điện thoại ở đây không?" },
  { day: 20, id: 192, en: "My phone battery is dead.", cn: "我的手机没电了。", pinyin: "Wǒ de shǒujī méi diàn le.", vi: "Điện thoại của tôi hết pin rồi." },
  { day: 20, id: 193, en: "Add me on WeChat.", cn: "加我的微信吧。", pinyin: "Jiā wǒ de Wēixìn ba.", vi: "Kết bạn WeChat với tôi nhé." },
  { day: 20, id: 194, en: "Send me a link, please.", cn: "请给我发个链接。", pinyin: "Qǐng gěi wǒ fā gè liànjiē.", vi: "Xin gửi link cho tôi." },
  { day: 20, id: 195, en: "The internet connection is slow.", cn: "网速很慢。", pinyin: "Wǎngsù hěn màn.", vi: "Tốc độ mạng rất chậm." },
  { day: 20, id: 196, en: "Did you see my post?", cn: "你看到我发的信息了吗？", pinyin: "Nǐ kàndào wǒ fā de xìnxī le ma?", vi: "Bạn có thấy tin nhắn/bài tôi đăng không?" },
  { day: 20, id: 197, en: "Please scan my QR code.", cn: "请扫我的二维码。", pinyin: "Qǐng sǎo wǒ de èrwéimǎ.", vi: "Xin mời quét mã QR của tôi." },
  { day: 20, id: 198, en: "I'll send you an email.", cn: "我给你发邮件。", pinyin: "Wǒ gěi nǐ fā yóujiàn.", vi: "Tôi sẽ gửi email cho bạn." },
  { day: 20, id: 199, en: "Take a photo for me, please.", cn: "请帮我拍张照片。", pinyin: "Qǐng bāng wǒ pāi zhāng zhàopiàn.", vi: "Xin chụp giúp tôi một tấm ảnh." },
  { day: 20, id: 200, en: "Say cheese!", cn: "茄子！", pinyin: "Qiézi!", vi: "Cười lên nào! (Khi chụp ảnh)" }
);

  // --- NGÀY 21: MÙA & THỜI TIẾT CỤ THỂ ---
 LESSON_DATA.push(
 { day: 21, id: 201, en: "What season do you like?", cn: "你喜欢什么季节？", pinyin: "Nǐ xǐhuan shénme jìjié?", vi: "Bạn thích mùa nào?" },
  { day: 21, id: 202, en: "Spring is warm and beautiful.", cn: "春天很温暖也很美。", pinyin: "Chūntiān hěn wēnnuǎn yě hěn měi.", vi: "Mùa xuân rất ấm áp và đẹp." },
  { day: 21, id: 203, en: "It's very hot in summer.", cn: "夏天非常热。", pinyin: "Xiàtiān fēicháng rè.", vi: "Mùa hè rất nóng." },
  { day: 21, id: 204, en: "Autumn is my favorite season.", cn: "秋天是我最喜欢的季节。", pinyin: "Qiūtiān shì wǒ zuì xǐhuan de jìjié.", vi: "Mùa thu là mùa tôi thích nhất." },
  { day: 21, id: 205, en: "It snows in winter.", cn: "冬天会下雪。", pinyin: "Dōngtiān huì xià xuě.", vi: "Mùa đông có tuyết rơi." },
  { day: 21, id: 206, en: "It looks like it's going to rain.", cn: "好像要下雨了。", pinyin: "Hǎoxiàng yào xià yǔ le.", vi: "Hình như trời sắp mưa." },
  { day: 21, id: 207, en: "Don't forget to bring an umbrella.", cn: "别忘了带伞。", pinyin: "Bié wàng le dài sǎn.", vi: "Đừng quên mang theo ô (dù)." },
  { day: 21, id: 208, en: "The wind is very strong today.", cn: "今天风很大。", pinyin: "Jīntiān fēng hěn dà.", vi: "Hôm nay gió rất to." },
  { day: 21, id: 209, en: "The sun is coming out.", cn: "太阳出来了。", pinyin: "Tàiyáng chūlái le.", vi: "Trời đã hửng nắng rồi." },
  { day: 21, id: 210, en: "What is the temperature today?", cn: "今天多少度？", pinyin: "Jīntiān duōshao dù?", vi: "Hôm nay bao nhiêu độ?" },
);

  // --- NGÀY 22: CÔNG VIỆC & VĂN PHÒNG ---
LESSON_DATA.push(
  { day: 22, id: 211, en: "Where do you work?", cn: "你在哪里工作？", pinyin: "Nǐ zài nǎlǐ gōngzuò?", vi: "Bạn làm việc ở đâu?" },
  { day: 22, id: 212, en: "I work in a company.", cn: "我在一家公司工作。", pinyin: "Wǒ zài yì jiā gōngsī gōngzuò.", vi: "Tôi làm việc ở một công ty." },
  { day: 22, id: 213, en: "I have a meeting today.", cn: "我今天有会议。", pinyin: "Wǒ jīntiān yǒu huìyì.", vi: "Hôm nay tôi có cuộc họp." },
  { day: 22, id: 214, en: "Please print this document.", cn: "请打印这份文件。", pinyin: "Qǐng dǎyìn zhè fèn wénjiàn.", vi: "Xin in tài liệu này." },
  { day: 22, id: 215, en: "I am writing a report.", cn: "我在写报告。", pinyin: "Wǒ zài xiě bàogào.", vi: "Tôi đang viết báo cáo." },
  { day: 22, id: 216, en: "Can I take a break?", cn: "我可以休息一下吗？", pinyin: "Wǒ kěyǐ xiūxi yíxià ma?", vi: "Tôi nghỉ ngơi một chút được không?" },
  { day: 22, id: 217, en: "What time do you finish work?", cn: "你几点下班？", pinyin: "Nǐ jǐ diǎn xiàbān?", vi: "Mấy giờ bạn tan làm?" },
  { day: 22, id: 218, en: "I need to work overtime tonight.", cn: "我今晚需要加班。", pinyin: "Wǒ jīnwǎn xūyào jiābān.", vi: "Tối nay tôi phải tăng ca." },
  { day: 22, id: 219, en: "My boss is very kind.", cn: "我的老板很随和。", pinyin: "Wǒ de lǎobǎn hěn suíhe.", vi: "Sếp của tôi rất hòa nhã." },
  { day: 22, id: 220, en: "Good job!", cn: "干得好！", pinyin: "Gàn de hǎo!", vi: "Làm tốt lắm!" },
);

  // --- NGÀY 23: MÔ TẢ CON NGƯỜI & TÍNH CÁCH ---
LESSON_DATA.push(
  { day: 23, id: 221, en: "He is very tall.", cn: "他很高。", pinyin: "Tā hěn gāo.", vi: "Anh ấy rất cao." },
  { day: 23, id: 222, en: "She has long hair.", cn: "她留着长发。", pinyin: "Tā liú zhe chángfà.", vi: "Cô ấy có mái tóc dài." },
  { day: 23, id: 223, en: "He is very friendly.", cn: "他很友好。", pinyin: "Tā hěn yǒuhǎo.", vi: "Anh ấy rất thân thiện." },
  { day: 23, id: 224, en: "She is very smart.", cn: "她聪明极了。", pinyin: "Tā cōngming jí le.", vi: "Cô ấy cực kỳ thông minh." },
  { day: 23, id: 225, en: "Don't be shy.", cn: "别害羞。", pinyin: "Bié hàixiū.", vi: "Đừng ngại ngùng." },
  { day: 23, id: 226, en: "He is a funny person.", cn: "他是个幽默的人。", pinyin: "Tā shì gè yōumò de rén.", vi: "Anh ấy là người hài hước." },
  { day: 23, id: 227, en: "She is very hard-working.", cn: "她很勤奋。", pinyin: "Tā hěn qínfèn.", vi: "Cô ấy rất chăm chỉ." },
  { day: 23, id: 228, en: "He is honest and reliable.", cn: "他诚实可靠。", pinyin: "Tā chéngshí kěkào.", vi: "Anh ấy trung thực và đáng tin cậy." },
  { day: 23, id: 229, en: "She is polite to everyone.", cn: "她对每个人都有礼貌。", pinyin: "Tā duì měi gè rén dōu yǒu lǐmào.", vi: "Cô ấy lịch sự với mọi người." },
  { day: 23, id: 230, en: "They look very happy.", cn: "他们看起来很幸福。", pinyin: "Tāmen kàn qǐlái hěn xìngfú.", vi: "Trông họ rất hạnh phúc." },
);

  // --- NGÀY 24: GIẢI TRÍ & THỂ THAO ---
LESSON_DATA.push(
  { day: 24, id: 231, en: "Do you like playing sports?", cn: "你喜欢做运动吗？", pinyin: "Nǐ xǐhuan zuò yùndòng ma?", vi: "Bạn có thích tập thể thao không?" },
  { day: 24, id: 232, en: "I like playing basketball.", cn: "我喜欢打篮球。", pinyin: "Wǒ xǐhuan dǎ lánqiú.", vi: "Tôi thích chơi bóng rổ." },
  { day: 24, id: 233, en: "Let's go watch a movie!", cn: "我们去看电影吧！", pinyin: "Wǒmen qù kàn diànyǐng ba!", vi: "Chúng ta đi xem phim đi!" },
  { day: 24, id: 234, en: "What kind of music do you like?", cn: "你喜欢什么音乐？", pinyin: "Nǐ xǐhuan shénme yīnyuè?", vi: "Bạn thích thể loại nhạc nào?" },
  { day: 24, id: 235, en: "I like playing computer games.", cn: "我喜欢玩电脑游戏。", pinyin: "Wǒ xǐhuan wán diànnǎo yóuxì.", vi: "Tôi thích chơi game máy tính." },
  { day: 24, id: 236, en: "Do you know how to swim?", cn: "你会游泳吗？", pinyin: "Nǐ huì yóuyǒng ma?", vi: "Bạn có biết bơi không?" },
  { day: 24, id: 237, en: "I go running every evening.", cn: "我每天晚上都去跑步。", pinyin: "Wǒ měitiān wǎnshang dōu qù pǎobù.", vi: "Mỗi tối tôi đều đi chạy bộ." },
  { day: 24, id: 238, en: "Shall we go shopping together?", cn: "我们一起去逛街吗？", pinyin: "Wǒmen yìqǐ qù guàngjiē ma?", vi: "Chúng ta cùng đi mua sắm/dạo phố nhé?" },
  { day: 24, id: 239, en: "I want to learn photography.", cn: "我想学摄影。", pinyin: "Wǒ xiǎng xué shèyǐng.", vi: "Tôi muốn học chụp ảnh." },
  { day: 24, id: 240, en: "This place is fun!", cn: "这里真好玩！", pinyin: "Zhèlǐ zhēn hǎowán!", vi: "Chỗ này vui thật đấy!" },
);

  // --- NGÀY 25: DU LỊCH & THAM QUAN ---
LESSON_DATA.push(
  { day: 25, id: 241, en: "Can you recommend a good place?", cn: "你能推荐个好地方吗？", pinyin: "Nǐ néng tuījiàn gè hǎo dìfang ma?", vi: "Bạn giới thiệu giúp tôi một chỗ hay được không?" },
  { day: 25, id: 242, en: "Where is the ticket office?", cn: "售票处在哪里？", pinyin: "Shòupiàochù zài nǎlǐ?", vi: "Phòng bán vé ở đâu?" },
  { day: 25, id: 243, en: "I want to buy a souvenir.", cn: "我想买个纪念品。", pinyin: "Wǒ xiǎng mǎi gè jìniànpǐn.", vi: "Tôi muốn mua một món quà lưu niệm." },
  { day: 25, id: 244, en: "Can I take a photo here?", cn: "这里可以拍照吗？", pinyin: "Zhèlǐ kěyǐ pāizhào ma?", vi: "Ở đây có được chụp ảnh không?" },
  { day: 25, id: 245, en: "The scenery here is beautiful.", cn: "这里的风景真美。", pinyin: "Zhèlǐ de fēngjǐng zhēn měi.", vi: "Phong cảnh ở đây thật đẹp." },
  { day: 25, id: 246, en: "I need a map.", cn: "我需要一张地图。", pinyin: "Wǒ xūyào yì zhāng dìtú.", vi: "Tôi cần một tấm bản đồ." },
  { day: 25, id: 247, en: "What time does the museum open?", cn: "博物馆几点开门？", pinyin: "Bówùguǎn jǐ diǎn kāimén?", vi: "Bảo tàng mấy giờ mở cửa?" },
  { day: 25, id: 248, en: "Is the admission free?", cn: "门票是免费的吗？", pinyin: "Ménpiào shì miǎnfèi de ma?", vi: "Vé vào cửa có miễn phí không?" },
  { day: 25, id: 249, en: "We had a great time!", cn: "我们玩得很开心！", pinyin: "Wǒmen wán de hěn kāixīn!", vi: "Chúng tôi đã chơi rất vui vẻ!" },
  { day: 25, id: 250, en: "I will definitely come back.", cn: "我一定会再来的。", pinyin: "Wǒ yídìng huì zài lái de.", vi: "Tôi chắc chắn sẽ quay lại đây." }
);

  // --- NGÀY 26: HỌC TẬP & TRƯỜNG HỌC ---
LESSON_DATA.push(
  { day: 26, id: 251, en: "What subject do you like?", cn: "你喜欢什么科目？", pinyin: "Nǐ xǐhuan shénme kēmù?", vi: "Bạn thích môn học nào?" },
  { day: 26, id: 252, en: "I'm studying Chinese.", cn: "我正在学中文。", pinyin: "Wǒ zhèngzài xué Zhōngwén.", vi: "Tôi đang học tiếng Trung." },
  { day: 26, id: 253, en: "Chinese grammar is not too hard.", cn: "中文语法不太难。", pinyin: "Zhōngwén yǔfǎ bú tài nán.", vi: "Ngữ pháp tiếng Trung không quá khó." },
  { day: 26, id: 254, en: "Chinese characters are hard to write.", cn: "汉字很难写。", pinyin: "Hànzì hěn nán xiě.", vi: "Chữ Hán rất khó viết." },
  { day: 26, id: 255, en: "I have an exam tomorrow.", cn: "我明天有考试。", pinyin: "Wǒ míngtiān yǒu kǎoshì.", vi: "Ngày mai tôi có bài kiểm tra." },
  { day: 26, id: 256, en: "Did you pass the test?", cn: "你通过考试了吗？", pinyin: "Nǐ tōngguò kǎoshì le ma?", vi: "Bạn đã thi đỗ chưa?" },
  { day: 26, id: 257, en: "I need to practice speaking.", cn: "我需要练习口语。", pinyin: "Wǒ xūyào liànxí kǒuyǔ.", vi: "Tôi cần luyện nói." },
  { day: 26, id: 258, en: "Can you explain this question?", cn: "你能解释一下这道题吗？", pinyin: "Nǐ néng jiěshì yíxià zhè dào tí ma?", vi: "Bạn giải thích câu hỏi này giúp tôi được không?" },
  { day: 26, id: 259, en: "Practice makes perfect.", cn: "熟能生巧。", pinyin: "Shú néng shēng qiǎo.", vi: "Luyện nhiều sẽ thành giỏi (Trăm hay không bằng tay quen)." },
  { day: 26, id: 260, en: "I study for two hours every day.", cn: "我每天学习两个小时。", pinyin: "Wǒ měitiān xuéxí liǎng gè xiǎoshí.", vi: "Mỗi ngày tôi học hai tiếng." },
);

  // --- NGÀY 27: SIÊU THỊ & TẠP HÓA ---
LESSON_DATA.push(
  { day: 27, id: 261, en: "Where is the supermarket?", cn: "超市在哪里？", pinyin: "Chāoshì zài nǎlǐ?", vi: "Siêu thị ở đâu?" },
  { day: 27, id: 262, en: "Do you have a shopping cart?", cn: "有购物车吗？", pinyin: "Yǒu gòuwùchē ma?", vi: "Có xe đẩy hàng không?" },
  { day: 27, id: 263, en: "Where are the fresh vegetables?", cn: "新鲜蔬菜在哪里？", pinyin: "Xīnxiān shūcài zài nǎlǐ?", vi: "Rau tươi ở đâu?" },
  { day: 27, id: 264, en: "Is this fresh?", cn: "这个新鲜吗？", pinyin: "Zhège xīnxiān ma?", vi: "Cái này có tươi không?" },
  { day: 27, id: 265, en: "What is the expiration date?", cn: "保质期到什么时候？", pinyin: "Bǎozhìqī dào shénme shíhou?", vi: "Hạn sử dụng đến khi nào?" },
  { day: 27, id: 266, en: "It's buy one get one free.", cn: "买一送一。", pinyin: "Mǎi yī sòng yī.", vi: "Mua một tặng một." },
  { day: 27, id: 267, en: "Do I need a plastic bag?", cn: "需要塑料袋吗？", pinyin: "Xūyào sùliàodài ma?", vi: "Có cần túi nilon không?" },
  { day: 27, id: 268, en: "I'll pay in cash.", cn: "我用现金支付。", pinyin: "Wǒ yòng xiànjīn zhīfù.", vi: "Tôi thanh toán bằng tiền mặt." },
  { day: 27, id: 269, en: "Where can I find milk?", cn: "牛奶在哪里？", pinyin: "Niúnǎi zài nǎlǐ?", vi: "Sữa tươi ở đâu?" },
  { day: 27, id: 270, en: "That's all for today.", cn: "今天就买这些。", pinyin: "Jīntiān jiù mǎi zhèxiē.", vi: "Hôm nay mua thế này thôi." },
);

  // --- NGÀY 28: SỨC KHỎE & THÓI QUEN LÀNH MẠNH ---
 LESSON_DATA.push(
 { day: 28, id: 271, en: "Drink more hot water.", cn: "多喝热水。", pinyin: "Duō hē rèshuǐ.", vi: "Uống nhiều nước ấm vào." },
  { day: 28, id: 272, en: "You should get more rest.", cn: "你应该多休息。", pinyin: "Nǐ yīnggāi duō xiūxi.", vi: "Bạn nên nghỉ ngơi nhiều hơn." },
  { day: 28, id: 273, en: "Early to bed, early to rise.", cn: "早睡早起。", pinyin: "Zǎo shuì zǎo qǐ.", vi: "Ngủ sớm dậy sớm." },
  { day: 28, id: 274, en: "Don't stay up late.", cn: "别熬夜。", pinyin: "Bié áoyè.", vi: "Đừng thức khuya." },
  { day: 28, id: 275, en: "I take a walk after dinner.", cn: "晚饭后我去散步。", pinyin: "Wǎnfàn hòu wǒ qù sànbù.", vi: "Sau bữa tối tôi đi dạo." },
  { day: 28, id: 276, en: "Eating fruits is good for health.", cn: "吃水果对身体好。", pinyin: "Chī shuǐguǒ duì shēntǐ hǎo.", vi: "Ăn hoa quả tốt cho sức khỏe." },
  { day: 28, id: 277, en: "I have a cold.", cn: "我感冒了。", pinyin: "Wǒ gǎnmào le.", vi: "Tôi bị cảm rồi." },
  { day: 28, id: 278, en: "Take this medicine three times a day.", cn: "这个药一天吃三次。", pinyin: "Zhège yào yì tiān chī sān cì.", vi: "Thuốc này uống ngày ba lần." },
  { day: 28, id: 279, en: "I feel much better now.", cn: "我感觉好多了。", pinyin: "Wǒ gǎnjué hǎo duō le.", vi: "Tôi cảm thấy tốt hơn nhiều rồi." },
  { day: 28, id: 280, en: "Health is the most important thing.", cn: "健康是最重要的。", pinyin: "Jiànkāng shì zuì zhòngyào de.", vi: "Sức khỏe là điều quan trọng nhất." },
);

  // --- NGÀY 29: GIA ĐÌNH & MỐI QUAN HỆ ---
  LESSON_DATA.push(
{ day: 29, id: 281, en: "How many people are there in your family?", cn: "你家有几口人？", pinyin: "Nǐ jiā yǒu jǐ kǒu rén?", vi: "Nhà bạn có mấy người?" },
  { day: 29, id: 282, en: "There are four people in my family.", cn: "我家有四口人。", pinyin: "Wǒ jiā yǒu sì kǒu rén.", vi: "Nhà tôi có bốn người." },
  { day: 29, id: 283, en: "Do you have brothers or sisters?", cn: "你有兄弟姐妹吗？", pinyin: "Nǐ yǒu xiōngdì jiěmèi ma?", vi: "Bạn có anh chị em không?" },
  { day: 29, id: 284, en: "This is my husband.", cn: "这是我的丈夫。", pinyin: "Zhè shì wǒ de zhàngfu.", vi: "Đây là chồng tôi." },
  { day: 29, id: 285, en: "This is my wife.", cn: "这是我的妻子。", pinyin: "Zhè shì wǒ de qīzi.", vi: "Đây là vợ tôi." },
  { day: 29, id: 286, en: "My parents live in the countryside.", cn: "我的父母住在老家。", pinyin: "Wǒ de fùmǔ zhù zài lǎojiā.", vi: "Cha mẹ tôi sống ở quê." },
  { day: 29, id: 287, en: "She is my best friend.", cn: "她是我最好的朋友。", pinyin: "Tā shì wǒ zuì hǎo de péngyou.", vi: "Cô ấy là bạn thân nhất của tôi." },
  { day: 29, id: 288, en: "We have known each other for five years.", cn: "我们认识五年了。", pinyin: "Wǒmen rènshi wǔ nián le.", vi: "Chúng tôi quen nhau được 5 năm rồi." },
  { day: 29, id: 289, en: "My children are playing in the yard.", cn: "我的孩子们在院子里玩。", pinyin: "Wǒ de háizimen zài yuànzi lǐ wán.", vi: "Các con tôi đang chơi trong sân." },
  { day: 29, id: 290, en: "Family comes first.", cn: "家庭第一。", pinyin: "Jiātíng dì-yī.", vi: "Gia đình là trên hết." },
);
  // --- NGÀY 30: THUÊ NHÀ & TIỆN ÍCH ---
 LESSON_DATA.push(
 { day: 30, id: 291, en: "I want to rent an apartment.", cn: "我想租一套公寓。", pinyin: "Wǒ xiǎng zū yí tào gōngyù.", vi: "Tôi muốn thuê một căn hộ." },
  { day: 30, id: 292, en: "How much is the monthly rent?", cn: "月租金是多少？", pinyin: "Yuè zūjīn shì duōshao?", vi: "Giá thuê hàng tháng là bao nhiêu?" },
  { day: 30, id: 293, en: "How much is the deposit?", cn: "押金是多少？", pinyin: "Yājīn shì duōshao?", vi: "Tiền đặt cọc là bao nhiêu?" },
  { day: 30, id: 294, en: "Is water and electricity included?", cn: "包水电费吗？", pinyin: "Bāo shuǐdiànfèi ma?", vi: "Có bao gồm tiền điện nước không?" },
  { day: 30, id: 295, en: "The water pipe is leaking.", cn: "水管漏水了。", pinyin: "Shuǐguǎn lòushuǐ le.", vi: "Ống nước bị rò rỉ rồi." },
  { day: 30, id: 296, en: "When is the rent due?", cn: "什么时候交房租？", pinyin: "Shénme shíhou jiāo fángzū?", vi: "Khi nào phải nộp tiền nhà?" },
  { day: 30, id: 297, en: "Is the neighborhood quiet?", cn: "周围环境安静吗？", pinyin: "Zhōuwéi huánjìng ānjìng ma?", vi: "Môi trường xung quanh có yên tĩnh không?" },
  { day: 30, id: 298, en: "There is a bus stop nearby.", cn: "附近有公交车站。", pinyin: "Fùjìn yǒu gōngjiāochē zhàn.", vi: "Gần đây có trạm xe buýt." },
  { day: 30, id: 299, en: "Can I sign a one-year contract?", cn: "我可以签一年的合同吗？", pinyin: "Wǒ kěyǐ qiān yì nián de hétong ma?", vi: "Tôi có thể ký hợp đồng 1 năm không?" },
  { day: 30, id: 300, en: "Welcome to my new home!", cn: "欢迎来到我的新家！", pinyin: "Huānyíng lái dào wǒ de xīn jiā!", vi: "Chào mừng đến với nhà mới của tôi!" }
);

  // --- NGÀY 31: NẤU ĂN & BẾP NÚC ---
 LESSON_DATA.push(
 { day: 31, id: 301, en: "What's for dinner tonight?", cn: "今天晚上吃什么？", pinyin: "Jīntiān wǎnshang chī shénme?", vi: "Tối nay ăn gì?" },
  { day: 31, id: 302, en: "I like cooking at home.", cn: "我喜欢在家做饭。", pinyin: "Wǒ xǐhuan zài jiā zuò fàn.", vi: "Tôi thích nấu ăn ở nhà." },
  { day: 31, id: 303, en: "Add a little salt, please.", cn: "请加一点盐。", pinyin: "Qǐng jiā yìdiǎn yán.", vi: "Cho xin một chút muối." },
  { day: 31, id: 304, en: "Don't burn the food!", cn: "别把菜烧焦了！", pinyin: "Bié bǎ cài shāojiāo le!", vi: "Đừng làm cháy thức ăn!" },
  { day: 31, id: 305, en: "Boil the water first.", cn: "先把水烧开。", pinyin: "Xiān bǎ shuǐ shāokāi.", vi: "Đun sôi nước trước đã." },
  { day: 31, id: 306, en: "Cut the vegetables into slices.", cn: "把蔬菜切成片。", pinyin: "Bǎ shūcài qiē chéng piàn.", vi: "Cắt rau thành lát." },
  { day: 31, id: 307, en: "This soup is too salty.", cn: "这个汤太咸了。", pinyin: "Zhège tāng tài xián le.", vi: "Món canh này mặn quá." },
  { day: 31, id: 308, en: "I'm making a cake.", cn: "我正在做蛋糕。", pinyin: "Wǒ zhèngzài zuò dàngāo.", vi: "Tôi đang làm bánh ngọt." },
  { day: 31, id: 309, en: "The food smells delicious.", cn: "菜闻起来真香。", pinyin: "Cài wén qǐlái zhēn xiāng.", vi: "Thức ăn thơm quá." },
  { day: 31, id: 310, en: "Help me wash the dishes.", cn: "帮我洗一下碗。", pinyin: "Bāng wǒ xǐ yíxià wǎn.", vi: "Giúp tôi rửa bát nhé." },
);

  // --- NGÀY 32: CÔNG NGHỆ & THIẾT BỊ ---
 LESSON_DATA.push(
 { day: 32, id: 311, en: "My computer is too slow.", cn: "我的电脑太慢了。", pinyin: "Wǒ de diànnǎo tài màn le.", vi: "Máy tính của tôi chậm quá." },
  { day: 32, id: 312, en: "Please restart your phone.", cn: "请重启手机。", pinyin: "Qǐng chóngqǐ shǒujī.", vi: "Xin hãy khởi động lại điện thoại." },
  { day: 32, id: 313, en: "I forgot my password.", cn: "我忘记密码了。", pinyin: "Wǒ wàngjì mìmǎ le.", vi: "Tôi quên mật khẩu rồi." },
  { day: 32, id: 314, en: "Can I connect to Bluetooth?", cn: "我可以连接蓝牙吗？", pinyin: "Wǒ kěyǐ liánjiē Lányá ma?", vi: "Tôi có thể kết nối Bluetooth không?" },
  { day: 32, id: 315, en: "Download this application.", cn: "下载这个应用程序。", pinyin: "Xiàzài zhège yìngyòng chéngxù.", vi: "Tải ứng dụng này về." },
  { day: 32, id: 316, en: "The screen is broken.", cn: "屏幕碎了。", pinyin: "Píngmù suì le.", vi: "Màn hình bị vỡ rồi." },
  { day: 32, id: 317, en: "I need a power bank.", cn: "我需要一个充电宝。", pinyin: "Wǒ xūyào yí gè chōngdiànbǎo.", vi: "Tôi cần một cái sạc dự phòng." },
  { day: 32, id: 318, en: "Turn up the volume, please.", cn: "请调大音量。", pinyin: "Qǐng tiáo dà yīnliàng.", vi: "Mở to âm lượng lên." },
  { day: 32, id: 319, en: "Is this software free?", cn: "这个软件免费吗？", pinyin: "Zhège ruǎnjiàn miǎnfèi ma?", vi: "Phần mềm này có miễn phí không?" },
  { day: 32, id: 320, en: "Save your file first.", cn: "先保存你的文件。", pinyin: "Xiān bǎocún nǐ de wénjiàn.", vi: "Lưu file của bạn trước đã." },
);

  // --- NGÀY 33: HỎI Ý KIẾN & THẢO LUẬN ---
 LESSON_DATA.push(
 { day: 33, id: 321, en: "What is your suggestion?", cn: "你有什么建议？", pinyin: "Nǐ yǒu shénme jiànyì?", vi: "Bạn có gợi ý/đề xuất gì không?" },
  { day: 33, id: 322, en: "It depends on the situation.", cn: "看情况吧。", pinyin: "Kàn qíngkuàng ba.", vi: "Tùy tình hình thôi." },
  { day: 33, id: 323, en: "I have a good idea.", cn: "我有一个好主意。", pinyin: "Wǒ yǒu yí gè hǎo zhǔyi.", vi: "Tôi có một ý tưởng hay." },
  { day: 33, id: 324, en: "That makes sense.", cn: "有道理。", pinyin: "Yǒu dàolǐ.", vi: "Có lý đấy." },
  { day: 33, id: 325, en: "What do you mean?", cn: "你是什么意思？", pinyin: "Nǐ shì shénme yìsi?", vi: "Ý bạn là sao?" },
  { day: 33, id: 326, en: "In my opinion, this is better.", cn: "在我看，这个更好。", pinyin: "Zài wǒ kàn, zhège gèng hǎo.", vi: "Theo tôi thì cái này tốt hơn." },
  { day: 33, id: 327, en: "Are you kidding me?", cn: "你开玩笑吧？", pinyin: "Nǐ kāi wánxiào ba?", vi: "Bạn đang đùa tôi à?" },
  { day: 33, id: 328, en: "I agree with you completely.", cn: "我完全同意你。", pinyin: "Wǒ wánquán tóngyì nǐ.", vi: "Tôi hoàn toàn đồng ý với bạn." },
  { day: 33, id: 329, en: "Let's make a decision.", cn: "我们做个决定吧。", pinyin: "Wǒmen zuò gè juédìng ba.", vi: "Chúng ta đưa ra quyết định đi." },
  { day: 33, id: 330, en: "That's out of the question.", cn: "那是不可能的。", pinyin: "Nà shì bù kěnéng de.", vi: "Điều đó là không thể nào." },
);

  // --- NGÀY 34: ĐẶT XE & XE CÔNG NGHỆ ---
 LESSON_DATA.push(
 { day: 34, id: 331, en: "I ordered a car online.", cn: "我在网约车平台叫了车。", pinyin: "Wǒ zài wǎngyuēchē píngtái jiào le chē.", vi: "Tôi đã đặt xe qua ứng dụng." },
  { day: 34, id: 332, en: "Where are you now, driver?", cn: "司机，你现在在哪里？", pinyin: "Sījī, nǐ xiànzài zài nǎlǐ?", vi: "Tài xế ơi, anh đang ở đâu?" },
  { day: 34, id: 333, en: "Please pick me up at the gate.", cn: "请在大门前接我。", pinyin: "Qǐng zài dàmén qián jiē wǒ.", vi: "Xin hãy đón tôi ở trước cổng." },
  { day: 34, id: 334, en: "How long will it take to arrive?", cn: "还要多久能到？", pinyin: "Hái yào duōjiǔ néng dào?", vi: "Còn bao lâu nữa thì tới?" },
  { day: 34, id: 335, en: "Please turn on the AC.", cn: "请打开空调。", pinyin: "Qǐng dǎkāi kōngtiáo.", vi: "Xin bật điều hòa giúp." },
  { day: 34, id: 336, en: "Can you drive a bit faster?", cn: "能开快一点吗？", pinyin: "Néng kāi kuài yìdiǎn ma?", vi: "Lái nhanh hơn một chút được không?" },
  { day: 34, id: 337, en: "I'm in a hurry.", cn: "我赶时间。", pinyin: "Wǒ gǎn shíjiān.", vi: "Tôi đang vội." },
  { day: 34, id: 338, en: "Please drop me off here.", cn: "请让我在这里下车。", pinyin: "Qǐng ràng wǒ zài zhèlǐ xiàchē.", vi: "Cho tôi xuống xe ở đây." },
  { day: 34, id: 339, en: "Is the traffic bad today?", cn: "今天堵车严重吗？", pinyin: "Jīntiān dǔchē yánzhòng ma?", vi: "Hôm nay có kẹt xe nặng không?" },
  { day: 34, id: 340, en: "Thank you for the ride.", cn: "谢谢你送我。", pinyin: "Xièxie nǐ sòng wǒ.", vi: "Cảm ơn đã chở tôi đi." },
);

  // --- NGÀY 35: LỄ TẾT & CHÚC MỪNG ---
LESSON_DATA.push(
  { day: 35, id: 341, en: "Happy Birthday to you!", cn: "祝你生日快乐！", pinyin: "Zhù nǐ shēngrì kuàilè!", vi: "Chúc mừng sinh nhật bạn!" },
  { day: 35, id: 342, en: "Happy New Year!", cn: "新年快乐！", pinyin: "Xīnnián kuàilè!", vi: "Chúc mừng năm mới!" },
  { day: 35, id: 343, en: "Merry Christmas!", cn: "圣诞快乐！", pinyin: "Shèngdàn kuàilè!", vi: "Chúc Mừng Giáng Sinh!" },
  { day: 35, id: 344, en: "Best wishes for your future!", cn: "祝你前程似锦！", pinyin: "Zhù nǐ qiánchéng sì jǐn!", vi: "Chúc bạn tương lai tươi sáng!" },
  { day: 35, id: 345, en: "Have a good trip!", cn: "旅途愉快！", pinyin: "Lǚtú yúkuài!", vi: "Chúc chuyến đi vui vẻ!" },
  { day: 35, id: 346, en: "Cheers to our friendship!", cn: "为我们的友谊干杯！", pinyin: "Wèi wǒmen de yǒuyì gānbēi!", vi: "Cạn ly vì tình bạn của chúng ta!" },
  { day: 35, id: 347, en: "Happy Mid-Autumn Festival!", cn: "中秋节快乐！", pinyin: "Zhōngqiūjié kuàilè!", vi: "Chúc Tết Trung Thu vui vẻ!" },
  { day: 35, id: 348, en: "Wish you health and happiness!", cn: "祝你身体健康，幸福快乐！", pinyin: "Zhù nǐ shēntǐ jiànkāng, xìngfú kuàilè!", vi: "Chúc bạn sức khỏe và hạnh phúc!" },
  { day: 35, id: 349, en: "Congratulations on your success!", cn: "祝贺你取得成功！", pinyin: "Zhùhè nǐ qǔdé chénggōng!", vi: "Chúc mừng thành công của bạn!" },
  { day: 35, id: 350, en: "Have a nice weekend!", cn: "周末愉快！", pinyin: "Zhōumò yúkuài!", vi: "Chúc cuối tuần vui vẻ!" }
);

  // --- NGÀY 36: MUA SẮM TRỰC TUYẾN & GIAO HÀNG ---
 LESSON_DATA.push(
 { day: 36, id: 351, en: "I bought this online.", cn: "我在网上买了这个。", pinyin: "Wǒ zài wǎngshàng mǎi le zhège.", vi: "Tôi mua cái này trên mạng." },
  { day: 36, id: 352, en: "When will it be delivered?", cn: "什么时候能送达？", pinyin: "Shénme shíhou néng sòngdá?", vi: "Khi nào thì giao tới?" },
  { day: 36, id: 353, en: "My package has arrived.", cn: "我的快递到了。", pinyin: "Wǒ de kuàidì dào le.", vi: "Bưu phẩm/Chuyển phát nhanh của tôi đến rồi." },
  { day: 36, id: 354, en: "Where is the pickup point?", cn: "取件点在哪里？", pinyin: "Qǔjiàndiǎn zài nǎlǐ?", vi: "Điểm nhận hàng ở đâu?" },
  { day: 36, id: 355, en: "Please leave it at the door.", cn: "请放在门口。", pinyin: "Qǐng fàng zài ménkǒu.", vi: "Xin hãy để ở cửa." },
  { day: 36, id: 356, en: "The item is damaged.", cn: "商品损坏了。", pinyin: "Shāngpǐn sǔnhuài le.", vi: "Sản phẩm bị hỏng rồi." },
  { day: 36, id: 357, en: "I want to apply for a refund.", cn: "我想申请退款。", pinyin: "Wǒ xiǎng shēnqǐng tuìkuǎn.", vi: "Tôi muốn yêu cầu hoàn tiền." },
  { day: 36, id: 358, en: "Free shipping.", cn: "包邮。", pinyin: "Bāo yóu.", vi: "Miễn phí vận chuyển." },
  { day: 36, id: 359, en: "What is the tracking number?", cn: "快递单号是多少？", pinyin: "Kuàidì dānhào shì duōshao?", vi: "Mã vận đơn là bao nhiêu?" },
  { day: 36, id: 360, en: "Five-star review!", cn: "五星好评！", pinyin: "Wǔ xīng hǎopíng!", vi: "Đánh giá 5 sao!" },
);

  // --- NGÀY 37: DỊCH VỤ & KHÁCH SẠN BỔ SUNG ---
LESSON_DATA.push(
  { day: 37, id: 361, en: "Is breakfast included?", cn: "包含早餐吗？", pinyin: "Bāohán zǎocān ma?", vi: "Có bao gồm bữa sáng không?" },
  { day: 37, id: 362, en: "Can I get an extra bed?", cn: "可以加床吗？", pinyin: "Kěyǐ jiā chuáng ma?", vi: "Có thể thêm giường phụ không?" },
  { day: 37, id: 363, en: "I need a receipt.", cn: "我需要开发票。", pinyin: "Wǒ xūyào kāi fāpiào.", vi: "Tôi cần xuất hóa đơn." },
  { day: 37, id: 364, en: "Where is the nearest gas station?", cn: "最近的加油站在哪里？", pinyin: "Zuì jìn de jiāyóuzhàn zài nǎlǐ?", vi: "Trạm xăng gần nhất ở đâu?" },
  { day: 37, id: 365, en: "Fill it up, please.", cn: "请加满油。", pinyin: "Qǐng jiāmǎn yóu.", vi: "Cho đổ đầy bình giúp." },
  { day: 37, id: 366, en: "Is parking free here?", cn: "这里停车免费吗？", pinyin: "Zhèlǐ tíngchē miǎnfèi ma?", vi: "Ở đây đỗ xe miễn phí không?" },
  { day: 37, id: 367, en: "We need a table for four.", cn: "我们要一张四人桌。", pinyin: "Wǒmen yào yì zhāng sì rén zhuō.", vi: "Chúng tôi cần bàn 4 người." },
  { day: 37, id: 368, en: "Please clear the table.", cn: "请收拾一下桌子。", pinyin: "Qǐng shōushi yíxià zhuōzi.", vi: "Xin dọn dẹp bàn giúp." },
  { day: 37, id: 369, en: "Do you have high chairs for kids?", cn: "有儿童座椅吗？", pinyin: "Yǒu értóng zuòyǐ ma?", vi: "Có ghế trẻ em không?" },
  { day: 37, id: 370, en: "Can I get a doggy bag?", cn: "请帮我打包。", pinyin: "Qǐng bāng wǒ dǎbāo.", vi: "Xin gói mang về giúp tôi." },
);

  // --- NGÀY 38: BỒI DƯỠNG CẢM XÚC & THÁI ĐỘ ---
LESSON_DATA.push(
  { day: 38, id: 371, en: "I'm in a good mood today.", cn: "我今天心情很好。", pinyin: "Wǒ jīntiān xīnqíng hěn hǎo.", vi: "Hôm nay tâm trạng tôi rất tốt." },
  { day: 38, id: 372, en: "Don't take it to heart.", cn: "别往心里去。", pinyin: "Bié wǎng xīnlǐ qù.", vi: "Đừng để bụng nhé." },
  { day: 38, id: 373, en: "I'm really touched.", cn: "我真的很感动。", pinyin: "Wǒ zhēn de hěn gǎndòng.", vi: "Tôi thực sự rất cảm động." },
  { day: 38, id: 374, en: "It's none of my business.", cn: "关我什么事。", pinyin: "Guān wǒ shénme shì.", vi: "Liên quan gì tới tôi." },
  { day: 38, id: 375, en: "You are overthinking it.", cn: "你想多了。", pinyin: "Nǐ xiǎng duō le.", vi: "Bạn nghĩ nhiều quá rồi." },
  { day: 38, id: 376, en: "I lost my temper.", cn: "我发脾气了。", pinyin: "Wǒ fā píqi le.", vi: "Tôi đã nổi nóng/nổi giận." },
  { day: 38, id: 377, en: "Take it easy.", cn: "慢慢来，不急。", pinyin: "Mànmàn lái, bù jí.", vi: "Từ từ thôi, không gấp." },
  { day: 38, id: 378, en: "I'm disappointed in you.", cn: "我对我感到失望。", pinyin: "Wǒ duì nǐ hěn shīwàng.", vi: "Tôi rất thất vọng về bạn." },
  { day: 38, id: 379, en: "Everything will be fine.", cn: "一切都会好起来的。", pinyin: "Yíqiè dōu huì hǎo qǐlái de.", vi: "Mọi chuyện rồi sẽ tốt đẹp thôi." },
  { day: 38, id: 380, en: "I'm so jealous of you!", cn: "我太羡慕你了！", pinyin: "Wǒ tài xiànmù nǐ le!", vi: "Tôi ghen tị với bạn quá!" },
);

  // --- NGÀY 39: THƯƠNG MẠI & ĐÀO TẠO ĐÀM PHÁN ---
LESSON_DATA.push(
  { day: 39, id: 381, en: "Let's discuss the price.", cn: "我们商量一下价格吧。", pinyin: "Wǒmen shāngliang yíxià jiàgé ba.", vi: "Chúng ta thảo luận giá cả một chút nhé." },
  { day: 39, id: 382, en: "What is your bottom line?", cn: "你的底线是多少？", pinyin: "Nǐ de dǐxiàn shì duōshao?", vi: "Mức giá thấp nhất của bạn là bao nhiêu?" },
  { day: 39, id: 383, en: "Can we sign the contract now?", cn: "我们现在可以签合同吗？", pinyin: "Wǒmen xiànzài kěyǐ qiān hétong ma?", vi: "Bây giờ chúng ta có thể ký hợp đồng không?" },
  { day: 39, id: 384, en: "Quality is our top priority.", cn: "质量是我们的首要任务。", pinyin: "Zhìliàng shì wǒmen de shǒuyào rènwu.", vi: "Chất lượng là ưu tiên hàng đầu của chúng tôi." },
  { day: 39, id: 385, en: "We need a sample first.", cn: "我们需要先看样品。", pinyin: "Wǒmen xūyào xiān kàn yàngpǐn.", vi: "Chúng tôi cần xem mẫu trước." },
  { day: 39, id: 386, en: "When can you ship the goods?", cn: "什么时候能发货？", pinyin: "Shénme shíhou néng fāhuò?", vi: "Khi nào có thể giao hàng?" },
  { day: 39, id: 387, en: "Looking forward to our cooperation.", cn: "期待我们的合作。", pinyin: "Qīdài wǒmen de hézuò.", vi: "Rất mong chờ sự hợp tác của chúng ta." },
  { day: 39, id: 388, en: "Payment method is bank transfer.", cn: "付款方式是银行转账。", pinyin: "Fùkuǎn fāngshì shì yínháng zhuǎnzhàng.", vi: "Phương thức thanh toán là chuyển khoản ngân hàng." },
  { day: 39, id: 389, en: "Please send me a quotation.", cn: "请给我发一份报价单。", pinyin: "Qǐng gěi wǒ fā yí fèn bàojiàdān.", vi: "Xin gửi cho tôi bảng báo giá." },
  { day: 39, id: 390, en: "Win-win cooperation!", cn: "合作共赢！", pinyin: "Hézuò gòngyíng!", vi: "Hợp tác cùng có lợi!" },
);

  // --- NGÀY 40: ĐỘNG LỰC & MỤC TIÊU SỐNG ---
LESSON_DATA.push(
  { day: 40, id: 391, en: "Never give up on your dreams.", cn: "永远不要放弃梦想。", pinyin: "Yǒngyuǎn búyào fàngqì mèngxiǎng.", vi: "Không bao giờ từ bỏ giấc mơ." },
  { day: 40, id: 392, en: "Hard work pays off.", cn: "越努力越幸运。", pinyin: "Yuè nǔlì yuè xìngyùn.", vi: "Càng nỗ lực càng may mắn." },
  { day: 40, id: 393, en: "I want to travel around the world.", cn: "我想环游世界。", pinyin: "Wǒ xiǎng huányóu shìjiè.", vi: "Tôi muốn đi du lịch vòng quanh thế giới." },
  { day: 40, id: 394, en: "Keep learning every day.", cn: "每天保持学习。", pinyin: "Měitiān bǎochí xuéxí.", vi: "Duy trì việc học mỗi ngày." },
  { day: 40, id: 395, en: "I'm working hard to achieve my goal.", cn: "我正在努力实现目标。", pinyin: "Wǒ zhèngzài nǔlì shíxiàn mùbiāo.", vi: "Tôi đang nỗ lực đạt được mục tiêu." },
  { day: 40, id: 396, en: "Believe in yourself.", cn: "相信你自己。", pinyin: "Xiāngxìn nǐ zìjǐ.", vi: "Hãy tin vào chính mình." },
  { day: 40, id: 397, en: "Time is money.", cn: "时间就是金钱。", pinyin: "Shíjiān jiùshì jīnqián.", vi: "Thời gian là tiền bạc." },
  { day: 40, id: 398, en: "Life is full of surprises.", cn: "生活充满了惊喜。", pinyin: "Shēnghuó chōngmǎn le jīngxǐ.", vi: "Cuộc sống luôn tràn ngập bất ngờ." },
  { day: 40, id: 399, en: "Step by step towards success.", cn: "一步一步走向成功。", pinyin: "Yíbù yíbù zǒuxiàng chénggōng.", vi: "Từng bước một tiến tới thành công." },
  { day: 40, id: 400, en: "Congratulations on completing Day 40!", cn: "恭喜你完成第40天！", pinyin: "Gōngxǐ nǐ wánchéng dì sìshí tiān!", vi: "Chúc mừng bạn đã hoàn thành ngày thứ 40!" }
);

  // --- NGÀY 41: SỞ THÍCH & THỜI RẢNH ---
LESSON_DATA.push(
  { day: 41, id: 401, en: "What do you like to do in your free time?", cn: "你空闲时间喜欢做什么？", pinyin: "Nǐ kòngxián shíjiān xǐhuan zuò shénme?", vi: "Bạn thích làm gì lúc rảnh rỗi?" },
  { day: 41, id: 402, en: "I like listening to music and reading.", cn: "我喜欢听音乐和看书。", pinyin: "Wǒ xǐhuan tīng yīnyuè hé kànshū.", vi: "Tôi thích nghe nhạc và đọc sách." },
  { day: 41, id: 403, en: "Do you have any hobbies?", cn: "你有什么兴趣爱好？", pinyin: "Nǐ yǒu shénme xìngqù àihào?", vi: "Bạn có sở thích gì không?" },
  { day: 41, id: 404, en: "I enjoy growing flowers and plants.", cn: "我喜欢种花养草。", pinyin: "Wǒ xǐhuan zhònghuā yǎngcǎo.", vi: "Tôi thích trồng hoa và chăm cây." },
  { day: 41, id: 405, en: "I like going to the gym on weekends.", cn: "我喜欢周末去健身房。", pinyin: "Wǒ xǐhuan zhōumò qù jiànshēnfáng.", vi: "Tôi thích đi tập gym vào cuối tuần." },
  { day: 41, id: 406, en: "He is very interested in painting.", cn: "他对绘画很感兴趣。", pinyin: "Tā duì huìhuà hěn gǎn xìngqù.", vi: "Anh ấy rất hứng thú với hội họa." },
  { day: 41, id: 407, en: "I often play games with my friends.", cn: "我经常和朋友一起玩游戏。", pinyin: "Wǒ jīngcháng hé péngyou yìqǐ wán yóuxì.", vi: "Tôi thường chơi game cùng bạn bè." },
  { day: 41, id: 408, en: "Camping is a great outdoor activity.", cn: "露营是一项很好的户外活动。", pinyin: "Lùyíng shì yì xiàng hěn hǎo de hùwài huódòng.", vi: "Cắm trại là một hoạt động ngoài trời rất tuyệt." },
  { day: 41, id: 409, en: "I want to try baking bread.", cn: "我想尝试做面包。", pinyin: "Wǒ xiǎng chángshì zuò miànbāo.", vi: "Tôi muốn thử làm bánh mì." },
  { day: 41, id: 410, en: "Leisure time goes by so fast.", cn: "休闲时间过得真快。", pinyin: "Xiūxián shíjiān guò de zhēn kuài.", vi: "Thời gian rảnh rỗi trôi qua nhanh thật." },
);

  // --- NGÀY 42: XÃ GIAO & TỪ CHỒI LỊCH SỰ ---
 LESSON_DATA.push(
 { day: 42, id: 411, en: "Are you free this evening?", cn: "你今晚有空吗？", pinyin: "Nǐ jīnwǎn yǒu kòng ma?", vi: "Tối nay bạn có rảnh không?" },
  { day: 42, id: 412, en: "I'm sorry, I have other plans today.", cn: "对不起，我今天有别的安排。", pinyin: "Duìbuqǐ, wǒ jīntiān yǒu bié de ānpái.", vi: "Xin lỗi, hôm nay tôi có kế hoạch khác rồi." },
  { day: 42, id: 413, en: "Thank you for inviting me.", cn: "谢谢你的邀请。", pinyin: "Xièxie nǐ de yāoqǐng.", vi: "Cảm ơn lời mời của bạn." },
  { day: 42, id: 414, en: "Maybe next time!", cn: "下次吧！", pinyin: "Xià cì ba!", vi: "Để lần sau nhé!" },
  { day: 42, id: 415, en: "I really can't make it.", cn: "我真的去不了。", pinyin: "Wǒ zhēn de qù bù liǎo.", vi: "Tôi thực sự không đi được." },
  { day: 42, id: 416, en: "Let me check my schedule first.", cn: "我先看一下我的行程表。", pinyin: "Wǒ xiān kàn yíxià wǒ de xíngchéngbiǎo.", vi: "Để tôi xem lại lịch trình của mình đã." },
  { day: 42, id: 417, en: "Don't worry about it.", cn: "没关系，别放在心上。", pinyin: "Méi guānxi, bié fàng zài xīnlǐ shàng.", vi: "Không sao đâu, đừng bận tâm." },
  { day: 42, id: 418, en: "I would love to, but I'm busy.", cn: "我很想去，但是我太忙了。", pinyin: "Wǒ hěn xiǎng qù, dànshì wǒ tài máng le.", vi: "Tôi rất muốn đi, nhưng tôi bận quá." },
  { day: 42, id: 419, en: "Keep in touch!", cn: "保持联系！", pinyin: "Bǎochí liánxì!", vi: "Giữ liên lạc nhé!" },
  { day: 42, id: 420, en: "I'll treat you next time.", cn: "下次我请客。", pinyin: "Xià cì wǒ qǐngkè.", vi: "Lần sau tôi đãi nhé." },
);

  // --- NGÀY 43: SỰ CỐ & THỦ TỤC THƯỜNG GẶP ---
 LESSON_DATA.push(
 { day: 43, id: 421, en: "I lost my wallet.", cn: "我把钱包丢了。", pinyin: "Wǒ bǎ qiánbāo diū le.", vi: "Tôi bị mất ví rồi." },
  { day: 43, id: 422, en: "Please call the police for me.", cn: "请帮我报警。", pinyin: "Qǐng bāng wǒ bàojǐng.", vi: "Báo cảnh sát giúp tôi với." },
  { day: 43, id: 423, en: "Where is the lost and found?", cn: "失物招领处在哪里？", pinyin: "Shīwù zhāolǐng chù zài nǎlǐ?", vi: "Phòng tìm đồ thất lạc ở đâu?" },
  { day: 43, id: 424, en: "My luggage is missing.", cn: "我的行李找不到了。", pinyin: "Wǒ de xíngli zhǎo bú dào le.", vi: "Hành lý của tôi không tìm thấy nữa." },
  { day: 43, id: 425, en: "My flight was delayed.", cn: "我的航班延误了。", pinyin: "Wǒ de hángbān yánwù le.", vi: "Chuyến bay của tôi bị hoãn." },
  { day: 43, id: 426, en: "Can you help me find my room?", cn: "你能帮我找找房间吗？", pinyin: "Nǐ néng bāng wǒ zhǎozhao fángjiān ma?", vi: "Bạn giúp tôi tìm phòng được không?" },
  { day: 43, id: 427, en: "The key doesn't work.", cn: "钥匙不好使。", pinyin: "Yàoshi bù hǎoshǐ.", vi: "Chìa khóa không dùng được." },
  { day: 43, id: 428, en: "I'm feeling a bit dizzy.", cn: "我感觉有点头晕。", pinyin: "Wǒ gǎnjué yǒudiǎn tóuyūn.", vi: "Tôi cảm thấy hơi chóng mặt." },
  { day: 43, id: 429, en: "Is there a pharmacy near here?", cn: "附近有药店吗？", pinyin: "Fùjìn yǒu yàodiàn ma?", vi: "Gần đây có hiệu thuốc nào không?" },
  { day: 43, id: 430, en: "Everything is settled now.", cn: "现在事情都解决了。", pinyin: "Xiànzài shìqing dōu jiějué le.", vi: "Mọi chuyện giờ đã được giải quyết xong rồi." },
);

  // --- NGÀY 44: THỜI TRANG & MẶC ĐẸP ---
  LESSON_DATA.push(
{ day: 44, id: 431, en: "What are you wearing today?", cn: "你今天穿什么？", pinyin: "Nǐ jīntiān chuān shénme?", vi: "Hôm nay bạn mặc gì thế?" },
  { day: 44, id: 432, en: "This dress suits you very well.", cn: "这件连衣裙很适合你。", pinyin: "Zhè jiàn liányīqún hěn shìhé nǐ.", vi: "Chiếc váy liền này rất hợp với bạn." },
  { day: 44, id: 433, en: "Do you have a larger size?", cn: "有大一点的尺码吗？", pinyin: "Yǒu dà yìdiǎn de chǐmǎ ma?", vi: "Có size lớn hơn một chút không?" },
  { day: 44, id: 434, en: "The color is a bit bright.", cn: "颜色有点太亮了。", pinyin: "Yánsè yǒudiǎn tài liàng le.", vi: "Màu sắc hơi sáng quá." },
  { day: 44, id: 435, en: "Where is the fitting room?", cn: "试衣间在哪里？", pinyin: "Shìyījiān zài nǎlǐ?", vi: "Phòng thử đồ ở đâu?" },
  { day: 44, id: 436, en: "It looks very stylish.", cn: "看起来非常有型。", pinyin: "Kàn qǐlái fēicháng yǒu xíng.", vi: "Trông rất phong cách." },
  { day: 44, id: 437, en: "I prefer wearing comfortable clothes.", cn: "我更喜欢穿舒适的衣服。", pinyin: "Wǒ gèng xǐhuan chuān shūshì de yīfu.", vi: "Tôi thích mặc quần áo thoải mái hơn." },
  { day: 44, id: 438, en: "Is this jacket made of leather?", cn: "这件夹克是皮的吗？", pinyin: "Zhè jiàn jiákè shì pí de ma?", vi: "Chiếc áo khoác này làm bằng da à?" },
  { day: 44, id: 439, en: "The shoes don't fit.", cn: "鞋子不合脚。", pinyin: "Xiézi bù héjiǎo.", vi: "Đôi giày không vừa chân." },
  { day: 44, id: 440, en: "You have great taste!", cn: "你的品味真好！", pinyin: "Nǐ de pǐnwèi zhēn hǎo!", vi: "Gu thẩm mỹ của bạn tốt thật đấy!" },
);

  // --- NGÀY 45: THẮC MẮC & GIẢI QUYẾT VẤN ĐỀ ---
 LESSON_DATA.push(
 { day: 45, id: 441, en: "What went wrong?", cn: "出什么问题了？", pinyin: "Chū shénme wèntí le?", vi: "Đã xảy ra vấn đề gì thế?" },
  { day: 45, id: 442, en: "Let me double check.", cn: "让我再核对一下。", pinyin: "Ràng wǒ zài héduì yíxià.", vi: "Để tôi kiểm tra lại lần nữa." },
  { day: 45, id: 443, en: "Don't panic, take your time.", cn: "别慌，慢慢来。", pinyin: "Bié huāng, mànmàn lái.", vi: "Đừng hoảng hốt, cứ từ từ." },
  { day: 45, id: 444, en: "We need to find a solution.", cn: "我们需要找到解决办法。", pinyin: "Wǒmen xūyào zhǎodào jiějué bànfǎ.", vi: "Chúng ta cần tìm giải pháp." },
  { day: 45, id: 445, en: "Who is in charge of this?", cn: "谁负责这个？", pinyin: "Shéi fùzé zhège?", vi: "Ai chịu trách nhiệm việc này?" },
  { day: 45, id: 446, en: "It's just a misunderstanding.", cn: "这只是一个误会。", pinyin: "Zhè zhǐshì yí gè wùhuì.", vi: "Đây chỉ là một sự hiểu lầm." },
  { day: 45, id: 447, en: "Thank you for your patience.", cn: "感谢您的耐心。", pinyin: "Gǎnxiè nín de nàixīn.", vi: "Cảm ơn sự kiên nhẫn của bạn." },
  { day: 45, id: 448, en: "I will handle this immediately.", cn: "我马上处理这个。", pinyin: "Wǒ mǎshàng chǔlǐ zhège.", vi: "Tôi sẽ xử lý việc này ngay lập tức." },
  { day: 45, id: 449, en: "Is there any other way?", cn: "还有别的办法吗？", pinyin: "Hái yǒu bié de bànfǎ ma?", vi: "Còn cách nào khác không?" },
  { day: 45, id: 450, en: "Everything is under control.", cn: "一切都在掌控之中。", pinyin: "Yíqiè dōu zài zhǎngkòng zhī zhōng.", vi: "Mọi thứ đều nằm trong tầm kiểm soát." }
);

  // --- NGÀY 46: BẢO VỆ MÔI TRƯỜNG & TỰ NHIÊN ---
 LESSON_DATA.push(
 { day: 46, id: 451, en: "We should save water.", cn: "我们应该节约用水。", pinyin: "Wǒmen yīnggāi jiéyuē yòngshuǐ.", vi: "Chúng ta nên tiết kiệm nước." },
  { day: 46, id: 452, en: "Protecting the environment is everyone's responsibility.", cn: "保护环境，人人有责。", pinyin: "Bǎohù huánjìng, rénrén yǒu zé.", vi: "Bảo vệ môi trường là trách nhiệm của mọi người." },
  { day: 46, id: 453, en: "Don't litter.", cn: "不要乱扔垃圾。", pinyin: "Búyào luàn rēng lājī.", vi: "Đừng vứt rác bừa bãi." },
  { day: 46, id: 454, en: "We need to sort garbage.", cn: "我们需要垃圾分类。", pinyin: "Wǒmen xūyào lājī fēnlèi.", vi: "Chúng ta cần phân loại rác." },
  { day: 46, id: 455, en: "Plant more trees to make the city green.", cn: "多种树让城市变绿。", pinyin: "Duō zhòng shù ràng chéngshì biàn lǜ.", vi: "Trồng nhiều cây để thành phố thêm xanh." },
  { day: 46, id: 456, en: "Reduce the use of plastic bags.", cn: "减少使用塑料袋。", pinyin: "Jiǎnshǎo shǐyòng sùliàodài.", vi: "Giảm sử dụng túi nilon." },
  { day: 46, id: 457, en: "The sky is very clear today.", cn: "今天的天空很晴朗。", pinyin: "Jīntiān de tiānkōng hěn qínglǎng.", vi: "Bầu trời hôm nay rất trong xanh." },
  { day: 46, id: 458, en: "Nature is so amazing.", cn: "大自然太神奇了。", pinyin: "Dàzìrán tài shénqí le.", vi: "Tự nhiên thật kỳ diệu." },
  { day: 46, id: 459, en: "Save electricity when leaving.", cn: "人走灯灭，节约用电。", pinyin: "Rén zǒu dēng miè, jiéyuē yòngdiàn.", vi: "Rời khỏi phòng nhớ tắt đèn, tiết kiệm điện." },
  { day: 46, id: 460, en: "Cherish our Earth.", cn: "爱护我们的地球。", pinyin: "Àihù wǒmen de dìqiú.", vi: "Trân trọng và yêu quý Trái Đất của chúng ta." },
);

  // --- NGÀY 47: MẠNG XÃ HỘI & TRUYỀN THÔNG ---
  LESSON_DATA.push(
{ day: 47, id: 461, en: "Did you see my post?", cn: "你看到我的动态了吗？", pinyin: "Nǐ kàndào wǒ de dòngtài le ma?", vi: "Bạn có thấy bài đăng của tôi không?" },
  { day: 47, id: 462, en: "Give me a like!", cn: "给我的点个赞吧！", pinyin: "Gěi wǒ de diǎn gè zàn ba!", vi: "Thả cho tôi một tim/like nhé!" },
  { day: 47, id: 463, en: "Scan this QR code to add me.", cn: "扫这个二维码加我。", pinyin: "Sǎo zhège èrwéimǎ jiā wǒ.", vi: "Quét mã QR này để kết bạn với tôi." },
  { day: 47, id: 464, en: "Send me a voice message.", cn: "给我发语音消息吧。", pinyin: "Gěi wǒ fā yǔyīn xiāoxi ba.", vi: "Gửi tin nhắn thoại cho tôi đi." },
  { day: 47, id: 465, en: "I sent you a video.", cn: "我发给你一个视频。", pinyin: "Wǒ fā gěi nǐ yí gè shìpín.", vi: "Tôi gửi cho bạn một cái video." },
  { day: 47, id: 466, en: "Don't spend too much time on your phone.", cn: "别花太多时间玩手机。", pinyin: "Bié huā tài duō shíjiān wán shǒujī.", vi: "Đừng dành quá nhiều thời gian chơi điện thoại." },
  { day: 47, id: 467, en: "The Wi-Fi signal is very weak here.", cn: "这里的网络信号很弱。", pinyin: "Zhèlǐ de wǎnglù xìnhào hěn ruò.", vi: "Tín hiệu mạng ở đây rất yếu." },
  { day: 47, id: 468, en: "Share this useful information.", cn: "分享这个有用的信息。", pinyin: "Fēnxiǎng zhège yǒuyòng de xìnxī.", vi: "Chia sẻ thông tin hữu ích này." },
  { day: 47, id: 469, en: "I'm live streaming now.", cn: "我现在正在直播。", pinyin: "Wǒ xiànzài zhèngzài zhíbō.", vi: "Bây giờ tôi đang phát trực tiếp (livestream)." },
  { day: 47, id: 470, en: "Leave a comment below.", cn: "在下面留言吧。", pinyin: "Zài xiàmiàn liúyán ba.", vi: "Hãy để lại bình luận ở bên dưới." },
);

  // --- NGÀY 48: CẢM THÔNG & AN ỦI ---
  LESSON_DATA.push(
{ day: 48, id: 471, en: "I'm always here for you.", cn: "我一直在你身边。", pinyin: "Wǒ yìzhí zài nǐ shēnbiān.", vi: "Tôi luôn ở bên cạnh bạn." },
  { day: 48, id: 472, en: "It's okay to feel sad.", cn: "感到难过是没关系的。", pinyin: "Gǎndào nánguò shì méi guānxi de.", vi: "Cảm thấy buồn cũng không sao đâu." },
  { day: 48, id: 473, en: "You did your best.", cn: "你已经尽力了。", pinyin: "Nǐ yǐjīng jìnlì le.", vi: "Bạn đã cố gắng hết sức rồi." },
  { day: 48, id: 474, en: "Don't lose hope.", cn: "不要失去希望。", pinyin: "Búyào shīqù xīwàng.", vi: "Đừng mất đi hy vọng." },
  { day: 48, id: 475, en: "I understand how you feel.", cn: "我理解你的感受。", pinyin: "Wǒ lǐjiě nǐ de gǎnshòu.", vi: "Tôi hiểu cảm giác của bạn." },
  { day: 48, id: 476, en: "Take a deep breath and relax.", cn: "深呼吸，放松点。", pinyin: "Shēnhūxī, fàngsōng diǎn.", vi: "Hít thở sâu và thả lỏng một chút." },
  { day: 48, id: 477, en: "You are stronger than you think.", cn: "你比自己想象的要坚强。", pinyin: "Nǐ bǐ zìjǐ xiǎngxiàng de yào jiānqiáng.", vi: "Bạn mạnh mẽ hơn bạn nghĩ đấy." },
  { day: 48, id: 478, en: "Thank you for listening to me.", cn: "谢谢你听我倾诉。", pinyin: "Xièxie nǐ tīng wǒ qīngsù.", vi: "Cảm ơn bạn đã lắng nghe tâm sự của tôi." },
  { day: 48, id: 479, en: "True friends help each other.", cn: "真正的朋友互相帮助。", pinyin: "Zhēnzhèng de péngyou hùxiāng bāngzhù.", vi: "Bạn bè chân chính sẽ luôn giúp đỡ lẫn nhau." },
  { day: 48, id: 480, en: "Tomorrow is a new day.", cn: "明天又是全新的一天。", pinyin: "Míngtiān yòu shì quánxīn de yì tiān.", vi: "Ngày mai sẽ lại là một ngày mới." },
);

  // --- NGÀY 49: PHÁT TRIỂN BẢN THÂN & THÓI QUEN ---
  LESSON_DATA.push(
{ day: 49, id: 481, en: "Focus on your goals.", cn: "专注于你的目标。", pinyin: "Zhuānzhù yú nǐ de mùbiāo.", vi: "Tập trung vào mục tiêu của bạn." },
  { day: 49, id: 482, en: "Small progress is still progress.", cn: "小小的进步也是进步。", pinyin: "Xiǎoxiǎo de jìnbù yě shì jìnbù.", vi: "Tiến bộ nhỏ vẫn là tiến bộ." },
  { day: 49, id: 483, en: "Form good daily habits.", cn: "养成良好的日常习惯。", pinyin: "Yǎngchéng liánghǎo de rìcháng xíguàn.", vi: "Hình thành thói quen tốt hàng ngày." },
  { day: 49, id: 484, en: "Learn from your mistakes.", cn: "从错误中学习。", pinyin: "Cóng cuòwù zhōng xuéxí.", vi: "Học hỏi từ những sai lầm." },
  { day: 49, id: 485, en: "Manage your time wisely.", cn: "合理安排你的时间。", pinyin: "Hélǐ ānpái nǐ de shíjiān.", vi: "Sắp xếp thời gian một cách hợp lý." },
  { day: 49, id: 486, en: "Stay curious and keep exploring.", cn: "保持好奇，不断探索。", pinyin: "Bǎochí hàoqí, búduàn tànsuǒ.", vi: "Giữ sự tò mò và không ngừng khám phá." },
  { day: 49, id: 487, en: "Discipline brings freedom.", cn: "自律带来自由。", pinyin: "Zìlǜ dài lái zìyóu.", vi: "Kỷ luật mang lại sự tự do." },
  { day: 49, id: 488, en: "Challenge yourself every day.", cn: "每天挑战你自己。", pinyin: "Měitiān tiǎozhàn nǐ zìjǐ.", vi: "Mỗi ngày đều thử thách bản thân." },
  { day: 49, id: 489, en: "Reading expands your mind.", cn: "阅读能开阔视野。", pinyin: "Yuèdú néng kāikuò shìyě.", vi: "Đọc sách giúp mở rộng tầm mắt." },
  { day: 49, id: 490, en: "You can achieve anything with persistence.", cn: "只要坚持，就能成功。", pinyin: "Zhǐyào jiānchí, jiù néng chénggōng.", vi: "Chỉ cần kiên trì, nhất định sẽ thành công." },
);

  // --- NGÀY 50: CỘT MỐC 500 CÂU & LỜI CHÚC MỪNG ---
 LESSON_DATA.push(
 { day: 50, id: 491, en: "Practice makes daily learning easier.", cn: "坚持练习让每天的学习更容易。", pinyin: "Jiānchí liànxí ràng měitiān de xuéxí gèng róngyì.", vi: "Kiên trì luyện tập giúp việc học mỗi ngày dễ dàng hơn." },
  { day: 50, id: 492, en: "Learning languages opens new doors.", cn: "学习语言打开新世界的大门。", pinyin: "Xuéxí yǔyán dǎkāi xīn shìjiè de dàmén.", vi: "Học ngôn ngữ mở ra cánh cửa thế giới mới." },
  { day: 50, id: 493, en: "I am proud of my progress.", cn: "我为自己的进步感到自豪。", pinyin: "Wǒ wèi zìjǐ de jìnbù gǎndào zìháo.", vi: "Tôi tự hào về sự tiến bộ của bản thân." },
  { day: 50, id: 494, en: "Keep going, you are doing great!", cn: "继续加油，你做得很好！", pinyin: "Jìxù jiāyóu, nǐ zuò de hěn hǎo!", vi: "Tiếp tục cố gắng nhé, bạn đang làm rất tốt!" },
  { day: 50, id: 495, en: "Never stop learning and growing.", cn: "永不停止学习与成长。", pinyin: "Yǒng bù tíngzhǐ xuéxí yǔ chéngzhǎng.", vi: "Không bao giờ ngừng học hỏi và phát triển." },
  { day: 50, id: 496, en: "Knowledge is the greatest wealth.", cn: "知识是最大的财富。", pinyin: "Zhīshi shì zuì dà de cáifù.", vi: "Kiến thức là tài sản lớn nhất." },
  { day: 50, id: 497, en: "I enjoy learning something new every day.", cn: "我喜欢每天学到新知识。", pinyin: "Wǒ xǐhuan měitiān xuédào xīn zhīshi.", vi: "Tôi thích mỗi ngày học thêm một điều mới." },
  { day: 50, id: 498, en: "Thank you for practicing with me!", cn: "谢谢你和我一起练习！", pinyin: "Xièxie nǐ hé wǒ yìqǐ liànxí!", vi: "Cảm ơn bạn đã luyện tập cùng tôi!" },
  { day: 50, id: 499, en: "Wish you all the best in your studies!", cn: "祝你学习顺利！", pinyin: "Zhù nǐ xuéxí shùnlì!", vi: "Chúc bạn học hành hanh thông, thuận lợi!" },
  { day: 50, id: 500, en: "Congratulations on completing 500 sentences!", cn: "恭喜你完成500个句子！", pinyin: "Gōngxǐ nǐ wánchéng wǔbǎi gè jùzi!", vi: "Chúc mừng bạn đã hoàn thành 500 câu!" }
);

// ==========================================
// DỮ LIỆU CÂU HỘI THOẠI CHI TIẾT: NGÀY 51 - NGÀY 60
// ==========================================

// Ngày 51: Chủ đề - Đi mua sắm & Hỏi giá
LESSON_DATA.push(
  { id: 501, day: 51, en: "How much is this shirt?", cn: "这件衬衫多少钱？", pinyin: "zhè jiàn chènshān duōshǎo qián?", vi: "Cái áo sơ mi này bao nhiêu tiền?" },
  { id: 502, day: 51, en: "It's too expensive, can you give me a discount?", cn: "太贵了，可以打折吗？", pinyin: "tài guì le, kěyǐ dǎzhé ma?", vi: "Đắt quá, có thể giảm giá cho tôi không?" },
  { id: 503, day: 51, en: "Do you have a smaller size for this?", cn: "这个有小一点的码数吗？", pinyin: "zhège yǒu xiǎo yìdiǎn de mǎshù ma?", vi: "Mẫu này có size nhỏ hơn không?" },
  { id: 504, day: 51, en: "Can I try this on?", cn: "我可以试穿一下吗？", pinyin: "wǒ kěyǐ shìchuān yíxià ma?", vi: "Tôi có thể mặc thử cái này không?" },
  { id: 505, day: 51, en: "Where is the fitting room?", cn: "试衣间在哪里？", pinyin: "shìyījiān zài nǎlǐ?", vi: "Phòng thử đồ ở đâu vậy?" },
  { id: 506, day: 51, en: "I'm just browsing, thank you.", cn: "我只是随便看看，谢谢。", pinyin: "wǒ zhǐshì suíbiàn kànkan, xièxie.", vi: "Tôi chỉ xem qua thôi, cảm ơn." },
  { id: 507, day: 51, en: "Do you have this in other colors?", cn: "这个还有其他颜色吗？", pinyin: "zhège hái yǒu qítā yánsè ma?", vi: "Mẫu này còn màu khác không?" },
  { id: 508, day: 51, en: "I will take this one.", cn: "我要买这个。", pinyin: "wǒ yào mǎi zhège.", vi: "Tôi sẽ lấy cái này." },
  { id: 509, day: 51, en: "Do you accept credit cards?", cn: "你们接受信用卡吗？", pinyin: "nǐmen jiēshòu xìnyòngkǎ ma?", vi: "Cửa hàng có nhận thanh toán thẻ tín dụng không?" },
  { id: 510, day: 51, en: "Please pack it up for me.", cn: "请帮我打包一下。", pinyin: "qǐng bāng wǒ dǎbāo yíxià.", vi: "Làm ơn gói lại giúp tôi." }
);

// Ngày 52: Chủ đề - Đi nhà hàng & Đặt món ăn
LESSON_DATA.push(
  { id: 511, day: 52, en: "Do you have a table for two available?", cn: "请问有两人位吗？", pinyin: "qǐngwèn yǒu liǎorén wèi ma?", vi: "Xin hỏi nhà hàng có bàn cho hai người không?" },
  { id: 512, day: 52, en: "Could you please show me the menu?", cn: "可以看一下菜单吗？", pinyin: "kěyǐ kàn yīxià càidān ma?", vi: "Cho tôi xem thực đơn được chứ?" },
  { id: 513, day: 52, en: "What is the signature dish of your restaurant?", cn: "你们店的招牌菜是什么？", pinyin: "nǐmen diàn de zhāopáicài shì shénme?", vi: "Món đặc trưng của quán các bạn là gì?" },
  { id: 514, day: 52, en: "I'd like to order this dish, please.", cn: "我想点一份这个菜。", pinyin: "wǒ xiǎng diǎn yífèn zhège cài.", vi: "Tôi muốn gọi phần món này." },
  { id: 515, day: 52, en: "Please don't make it too spicy.", cn: "请不要放太多辣椒，微辣就好。", pinyin: "qǐng bùyào fàng tài duō làjiāo, wēilà jiù hǎo.", vi: "Làm ơn đừng cho quá nhiều ớt, cay nhẹ là được." },
  { id: 516, day: 52, en: "We would like two glasses of iced water.", cn: "我们要两杯冰水。", pinyin: "wǒmen yào liǎng bēi bīng shuǐ.", vi: "Cho chúng tôi hai ly nước đá." },
  { id: 517, day: 52, en: "The food is delicious, thank you.", cn: "菜味道很好，谢谢。", pinyin: "cài wèidao hěn hǎo, xièxie.", vi: "Món ăn rất ngon, cảm ơn bạn." },
  { id: 518, day: 52, en: "Could you please give me some extra napkins?", cn: "可以帮我拿一些纸巾吗？", pinyin: "kěyǐ bāng wǒ ná yīxiē zhǐjīn ma?", vi: "Bạn có thể lấy giúp tôi ít giấy ăn được không?" },
  { id: 519, day: 52, en: "Check, please. Can I pay by mobile scan?", cn: "买单。可以扫码支付吗？", pinyin: "mǎidān. kěyǐ sǎomǎ zhīfù ma?", vi: "Tính tiền giúp tôi. Tôi có thể thanh toán bằng quét mã không?" },
  { id: 520, day: 52, en: "Here is your change and receipt. Have a nice day!", cn: "这是您的找零和小票，祝您愉快！", pinyin: "zhè shì nín de zhǎolíng hé xiǎopiào, zhù nín yúkuài!", vi: "Đây là tiền thối và hóa đơn của quý khách. Chúc một ngày tốt lành!" }
);

// Ngày 53: Chủ đề - Đi Taxi & Phương tiện công cộng
LESSON_DATA.push(
  { id: 521, day: 53, en: "Where are you going, sir?", cn: "先生，您要去哪里？", pinyin: "xiānsheng, nín yào qù nǎlǐ?", vi: "Thưa ông, ông muốn đi đâu?" },
  { id: 522, day: 53, en: "Please take me to the airport.", cn: "请带我去机场。", pinyin: "qǐng dài wǒ qù jīchǎng.", vi: "Xin đưa tôi đến sân bay." },
  { id: 523, day: 53, en: "How long will it take to get there?", cn: "到那里需要多长时间？", pinyin: "dào nǎlǐ xūyào duō cháng shíjiān?", vi: "Mất bao lâu để đến đó?" },
  { id: 524, day: 53, en: "Please turn on the meter.", cn: "请打表。", pinyin: "qǐng dǎbiǎo.", vi: "Xin hãy bật đồng hồ tính tiền." },
  { id: 525, day: 53, en: "Is there a traffic jam ahead?", cn: "前面堵车吗？", pinyin: "qiánmiàn dǔchē ma?", vi: "Phía trước có bị tắc đường không?" },
  { id: 526, day: 53, en: "Which bus goes to the city center?", cn: "哪路公交车去市中心？", pinyin: "nǎ lù gōngjiāochē qù shì zhōngxīn?", vi: "Xe buýt tuyến nào đi đến trung tâm thành phố?" },
  { id: 527, day: 53, en: "You need to change to Line 2 at the next station.", cn: "您需要在下一站换乘2号线。", pinyin: "nín xūyào zài xià yí zhàn huànchéng èr hào xiàn.", vi: "Bạn cần đổi sang Tuyến số 2 ở trạm tiếp theo." },
  { id: 528, day: 53, en: "Please stop here, I will get off.", cn: "请在这里停，我要下车。", pinyin: "qǐng zài zhèlǐ tíng, wǒ yào xiàchē.", vi: "Xin dừng ở đây, tôi muốn xuống xe." },
  { id: 529, day: 53, en: "How much is the fare?", cn: "车费是多少钱？", pinyin: "chēfèi shì duōshǎo qián?", vi: "Tiền xe hết bao nhiêu?" },
  { id: 530, day: 53, en: "Keep the change, thanks.", cn: "不用找了，谢谢。", pinyin: "bùyòng zhǎo le, xièxie.", vi: "Không cần trả lại tiền thừa đâu, cảm ơn." }
);

// Ngày 54: Chủ đề - Hỏi đường & Định vị
LESSON_DATA.push(
  { id: 531, day: 54, en: "Excuse me, how can I get to the subway station?", cn: "请问去地铁站怎么走？", pinyin: "qǐngwèn qù dìtiě zhàn zěnme zǒu?", vi: "Xin hỏi đi trạm tàu điện ngầm đi đường nào?" },
  { id: 532, day: 54, en: "Go straight ahead and turn left at the intersection.", cn: "一直往前走，在十字路口向左转。", pinyin: "yìzhí wǎng qián zǒu, zài shízìlùkǒu xiàng zuǒ zhuǎn.", vi: "Đi thẳng tiếp và rẽ trái ở ngã tư." },
  { id: 533, day: 54, en: "Is it far from here?", cn: "离这里远吗？", pinyin: "lí zhèlǐ yuǎn ma?", vi: "Có xa đây không?" },
  { id: 534, day: 54, en: "It's about a ten-minute walk.", cn: "走路大概十分钟。", pinyin: "zǒulù dàgài shí fēnzhōng.", vi: "Đi bộ khoảng 10 phút." },
  { id: 535, day: 54, en: "Can you show me on the map?", cn: "你能在地图上指给我看吗？", pinyin: "nǐ néng zài dìtú shàng zhǐ gěi wǒ kàn ma?", vi: "Bạn có thể chỉ cho tôi trên bản đồ không?" },
  { id: 536, day: 54, en: "I'm lost, can you help me?", cn: "我迷路了，你能帮我吗？", pinyin: "wǒ mílù le, nǐ néng bāng wǒ ma?", vi: "Tôi bị lạc đường rồi, bạn giúp tôi được không?" },
  { id: 537, day: 54, en: "It's across from the bank.", cn: "就在银行对面。", pinyin: "jiù zài yínháng duìmiàn.", vi: "Nó nằm ngay đối diện ngân hàng." },
  { id: 538, day: 54, en: "Pass the supermarket, and it's on your right.", cn: "经过超市，它就在你的右边。", pinyin: "jīngguò chāoshì, tā jiù zài nǐ de yòubiān.", vi: "Đi qua siêu thị, nó nằm ở bên phải bạn." },
  { id: 539, day: 54, en: "Am I going in the right direction?", cn: "我走的方向对吗？", pinyin: "wǒ zǒu de fāngxiàng duì ma?", vi: "Tôi đang đi đúng hướng chứ?" },
  { id: 540, day: 54, en: "Thank you for your guidance.", cn: "谢谢你的指引。", pinyin: "xièxie nǐ de zhǐyǐn.", vi: "Cảm ơn sự chỉ dẫn của bạn." }
);

// Ngày 55: Chủ đề - Ngân hàng & Đổi tiền
LESSON_DATA.push(
  { id: 541, day: 55, en: "I would like to open a new bank account.", cn: "我想开一个新银行账户。", pinyin: "wǒ xiǎng kāi yí gè xīn yínháng zhànghù.", vi: "Tôi muốn mở một tài khoản ngân hàng mới." },
  { id: 542, day: 55, en: "What is the exchange rate today?", cn: "今天的汇率是多少？", pinyin: "jīntiān de huìlǜ shì duōshǎo?", vi: "Tỷ giá hối đoái hôm nay là bao nhiêu?" },
  { id: 543, day: 55, en: "I'd like to exchange US dollars into RMB.", cn: "我想把美元换成人民币。", pinyin: "wǒ xiǎng bǎ měiyuán huàn chéng rénmínbì.", vi: "Tôi muốn đổi đô la Mỹ sang Nhân dân tệ." },
  { id: 544, day: 55, en: "Please fill out this application form.", cn: "请填写这张申请表。", pinyin: "qǐng tiánxiě zhè zhāng shēnqǐngbiǎo.", vi: "Xin vui lòng điền vào mẫu đơn này." },
  { id: 545, day: 55, en: "Please input your password.", cn: "请输入您的密码。", pinyin: "qǐng shūrù nín de mìmǎ.", vi: "Xin vui lòng nhập mật khẩu của bạn." },
  { id: 546, day: 55, en: "Where is the nearest ATM?", cn: "最近的自动取款机在哪里？", pinyin: "zuì jìn de zìdòng qǔkuǎnjī zài nǎlǐ?", vi: "Cây ATM gần nhất ở đâu?" },
  { id: 547, day: 55, en: "I want to deposit some cash.", cn: "我想存一些现金。", pinyin: "wǒ xiǎng cún yīxiē xiànjīn.", vi: "Tôi muốn gửi một ít tiền mặt." },
  { id: 548, day: 55, en: "I'd like to withdraw five hundred yuan.", cn: "我想取五百块钱。", pinyin: "wǒ xiǎng qǔ wǔbǎi kuài qián.", vi: "Tôi muốn rút 500 tệ." },
  { id: 549, day: 55, en: "Is there any transaction fee?", cn: "有手续费吗？", pinyin: "yǒu shǒuxùfèi ma?", vi: "Có mất phí giao dịch không?" },
  { id: 550, day: 55, en: "Please sign your name here.", cn: "请在这里签名。", pinyin: "qǐng zài zhèlǐ qiānmíng.", vi: "Xin vui lòng ký tên vào đây." }
);

// Ngày 56: Chủ đề - Sân bay & Thủ tục Xuất nhập cảnh
LESSON_DATA.push(
  { id: 551, day: 56, en: "May I see your passport and boarding pass?", cn: "请出示您的护照和登机牌。", pinyin: "qǐng chūshì nín de hùzhào hé dēngjīpái.", vi: "Cho tôi xem hộ chiếu và thẻ lên máy bay của bạn." },
  { id: 552, day: 56, en: "I would like a window seat, please.", cn: "我想要一个靠窗的位置。", pinyin: "wǒ xiǎng yào yí gè kào chuāng de wèi zì.", vi: "Tôi muốn một chỗ ngồi gần cửa sổ." },
  { id: 553, day: 56, en: "Do you have any luggage to check in?", cn: "您有行李要托运吗？", pinyin: "nín yǒu xíngli yào tuōyùn ma?", vi: "Bạn có hành lý nào cần ký gửi không?" },
  { id: 554, day: 56, en: "Your luggage is overweight.", cn: "您的行李超重了。", pinyin: "nín de xíngli chāozhòng le.", vi: "Hành lý của bạn bị quá cân rồi." },
  { id: 555, day: 56, en: "What is the purpose of your visit?", cn: "您入境的目的是什么？", pinyin: "nín rùjìng de mùdì shì shénme?", vi: "Mục đích nhập cảnh của bạn là gì?" },
  { id: 556, day: 56, en: "I am here for sightseeing and travel.", cn: "我是来观光旅游的。", pinyin: "wǒ shì lái guāngguāng lǚyóu de.", vi: "Tôi đến đây để tham quan du lịch." },
  { id: 557, day: 56, en: "How long will you stay in this country?", cn: "您打算在这个国家停留多久？", pinyin: "nín dǎsuàn zài zhège guójiā tíngliú duōjiǔ?", vi: "Bạn dự định ở lại quốc gia này bao lâu?" },
  { id: 558, day: 56, en: "Where is Gate 15 for boarding?", cn: "去15号登机口怎么走？", pinyin: "qù shíwǔ hào dēngjīkǒu zěnme zǒu?", vi: "Cổng lên máy bay số 15 đi đường nào?" },
  { id: 559, day: 56, en: "The flight has been delayed by two hours.", cn: "航班延误了两个小时。", pinyin: "hángbān yánwù le liǎng gè xiǎoshí.", vi: "Chuyến bay đã bị hoãn 2 tiếng." },
  { id: 560, day: 56, en: "Have a pleasant flight!", cn: "祝您飞行愉快！", pinyin: "zhù nín fēixíng yúkuài!", vi: "Chúc bạn có một chuyến bay vui vẻ!" }
);

// Ngày 57: Chủ đề - Khách sạn (Nhận/Trả phòng)
LESSON_DATA.push(
  { id: 561, day: 57, en: "I have a reservation under the name of John.", cn: "我预订了房间，名字叫约翰。", pinyin: "wǒ yùdìng le fángjiān, míngzi jiào yuēhàn.", vi: "Tôi đã đặt phòng dưới tên John." },
  { id: 562, day: 57, en: "Could I check in now?", cn: "我现在可以办理入住吗？", pinyin: "wǒ xiànzài kěyǐ bànlǐ rùzhù ma?", vi: "Tôi có thể làm thủ tục nhận phòng bây giờ được không?" },
  { id: 563, day: 57, en: "What time is breakfast served?", cn: "早餐几点开始供应？", pinyin: "zǎocān jǐ diǎn kāishǐ gōngyìng?", vi: "Bữa sáng được phục vụ từ mấy giờ?" },
  { id: 564, day: 57, en: "What is the Wi-Fi password for the room?", cn: "房间的无线网密码是多少？", pinyin: "fángjiān de wúxiànwǎng mìmǎ shì duōshǎo?", vi: "Mật khẩu Wi-Fi của phòng là bao nhiêu?" },
  { id: 565, day: 57, en: "The air conditioner in my room isn't working.", cn: "我房间的空调坏了。", pinyin: "wǒ fángjiān de kōngtiáo huài le.", vi: "Máy điều hòa trong phòng tôi bị hỏng rồi." },
  { id: 566, day: 57, en: "Could you send someone to clean my room?", cn: "能派人来打扫一下房间吗？", pinyin: "néng pài rén lái dǎsǎo yíxià fángjiān ma?", vi: "Bạn có thể cử người đến dọn phòng giúp tôi được không?" },
  { id: 567, day: 57, en: "I would like to extend my stay for one more night.", cn: "我想多住一个晚上。", pinyin: "wǒ xiǎng duō zhù yí gè wǎnshang.", vi: "Tôi muốn ở thêm một đêm nữa." },
  { id: 568, day: 57, en: "I would like to check out now.", cn: "我想办理退房手续。", pinyin: "wǒ xiǎng bànlǐ tuìfáng shǒuxù.", vi: "Tôi muốn làm thủ tục trả phòng." },
  { id: 569, day: 57, en: "Can I leave my luggage here for a few hours?", cn: "我可以把行李寄存在这里几个小时吗？", pinyin: "wǒ kěyǐ bǎ xíngli jìcún zài zhèlǐ jǐ gè xiǎoshí ma?", vi: "Tôi có thể gửi hành lý ở đây vài tiếng được không?" },
  { id: 570, day: 57, en: "Thank you for your excellent service.", cn: "感谢你们优质的服务。", pinyin: "gǎnxiè nǐmen yōuzhì de fúwù.", vi: "Cảm ơn dịch vụ tuyệt vời của các bạn." }
);

// Ngày 58: Chủ đề - Đặt vé Máy bay / Tàu hỏa
LESSON_DATA.push(
  { id: 571, day: 58, en: "I'd like to book a round-trip ticket to Shanghai.", cn: "我想买一张去上海的往返机票。", pinyin: "wǒ xiǎng mǎi yì zhāng qù shànghǎi de wǎngfǎn jīpiào.", vi: "Tôi muốn đặt một vé khứ hồi đi Thượng Hải." },
  { id: 572, day: 58, en: "Is it a direct flight or a connecting flight?", cn: "这是直飞航班还是中转航班？", pinyin: "zhè shì zhífēi hángbān háishi zhōngzhuǎn hángbān?", vi: "Đây là chuyến bay thẳng hay chuyến bay quá cảnh?" },
  { id: 573, day: 58, en: "Are there any seats available for tomorrow morning?", cn: "明天早上还有余票吗？", pinyin: "míngtiān zǎoshang hái yǒu yúpiào ma?", vi: "Sáng mai còn vé không?" },
  { id: 574, day: 58, en: "I prefer a second-class seat on the high-speed train.", cn: "我想要高铁的二等座。", pinyin: "wǒ xiǎng yào gāotiě de èrděng zuò.", vi: "Tôi muốn lấy ghế hạng hai trên tàu cao tốc." },
  { id: 575, day: 58, en: "What is the refund policy if I cancel?", cn: "如果退票有什么规定？", pinyin: "rúguǒ tuìpiào yǒu shénme guīdìng?", vi: "Chính sách hoàn vé như thế nào nếu tôi hủy?" },
  { id: 576, day: 58, en: "Can I change my departure date?", cn: "改签出发日期需要加钱吗？", pinyin: "gǎiqiān chūfā rìqī xūyào jiāqián ma?", vi: "Tôi có thể đổi ngày khởi hành không?" },
  { id: 577, day: 58, en: "Please confirm your personal identification number.", cn: "请确认您的身份证件号码。", pinyin: "qǐng quèrèn nín de shēnfèn zhèngjiàn hàomǎ.", vi: "Vui lòng xác nhận số giấy tờ tùy thân của bạn." },
  { id: 578, day: 58, en: "The train departs at platform 3.", cn: "火车将在3号站台出发。", pinyin: "huǒchē jiāng zài sān hào zhàntái chūfā.", vi: "Tàu sẽ khởi hành ở sân ga số 3." },
  { id: 579, day: 58, en: "Please show your e-ticket upon entry.", cn: "进站时请出示电子车票。", pinyin: "jìnzhàn shí qǐng chūshì diànzǐ chēpiào.", vi: "Vui lòng xuất trình vé điện tử khi vào ga." },
  { id: 580, day: 58, en: "Your booking has been confirmed successfully.", cn: "您的预订已成功确认。", pinyin: "nín de yùdìng yǐ chénggōng quèrèn.", vi: "Yêu cầu đặt vé của bạn đã được xác nhận thành công." }
);

// Ngày 59: Chủ đề - Đi Khám bệnh & Tiệm thuốc
LESSON_DATA.push(
  { id: 581, day: 59, en: "I feel dizzy and have a fever.", cn: "我感觉头晕而且发烧。", pinyin: "wǒ gǎnjué tóuyūn érqiě fāshāo.", vi: "Tôi cảm thấy chóng mặt và bị sốt." },
  { id: 582, day: 59, en: "How long have you felt unwell?", cn: "你不舒服多久了？", pinyin: "nǐ bù shūfu duōjiǔ le?", vi: "Bạn cảm thấy không khỏe bao lâu rồi?" },
  { id: 583, day: 59, en: "I have a severe headache and a sore throat.", cn: "我头发疼得很厉害，还喉咙痛。", pinyin: "wǒ tóu téng de hěn lìhai, hái hóulóng tòng.", vi: "Tôi bị đau đầu dữ dội và đau họng." },
  { id: 584, day: 59, en: "Are you allergic to any medication?", cn: "你对什么药物过敏吗？", pinyin: "nǐ duì shénme yàowù guòmǐn ma?", vi: "Bạn có dị ứng với loại thuốc nào không?" },
  { id: 585, day: 59, en: "Take this medicine three times a day after meals.", cn: "这个药一天吃三次，饭后吃。", pinyin: "zhège yào yì tiān chī sān cì, fànhòu chī.", vi: "Uống thuốc này mỗi ngày 3 lần sau bữa ăn." },
  { id: 586, day: 59, en: "You need to rest more and drink plenty of water.", cn: "你需要多休息，多喝水。", pinyin: "nǐ xūyào duō xiūxi, duō hē shuǐ.", vi: "Bạn cần nghỉ ngơi nhiều hơn và uống nhiều nước." },
  { id: 587, day: 59, en: "Where can I find a pharmacy nearby?", cn: "附近哪里有药房？", pinyin: "fùjìn nǎlǐ yǒu yàofáng?", vi: "Gần đây có tiệm thuốc nào không?" },
  { id: 588, day: 59, en: "Do I need a doctor's prescription for this medicine?", cn: "买这个药需要处方吗？", pinyin: "mǎi zhège yào xūyào chǔfāng ma?", vi: "Mua thuốc này có cần đơn của bác sĩ không?" },
  { id: 589, day: 59, en: "I would like to buy some painkillers.", cn: "我想买一些止痛药。", pinyin: "wǒ xiǎng mǎi yīxiē zhǐtòngyào.", vi: "Tôi muốn mua một ít thuốc giảm đau." },
  { id: 590, day: 59, en: "I hope you feel better soon.", cn: "祝你早日康复。", pinyin: "zhù nǐ zǎorì kāngfù.", vi: "Chúc bạn sớm hồi phục sức khỏe." }
);

// Ngày 60: Chủ đề - Báo án & Tình huống khẩn cấp
LESSON_DATA.push(
  { id: 591, day: 60, en: "Help! Somebody call the police!", cn: "救命！快帮我报警！", pinyin: "jiùmìng! kuài bāng wǒ bàojǐng!", vi: "Cứu với! Ai đó gọi cảnh sát giúp tôi với!" },
  { id: 592, day: 60, en: "I lost my wallet and passport.", cn: "我的钱包和护照丢了。", pinyin: "wǒ de qiánbāo hé hùzhào diū le.", vi: "Tôi bị mất ví và hộ chiếu rồi." },
  { id: 593, day: 60, en: "My phone was stolen on the bus.", cn: "我的手机在公交车上被偷了。", pinyin: "wǒ de shǒujī zài gōngjiāochē shàng bèi tōu le.", vi: "Điện thoại của tôi bị trộm mất trên xe buýt." },
  { id: 594, day: 60, en: "Please call an ambulance immediately!", cn: "请立刻叫救护车！", pinyin: "qǐng lìkè jiào jiùhùchē!", vi: "Làm ơn gọi xe cứu thương ngay lập tức!" },
  { id: 595, day: 60, en: "Where is the nearest police station?", cn: "最近的警察局在哪里？", pinyin: "zuì jìn de jǐngchájú zài nǎlǐ?", vi: "Đồn cảnh sát gần nhất ở đâu?" },
  { id: 596, day: 60, en: "Can you describe what the suspect looked like?", cn: "你能描述一下嫌疑人的样子吗？", pinyin: "nǐ néng miáoshù yíxià xiányírén de yàngzi ma?", vi: "Bạn có thể mô tả nhân dạng của kẻ nghi vấn không?" },
  { id: 597, day: 60, en: "Don't panic, stay calm.", cn: "别慌张，保持冷静。", pinyin: "bié huāngzhāng, bǎochí lěngjìng.", vi: "Đừng hoảng sợ, hãy giữ bình tĩnh." },
  { id: 598, day: 60, en: "There is a fire! Please evacuate right now!", cn: "着火了！请大家着重撤离！", pinyin: "zháohuǒ le! qǐng dàjiā chèlí!", vi: "Có cháy! Xin mọi người mau chóng sơ tán!" },
  { id: 599, day: 60, en: "Please write down your contact number for the report.", cn: "请留下您的联系方式做笔录。", pinyin: "qǐng liúxià nín de liánxì fāngshì zuò bǐlù.", vi: "Xin vui lòng để lại số điện thoại để ghi biên bản." },
  { id: 600, day: 60, en: "We will do our best to help you.", cn: "我们会尽全力帮助您。", pinyin: "wǒmen huì jìn quánlì bāngzhù nín.", vi: "Chúng tôi sẽ cố gắng hết sức để giúp đỡ bạn." }
);

// ==========================================
// DỮ LIỆU CÂU HỘI THOẠI CHI TIẾT: NGÀY 61 - NGÀY 70
// ==========================================

// Ngày 61: Chủ đề - Giao lưu Bạn bè & Kết bạn
LESSON_DATA.push(
  { id: 601, day: 61, en: "Nice to meet you! How should I call you?", cn: "很高兴认识你！我该怎么称呼你？", pinyin: "hěn gāoxìng rènshi nǐ! wǒ gāi zěnme chēnghu nǐ?", vi: "Rất vui được gặp bạn! Tôi nên xưng h呼 với bạn như thế nào?" },
  { id: 602, day: 61, en: "What do you usually do in your free time?", cn: "你平时有什么兴趣爱好？", pinyin: "nǐ píngshí yǒu shénme xìngqù àihào?", vi: "Thời gian rảnh bạn thường làm gì?" },
  { id: 603, day: 61, en: "Can I add your contact on WeChat?", cn: "我们可以加个微信吗？", pinyin: "wǒmen kěyǐ jiā gè wēixìn ma?", vi: "Chúng ta có thể kết bạn WeChat không?" },
  { id: 604, day: 61, en: "We should hang out together sometime!", cn: "有空我们一起出来聚聚吧！", pinyin: "yǒu kòng wǒmen yìqǐ chūlái jùjù ba!", vi: "Khi nào rảnh chúng ta cùng ra ngoài tụ tập nhé!" },
  { id: 605, day: 61, en: "Where did you grow up?", cn: "你在哪里长大的？", pinyin: "nǐ zài nǎlǐ zhǎngdà de?", vi: "Bạn lớn lên ở đâu?" },
  { id: 606, day: 61, en: "How long have you been living here?", cn: "你在这里住了多久了？", pinyin: "nǐ zài zhèlǐ zhù le duōjiǔ le?", vi: "Bạn sống ở đây bao lâu rồi?" },
  { id: 607, day: 61, en: "You seem very easygoing.", cn: "你看起来很随和。", pinyin: "nǐ kàn qǐlái hěn suíhe.", vi: "Trông bạn rất dễ tính và hòa đồng." },
  { id: 608, day: 61, en: "Let's keep in touch!", cn: "保持联系哦！", pinyin: "bǎochí liánxì ó!", vi: "Giữ liên lạc nhé!" },
  { id: 609, day: 61, en: "I really enjoy talking with you.", cn: "和你聊天真的很开心。", pinyin: "hé nǐ liáotiān zhēnde hěn kāixīn.", vi: "Nói chuyện với bạn thực sự rất vui." },
  { id: 610, day: 61, en: "Welcome to my hometown!", cn: "欢迎来到我的家乡！", pinyin: "huānyíng lái dào wǒ de jiāxiāng!", vi: "Chào mừng bạn đến với quê hương tôi!" }
);

// Ngày 62: Chủ đề - Mời tiệc & Dự sinh nhật
LESSON_DATA.push(
  { id: 611, day: 62, en: "Are you free this weekend?", cn: "这个周末你有空吗？", pinyin: "zhège zhōumò nǐ yǒu kòng ma?", vi: "Cuối tuần này bạn có rảnh không?" },
  { id: 612, day: 62, en: "I'd like to invite you to my birthday party.", cn: "我想邀请你参加我的生日聚会。", pinyin: "wǒ xiǎng yāoqǐng nǐ cānjiā wǒ de shēngrì jùhuì.", vi: "Tôi muốn mời bạn đến dự bữa tiệc sinh nhật của tôi." },
  { id: 613, day: 62, en: "Happy Birthday! Wishing you all the best!", cn: "生日快乐！祝你一切顺利！", pinyin: "shēngrì kuàilè! zhù nǐ yíqiè shùnlì!", vi: "Sinh nhật vui vẻ! Chúc bạn mọi điều thuận lợi!" },
  { id: 614, day: 62, en: "Here is a small gift for you.", cn: "这是送给你的小礼物。", pinyin: "zhè shì sòng gěi nǐ de xiǎo lǐwù.", vi: "Đây là món quà nhỏ tặng bạn." },
  { id: 615, day: 62, en: "Thank you so much for coming today!", cn: "非常感谢你今天能来！", pinyin: "fēicháng gǎnxiè nǐ jīntiān néng lái!", vi: "Cảm ơn bạn rất nhiều vì đã đến hôm nay!" },
  { id: 616, day: 62, en: "Make yourself at home.", cn: "别客气，当成自己家一样。", pinyin: "bié kèqi, dàngchéng zìjǐ jiā yíyàng.", vi: "Đừng khách khí, cứ tự nhiên như ở nhà nhé." },
  { id: 617, day: 62, en: "Would you like something to drink?", cn: "你想喝点什么吗？", pinyin: "nǐ xiǎng hē diǎn shénme ma?", vi: "Bạn muốn uống chút gì không?" },
  { id: 618, day: 62, en: "Let's blow out the candles together!", cn: "让我们一起吹蜡烛吧！", pinyin: "ràng wǒmen yìqǐ chuī làzhú ba!", vi: "Chúng ta cùng nhau thổi nến nào!" },
  { id: 619, day: 62, en: "Thanks for the wonderful hospitality.", cn: "谢谢你的热情招待。", pinyin: "xièxie nǐ de rèqíng zhāodài.", vi: "Cảm ơn sự hiếu khách nhiệt tình của bạn." },
  { id: 620, day: 62, en: "I had a great time tonight.", cn: "我今晚过得非常开心。", pinyin: "wǒ jīnwǎn guò de fēicháng kāixīn.", vi: "Tối nay tôi đã có một thời gian rất tuyệt vời." }
);

// Ngày 63: Chủ đề - Tặng quà & Cảm ơn
LESSON_DATA.push(
  { id: 621, day: 63, en: "I brought this souvenir for you.", cn: "我给你带了一份纪念品。", pinyin: "wǒ gěi nǐ dài le yífèn jìniànpǐn.", vi: "Tôi mang tặng bạn món quà kỷ niệm này." },
  { id: 622, day: 63, en: "Oh, you shouldn't have!", cn: "哎呀，你太客气了！", pinyin: "āiyā, nǐ tài kèqi le!", vi: "Ôi, bạn khách khí quá!" },
  { id: 623, day: 63, en: "I hope you like it.", cn: "希望你会喜欢。", pinyin: "xīwàng nǐ huì xǐhuan.", vi: "Hy vọng bạn sẽ thích nó." },
  { id: 624, day: 63, en: "This is exactly what I wanted!", cn: "这正是我一直想要的！", pinyin: "zhè zhèngshì wǒ yìzhí xiǎng yào de!", vi: "Đây chính xác là món đồ tôi luôn ao ước!" },
  { id: 625, day: 63, en: "Thank you for your thoughtfulness.", cn: "谢谢你的用心。", pinyin: "xièxie nǐ de yòngxīn.", vi: "Cảm ơn sự chu đáo của bạn." },
  { id: 626, day: 63, en: "It's just a token of my appreciation.", cn: "这只是我的一点心意。", pinyin: "zhè zhǐshì wǒ de yìdiǎn xīnyì.", vi: "Đây chỉ là chút tấm lòng của tôi." },
  { id: 627, day: 63, en: "Can I open it now?", cn: "我现在可以打开吗？", pinyin: "wǒ xiànzài kěyǐ dǎkāi ma?", vi: "Tôi mở ra bây giờ được không?" },
  { id: 628, day: 63, en: "You really didn't need to spend so much.", cn: "你真不破费了。", pinyin: "nǐ zhēn bù pòfèi le.", vi: "Bạn thật sự không cần phải tốn kém thế đâu." },
  { id: 629, day: 63, en: "Your support means a lot to me.", cn: "你的支持对我意义重大。", pinyin: "nǐ de zhīchí duì wǒ yìyì zhòngdà.", vi: "Sự ủng hộ của bạn có ý nghĩa rất lớn với tôi." },
  { id: 630, day: 63, en: "Don't mention it, that's what friends are for.", cn: "不用客气，朋友之间应该的。", pinyin: "búyòng kèqi, péngyou zhījiān yīnggāi de.", vi: "Đừng khách khí, bạn bè với nhau là nên làm vậy mà." }
);

// Ngày 64: Chủ đề - Âm nhạc & Giải trí
LESSON_DATA.push(
  { id: 631, day: 64, en: "What kind of music do you like listening to?", cn: "你喜欢听什么类型的音乐？", pinyin: "nǐ xǐhuan tīng shénme lèixíng de yīnyuè?", vi: "Bạn thích nghe thể loại nhạc nào?" },
  { id: 632, day: 64, en: "I am a big fan of pop music.", cn: "我是流行音乐的忠实粉丝。", pinyin: "wǒ shì liúxíng yīnyuè de zhōngshí fěnsī.", vi: "Tôi là fan ruột của nhạc Pop." },
  { id: 633, day: 64, en: "Have you heard this new song?", cn: "你听过这首新歌吗？", pinyin: "nǐ tīngguo zhè shǒu xīngē ma?", vi: "Bạn đã nghe bài hát mới này chưa?" },
  { id: 634, day: 64, en: "The melody of this song is very catching.", cn: "这首歌的旋律很洗脑。", pinyin: "zhè shǒu gē de xuánlǜ hěn xǐnǎo.", vi: "Giai điệu của bài hát này rất bắt tai." },
  { id: 635, day: 64, en: "Do you know how to play any instruments?", cn: "你会乐器吗？", pinyin: "nǐ huì yuèqì ma?", vi: "Bạn có biết chơi nhạc cụ nào không?" },
  { id: 636, day: 64, en: "I can play the guitar a little bit.", cn: "我会弹一点吉他。", pinyin: "wǒ huì tán yìdiǎn jítā.", vi: "Tôi biết đánh một chút đàn Guitar." },
  { id: 637, day: 64, en: "Let's go to KTV together this Friday!", cn: "这周五我们去唱K吧！", pinyin: "zhè zhōuwǔ wǒmen qù chàng K ba!", vi: "Thứ Sáu này chúng ta đi hát Karaoke đi!" },
  { id: 638, day: 64, en: "Who is your favorite singer?", cn: "你最喜欢的歌手是谁？", pinyin: "nǐ zuì xǐhuan de gēshǒu shì shéi?", vi: "Ca sĩ yêu thích nhất của bạn là ai?" },
  { id: 639, day: 64, en: "This concert was absolutely amazing!", cn: "这场演唱会简直太棒了！", pinyin: "zhè chǎng yǎnchànghuì jiǎnzhí tài bàng le!", vi: "Buổi hòa nhạc này tuyệt vời không tưởng!" },
  { id: 640, day: 64, en: "Music helps me relax after work.", cn: "音乐能帮我在下班后放松。", pinyin: "yīnyuè néng bāng wǒ zài xiàbān hòu fàngsōng.", vi: "Âm nhạc giúp tôi thư giãn sau giờ làm việc." }
);

// Ngày 65: Chủ đề - Phim ảnh & Truyền hình
LESSON_DATA.push(
  { id: 641, day: 65, en: "Do you want to watch a movie tonight?", cn: "今晚你想去看电影吗？", pinyin: "jīnwǎn nǐ xiǎng qù kàn diànyǐng ma?", vi: "Tối nay bạn muốn đi xem phim không?" },
  { id: 642, day: 65, en: "What's playing at the cinema right now?", cn: "电影院现在在上映什么？", pinyin: "diànyǐngyuàn xiànzài zài shàngyìng shénme?", vi: "Rạp chiếu phim đang chiếu phim gì thế?" },
  { id: 643, day: 65, en: "I prefer watching comedy movies.", cn: "我更喜欢看喜剧片。", pinyin: "wǒ gèng xǐhuan kàn xǐjùpiàn.", vi: "Tôi thích xem phim hài hơn." },
  { id: 644, day: 65, en: "The plot of this movie is very exciting.", cn: "这部电影的剧情很精彩。", pinyin: "zhè bù diànyǐng de jùqíng hěn jīngcǎi.", vi: "Cốt truyện của bộ phim này rất hấp dẫn." },
  { id: 645, day: 65, en: "No spoilers, please!", cn: "请不要剧透！", pinyin: "qǐng búyào jùtòu!", vi: "Làm ơn đừng tiết lộ nội dung (spoil) nhé!" },
  { id: 646, day: 65, en: "The special effects in this film are impressive.", cn: "这部电影的特效令人印象深刻。", pinyin: "zhè bù diànyǐng de tèxiào lìngrén yìnxiàng shēnkè.", vi: "Kỹ xảo của phim này rất ấn tượng." },
  { id: 647, day: 65, en: "I have been binge-watching this TV series.", cn: "我最近一直在刷这部电视剧。", pinyin: "wǒ zuìjìn yìzhí zài shuā zhè bù diànshìjù.", vi: "Dạo này tôi đang cày bộ phim truyền hình này." },
  { id: 648, day: 65, en: "Where are our seats?", cn: "我们的座位在哪里？", pinyin: "wǒmen de zuòwèi zài nǎlǐ?", vi: "Ghế ngồi của chúng ta ở đâu?" },
  { id: 649, day: 65, en: "Don't forget to buy popcorn and drinks.", cn: "别忘了买爆米花和饮料。", pinyin: "bié wàng le mǎi bàomǐhuā hé yǐnliào.", vi: "Đừng quên mua bỏng ngô và nước uống nhé." },
  { id: 650, day: 65, en: "I would rate this movie 9 out of 10.", cn: "我给这部电影打9分。", pinyin: "wǒ gěi zhè bù diànyǐng dǎ jiǔ fēn.", vi: "Tôi chấm bộ phim này 9 trên 10 điểm." }
);

// Ngày 66: Chủ đề - Thể thao & Luyện tập
LESSON_DATA.push(
  { id: 651, day: 66, en: "Do you play any sports?", cn: "你做哪些运动？", pinyin: "nǐ zuò nǎxiē yùndòng?", vi: "Bạn có chơi môn thể thao nào không?" },
  { id: 652, day: 66, en: "I go jogging in the park every morning.", cn: "我每天早上都去公园跑步。", pinyin: "wǒ měitiān zǎoshang dōu qù gōngyuán pǎobù.", vi: "Tôi đi chạy bộ ở công viên mỗi sáng." },
  { id: 653, day: 66, en: "Shall we play badminton together this afternoon?", cn: "今天下午我们一起打羽毛球吧？", pinyin: "jīntiān xiàwǔ wǒmen yìqǐ dǎ yǔmáoqiú ba?", vi: "Chiều nay chúng ta cùng đánh cầu lông nhé?" },
  { id: 654, day: 66, en: "How often do you go to the gym?", cn: "你多久去一次健身房？", pinyin: "nǐ duōjiǔ qù yícì jiànshēnfáng?", vi: "Bao lâu thì bạn đi tập gym một lần?" },
  { id: 655, day: 66, en: "Working out keeps me energetic.", cn: "健身能让我保持精力充沛。", pinyin: "jiànshēn néng ràng wǒ bǎochí jīnglì chōngpèi.", vi: "Tập thể hình giúp tôi luôn tràn đầy năng lượng." },
  { id: 656, day: 66, en: "Which team are you rooting for?", cn: "你支持哪个队？", pinyin: "nǐ zhīchí nǎ gè duì?", vi: "Bạn cổ vũ cho đội nào?" },
  { id: 657, day: 66, en: "The match ended in a draw.", cn: "比赛以平局结束。", pinyin: "bǐsài yǐ píngjú jiéshù.", vi: "Trận đấu đã kết thúc với tỷ số hòa." },
  { id: 658, day: 66, en: "Remember to warm up before exercising.", cn: "运动前记得先热身。", pinyin: "yùndòng qián jìde xiān rèshēn.", vi: "Nhớ khởi động trước khi tập luyện nhé." },
  { id: 659, day: 66, en: "I want to lose weight and gain muscle.", cn: "我想减脂增肌。", pinyin: "wǒ xiǎng jiǎnzhǐ zēngjī.", vi: "Tôi muốn giảm mỡ và tăng cơ." },
  { id: 660, day: 66, en: "Great shot! Nice goal!", cn: "好球！进得漂亮！", pinyin: "hǎo qiú! jìn de piàoliang!", vi: "Pha bóng hay lắm! Vào đẹp lắm!" }
);

// Ngày 67: Chủ đề - Mùa màng & Thời tiết
LESSON_DATA.push(
  { id: 661, day: 67, en: "What's the weather forecast for tomorrow?", cn: "明天的天气预报怎么说？", pinyin: "míngtiān de tiānqì yùbào zěnme shuō?", vi: "Dự báo thời tiết ngày mai nói thế nào?" },
  { id: 662, day: 67, en: "It's freezing outside today, put on a coat.", cn: "今天外面冷死了，穿上外衣吧。", pinyin: "jīntiān wàimiàn lěng sǐ le, chuān shàng wàiyī ba.", vi: "Hôm nay bên ngoài lạnh giá lắm, khoác áo vào đi." },
  { id: 663, day: 67, en: "Don't forget to bring an umbrella.", cn: "别忘了带伞。", pinyin: "bié wàng le dài sǎn.", vi: "Đừng quên mang theo ô (dù)." },
  { id: 664, day: 67, en: "Autumn is my favorite season.", cn: "秋天是我最喜欢的季节。", pinyin: "qiūtiān shì wǒ zuì xǐhuan de jìjié.", vi: "Mùa thu là mùa tôi thích nhất." },
  { id: 665, day: 67, en: "It looks like it's going to rain soon.", cn: "看起来快要下雨了。", pinyin: "kàn qǐlái kuài yào xiàyǔ le.", vi: "Trông có vẻ trời sắp mưa rồi." },
  { id: 666, day: 67, en: "The weather is so humid today.", cn: "今天天气真潮湿。", pinyin: "jīntiān tiānqì zhēn cháoshī.", vi: "Thời tiết hôm nay ẩm ướt quá." },
  { id: 667, day: 67, en: "It's boiling hot in the summer.", cn: "夏天简直热得像火炉。", pinyin: "xiàtiān jiǎnzhí rè de xiàng huǒlú.", vi: "Mùa hè nóng như một lò bát quái." },
  { id: 668, day: 67, en: "The sun is shining brightly today.", cn: "今天阳光明媚。", pinyin: "jīntiān yángguāng míngmèi.", vi: "Hôm nay nắng chan hòa." },
  { id: 669, day: 67, en: "I love the snow in winter.", cn: "我喜欢冬天的雪。", pinyin: "wǒ xǐhuan dōngtiān de xuě.", vi: "Tôi thích tuyết vào mùa đông." },
  { id: 670, day: 67, en: "The temperature drop is quite sharp today.", cn: "今天降温挺厉害的。", pinyin: "jīntiān jiàngwēn tǐng lìhai de.", vi: "Hôm nay nhiệt độ giảm khá mạnh." }
);

// Ngày 68: Chủ đề - Dịch vụ Bưu điện & Giao hàng
LESSON_DATA.push(
  { id: 671, day: 68, en: "I would like to send this package to Vietnam.", cn: "我想把这个包裹寄到越南。", pinyin: "wǒ xiǎng bǎ zhège bāoguǒ jì dào yuènán.", vi: "Tôi muốn gửi bưu kiện này về Việt Nam." },
  { id: 672, day: 68, en: "How long will express delivery take?", cn: "快递需要几天能到？", pinyin: "kuàidì xūyào jǐ tiān néng dào?", vi: "Gửi chuyển phát nhanh thì mất mấy ngày đến?" },
  { id: 673, day: 68, en: "Please weigh this box for me.", cn: "请帮我称一下这个箱子。", pinyin: "qǐng bāng wǒ chēng yíxià zhège xiāngzi.", vi: "Làm ơn cân giúp tôi cái thùng này." },
  { id: 674, day: 68, en: "Is there anything fragile inside?", cn: "里面有易碎物品吗？", pinyin: "lǐmiàn yǒu yìsuì wùpǐn ma?", vi: "Bên trong có đồ dễ vỡ không?" },
  { id: 675, day: 68, en: "Please fill in the recipient's address.", cn: "请填写收件人地址。", pinyin: "qǐng tiánxiě shōujiànrén dìzhǐ.", vi: "Vui lòng điền địa chỉ người nhận." },
  { id: 676, day: 68, en: "How can I track my package?", cn: "我该怎么查询快递单号？", pinyin: "wǒ gāi zěnme cháxún kuàidì dānhào?", vi: "Tôi kiểm tra mã vận đơn bằng cách nào?" },
  { id: 677, day: 68, en: "Your delivery courier has arrived at your door.", cn: "您的快递员已经到门前了。", pinyin: "nín de kuàidìyuán yǐjīng dào ménqián le.", vi: "Shipper đã đến trước cửa nhà bạn rồi." },
  { id: 678, day: 68, en: "Please sign here for confirmation.", cn: "请在这里签收。", pinyin: "qǐng zài zhèlǐ qiānshōu.", vi: "Xin ký nhận ở đây." },
  { id: 679, day: 68, en: "What is the shipping cost for this?", cn: "这个邮费是多少？", pinyin: "zhège yóufèi shì duōshǎo?", vi: "Phí vận chuyển cái này là bao nhiêu?" },
  { id: 680, day: 68, en: "I received a damaged parcel.", cn: "我收到了一个破损的包裹。", pinyin: "wǒ shōudào le yí gè pòsǔn de bāoguǒ.", vi: "Tôi nhận được một kiện hàng bị hư hỏng." }
);

// Ngày 69: Chủ đề - Giặt ủi & Sửa chữa đồ đạc
LESSON_DATA.push(
  { id: 681, day: 69, en: "I need to get this suit dry-cleaned.", cn: "这件西装需要干洗。", pinyin: "zhè jiàn xīzhuāng xūyào gānxǐ.", vi: "Bộ bộ vest này cần phải giặt khô." },
  { id: 682, day: 69, en: "Can you remove this stain on my shirt?", cn: "能帮你洗掉这衬衫上的污渍吗？", pinyin: "néng bāng nǐ xǐdiào zhè chènshān shàng de wūzì ma?", vi: "Bạn có thể tẩy vết bẩn này trên áo sơ mi giúp tôi không?" },
  { id: 683, day: 69, en: "When will my clothes be ready for pickup?", cn: "我的衣服什么时候可以来取？", pinyin: "wǒ de yīfu shénme shíhou kěyǐ lái qǔ?", vi: "Khi nào thì tôi có thể đến lấy quần áo?" },
  { id: 684, day: 69, en: "My shoes need to be repaired.", cn: "我的鞋子需要维修。", pinyin: "wǒ de xiézi xūyào wéixiū.", vi: "Giày của tôi cần được sửa." },
  { id: 685, day: 69, en: "The zipper on this jacket is stuck.", cn: "这件外衣的拉链卡住了。", pinyin: "zhè jiàn wàiyī de lāliàn kǎzhù le.", vi: "Khóa kéo của cái áo khoác này bị kẹt rồi." },
  { id: 686, day: 69, en: "Can you shorten these trousers a bit?", cn: "能把这条裤子改短一点吗？", pinyin: "néng bǎ zhè tiáo kùzi gǎi duǎn yìdiǎn ma?", vi: "Bạn có thể cắt ngắn chiếc quần này một chút được không?" },
  { id: 687, day: 69, en: "The water pipe in the bathroom is leaking.", cn: "浴室的水管漏水了。", pinyin: "yùshì de shuǐguǎn lòushuǐ le.", vi: "Ống nước trong nhà tắm bị rò rỉ rồi." },
  { id: 688, day: 69, en: "I need to call a plumber.", cn: "我需要叫个水电工。", pinyin: "wǒ xūyào jiào gè shuǐdiàngōng.", vi: "Tôi cần gọi thợ sửa điện nước." },
  { id: 689, day: 69, en: "How much do you charge for the repair?", cn: "维修费是多少？", pinyin: "wéixiūfèi shì duōshǎo?", vi: "Chi phí sửa chữa là bao nhiêu?" },
  { id: 690, day: 69, en: "It's as good as new now!", cn: "现在修得和新的一样！", pinyin: "xiànzài xiū de hé xīn de yíyàng!", vi: "Bây giờ sửa xong nhìn như mới luôn!" }
);

// Ngày 70: Chủ đề - Cắt tóc & Làm đẹp (Salon & Spa)
LESSON_DATA.push(
  { id: 691, day: 70, en: "I'd like to get a haircut, please.", cn: "我想理个发。", pinyin: "wǒ xiǎng lǐ gè fà.", vi: "Tôi muốn cắt tóc." },
  { id: 692, day: 692, en: "Just trim a little off the sides.", cn: "把两边稍微修剪一下就好。", pinyin: "bǎ liǎngbiān shāowēi xiūjiǎn yíxià jiù hǎo.", vi: "Chỉ cần tỉa bớt một chút ở hai bên là được." },
  { id: 693, day: 70, en: "Do you have any hairstyles to recommend?", cn: "你有推荐的发型吗？", pinyin: "nǐ yǒu tuījiàn de fàxíng ma?", vi: "Bạn có kiểu tóc nào gợi ý cho tôi không?" },
  { id: 694, day: 70, en: "I want to dye my hair brown.", cn: "我想把头发染成棕色。", pinyin: "wǒ xiǎng bǎ tóufa rǎnchéng zōngsè.", vi: "Tôi muốn nhuộm tóc sang màu nâu." },
  { id: 695, day: 70, en: "Please don't cut it too short.", cn: "请不要剪得太短。", pinyin: "qǐng bùyào jiǎn de tài duǎn.", vi: "Xin đừng cắt ngắn quá." },
  { id: 696, day: 70, en: "I'd like to book a facial spa.", cn: "我想预约一个面部护理。", pinyin: "wǒ xiǎng yùyuē yí gè miànbù hùlǐ.", vi: "Tôi muốn đặt lịch chăm sóc da mặt." },
  { id: 697, day: 70, en: "Is the water temperature okay for you?", cn: "水温可以吗？", pinyin: "shuǐwēn kěyǐ ma?", vi: "Nhiệt độ nước thế này được chưa ạ?" },
  { id: 698, day: 70, en: "I would like to do a manicure.", cn: "我想做个美甲。", pinyin: "wǒ xiǎng zuò gè měijiǎ.", vi: "Tôi muốn làm móng tay." },
  { id: 699, day: 70, en: "How long will the hair perming take?", cn: "烫头发需要多长时间？", pinyin: "tàng tóufa xūyào duō cháng shíjiān?", vi: "Uốn tóc mất bao lâu thời gian?" },
  { id: 700, day: 70, en: "I love my new hairstyle, thank you!", cn: "我非常喜欢我的新发型，谢谢！", pinyin: "wǒ fēicháng xǐhuan wǒ de xīn fàxíng, xièxie!", vi: "Tôi rất thích kiểu tóc mới này, cảm ơn bạn!" }
);

// ==========================================
// DỮ LIỆU CÂU HỘI THOẠI CHI TIẾT: NGÀY 71 - NGÀY 80
// ==========================================

// Ngày 71: Chủ đề - Kỹ năng Từ chối Khéo léo
LESSON_DATA.push(
  { id: 701, day: 71, en: "I would love to go, but I have other plans today.", cn: "我很想去，但我今天有其他安排了。", pinyin: "wǒ hěn xiǎng qù, dàn wǒ jīntiān yǒu qítā ānpái le.", vi: "Tôi rất muốn đi, nhưng hôm nay tôi có kế hoạch khác mất rồi." },
  { id: 702, day: 71, en: "Thanks for the offer, but I'll have to pass this time.", cn: "谢谢你的好意，不过这次我就不去了。", pinyin: "xièxie nǐ de hǎoyì, búguò zhè cì wǒ jiù bù qù le.", vi: "Cảm ơn ý tốt của bạn, nhưng lần này chắc tôi xin phép bỏ qua." },
  { id: 703, day: 71, en: "I'm really busy with work right now.", cn: "我最近工作实在太忙了。", pinyin: "wǒ zuìjìn gōngzuò shízài tài máng le.", vi: "Dạo này công việc của tôi bận quá." },
  { id: 704, day: 71, en: "Can we take a rain check?", cn: "我们能下次再约吗？", pinyin: "wǒmen néng xià cì zài yuē ma?", vi: "Chúng ta hẹn lại lần sau được không?" },
  { id: 705, day: 71, en: "I don't think I'm the right person for this.", cn: "我觉得我可能不是最合适的人选。", pinyin: "wǒ juéde wǒ kěnéng bú shì zuì héshì de rénxuǎn.", vi: "Tôi nghĩ tôi có lẽ không phải người phù hợp nhất cho việc này." },
  { id: 706, day: 71, en: "I'm afraid I won't be able to make it.", cn: "恐怕我赶不过去了。", pinyin: "kǒngpà wǒ gǎn bú guòqù le.", vi: "E là tôi không thể đến kịp rồi." },
  { id: 707, day: 71, en: "Let me think about it and get back to you.", cn: "让我考虑一下，过后再答复你。", pinyin: "ràng wǒ kǎolǜ yíxià, guòhòu zài dáfù nǐ.", vi: "Để tôi suy nghĩ chút rồi trả lời bạn sau nhé." },
  { id: 708, day: 71, en: "I'm not feeling very well today.", cn: "我今天身体有点不舒服。", pinyin: "wǒ jīntiān shēntǐ yǒudiǎn bù shūfu.", vi: "Hôm nay trong người tôi hơi mệt." },
  { id: 709, day: 71, en: "I'm currently on a tight budget.", cn: "我最近手头有点紧。", pinyin: "wǒ zuìjìn shǒutóu yǒudiǎn jǐn.", vi: "Dạo này tài chính của tôi hơi hạn hẹp." },
  { id: 710, day: 71, en: "Thank you for understanding.", cn: "感谢你的理解。", pinyin: "gǎnxiè nǐ de lǐjiě.", vi: "Cảm ơn sự thông cảm của bạn." }
);

// Ngày 72: Chủ đề - Nhờ vả & Yêu cầu Hỗ trợ
LESSON_DATA.push(
  { id: 711, day: 72, en: "Could you do me a quick favor?", cn: "你能帮我个小忙吗？", pinyin: "nǐ néng bāng wǒ gè xiǎo máng ma?", vi: "Bạn có thể giúp tôi một việc nhỏ được không?" },
  { id: 712, day: 72, en: "Would you mind opening the window?", cn: "你可以把窗户打开吗？", pinyin: "nǐ kěyǐ bǎ chuānghu dǎkāi ma?", vi: "Bạn có thể mở giúp tôi cái cửa sổ không?" },
  { id: 713, day: 72, en: "Could you please lend me a hand with this box?", cn: "你能搭把手帮我搬这个箱子吗？", pinyin: "nǐ néng dā bǎ shǒu bāng wǒ bān zhège xiāngzi ma?", vi: "Bạn có thể phụ tôi một tay bê cái thùng này không?" },
  { id: 714, day: 72, en: "Can you explain this to me again?", cn: "你能再给我解释一遍吗？", pinyin: "nǐ néng zài gěi wǒ jiěshì yí biàn ma?", vi: "Bạn giải thích lại cái này cho tôi lần nữa được không?" },
  { id: 715, day: 72, en: "Is it possible for you to cover for me tomorrow?", cn: "你明天能帮我代个班吗？", pinyin: "nǐ míngtiān néng bāng wǒ dài gè bān ma?", vi: "Ngày mai bạn có thể làm thay ca giúp tôi không?" },
  { id: 716, day: 72, en: "I would really appreciate your assistance.", cn: "如果你能帮忙，我将不胜感激。", pinyin: "rúguǒ nǐ néng bāngmáng, wǒ jiāng búshèng gǎnjī.", vi: "Nếu bạn giúp được thì tôi vô cùng biết ơn." },
  { id: 717, day: 72, en: "Could you speak a bit slower, please?", cn: "请问你能说慢一点吗？", pinyin: "qǐngwèn nǐ néng shuō màn yìdiǎn ma?", vi: "Xin hỏi bạn có thể nói chậm lại một chút không?" },
  { id: 718, day: 72, en: "Sorry to bother you with this.", cn: "很抱歉这事打扰你了。", pinyin: "hěn bàoqiàn zhè shì dǎrǎo nǐ le.", vi: "Rất làm tiếc vì đã phiền bạn chuyện này." },
  { id: 719, day: 72, en: "No problem at all, I'd be happy to help!", cn: "没问题，我很乐意帮忙！", pinyin: "méi wèntí, wǒ hěn lèyì bāngmáng!", vi: "Không vấn đề gì, tôi rất sẵn lòng giúp đỡ!" },
  { id: 720, day: 72, en: "Let me know if you need anything else.", cn: "如果还需要其他帮助，随时告诉我。", pinyin: "rúguǒ hái xūyào qítā bāngzhù, suíshí gào su wǒ.", vi: "Nếu cần thêm hỗ trợ gì nữa cứ báo tôi nhé." }
);

// Ngày 73: Chủ đề - Xin lỗi & Giải hòa
LESSON_DATA.push(
  { id: 721, day: 73, en: "I am terribly sorry for being late.", cn: "非常抱歉，我迟到了。", pinyin: "fēicháng bàoqiàn, wǒ chídào le.", vi: "Tôi vô cùng xin lỗi vì đã đến muộn." },
  { id: 722, day: 73, en: "It was my fault completely.", cn: "这完全是我的错。", pinyin: "zhè wánquán shì wǒ de cuò.", vi: "Đó hoàn toàn là lỗi của tôi." },
  { id: 723, day: 73, en: "I didn't mean to hurt your feelings.", cn: "我不是故意伤你心的。", pinyin: "wǒ bú shì gùyì shāng nǐ xīn de.", vi: "Tôi không cố ý làm tổn thương tình cảm của bạn." },
  { id: 724, day: 73, en: "Please accept my sincere apology.", cn: "请接受我真诚的道歉。", pinyin: "qǐng jiēshòu wǒ zhēnchéng de dàoqiàn.", vi: "Xin hãy nhận lời xin lỗi chân thành của tôi." },
  { id: 725, day: 73, en: "I promise it won't happen again.", cn: "我保证下次绝不再犯。", pinyin: "wǒ bǎozhèng xià cì jué bù zài fàn.", vi: "Tôi hứa lần sau tuyệt đối không tái phạm nữa." },
  { id: 726, day: 73, en: "Don't worry about it, it's fine.", cn: "别担心，没关系的。", pinyin: "bié dānxīn, méi guānxi de.", vi: "Đừng lo lắng, không sao đâu." },
  { id: 727, day: 73, en: "Let's forget about it and start fresh.", cn: "让我们忘掉这件事，重新开始吧。", pinyin: "ràng wǒmen wàngdiào zhè jiàn shì, chóngxīn kāishǐ ba.", vi: "Chúng ta hãy quên chuyện này đi và bắt đầu lại nhé." },
  { id: 728, day: 73, en: "How can I make it up to you?", cn: "我该怎么弥补你呢？", pinyin: "wǒ gāi zěnme míbǔ nǐ ne?", vi: "Tôi phải đền bù cho bạn thế nào đây?" },
  { id: 729, day: 73, en: "I misunderstand your intention.", cn: "是我误会你的意思了。", pinyin: "shì wǒ wùhuì nǐ de yìsi le.", vi: "Là do tôi hiểu lầm ý của bạn rồi." },
  { id: 730, day: 73, en: "Forgive and forget.", cn: "原谅并遗忘吧。", pinyin: "yuánliàng bìng yíwàng ba.", vi: "Thứ lỗi và bỏ qua cho nhau nhé." }
);

// Ngày 74: Chủ đề - Động viên & An ủi
LESSON_DATA.push(
  { id: 731, day: 74, en: "Hang in there, things will get better.", cn: "坚持住，一切都会好起来的。", pinyin: "jiānchí zhù, yíqiè dōu huì hǎo qǐlái de.", vi: "Cố gắng lên, mọi chuyện rồi sẽ tốt đẹp thôi." },
  { id: 732, day: 74, en: "Don't be so hard on yourself.", cn: "别对自己要求太苛刻了。", pinyin: "bié duì zìjǐ yāoqiú tài kēkè le.", vi: "Đừng quá khắt khe với bản thân." },
  { id: 733, day: 74, en: "Failure is the mother of success.", cn: "失败是成功之母。", pinyin: "shībài shì chénggōng zhī mǔ.", vi: "Thất bại là mẹ thành công." },
  { id: 734, day: 74, en: "I'm always here for you if you need to talk.", cn: "如果你想倾诉，我随时都在。", pinyin: "rúguǒ nǐ xiǎng qīngsù, wǒ suíshí dōu zài.", vi: "Nếu bạn muốn tâm sự, tôi luôn ở đây." },
  { id: 735, day: 74, en: "You have done your best already.", cn: "你已经尽力了。", pinyin: "nǐ yǐjīng jìnlì le.", vi: "Bạn đã cố gắng hết sức rồi." },
  { id: 736, day: 74, en: "Take a deep breath and stay high-spirited.", cn: "深呼吸，保持高昂的斗志。", pinyin: "shēn hūxī, bǎochí gāo'áng de dòuzhì.", vi: "Hít thở sâu và luôn giữ tinh thần lạc quan lên." },
  { id: 737, day: 74, en: "Tomorrow is a new day.", cn: "明天又是全新的一天。", pinyin: "míngtiān yòu shì quánxīn de yì tiān.", vi: "Ngày mai lại là một ngày mới." },
  { id: 738, day: 74, en: "Believe in yourself!", cn: "相信你自己！", pinyin: "xiāngxìn nǐ zìjǐ!", vi: "Hãy tin tưởng vào chính mình!" },
  { id: 739, day: 74, en: "This small obstacle won't stop you.", cn: "这点小挫折难不倒你。", pinyin: "zhè diǎn xiǎo cuòzhé nán bù dǎo nǐ.", vi: "Khó khăn nhỏ này không đánh gục được bạn đâu." },
  { id: 740, day: 74, en: "I know you can do it!", cn: "我知道你一定行的！", pinyin: "wǒ zhīdào nǐ yídìng xíng de!", vi: "Tôi biết chắc chắn bạn làm được mà!" }
);

// Ngày 75: Chủ đề - Thời trang & Phong cách
LESSON_DATA.push(
  { id: 741, day: 75, en: "That dress looks great on you!", cn: "那条裙子穿在你身上真好看！", pinyin: "nà tiáo qúnzi chuān zài nǐ shēnshang zhēn hǎokàn!", vi: "Chiếc váy đó mặc lên người bạn đẹp thật đấy!" },
  { id: 742, day: 75, en: "What's the dress code for the party?", cn: "派对的要求着装是什么？", pinyin: "pàiduì de yāoqiú zhuózhuāng shì shénme?", vi: "Quy định trang phục của bữa tiệc là gì?" },
  { id: 743, day: 75, en: "This jacket goes well with your jeans.", cn: "这件夹克和你的牛仔裤很搭。", pinyin: "zhè jiàn jiákè hé nǐ de niúzǎikù hěn dā.", vi: "Chiếc áo khoác này rất hợp với quần jeans của bạn." },
  { id: 744, day: 75, en: "I like casual and comfortable clothes.", cn: "我喜欢休闲舒适的衣服。", pinyin: "wǒ xǐhuan xiūxián shūshì de yīfu.", vi: "Tôi thích trang phục thoải mái và đơn giản." },
  { id: 745, day: 75, en: "Bright colors suit you better.", cn: "鲜艳的颜色更适合你。", pinyin: "xiānyàn de yánsè gèng shìhé nǐ.", vi: "Màu sắc tươi sáng hợp với bạn hơn." },
  { id: 746, day: 75, en: "Vintage fashion is making a comeback.", cn: "复古风又流行起来了。", pinyin: "fùgǔfēng yòu liúxíng qǐlái le.", vi: "Phong cách thời trang cổ điển đang quay trở lại." },
  { id: 747, day: 75, en: "She has excellent taste in fashion.", cn: "她的时尚品味非常好。", pinyin: "tā de shíshàng pǐnwèi fēicháng hǎo.", vi: "Cô ấy có gu thời trang rất tuyệt vời." },
  { id: 748, day: 75, en: "These shoes are both stylish and cozy.", cn: "这双鞋既时尚又舒适。", pinyin: "zhè shuāng xié jì shíshàng yòu shūshì.", vi: "Đôi giày này vừa thời trang lại vừa êm chân." },
  { id: 749, day: 75, en: "I'm looking for a pair of sunglasses.", cn: "我正在找一副太阳镜。", pinyin: "wǒ zhèngzài zhǎo yí fù tàiyángjìng.", vi: "Tôi đang tìm mua một chiếc kính râm." },
  { id: 750, day: 75, en: "Confidence is the best outfit.", cn: "自信是最好的穿搭。", pinyin: "zìxìn shì zuì hǎo de chuāndā.", vi: "Tự tin chính là trang phục đẹp nhất." }
);

// Ngày 76: Chủ đề - Công nghệ & Mạng xã hội
LESSON_DATA.push(
  { id: 751, day: 76, en: "Did you post that photo on Instagram?", cn: "你发那张照片到社交媒体上了吗？", pinyin: "nǐ fā nà zhāng zhàopiàn dào shèjiāo méitǐ shàng le ma?", vi: "Bạn đã đăng bức ảnh đó lên mạng xã hội chưa?" },
  { id: 752, day: 76, en: "Don't forget to like and subscribe!", cn: "别忘了点赞和订阅！", pinyin: "bié wàng le diǎnzàn hé dìngyuè!", vi: "Đừng quên thả tim và đăng ký kênh nhé!" },
  { id: 753, day: 76, en: "My phone battery is running low.", cn: "我的手机快没电了。", pinyin: "wǒ de shǒujī kuài méi diàn le.", vi: "Điện thoại của tôi sắp hết pin rồi." },
  { id: 754, day: 76, en: "Do you have a power bank I can borrow?", cn: "你有充电宝可以借我用下吗？", pinyin: "nǐ yǒu chōngdiànbǎo kěyǐ jiè wǒ yòng xià ma?", vi: "Bạn có sạc dự phòng cho tôi mượn chút được không?" },
  { id: 755, day: 76, en: "The internet signal here is very weak.", cn: "这里的网络信号很弱。", pinyin: "zhèlǐ de wǎnglù xìnhào hěn ruò.", vi: "Tín hiệu mạng ở đây rất yếu." },
  { id: 756, day: 76, en: "I need to scan this QR code to order.", cn: "我们需要扫这个二维码点餐。", pinyin: "wǒmen xūyào sǎo zhège èrwéimǎ diǎncān.", vi: "Tôi cần quét mã QR này để gọi món." },
  { id: 757, day: 76, en: "This video went viral overnight.", cn: "这个视频一夜之间爆火了。", pinyin: "zhège shìpín yíyè zhījiān bàohuǒ le.", vi: "Video này đã trở nên nổi tiếng chỉ sau một đêm." },
  { id: 758, day: 76, en: "Please send me the link via chat.", cn: "请把链接私信发给我。", pinyin: "qǐng bǎ liànjiē sīxìn fā gěi wǒ.", vi: "Làm ơn gửi link qua tin nhắn cho tôi." },
  { id: 759, day: 76, en: "I backed up all my files to the cloud.", cn: "我已经把所有文件备份到云端了。", pinyin: "wǒ yǐjīng bǎ suǒyǒu wénjiàn bèifèn dào yúnduān le.", vi: "Tôi đã sao lưu tất cả tệp dữ liệu lên đám mây." },
  { id: 760, day: 76, en: "Technology makes our life so convenient.", cn: "科技让我们的生活变得太方便了。", pinyin: "kējì ràng wǒmen de shēnghuó biàn de tài fāngbiàn le.", vi: "Công nghệ giúp cuộc sống của chúng ta trở nên thật tiện lợi." }
);

// Ngày 77: Chủ đề - Bảo vệ Môi trường & Lối sống Xanh
LESSON_DATA.push(
  { id: 761, day: 77, en: "We should reduce plastic bag usage.", cn: "我们应该减少塑料袋的使用。", pinyin: "wǒmen yīnggāi jiǎnshǎo sùliàodài de shǐyòng.", vi: "Chúng ta nên cắt giảm việc sử dụng túi nilon." },
  { id: 762, day: 77, en: "Please remember to sort the garbage.", cn: "请记得进行垃圾分类。", pinyin: "qǐng jìde jìnxíng lājī fēnlèi.", vi: "Vui lòng nhớ phân loại rác thải." },
  { id: 763, day: 77, en: "Turn off the lights when leaving the room.", cn: "离开房间时请随手关灯。", pinyin: "líkāi fángjiān shí qǐng suíshǒu guāndēng.", vi: "Tắt đèn khi ra khỏi phòng." },
  { id: 764, day: 77, en: "Bring your own water bottle to save energy.", cn: "自带水杯既环保又健康。", pinyin: "zìdài shuǐbēi jì huánbǎo yòu jiànkāng.", vi: "Tự mang bình nước vừa bảo vệ môi trường vừa tốt cho sức khỏe." },
  { id: 765, day: 77, en: "Public transportation is more eco-friendly.", cn: "公共交通更加环保。", pinyin: "gōnggòng jiāotōng gèngjiā huánbǎo.", vi: "Phương tiện công cộng thân thiện với môi trường hơn." },
  { id: 766, day: 77, en: "Global warming is a serious problem.", cn: "全球变暖是一个严重的问题。", pinyin: "quánqiú biànnuǎn shì yí gè yánzhòng de wèntí.", vi: "Biến đổi khí hậu toàn cầu là một vấn đề nghiêm trọng." },
  { id: 767, day: 77, en: "Planting trees helps clean the air.", cn: "植树造林有助于净化空气。", pinyin: "zhíshù zàolín yǒu zhù yú jìnghuà kōngqì.", vi: "Trồng cây gây rừng giúp làm sạch không khí." },
  { id: 768, day: 77, en: "Don't waste food or water.", cn: "不要浪费食物和水资源。", pinyin: "búyào làngfèi shíwù hé shuǐzīyuán.", vi: "Đừng lãng phí thức ăn và nguồn nước." },
  { id: 769, day: 77, en: "Minimalism helps me focus on essential things.", cn: "极简主义帮我专注于重要的事物。", pinyin: "jíjiǎn zhǔyì bāng wǒ zhuānzhù yú zhòngyào de shìwù.", vi: "Lối sống tối giản giúp tôi tập trung vào những điều cốt lõi." },
  { id: 770, day: 77, en: "Every small action counts for the planet.", cn: "每个小举动都能保护地球。", pinyin: "měi gè xiǎo jǔdòng dōu néng bǎohù dìqiú.", vi: "Mỗi hành động nhỏ đều góp phần bảo vệ trái đất." }
);

// Ngày 78: Chủ đề - Quản lý Thời gian & Thói quen
LESSON_DATA.push(
  { id: 771, day: 78, en: "Time is money, don't waste it.", cn: "时间就是金钱，不要浪费它。", pinyin: "shíjiān jiùshì jīnqián, búyào làngfèi tā.", vi: "Thời gian là vàng bạc, đừng lãng phí nó." },
  { id: 772, day: 78, en: "I make a to-do list every morning.", cn: "我每天早上都会做一份待办清单。", pinyin: "wǒ měitiān zǎoshang dōu huì zuò yífèn dàibàn qīngdān.", vi: "Mỗi sáng tôi đều lập một danh sách công việc cần làm." },
  { id: 773, day: 78, en: "Punctuality is a virtue.", cn: "守时是一种美德。", pinyin: "shǒushí shì yì zhǒng měidé.", vi: "Đúng giờ là một tính tốt." },
  { id: 774, day: 78, en: "I need to overcome my procrastination.", cn: "我需要克服我的拖延症。", pinyin: "wǒ xūyào kèfú wǒ de tuōyánzhèng.", vi: "Tôi cần phải vượt qua thói quen trì hoãn của mình." },
  { id: 775, day: 78, en: "First come, first served.", cn: "先到先得。", pinyin: "xiān dào xiān dé.", vi: "Đến trước được phục vụ trước." },
  { id: 776, day: 78, en: "Setting clear goals helps you stay focused.", cn: "设定明确的目标有助于保持专注。", pinyin: "shèdìng míngquè de mùbiāo yǒu zhù yú bǎochí zhuānzhù.", vi: "Đặt mục tiêu rõ ràng giúp bạn duy trì sự tập trung." },
  { id: 777, day: 78, en: "I try to read for twenty minutes before bed.", cn: "我争取睡前阅读二十分钟。", pinyin: "wǒ zhēngqǔ shuìqián yuèdú èrshí fēnzhōng.", vi: "Tôi cố gắng đọc sách 20 phút trước khi đi ngủ." },
  { id: 778, day: 78, en: "Consistency is key to forming a good habit.", cn: "坚持是养成好习惯的关键。", pinyin: "jiānchí shì yǎngxíng hǎo xíguàn de guānjiàn.", vi: "Kiên trì là chìa khóa để hình thành thói quen tốt." },
  { id: 779, day: 78, en: "Sorry, I am fully booked today.", cn: "抱歉，我今天日程已经排满了。", pinyin: "bàoqiàn, wǒ jīntiān rìchéng yǐjīng pái mǎn le.", vi: "Xin lỗi, lịch trình hôm nay của tôi đã kín mất rồi." },
  { id: 780, day: 78, en: "Work hard, play hard.", cn: "工作时努力，玩耍时尽兴。", pinyin: "gōngzuò shí nǔlì, wánshuǎ shí jìnxìng.", vi: "Làm hết sức, chơi hết mình." }
);

// Ngày 79: Chủ đề - Gia đình & Mối quan hệ
LESSON_DATA.push(
  { id: 781, day: 79, en: "Family always comes first.", cn: "家庭永远是第一位的。", pinyin: "jiātíng yǒngyuǎn shì dì yī wèi de.", vi: "Gia đình luôn là điều quan trọng nhất." },
  { id: 782, day: 79, en: "How many people are there in your family?", cn: "你家有几口人？", pinyin: "nǐ jiā yǒu jǐ kǒu rén?", vi: "Gia đình bạn có mấy người?" },
  { id: 783, day: 79, en: "My parents are retired now.", cn: "我的父母现在已经退休了。", pinyin: "wǒ de fùmǔ xiànzài yǐjīng tuìxiū le.", vi: "Bố mẹ tôi giờ đã nghỉ hưu rồi." },
  { id: 784, day: 79, en: "Do you have any siblings?", cn: "你有兄弟姐妹吗？", pinyin: "nǐ yǒu xiōngdì jiěmèi ma?", vi: "Bạn có anh chị em gì không?" },
  { id: 785, day: 79, en: "I get along very well with my brother.", cn: "我和我哥哥相处得很融洽。", pinyin: "wǒ hé wǒ gēge xiāngchǔ de hěn róngqià.", vi: "Tôi hòa thuận với anh trai rất tốt." },
  { id: 786, day: 79, en: "We are holding a family reunion dinner.", cn: "我们要举办一次家庭聚餐。", pinyin: "wǒmen yào jǔbàn yícì jiātíng jùcān.", vi: "Chúng tôi sắp tổ chức một buổi sum họp gia đình." },
  { id: 787, day: 79, en: "Blood is thicker than water.", cn: "血浓于水。", pinyin: "xuè nóng yú shuǐ.", vi: "Một giọt máu đào hơn ao nước đục." },
  { id: 788, day: 79, en: "He takes after his father.", cn: "他长得很像他父亲。", pinyin: "tā zhǎng de hěn xiàng tā fùqīn.", vi: "Anh ấy nhìn rất giống bố mình." },
  { id: 789, day: 79, en: "Mutual respect is essential in relationships.", cn: "相互尊重在人际关系中至关重要。", pinyin: "xiānghù zūnzhòng zài rénjì guānxi zhōng zhìguān zhòngyào.", vi: "Tôn trọng lẫn nhau là yếu tố cốt lõi trong các mối quan hệ." },
  { id: 790, day: 79, en: "Home is where the heart is.", cn: "心安处即是家。", pinyin: "xīn'ān chù jí shì jiā.", vi: "Nơi nào có tình yêu thương, nơi đó là nhà." }
);

// Ngày 80: Chủ đề - Phát triển Bản thân & Mục tiêu Sống
LESSON_DATA.push(
  { id: 791, day: 80, en: "Step out of your comfort zone.", cn: "走出你的舒适圈。", pinyin: "zǒuchū nǐ de shūshì quān.", vi: "Hãy bước ra khỏi vùng an toàn của bạn." },
  { id: 792, day: 80, en: "It's never too late to learn.", cn: "活到老，学到老。", pinyin: "huó dào lǎo, xué dào lǎo.", vi: "Học, học nữa, học mãi (Khôn ngoan không đợi tuổi)." },
  { id: 793, day: 80, en: "Every expert was once a beginner.", cn: "每个专家都曾是新手。", pinyin: "měi gè zhuānjiā dōu céng shì xīnshǒu.", vi: "Mọi chuyên gia đều từng là người bắt đầu." },
  { id: 794, day: 80, en: "Continuous effort leads to great success.", cn: "不断的努力才能铸就成功。", pinyin: "búduàn de nǔlì cái néng zhùjiù chénggōng.", vi: "Nỗ lực liên tục mới tạo nên thành công rực rỡ." },
  { id: 795, day: 80, en: "Knowledge is power.", cn: "知识就是力量。", pinyin: "zhīshi jiùshì lìliàng.", vi: "Tri thức chính là sức mạnh." },
  { id: 796, day: 80, en: "Don't compare yourself to others.", cn: "不要拿自己和别人做比较。", pinyin: "búyào ná zìjǐ hé biérén zuò bǐjiào.", vi: "Đừng đem bản thân so sánh với người khác." },
  { id: 797, day: 80, en: "Failure is just a stepping stone.", cn: "失败只是成功的垫脚石。", pinyin: "shībài zhǐshì chénggōng de diànjiǎoshí.", vi: "Thất bại chỉ là đá lót đường đến thành công." },
  { id: 798, day: 80, en: "Focus on your strengths.", cn: "专注于你的优势。", pinyin: "zhuānzhù yú nǐ de yōushì.", vi: "Hãy tập trung vào thế mạnh của bạn." },
  { id: 799, day: 80, en: "Believe you can and you're halfway there.", cn: "相信自己能行，你就已经成功了一半。", pinyin: "xiāngxìn zìjǐ néng xíng, nǐ jiù yǐjīng chénggōng le yíbàn.", vi: "Tin rằng mình làm được là bạn đã đi được một nửa chặng đường." },
  { id: 800, day: 80, en: "Keep moving forward no matter what.", cn: "无论如何，都要坚持勇往直前。", pinyin: "wúlùn rúhé, dōu yào jiānchí yǒngwǎng zhíqián.", vi: "Dù thế nào đi nữa, hãy luôn kiên trì tiến về phía trước." }
);

// ==========================================
// DỮ LIỆU CÂU HỘI THOẠI CHI TIẾT: NGÀY 81 - NGÀY 90
// ==========================================

// Ngày 81: Chủ đề - Tìm phòng & Thuê nhà
LESSON_DATA.push(
  { id: 801, day: 81, en: "I am looking for a one-bedroom apartment to rent.", cn: "我想租一套一室一厅的公寓。", pinyin: "wǒ xiǎng zū yí tào yī shì yī tīng de gōngyù.", vi: "Tôi muốn thuê một căn hộ một phòng ngủ." },
  { id: 802, day: 81, en: "How much is the monthly rent?", cn: "月租金是多少？", pinyin: "yuè zūjīn shì duōshǎo?", vi: "Tiền thuê nhà hàng tháng là bao nhiêu?" },
  { id: 803, day: 81, en: "Are utilities included in the rent?", cn: "房租包含水电费吗？", pinyin: "fángzū bāohán shuǐdiànfèi ma?", vi: "Tiền thuê nhà đã bao gồm điện nước chưa?" },
  { id: 804, day: 81, en: "How much is the security deposit?", cn: "押金要交多少？", pinyin: "yājīn yào jiāo duōshǎo?", vi: "Tiền đặt cọc là bao nhiêu?" },
  { id: 805, day: 81, en: "When can I move in?", cn: "我什么时候可以搬进来？", pinyin: "wǒ shénme shíhou kěyǐ bān jìnlái?", vi: "Khi nào tôi có thể chuyển vào ở?" },
  { id: 806, day: 81, en: "Is the apartment fully furnished?", cn: "公寓里家具齐全吗？", pinyin: "gōngyù lǐ jiājù qíquán ma?", vi: "Căn hộ đã có đầy đủ nội thất chưa?" },
  { id: 807, day: 81, en: "Can we sign a one-year lease?", cn: "我们可以签一年的合同吗？", pinyin: "wǒmen kěyǐ qiān yì nián de hétong ma?", vi: "Chúng ta có thể ký hợp đồng một năm không?" },
  { id: 808, day: 81, en: "Are pets allowed in this building?", cn: "这栋楼允许养宠物吗？", pinyin: "zhè dòng lóu yǔnxǔ yǎng chǒngwù ma?", vi: "Tòa nhà này có cho phép nuôi thú cưng không?" },
  { id: 809, day: 81, en: "I'd like to schedule a viewing tomorrow.", cn: "我想预约明天看房。", pinyin: "wǒ xiǎng yùyuē míngtiān kàn fáng.", vi: "Tôi muốn hẹn lịch xem nhà vào ngày mai." },
  { id: 810, day: 81, en: "The neighborhood is very quiet and safe.", cn: "这个社区非常安静且安全。", pinyin: "zhège shèqū fēicháng ānjìng qiě ānquán.", vi: "Khu vực xung quanh rất yên tĩnh và an toàn." }
);

// Ngày 82: Chủ đề - Đồ gia dụng & Sinh hoạt gia đình
LESSON_DATA.push(
  { id: 811, day: 82, en: "The air conditioner is not cooling properly.", cn: "空调不太制冷了。", pinyin: "kōngtiáo bú tài zhìlěng le.", vi: "Điều hòa làm lạnh không được tốt lắm." },
  { id: 812, day: 82, en: "Can you help me load the washing machine?", cn: "你能帮我把衣服放进洗衣机吗？", pinyin: "nǐ néng bāng wǒ bǎ yīfu fàng jìn xǐyījī ma?", vi: "Bạn giúp tôi cho quần áo vào máy giặt được không?" },
  { id: 813, day: 82, en: "Please sweep and mop the floor.", cn: "请扫地并拖地。", pinyin: "qǐng sǎodì bìng tuōdì.", vi: "Hãy quét nhà và lau nhà nhé." },
  { id: 814, day: 82, en: "Where is the microwave oven?", cn: "微波炉在哪里？", pinyin: "wēibōlú zài nǎlǐ?", vi: "Lò vi sóng ở đâu thế?" },
  { id: 815, day: 82, en: "We need to buy some groceries.", cn: "我们需要买些日用品。", pinyin: "wǒmen xūyào mǎi xiē rìyòngpǐn.", vi: "Chúng ta cần mua một ít đồ dùng hàng ngày." },
  { id: 816, day: 82, en: "The refrigerator is empty, let's go shopping.", cn: "冰箱空了，我们去采购吧。", pinyin: "bīngxiāng kōng le, wǒmen qù cǎigòu ba.", vi: "Tủ lạnh trống rỗng rồi, chúng ta đi mua sắm đi." },
  { id: 817, day: 82, en: "Don't forget to take out the trash.", cn: "别忘了去倒垃圾。", pinyin: "bié wàng le qù dào lājī.", vi: "Đừng quên đi đổ rác nhé." },
  { id: 818, day: 82, en: "The light bulb in the kitchen needs replacing.", cn: "厨房的灯泡需要换了。", pinyin: "chúfáng de dēngpào xūyào huàn le.", vi: "Bóng đèn trong bếp cần phải thay rồi." },
  { id: 819, day: 82, en: "I am ironing my shirt for tomorrow.", cn: "我正在熨明天要穿的衬衫。", pinyin: "wǒ zhèngzài yùn míngtiān yào chuān de chènshān.", vi: "Tôi đang là chiếc áo sơ mi để mặc vào ngày mai." },
  { id: 820, day: 82, en: "Everything in the house is neat and clean.", cn: "家里的一切都整洁干净。", pinyin: "jiālǐ de yíqiè dōu zhěngjié gānjìng.", vi: "Mọi thứ trong nhà đều gọn gàng và sạch sẽ." }
);

// Ngày 83: Chủ đề - Đi xe buýt & Tàu điện ngầm (Metro)
LESSON_DATA.push(
  { id: 821, day: 83, en: "Which line goes to the city center?", cn: "哪条地铁线去市中心？", pinyin: "nǎ tiáo dìtiě xiàn qù shì zhōngxīn?", vi: "Tuyến tàu điện ngầm nào đi đến trung tâm thành phố?" },
  { id: 822, day: 83, en: "How many stops are there from here?", cn: "从这里过去还有几站？", pinyin: "cóng zhèlǐ guòqù hái yǒu jǐ zhàn?", vi: "Từ đây đến đó còn mấy trạm nữa?" },
  { id: 823, day: 83, en: "Where do I need to transfer?", cn: "我需要在哪里换乘？", pinyin: "wǒ xūyào zài nǎlǐ huànchéng?", vi: "Tôi cần phải đổi tuyến ở đâu?" },
  { id: 824, day: 83, en: "Mind the gap between the train and the platform.", cn: "请注意列车与站台之间的空隙。", pinyin: "qǐng zhùyì lièchē yǔ zhàntái zhījiān de kòngxì.", vi: "Xin chú ý khoảng cách giữa tàu và sân ga." },
  { id: 825, day: 83, en: "Is this seat taken?", cn: "这个座位有人吗？", pinyin: "zhège zuòwèi yǒu rén ma?", vi: "Ghế này có ai ngồi chưa?" },
  { id: 826, day: 83, en: "You should tap your card here to pay.", cn: "你应该在这里刷卡付款。", pinyin: "nǐ yīnggāi zài zhèlǐ shuākǎ fùkuǎn.", vi: "Bạn nên quẹt thẻ ở đây để thanh toán." },
  { id: 827, day: 83, en: "The subway is very crowded during rush hour.", cn: "高峰期的地铁非常拥挤。", pinyin: "gāofēngqī de dìtiě fēicháng yōngjǐ.", vi: "Tàu điện ngầm rất đông đúc vào giờ cao điểm." },
  { id: 828, day: 83, en: "Next stop is the National Museum.", cn: "下一站是国家博物馆。", pinyin: "xià yí zhàn shì guójiā bówùguǎn.", vi: "Trạm tiếp theo là Bảo tàng Quốc gia." },
  { id: 829, day: 83, en: "I missed my stop!", cn: "我坐过站了！", pinyin: "wǒ zuò guò zhàn le!", vi: "Tôi đi quá trạm mất rồi!" },
  { id: 830, day: 83, en: "Where is exit B?", cn: "B出口在哪里？", pinyin: "B chūkǒu zài nǎlǐ?", vi: "Lối ra B ở đâu vậy?" }
);

// Ngày 84: Chủ đề - Thuê xe & Lái xe
LESSON_DATA.push(
  { id: 831, day: 84, en: "I'd like to rent a car for three days.", cn: "我想租一辆车租三天。", pinyin: "wǒ xiǎng zū yí liàng chē zū sān tiān.", vi: "Tôi muốn thuê một chiếc xe ô tô trong ba ngày." },
  { id: 832, day: 84, en: "Do I need an international driver's license?", cn: "我需要国际驾照吗？", pinyin: "wǒ xūyào guójì jiàzhào ma?", vi: "Tôi có cần bằng lái xe quốc tế không?" },
  { id: 833, day: 84, en: "Is insurance included in the rental price?", cn: "租金包含保险吗？", pinyin: "zūjīn bāohán bǎoxiǎn ma?", vi: "Giá thuê đã bao gồm bảo hiểm chưa?" },
  { id: 834, day: 84, en: "Please fill up the gas tank before returning.", cn: "还车前请把油箱加满。", pinyin: "huán chē qián qǐng bǎ yóuxiāng jiāmǎn.", vi: "Vui lòng đổ đầy bình xăng trước khi trả xe." },
  { id: 835, day: 84, en: "Fasten your seat belt, please.", cn: "请系好安全带。", pinyin: "qǐng jì hǎo ānquándài.", vi: "Xin vui lòng thắt dây an toàn." },
  { id: 836, day: 84, en: "Watch out for the speed limit here.", cn: "注意这里的限速。", pinyin: "zhùyì zhèlǐ de xiànsù.", vi: "Chú ý giới hạn tốc độ ở đây." },
  { id: 837, day: 84, en: "Where can I park my car?", cn: "我可以把车停在哪里？", pinyin: "wǒ kěyǐ bǎ chē tíng zài nǎlǐ?", vi: "Tôi có thể đỗ xe ở đâu?" },
  { id: 838, day: 84, en: "There is a traffic jam on the highway.", cn: "高速公路上堵车了。", pinyin: "gāosù gōnglù shàng dǔchē le.", vi: "Đang bị tắc đường trên đường cao tốc." },
  { id: 839, day: 84, en: "My car broke down on the road.", cn: "我的车在半路坏了。", pinyin: "wǒ de chē zài bànlù huài le.", vi: "Xe của tôi bị hỏng giữa đường." },
  { id: 840, day: 84, en: "Turn right at the next intersection.", cn: "在下一个十字路口右转。", pinyin: "zài xià yí gè shízìlùkǒu yòuzhuǎn.", vi: "Rẽ phải ở ngã tư tiếp theo." }
);

// Ngày 85: Chủ đề - Điệu đàng & Rèn luyện Thể chất
LESSON_DATA.push(
  { id: 841, day: 85, en: "I practice yoga three times a week.", cn: "我每周练三次瑜伽。", pinyin: "wǒ měizhōu liàn sān cì yújiā.", vi: "Tôi tập yoga ba lần một tuần." },
  { id: 842, day: 85, en: "Drinking water helps clean your skin.", cn: "多喝水有助于排毒美肤。", pinyin: "duō hē shuǐ yǒu zhù yú páidú měifū.", vi: "Uống nhiều nước giúp thải độc và đẹp da." },
  { id: 843, day: 85, en: "Getting enough sleep is vital for good health.", cn: "充足的睡眠对健康至关重要。", pinyin: "chōngzú de shuìmián duì jiànkāng zhìguān zhòngyào.", vi: "Ngủ đủ giấc là điều vô cùng quan trọng cho sức khỏe." },
  { id: 844, day: 85, en: "I try to maintain a balanced diet.", cn: "我尽量保持均衡的饮食。", pinyin: "wǒ jǐnliàng bǎochí jūnhéng de yǐnshí.", vi: "Tôi cố gắng duy trì một chế độ ăn uống cân bằng." },
  { id: 845, day: 85, en: "Stretching after exercise prevents injuries.", cn: "运动后拉伸可以防止受伤。", pinyin: "yùndòng hòu lāshēn kěyǐ fángzhǐ shòushāng.", vi: "Giãn cơ sau khi tập giúp phòng tránh chấn thương." },
  { id: 846, day: 85, en: "You look so glowing today!", cn: "你今天看起来容光焕发！", pinyin: "nǐ jīntiān kàn qǐlái róngguāng huànfā!", vi: "Hôm nay trông bạn rạng rỡ quá!" },
  { id: 847, day: 85, en: "Meditation helps reduce stress.", cn: "冥想有助于减轻压力。", pinyin: "míngxiǎng yǒu zhù yú jiǎnqīng yālì.", vi: "Thiền định giúp giảm bớt căng thẳng." },
  { id: 848, day: 85, en: "Walking 10,000 steps a day keeps you fit.", cn: "每天走一万步能保持健康。", pinyin: "měitiān zǒu yí wàn bù néng bǎochí jiànkāng.", vi: "Mỗi ngày đi bộ 10.000 bước giúp giữ gìn vóc dáng." },
  { id: 849, day: 85, en: "Avoid eating late at night.", cn: "避免吃深夜宵。", pinyin: "bìmiǎn chī shēnyè xiāo.", vi: "Tránh ăn đêm muộn." },
  { id: 850, day: 85, en: "Health is the greatest wealth.", cn: "健康是最大的财富。", pinyin: "jiànkāng shì zuì dà de cáifù.", vi: "Sức khỏe là tài sản lớn nhất." }
);

// Ngày 86: Chủ đề - Mua sắm Online & Thương mại điện tử
LESSON_DATA.push(
  { id: 851, day: 86, en: "I added this item to my shopping cart.", cn: "我把这个商品加入购物车了。", pinyin: "wǒ bǎ zhège shāngpǐn jiārù gòuwùchē le.", vi: "Tôi đã thêm sản phẩm này vào giỏ hàng." },
  { id: 852, day: 86, en: "Is there any discount code available?", cn: "有可用优惠券吗？", pinyin: "yǒu kěyòng yōuhuìquàn ma?", vi: "Có mã giảm giá nào dùng được không?" },
  { id: 853, day: 86, en: "Free shipping is offered for orders over $50.", cn: "满50美元免运费。", pinyin: "mǎn wǔshí měiyuán miǎn yùnfèi.", vi: "Miễn phí vận chuyển cho đơn hàng trên 50 USD." },
  { id: 854, day: 86, en: "I want to return this product and get a refund.", cn: "我想退货并退款。", pinyin: "wǒ xiǎng tuìhuò bìng tuìkuǎn.", vi: "Tôi muốn trả hàng và hoàn tiền." },
  { id: 855, day: 86, en: "Read the customer reviews before buying.", cn: "购买前先看看买家评价。", pinyin: "gòumǎi qián xiān kànkan mǎijiā píngjià.", vi: "Hãy đọc đánh giá của khách hàng trước khi mua." },
  { id: 856, day: 86, en: "The product quality exceeded my expectations.", cn: "产品质量超出了我的预期。", pinyin: "chǎnpǐn zhìliàng chāochū le wǒ de yùqī.", vi: "Chất lượng sản phẩm vượt ngoài mong đợi của tôi." },
  { id: 857, day: 86, en: "This store is having a flash sale today.", cn: "这家店今天有限时秒杀活动。", pinyin: "zhè jiā diàn jīntiān yǒu xiànshí miǎoshā huódòng.", vi: "Cửa hàng này hôm nay đang có chương trình Flash Sale." },
  { id: 858, day: 86, en: "How do I process the payment online?", cn: "我该如何在网上支付？", pinyin: "wǒ gāi zěnme zài wǎngshàng zhīfù?", vi: "Tôi thanh toán trực tuyến bằng cách nào?" },
  { id: 859, day: 86, en: "The package was delivered today.", cn: "包裹今天已经送达了。", pinyin: "bāoguǒ jīntiān yǐjīng sòngdá le.", vi: "Gói hàng đã được giao trong ngày hôm nay." },
  { id: 860, day: 86, en: "This item is currently out of stock.", cn: "该商品目前缺货。", pinyin: "gāi shāngpǐn mùqián quēhuò.", vi: "Sản phẩm này hiện đang hết hàng." }
);

// Ngày 87: Chủ đề - Điệu đàng Tiệc tùng & Sự kiện
LESSON_DATA.push(
  { id: 861, day: 87, en: "Who else is coming to the gathering?", cn: "还有谁会来参加聚会？", pinyin: "hái yǒu shéi huì lái cānjiā jùhuì?", vi: "Còn ai khác sẽ đến dự buổi tụ tập nữa không?" },
  { id: 862, day: 87, en: "Cheers to our friendship!", cn: "为我们的友谊干杯！", pinyin: "wèi wǒmen de yǒuì gānbēi!", vi: "Cạn ly vì tình bạn của chúng ta!" },
  { id: 863, day: 87, en: "The atmosphere here is amazing!", cn: "这里的氛围太棒了！", pinyin: "zhèlǐ de fēn圍 tài bàng le!", vi: "Bầu không khí ở đây tuyệt vời thật!" },
  { id: 864, day: 87, en: "Let's take a group photo together!", cn: "让我们一起拍张大合照吧！", pinyin: "ràng wǒmen yìqǐ pāi zhāng dà hézhào ba!", vi: "Chúng ta cùng chụp một tấm ảnh tập thể nào!" },
  { id: 865, day: 87, en: "Would you like another glass of wine?", cn: "你想再来一杯葡萄酒吗？", pinyin: "nǐ xiǎng zài lái yì bēi pútáojiǔ ma?", vi: "Bạn có muốn uống thêm một ly rượu vang nữa không?" },
  { id: 866, day: 87, en: "The music is a bit too loud.", cn: "音乐声有点太大了。", pinyin: "yīnyuè shēng yǒudiǎn tài dà le.", vi: "Tiếng nhạc hơi to quá." },
  { id: 867, day: 87, en: "Thanks for organizing such a great event!", cn: "感谢组织这么棒的活动！", pinyin: "gǎnxiè zǔzhī zhème bàng de huódòng!", vi: "Cảm ơn vì đã tổ chức một sự kiện tuyệt vời như thế này!" },
  { id: 868, day: 87, en: "Feel free to grab some snacks.", cn: "请随意享用点心。", pinyin: "qǐng suíyì xiǎngyòng diǎnxin.", vi: "Cứ tự nhiên dùng chút đồ ăn nhẹ nhé." },
  { id: 869, day: 87, en: "I need to leave early, sorry!", cn: "抱歉，我得提前一步先走了！", pinyin: "bàoqiàn, wǒ děi tíqián yí bù xiān zǒu le!", vi: "Xin lỗi, tôi phải xin phép về sớm một chút!" },
  { id: 870, day: 87, en: "It was great catching up with everyone.", cn: "很高兴能和大家叙旧。", pinyin: "hěn gāoxìng néng hé dàjiā xùjiù.", vi: "Rất vui khi được trò chuyện, ôn lại kỷ niệm với mọi người." }
);

// Ngày 88: Chủ đề - Đời sống Công sở & Đồng nghiệp
LESSON_DATA.push(
  { id: 871, day: 88, en: "Let's schedule a meeting for tomorrow morning.", cn: "我们安排在明天早上开会吧。", pinyin: "wǒmen ānpái zài míngtiān zǎoshang kāihuì ba.", vi: "Chúng ta hãy lên lịch họp vào sáng mai nhé." },
  { id: 872, day: 88, en: "Could you send me the report by 5 PM?", cn: "能在下午5点前把报告发给我吗？", pinyin: "néng zài xiàwǔ wǔ diǎn qián bǎ bàogào fā gěi wǒ ma?", vi: "Bạn có thể gửi báo cáo cho tôi trước 5 giờ chiều không?" },
  { id: 873, day: 88, en: "We need to hit our sales target this quarter.", cn: "我们这个季度要达成销售目标。", pinyin: "wǒmen zhège jìdù yào dáchéng xiāoshòu mùbiāo.", vi: "Chúng ta cần đạt chỉ tiêu doanh số trong quý này." },
  { id: 874, day: 88, en: "I am currently working on a new project.", cn: "我目前正在负责一个新项目。", pinyin: "wǒ mùqián zhèngzài fùzé yí gè xīn xiàngmù.", vi: "Hiện tại tôi đang phụ trách một dự án mới." },
  { id: 875, day: 88, en: "Let's brainstorm some fresh ideas.", cn: "让我们头脑风暴集思广益一下。", pinyin: "ràng wǒmen tóunǎofēngbào jísīguǎngyì yíxià.", vi: "Chúng ta cùng động não để tìm ra vài ý tưởng mới mẻ nhé." },
  { id: 876, day: 88, en: "The deadline has been extended to Friday.", cn: "截止日期延期到了周五。", pinyin: "jiézhǐ rìqī yánqī dào le zhōuwǔ.", vi: "Hạn chót đã được lùi đến thứ Sáu." },
  { id: 877, day: 88, en: "I appreciate your hard work and dedication.", cn: "感谢你的努力和付出。", pinyin: "gǎnxiè nǐ de nǔlì hé fùchū.", vi: "Tôi đánh giá cao sự nỗ lực và cống hiến của bạn." },
  { id: 878, day: 88, en: "Can we talk about this over coffee?", cn: "我们可以喝杯咖啡聊聊这个吗？", pinyin: "wǒmen kěyǐ hē bēi kāfēi liáoliao zhège ma?", vi: "Chúng ta có thể vừa uống cà phê vừa bàn về việc này không?" },
  { id: 879, day: 88, en: "Please keep me updated on the progress.", cn: "请随时向我更新进展。", pinyin: "qǐng suíshí xiàng wǒ gēngxīn jìnzhǎn.", vi: "Hãy luôn cập nhật tiến độ cho tôi nhé." },
  { id: 880, day: 88, en: "Teamwork makes the dream work.", cn: "团队合作才能成就梦想。", pinyin: "tuánduì hézuò cái néng chéngjiù mèngxiǎng.", vi: "Làm việc nhóm mới tạo nên thành công." }
);

// Ngày 89: Chủ đề - Cuộc sống Du học & Học tập
LESSON_DATA.push(
  { id: 881, day: 89, en: "I am studying for my final exams.", cn: "我正在备考期末考试。", pinyin: "wǒ zhèngzài bèikǎo qīmò kǎoshì.", vi: "Tôi đang ôn tập cho kỳ thi học kỳ." },
  { id: 882, day: 89, en: "Where is the main library located?", cn: "主图书馆在哪儿？", pinyin: "zhǔ túshūguǎn zài nǎr?", vi: "Thư viện chính nằm ở đâu?" },
  { id: 883, day: 89, en: "I need to submit my assignment tonight.", cn: "我今晚得提交作业。", pinyin: "wǒ jīnwǎn děi tíjiāo zuòyè.", vi: "Tối nay tôi phải nộp bài tập." },
  { id: 884, day: 89, en: "The professor's lecture was very insightful.", cn: "教授的讲座非常有启发性。", pinyin: "jiàoshòu de jiǎngzuò fēicháng yǒu qǐfāxìng.", vi: "Bài diễn thuyết của giáo sư vô cùng sâu sắc và bổ ích." },
  { id: 885, day: 89, en: "I applied for a scholarship to study abroad.", cn: "我申请了出国留学的奖学金。", pinyin: "wǒ shēnqǐng le chūguó liúxué de jiǎngxuéjīn.", vi: "Tôi đã nộp đơn xin học bổng đi du học." },
  { id: 886, day: 89, en: "Can we form a study group together?", cn: "我们可以组建一个学习小组吗？", pinyin: "wǒmen kěyǐ zǔjiàn yí gè xuéxí xiǎozǔ ma?", vi: "Chúng ta có thể lập một nhóm học tập cùng nhau không?" },
  { id: 887, day: 89, en: "The campus environment is very beautiful.", cn: "校园环境非常漂亮。", pinyin: "xiàoyuán huánjìng fēicháng piàoliang.", vi: "Khuôn viên trường học rất đẹp." },
  { id: 888, day: 89, en: "I have a presentation to make next Monday.", cn: "下周一我有一场演讲汇报。", pinyin: "xià zhōuyī wǒ yǒu yì chǎng yǎnjiǎng huìbào.", vi: "Thứ Hai tuần tới tôi có một buổi thuyết trình." },
  { id: 889, day: 89, en: "How do I register for this course?", cn: "我该怎么选修这门课程？", pinyin: "wǒ gāi zěnme xuǎnxiū zhè mén kèchéng?", vi: "Tôi đăng ký môn học này bằng cách nào?" },
  { id: 890, day: 89, en: "Practice makes perfect.", cn: "熟能生巧。", pinyin: "shú néng shēng qiǎo.", vi: "Trăm hay không bằng tay quen (Luyện tập tạo nên sự hoàn hảo)." }
);

// Ngày 90: Chủ đề - Tình yêu & Cảm xúc
LESSON_DATA.push(
  { id: 891, day: 90, en: "I fell in love with you at first sight.", cn: "我对你一见钟情。", pinyin: "wǒ duì nǐ yíjiànzhōngqíng.", vi: "Tôi đã yêu bạn ngay từ cái nhìn đầu tiên." },
  { id: 892, day: 892, en: "You mean the world to me.", cn: "你是我的一切。", pinyin: "nǐ shì wǒ de yíqiè.", vi: "Bạn là cả thế giới đối với tôi." },
  { id: 893, day: 90, en: "I will always be by your side.", cn: "我会一直陪在你身边。", pinyin: "wǒ huì yìzhí péi zài nǐ shēnbiān.", vi: "Tôi sẽ luôn ở bên cạnh bạn." },
  { id: 894, day: 90, en: "Would you like to go on a date with me?", cn: "你愿意跟我约会吗？", pinyin: "nǐ yuànyì gēn wǒ yuēhuì ma?", vi: "Bạn có muốn đi hẹn hò với tôi không?" },
  { id: 895, day: 90, en: "I miss you so much when you are away.", cn: "你不在的时候我好想你。", pinyin: "nǐ bú zài de shíhou wǒ hǎo xiǎng nǐ.", vi: "Những lúc không có bạn ở đây, tôi nhớ bạn rất nhiều." },
  { id: 896, day: 90, en: "Thank you for making me so happy.", cn: "谢谢你带给我这么多快乐。", pinyin: "xièxie nǐ dài gěi wǒ zhème duō kuàilè.", vi: "Cảm ơn bạn đã mang lại cho tôi nhiều hạnh phúc đến vậy." },
  { id: 897, day: 90, en: "We are match made in heaven.", cn: "我们真是天生一对。", pinyin: "wǒmen zhēn shì tiānshēng yí duì.", vi: "Chúng ta đúng là một cặp trời sinh." },
  { id: 898, day: 90, en: "I respect your feelings and choices.", cn: "我尊重你的感受和选择。", pinyin: "wǒ zūnzhòng nǐ de gǎnshòu hé xuǎnzé.", vi: "Tôi tôn trọng cảm xúc và lựa chọn của bạn." },
  { id: 899, day: 90, en: "True love requires trust and patience.", cn: "真爱需要信任和耐心。", pinyin: "zhēn'ài xūyào xìnrèn hé nàixīn.", vi: "Tình yêu chân chính cần có sự tin tưởng và kiên nhẫn." },
  { id: 900, day: 90, en: "I love you more than words can say.", cn: "我爱你胜过言语能表达的程度。", pinyin: "wǒ ài nǐ shèngguò yányǔ néng biǎodá de chéngdù.", vi: "Tôi yêu bạn nhiều hơn những lời có thể nói." }
);

// ==========================================
// DỮ LIỆU CÂU HỘI THOẠI CHI TIẾT: NGÀY 91 - NGÀY 100
// ==========================================

// Ngày 91: Chủ đề - Văn hóa & Lễ hội
LESSON_DATA.push(
  { id: 901, day: 91, en: "Happy Lunar New Year! Wish you good fortune!", cn: "新年快乐！祝你财源广进！", pinyin: "xīnnián kuàilè! zhù nǐ cáiyuán guǎngjìn!", vi: "Chúc mừng năm mới! Chúc bạn tài lộc dồi dào!" },
  { id: 902, day: 91, en: "What is the most traditional festival in your country?", cn: "在你们国家，最传统的节日是什么？", pinyin: "zài nǐmen guójiā, zuì chuántǒng de jiérì shì shénme?", vi: "Ở đất nước của bạn, lễ hội truyền thống nhất là gì?" },
  { id: 903, day: 91, en: "People usually eat mooncakes during Mid-Autumn Festival.", cn: "人们通常在中秋节吃月饼。", pinyin: "rénmen tōngcháng zài zhōngqiūjié chī yuèbǐng.", vi: "Mọi người thường ăn bánh trung thu vào dịp Tết Trung Thu." },
  { id: 904, day: 91, en: "How do you celebrate Christmas?", cn: "你们平时怎么过圣诞节？", pinyin: "nǐmen píngshí zěnme guò shèngdànjié?", vi: "Các bạn thường đón Giáng sinh như thế nào?" },
  { id: 905, day: 91, en: "The lion dance performance was dynamic and fantastic!", cn: "舞狮表演精彩绝伦！", pinyin: "wǔshī biǎoyǎn jīngcǎi juélún!", vi: "Màn trình diễn múa lân vô cùng đặc sắc và tuyệt vời!" },
  { id: 906, day: 91, en: "This is a long-standing local custom.", cn: "这是当地流传已久的风俗习惯。", pinyin: "zhè shì dāngdì liúchuán yǐjiǔ de fēngsú xíguàn.", vi: "Đây là phong tục tập quán lâu đời của địa phương." },
  { id: 907, day: 91, en: "I want to experience the traditional tea ceremony.", cn: "我想体验一下传统的茶道。", pinyin: "wǒ xiǎng tǐyàn yíxià chuántǒng de chádào.", vi: "Tôi muốn trải nghiệm trà đạo truyền thống." },
  { id: 908, day: 91, en: "Different cultures have different table manners.", cn: "不同的文化有不同的餐桌礼仪。", pinyin: "bùtóng de wénhuà yǒu bùtóng de cānzhuō lǐyí.", vi: "Các nền văn hóa khác nhau có những quy tắc ứng xử trên bàn ăn khác nhau." },
  { id: 909, day: 91, en: "People wear traditional costumes for the holiday.", cn: "人们在节日里穿上传统服饰。", pinyin: "rénmen zài jiérì lǐ chuān shàng chuántǒng fúshì.", vi: "Mọi người mặc trang phục truyền thống trong ngày lễ." },
  { id: 910, day: 91, en: "Respecting cultural differences is very important.", cn: "尊重文化差异是非常重要的。", pinyin: "zūnzhòng wénhuà chāyì shì fēicháng zhòngyào de.", vi: "Tôn trọng sự khác biệt văn hóa là điều vô cùng quan trọng." }
);

// Ngày 92: Chủ đề - Thủ tục Sân bay & Xuất nhập cảnh
LESSON_DATA.push(
  { id: 911, day: 92, en: "Where is the check-in counter for international flights?", cn: "国际航班的登机手续办理柜台在哪儿？", pinyin: "guójì hángbān de dēngjī shǒuxù bànlǐ guìtái zài nǎr?", vi: "Quầy làm thủ tục cho các chuyến bay quốc tế ở đâu?" },
  { id: 912, day: 92, en: "May I see your passport and boarding pass, please?", cn: "请出示您的护照和登机牌。", pinyin: "qǐng chūshì nín de hùzhào hé dēngjīpái.", vi: "Xin vui lòng cho xem hộ chiếu và thẻ lên máy bay của bạn." },
  { id: 913, day: 92, en: "Do I need to check in this luggage?", cn: "这个行李需要托运吗？", pinyin: "zhège xíngli xūyào tuōyùn ma?", vi: "Hành lý này có cần phải ký gửi không?" },
  { id: 914, day: 92, en: "What is the weight limit for carry-on baggage?", cn: "随身行李的限重是多少？", pinyin: "suíshēn xíngli de xiànzhòng shì duōshǎo?", vi: "Giới hạn trọng lượng cho hành lý xách tay là bao nhiêu?" },
  { id: 915, day: 92, en: "Please take off your coat for the security check.", cn: "安检时请脱下外套。", pinyin: "ānjiǎn shí qǐng tuōxià wàitào.", vi: "Vui lòng cởi áo khoác khi kiểm tra an ninh." },
  { id: 916, day: 92, en: "What is the purpose of your visit?", cn: "您入境的目的是什么？", pinyin: "nín rùjìng de mùdì shì shénme?", vi: "Mục đích nhập cảnh của bạn là gì?" },
  { id: 917, day: 92, en: "I am here for tourism and plan to stay for two weeks.", cn: "我是来旅游的，计划停留两周。", pinyin: "wǒ shì lái lǚyóu de, jìhuà tíngliú liǎng zhōu.", vi: "Tôi đến đây du lịch và dự định ở lại hai tuần." },
  { id: 918, day: 92, en: "Flight VN123 is delayed by one hour.", cn: "VN123航班延误了一小时。", pinyin: "VN123 hángbān yánwù le yì xiǎoshí.", vi: "Chuyến bay VN123 bị hoãn một tiếng." },
  { id: 919, day: 92, en: "Where can I claim my baggage?", cn: "我该在哪里提取行李？", pinyin: "wǒ gāi zài nǎlǐ tíqǔ xíngli?", vi: "Tôi có thể lấy hành lý ở đâu?" },
  { id: 920, day: 92, en: "Have a safe and pleasant journey!", cn: "祝您旅途平安愉快！", pinyin: "zhù nín lǚtú píng'ān yúkuài!", vi: "Chúc bạn có một chuyến đi an toàn và vui vẻ!" }
);

// Ngày 93: Chủ đề - Đổi tiền & Thanh toán Quốc tế
LESSON_DATA.push(
  { id: 921, day: 921, en: "Where can I find a currency exchange office?", cn: "哪里有外币兑换处？", pinyin: "nǎlǐ yǒu wàibì duìhuànchù?", vi: "Tôi có thể tìm điểm đổi ngoại tệ ở đâu?" },
  { id: 922, day: 922, en: "What is today's exchange rate between USD and RMB?", cn: "今天美元兑人民币的汇率是多少？", pinyin: "jīntiān měiyuán duì rénmínbì de huìlǜ shì duōshǎo?", vi: "Tỷ giá hối đoái hôm nay giữa USD và NDT là bao nhiêu?" },
  { id: 923, day: 923, en: "I would like to change 500 US dollars into Euros.", cn: "我想把500美元兑换成欧元。", pinyin: "wǒ xiǎng bǎ wǔbǎi měiyuán duìhuàn chéng ōuyuán.", vi: "Tôi muốn đổi 500 đô la Mỹ sang Euro." },
  { id: 924, day: 924, en: "Is there any commission fee for exchanging money?", cn: "兑换外币要收取手续费吗？", pinyin: "duìhuàn wàibì yào shōuqǔ shǒuxùfèi ma?", vi: "Đổi tiền có tốn phí dịch vụ không?" },
  { id: 925, day: 925, en: "Do you accept international credit cards?", cn: "你们接受国际信用卡吗？", pinyin: "nǐmen jiēshòu guójì xìnyòngkǎ ma?", vi: "Ở đây có chấp nhận thẻ tín dụng quốc tế không?" },
  { id: 926, day: 926, en: "Can I withdraw cash from this ATM?", cn: "我能从这个自动取款机取现吗？", pinyin: "wǒ néng cóng zhège zìdòng qǔkuǎnjī qǔxiàn ma?", vi: "Tôi có thể rút tiền mặt từ cây ATM này không?" },
  { id: 927, day: 927, en: "Please give me some small bills.", cn: "请给我一些小面额的钞票。", pinyin: "qǐng gěi wǒ yìxiē xiǎo miàn'é de chāopiào.", vi: "Làm ơn cho tôi xin ít tiền mệnh giá nhỏ." },
  { id: 928, day: 928, en: "My card was declined, let me try another one.", cn: "我的卡被拒绝了，我换一张试试。", pinyin: "wǒ de kǎ bèi jùjué le, wǒ huàn yì zhāng shìshi.", vi: "Thẻ của tôi bị từ chối rồi, để tôi thử lại bằng thẻ khác." },
  { id: 929, day: 929, en: "Please keep the receipt for your transaction.", cn: "请保存好您的交易凭条。", pinyin: "qǐng bǎocún hǎo nín de jiāoyì píngtiáo.", vi: "Xin vui lòng giữ lại hóa đơn giao dịch của bạn." },
  { id: 930, day: 930, en: "Digital mobile payment is widely used nowadays.", cn: "如今移动支付非常普及。", pinyin: "rújīn yídòng zhīfù fēicháng pǔjí.", vi: "Ngày nay thanh toán qua di động rất phổ biến." }
);

// Ngày 94: Chủ đề - Khách sạn & Đặt phòng
LESSON_DATA.push(
  { id: 931, day: 94, en: "I have a reservation under the name of Smith.", cn: "我有一个以史密斯名义预订的房间。", pinyin: "wǒ yǒu yí gè yǐ shǐmìsī míngyì yùdìng de fángjiān.", vi: "Tôi có đặt phòng trước dưới tên Smith." },
  { id: 932, day: 94, en: "What time is check-in and check-out?", cn: "入住和退房时间分别是几点？", pinyin: "rùzhù hé tuìfáng shíjiān fēnbié shì jǐ diǎn?", vi: "Thời gian nhận phòng và trả phòng là mấy giờ?" },
  { id: 933, day: 94, en: "Could I have a room with a ocean view?", cn: "能给我安排一间海景房吗？", pinyin: "néng gěi wǒ ānpái yì jiān hǎijǐngfáng ma?", vi: "Sắp xếp cho tôi một phòng hướng ra biển được không?" },
  { id: 934, day: 94, en: "Is breakfast included in the room rate?", cn: "房费里包含早餐吗？", pinyin: "fángfèi lǐ bāohán zǎocān ma?", vi: "Giá phòng đã bao gồm bữa sáng chưa?" },
  { id: 935, day: 94, en: "What is the Wi-Fi password for the hotel?", cn: "酒店的Wi-Fi密码是多少？", pinyin: "jiǔdiàn de Wi-Fi mìmǎ shì duōshǎo?", vi: "Mật khẩu Wi-Fi của khách sạn là gì?" },
  { id: 936, day: 94, en: "Could you send extra towels to my room?", cn: "能送些额外的毛巾到我房间吗？", pinyin: "néng sòng xiē éwài de máojīn dào wǒ fángjiān ma?", vi: "Bạn có thể mang thêm khăn tắm lên phòng cho tôi được không?" },
  { id: 937, day: 94, en: "I would like to request a wake-up call tomorrow at 7 AM.", cn: "我想预约明天早上7点的叫醒服务。", pinyin: "wǒ xiǎng yùyuē míngtiān zǎoshang qī diǎn de jiàoxǐng fúwù.", vi: "Tôi muốn đặt dịch vụ báo thức vào 7 giờ sáng mai." },
  { id: 938, day: 94, en: "My room key card is not working.", cn: "我的房卡感应不了了。", pinyin: "wǒ de fángkǎ gǎnyìng bù liǎo le.", vi: "Thẻ chìa khóa phòng của tôi không hoạt động." },
  { id: 939, day: 94, en: "Can I leave my baggage here after checking out?", cn: "退房后我可以把行李寄存在这里吗？", pinyin: "tuìfáng hòu wǒ kěyǐ bǎ xíngli jìcún zài zhèlǐ ma?", vi: "Sau khi trả phòng tôi có thể gửi lại hành lý ở đây không?" },
  { id: 940, day: 94, en: "Thank you for the excellent service!", cn: "感谢你们优质的服务！", pinyin: "gǎnxiè nǐmen yōuzhì de fúwù!", vi: "Cảm ơn vì dịch vụ tuyệt vời của quý khách sạn!" }
);

// Ngày 95: Chủ đề - Bệnh viện & Chăm sóc Y tế
LESSON_DATA.push(
  { id: 941, day: 95, en: "Where is the nearest general hospital?", cn: "最近的综合医院在哪儿？", pinyin: "zuì jìn de zōnghé yīyuàn zài nǎr?", vi: "Bệnh viện đa khoa gần nhất ở đâu?" },
  { id: 942, day: 95, en: "I need to make an appointment with a specialist.", cn: "我需要预约一位专科医生。", pinyin: "wǒ xūyào yùyuē yí wèi zhuānkē yīshēng.", vi: "Tôi cần đặt lịch hẹn với bác sĩ chuyên khoa." },
  { id: 943, day: 95, en: "What are your main symptoms?", cn: "您主要有什么症状？", pinyin: "nín zhǔyào yǒu shénme zhèngzhuàng?", vi: "Triệu chứng chính của bạn là gì?" },
  { id: 944, day: 95, en: "I have been coughing and having a high fever for two days.", cn: "我咳嗽并且发高烧两天了。", pinyin: "wǒ késou bìngqiě fā gāoshāo liǎng tiān le.", vi: "Tôi bị ho và sốt cao được hai ngày rồi." },
  { id: 945, day: 95, en: "Are you allergic to any medications?", cn: "您对什么药物过敏吗？", pinyin: "nín duì shénme yàowù guòmǐn ma?", vi: "Bạn có bị dị ứng với loại thuốc nào không?" },
  { id: 946, day: 95, en: "Take this medicine three times a day after meals.", cn: "这个药每天饭后吃三次。", pinyin: "zhège yào měitiān fànhòu chī sān cì.", vi: "Uống thuốc này ngày ba lần sau bữa ăn." },
  { id: 947, day: 95, en: "You need to get a blood test and a chest X-ray.", cn: "您需要做验血和胸片检查。", pinyin: "nín xūyào zuò yànxuè hé xiōngpiàn jiǎnchá.", vi: "Bạn cần làm xét nghiệm máu và chụp X-quang ngực." },
  { id: 948, day: 95, en: "Rest as much as possible and drink plenty of warm water.", cn: "多休息，多喝温水。", pinyin: "duō xiūxi, duō hē wēnshuǐ.", vi: "Hãy nghỉ ngơi thật nhiều và uống nhiều nước ấm." },
  { id: 949, day: 95, en: "Does my medical insurance cover this treatment?", cn: "我的医疗保险包含这个治疗吗？", pinyin: "wǒ de yīliáo bǎoxiǎn bāohán zhège zhìliáo ma?", vi: "Bảo hiểm y tế của tôi có chi trả cho liệu trình điều trị này không?" },
  { id: 950, day: 95, en: "Wishing you a speedy recovery!", cn: "祝你早日康复！", pinyin: "zhù nǐ zǎorì kāngfù!", vi: "Chúc bạn mau chóng bình phục!" }
);

// Ngày 96: Chủ đề - Pháp luật & An ninh Công cộng
LESSON_DATA.push(
  { id: 951, day: 96, en: "Please show me your identification card.", cn: "请出示您的身份证明文件。", pinyin: "qǐng chūshì nín de shēnfen zhèngmíng wénjiàn.", vi: "Vui lòng xuất trình giấy tờ tùy thân của bạn." },
  { id: 952, day: 96, en: "I'd like to report a crime.", cn: "我想报警备案。", pinyin: "wǒ xiǎng bàojǐng bèi'àn.", vi: "Tôi muốn trình báo công an." },
  { id: 953, day: 96, en: "My backpack was stolen on the bus.", cn: "我的背包在公交车上被偷了。", pinyin: "wǒ de bèibāo zài gōngjiāochē shàng bèi tōu le.", vi: "Balo của tôi đã bị trộm mất trên xe buýt." },
  { id: 954, day: 96, en: "Everyone is equal before the law.", cn: "法律面前人人平等。", pinyin: "fǎlǜ miànqián rénrén píngděng.", vi: "Mọi người đều bình đẳng trước pháp luật." },
  { id: 955, day: 96, en: "Ignorance of the law is no excuse.", cn: "无知不能作为违法的借口。", pinyin: "wúzhī bù néng zuòwéi wéifǎ de jièkǒu.", vi: "Không biết luật không phải là lý do để bào chữa." },
  { id: 956, day: 96, en: "I need to consult a lawyer for legal advice.", cn: "我需要咨询律师获取法律建议。", pinyin: "wǒ xūyào zīxún lǜshī huòqǔ fǎlǜ jiànyì.", vi: "Tôi cần tham vấn luật sư để xin tư vấn pháp lý." },
  { id: 957, day: 96, en: "Smoking is strictly prohibited in public areas.", cn: "公共场所严禁吸烟。", pinyin: "gōnggòng chǎngsuǒ yánjìn xīyān.", vi: "Nghiêm cấm hút thuốc ở những nơi công cộng." },
  { id: 958, day: 96, en: "Please keep your personal belongings safe.", cn: "请妥善保管好您的随身物品。", pinyin: "qǐng tuǒshàn bǎoguǎn hǎo nín de suíshēn wùpǐn.", vi: "Vui lòng bảo quản cẩn thận đồ dùng cá nhân của bạn." },
  { id: 959, day: 96, en: "Safety always comes first.", cn: "安全永远是第一位的。", pinyin: "ānquán yǒngyuǎn shì dì yī wèi de.", vi: "An toàn luôn luôn là ưu tiên hàng đầu." },
  { id: 960, day: 96, en: "The police arrived at the scene very quickly.", cn: "警察很快赶到了现场。", pinyin: "jǐngchá hěn kuài gǎndào le xiànchǎng.", vi: "Cảnh sát đã đến hiện trường rất nhanh chóng." }
);

// Ngày 97: Chủ đề - Môi trường Làm việc Kỹ thuật số (Remote Work)
LESSON_DATA.push(
  { id: 961, day: 97, en: "I work remotely from home twice a week.", cn: "我每周居家远程办公两次。", pinyin: "wǒ měizhōu jūjiā yuǎnchéng bàngōng liǎng cì.", vi: "Tôi làm việc từ xa tại nhà hai lần một tuần." },
  { id: 962, day: 97, en: "Can you mute your microphone when not speaking?", cn: "不用发言时能请你静音吗？", pinyin: "búyòng fāyán shí néng qǐng nǐ jìngyīn ma?", vi: "Bạn có thể tắt mic khi không phát biểu được không?" },
  { id: 963, day: 97, en: "I am sharing my screen now.", cn: "我现在正在共享屏幕。", pinyin: "wǒ xiànzài zhèngzài gòngxiǎng píngmù.", vi: "Bây giờ tôi đang chia sẻ màn hình." },
  { id: 964, day: 97, en: "Sorry, your voice is lagging a bit.", cn: "抱歉，你的声音有点卡顿。", pinyin: "bàoqiàn, nǐ de shēngyīn yǒudiǎn kǎdùn.", vi: "Xin lỗi, giọng của bạn nghe hơi bị giật/lag." },
  { id: 965, day: 97, en: "Let's hop on an online video call.", cn: "我们拉个线上视频会议吧。", pinyin: "wǒmen lā gè xiànshàng shìpín huìyì ba.", vi: "Chúng ta cùng vào một cuộc gọi video trực tuyến nhé." },
  { id: 966, day: 97, en: "I will upload the updated document to Google Drive.", cn: "我会把更新后的文档上传到谷歌云端。", pinyin: "wǒ huì bǎ gēngxīn hòu de wéndàng shàngchuán dào gǔgē yúnduān.", vi: "Tôi sẽ tải tài liệu đã cập nhật lên Google Drive." },
  { id: 967, day: 97, en: "A stable internet connection is essential for remote work.", cn: "稳定的网络对于远程办公至关重要。", pinyin: "wěndìng de wǎnglù duìyú yuǎnchéng bàngōng zhìguān zhòngyào.", vi: "Kết nối internet ổn định là vô cùng yếu tố cốt lõi cho làm việc từ xa." },
  { id: 968, day: 97, en: "I sent you a calendar invite for the discussion.", cn: "我给你发了讨论会的日历邀请。", pinyin: "wǒ gěi nǐ fā le tǎolùnhuì de rìlì yāoqǐng.", vi: "Tôi đã gửi cho bạn lời mời lịch hẹn cho buổi thảo luận." },
  { id: 969, day: 97, en: "Flexible working hours improve work-life balance.", cn: "弹性工作时间有助于平衡工作与生活。", pinyin: "tánxìng gōngzuò shíjiān yǒu zhù yú pínghéng gōngzuò yǔ shēnghuó.", vi: "Giờ làm việc linh hoạt giúp cân bằng công việc và cuộc sống." },
  { id: 970, day: 97, en: "See you all in the next virtual meeting!", cn: "下期线上会议见！", pinyin: "xià qī xiànshàng huìyì jiàn!", vi: "Hẹn gặp lại mọi người ở cuộc họp trực tuyến tiếp theo!" }
);

// Ngày 98: Chủ đề - Đàm phán & Thương lượng Hợp đồng
LESSON_DATA.push(
  { id: 971, day: 98, en: "We would like to negotiate the unit price.", cn: "我们想就单价重新进行谈判。", pinyin: "wǒmen xiǎng jiù dānjià chóngxīn jìnxíng tánpàn.", vi: "Chúng tôi muốn thương lượng lại về đơn giá." },
  { id: 972, day: 98, en: "What is your best offer for this volume?", cn: "针对这个采购量，你们能给的最低价是多少？", pinyin: "zhēnduì zhège cǎigòuliàng, nǐmen néng gěi de zuìdī jià shì duōshǎo?", vi: "Với số lượng mua này, mức giá tốt nhất các bạn có thể đưa ra là bao nhiêu?" },
  { id: 973, day: 98, en: "We are seeking a long-term win-win partnership.", cn: "我们追求的是长期互利共赢的合作关系。", pinyin: "wǒmen zhuīqiú de shì chángqī hùlì gòngyíng de hézuò guānxi.", vi: "Chúng tôi hướng tới mối quan hệ hợp tác hai bên cùng có lợi lâu dài." },
  { id: 974, day: 98, en: "Could you lower the minimum order quantity?", cn: "你能降低一下最小起订量吗？", pinyin: "nǐ néng jiàngdī yíxià zuìxiǎo qǐdìngliàng ma?", vi: "Bạn có thể giảm số lượng đặt hàng tối thiểu (MOQ) xuống được không?" },
  { id: 975, day: 98, en: "Let's review the terms and conditions in the contract.", cn: "让我们审阅一下合同条款。", pinyin: "ràng wǒmen shěnyuè yíxià hétong tiáokuǎn.", vi: "Chúng ta cùng xem xét lại các điều khoản trong hợp đồng." },
  { id: 976, day: 98, en: "Both sides need to make some compromises.", cn: "双方都需要做出一些妥协。", pinyin: "shuāngfāng dōu xūyào zuòchū yìxiē tuǒxié.", vi: "Cả hai bên đều cần đưa ra một số nhượng bộ." },
  { id: 977, day: 98, en: "We are ready to sign the agreement.", cn: "我们准备好签署这份协议了。", pinyin: "wǒmen zhǔnbèi hǎo qiānshǔ zhè fèn xiéyì le.", vi: "Chúng tôi đã sẵn sàng ký kết bản thỏa thuận này." },
  { id: 978, day: 98, en: "The payment method should be specified clearly.", cn: "付款方式应当在合同中明确规定。", pinyin: "fùkuǎn fāngshì yīngdāng zài hétong zhōng míngquè guīdìng.", vi: "Phương thức thanh toán nên được quy định rõ ràng trong hợp đồng." },
  { id: 979, day: 98, en: "Thank you for your flexibility during the negotiation.", cn: "感谢你在谈判中的灵活性。", pinyin: "gǎnxiè nǐ zài tánpàn zhōng de línghuóxìng.", vi: "Cảm ơn sự linh hoạt của bạn trong quá trình đàm phán." },
  { id: 980, day: 98, en: "It's a deal! Pleasure doing business with you.", cn: "一言为定！合作愉快。", pinyin: "yì yán wéi dìng! hézuò yúkuài.", vi: "Thống nhất như vậy nhé! Rất hân hạnh được hợp tác với bạn." }
);

// Ngày 99: Chủ đề - Ước mơ & Kế hoạch Tương lai
LESSON_DATA.push(
  { id: 981, day: 99, en: "What is your biggest dream in life?", cn: "你人生中最大的梦想是什么？", pinyin: "nǐ rénshēng zhōng zuì dà de mèngxiǎng shì shénme?", vi: "Ước mơ lớn nhất trong cuộc đời bạn là gì?" },
  { id: 982, day: 99, en: "I plan to start my own business within five years.", cn: "我计划五年内自己创业。", pinyin: "wǒ jìhuà wǔ nián nèi zìjǐ chuàngyè.", vi: "Tôi lên kế hoạch sẽ tự khởi nghiệp trong vòng 5 năm tới." },
  { id: 983, day: 99, en: "Never give up on your dreams.", cn: "永远不要放弃你的梦想。", pinyin: "yǒngyuǎn búyào fàngqì nǐ de mèngxiǎng.", vi: "Không bao giờ được từ bỏ ước mơ của bạn." },
  { id: 984, day: 99, en: "I want to travel around the world one day.", cn: "希望有朝一日我能环游世界。", pinyin: "xīwàng yǒu zhāo yī rì wǒ néng huányóu shìjiè.", vi: "Hy vọng một ngày nào đó tôi có thể đi du lịch vòng quanh thế giới." },
  { id: 985, day: 99, en: "Set clear goals and work hard to achieve them.", cn: "设立明确的目标并为之努力。", pinyin: "shèlì míngquè de mùbiāo bìng wèi zhī nǔlì.", vi: "Hãy đặt ra mục tiêu rõ ràng và nỗ lực để đạt được nó." },
  { id: 986, day: 99, en: "The future belongs to those who believe in their dreams.", cn: "未来属于那些相信梦想的人。", pinyin: "wèilái shǔyú nàxiē xiāngxìn mèngxiǎng de rén.", vi: "Tương lai thuộc về những ai tin tưởng vào ước mơ của mình." },
  { id: 987, day: 99, en: "I am taking steps to make my dream a reality.", cn: "我正在采取行动让梦想成真。", pinyin: "wǒ zhèngzài cǎiqǔ xíngdòng ràng mèngxiǎng chéngzhēn.", vi: "Tôi đang hành động để biến ước mơ thành hiện thực." },
  { id: 988, day: 99, en: "Where do you see yourself in ten years?", cn: "你认为十年后的自己会是什么样子？", pinyin: "nǐ rènwéi shí nián hòu de zìjǐ huì shì shénme yàngzi?", vi: "Bạn thấy bản thân mình như thế nào trong 10 năm tới?" },
  { id: 989, day: 99, en: "Passion and perseverance will lead you to success.", cn: "激情和坚持将带你走向成功。", pinyin: "jīqíng hé jiānchí jiāng dài nǐ zǒuxiàng chénggōng.", vi: "Đam mê và sự kiên trì sẽ dẫn lối bạn đến thành công." },
  { id: 990, day: 99, en: "Dream big and dare to fail.", cn: "敢于梦想，勇于面对失败。", pinyin: "gǎnyú mèngxiǎng, yǒngyú miànduì shībài.", vi: "Hãy mơ những giấc mơ lớn và dám đối mặt với thất bại." }
);

// Ngày 100: Công nghệ & Thiết bị Thông minh (Smart Devices & Wearable Tech)
LESSON_DATA.push(
  { id: 991, day: 100, en: "My smartwatch tracks my heart rate and daily steps accurately.", cn: "我的智能手表能准确 theo dõi 心率和每日步数。", pinyin: "wǒ de zhìnéng shǒubiǎo néng zhǔnquè gēnzōng xīnlǜ hé měirì bùshù.", vi: "Đồng hồ thông minh của tôi theo dõi nhịp tim và số bước chân hàng ngày rất chính xác." },
  { id: 992, day: 100, en: "How long does the battery last on a single charge?", cn: "充一次电电池能用多久？", pinyin: "chōng yí cì diàn diànchí néng yòng duōjiǔ?", vi: "Sạc đầy một lần thì pin dùng được bao lâu?" },
  { id: 993, day: 100, en: "These wireless earbuds support active noise cancellation.", cn: "这款无线耳机支持主动降噪。", pinyin: "zhè kuǎn wúxiàn ěrjī zhīchí zhǔdòng jiàngzào.", vi: "Tai nghe không dây này có hỗ trợ chống ồn chủ động." },
  { id: 1004, day: 100, en: "You can control all home lights via a voice assistant.", cn: "你可以通过语音助手控制家里所有的灯。", pinyin: "nǐ kěyǐ tōngguò yǔyīn zhùshǒu kòngzhì jiālǐ suǒyǒu de dēng.", vi: "Bạn có thể điều khiển toàn bộ đèn trong nhà thông qua trợ lý giọng nói." },
  { id: 995, day: 100, en: "Please pair your device with Bluetooth first.", cn: "请先将您的设备进行蓝牙配对。", pinyin: "qǐng xiān jiāng nín de shèbèi jìnxíng láyá pèiduì.", vi: "Vui lòng ghép nối thiết bị của bạn với Bluetooth trước." },
  { id: 996, day: 100, en: "The smart robot vacuum cleans the floor automatically every morning.", cn: "扫地机器人每天早上会自动扫地。", pinyin: "sǎodì jīqìrén měitiān zǎoshang huì zìdòng sǎodì.", vi: "Robot hút bụi thông minh tự động lau dọn nhà mỗi sáng." },
  { id: 997, day: 100, en: "Is this fitness tracker waterproof for swimming?", cn: "这个手环防水可以戴着游泳吗？", pinyin: "zhège shǒuhuán fángshuǐ kěyǐ dàizhe yóuyǒng ma?", vi: "Vòng đeo tay theo dõi sức khỏe này có chống nước để đeo đi bơi được không?" },
  { id: 998, day: 100, en: "I received a firmware update notification on my tablet.", cn: "我的平板电脑收到了固件更新通知。", pinyin: "wǒ de píngbǎn diànnǎo shōudào le gùjiàn gēngxīn tōngzhī.", vi: "Máy tính bảng của tôi vừa nhận được thông báo cập nhật phần cứng (firmware)." },
  { id: 999, day: 100, en: "Smart home security cameras give me peace of mind when traveling.", cn: "智能家居监控摄像头让我出门在外很放心。", pinyin: "zhìnéng jiājū jiānkòng shèxiàngtóu ràng wǒ chūmén zàiwài hěn fàngxīn.", vi: "Camera an ninh nhà thông minh giúp tôi an tâm khi đi xa." },
  { id: 1000, day: 100, en: "Congratulations on reaching Day 100 of your language learning journey!", cn: "恭喜您达到语言学习之旅的第 100 天！", pinyin: "gōngxǐ nín dádào yǔyán xuéxí zhī lǚ de dì 100 tiān!", vi: "Chúc mừng bạn đã chạm mốc Ngày 100 trong hành trình chinh phục ngôn ngữ!" }
);

// ==========================================
// CHẶNG 3: CÔNG SỞ, NGHỀ NGHIỆP & KỸ NĂNG MỀM (NGÀY 101 - NGÀY 180)
// DỮ LIỆU CÂU HỘI THOẠI CHI TIẾT: NGÀY 101 - NGÀY 110
// ==========================================

// Ngày 101: Phỏng vấn - Giới thiệu bản thân & Học vấn
LESSON_DATA.push(
  { id: 1001, day: 101, en: "Thank you for giving me the opportunity for this interview.", cn: "感谢您给我这次面试的机会。", pinyin: "gǎnxiè nín gěi wǒ zhè cì miànshì de jīhuì.", vi: "Cảm ơn quý công ty đã cho tôi cơ hội tham gia buổi phỏng vấn này." },
  { id: 1002, day: 101, en: "Could you please introduce yourself briefly?", cn: "请您简单做个自我介绍好吗？", pinyin: "qǐng nín jiǎndān zuò gè zìwǒ jièshào hǎo ma?", vi: "Bạn có thể giới thiệu bản thân một cách ngắn gọn được không?" },
  { id: 1003, day: 101, en: "I graduated from National University with a degree in Marketing.", cn: "我毕业于国立大学，获得市场营销学位。", pinyin: "wǒ bìyè yú guólì dàxué, huòdé shìchǎng yíngxiāo xuéwèi.", vi: "Tôi tốt nghiệp Đại học Quốc gia với bằng cử nhân chuyên ngành Marketing." },
  { id: 1004, day: 101, en: "I specialized in International Business during my studies.", cn: "在校期间我主修国际贸易专业。", pinyin: "zài xiào qījiān wǒ zhǔxiū guójì màoyì zhuānyè.", vi: "Tôi theo học chuyên ngành Thương mại Quốc tế trong thời gian đi học." },
  { id: 1005, day: 101, en: "I have earned several professional certifications in project management.", cn: "我考取了多项项目管理方面的专业证书。", pinyin: "wǒ kǎoqǔ le duō xiàng xiàngmù guǎnlǐ fāngmiàn de zhuānyè zhèngshū.", vi: "Tôi đã đạt được một số chứng chỉ chuyên môn về quản lý dự án." },
  { id: 1006, day: 101, en: "My academic background provided me with a solid theoretical foundation.", cn: "我的学术背景为我打下了扎实的理论基础。", pinyin: "wǒ de xuéshù bèijǐng wèi wǒ dǎxià le zhāshí de lǐlùn jīchǔ.", vi: "Nền tảng học vấn đã giúp tôi có một cơ sở lý thuyết vững chắc." },
  { id: 1007, day: 101, en: "I actively participated in student union organizations and leadership activities.", cn: "我在大学期间积极参与学生会及领导力活动。", pinyin: "wǒ zài dàxué qījiān jījí cānyù xuéshēnghuì jí lǐngdǎolì huódòng.", vi: "Tôi đã tích cực tham gia vào Hội sinh viên và các hoạt động rèn luyện kỹ năng lãnh đạo." },
  { id: 1008, day: 101, en: "I am fluent in English and proficient in Business Chinese.", cn: "我精通英语，并能熟练运用商务中文。", pinyin: "wǒ jīngtōng yīngyǔ, bìng néng shúliàn yùnyòng shāngwù zhōngwén.", vi: "Tôi thành thạo tiếng Anh và sử dụng tốt tiếng Trung thương mại." },
  { id: 1009, day: 101, en: "I completed my Master's degree abroad last year.", cn: "我去年在国外完成了硕士学位。", pinyin: "wǒ qùnián zài guówài wánchéng le shuòshì xuéwèi.", vi: "Tôi đã hoàn thành chương trình thạc sĩ ở nước ngoài vào năm ngoái." },
  { id: 1010, day: 101, en: "I consider myself a continuous learner who adapts quickly to new knowledge.", cn: "我是一个持续学习者，能快速适应新知识。", pinyin: "wǒ shì yí gè chíxù xuéxí zhě, néng kuàisù shìyīng xīn zhīshi.", vi: "Tôi coi mình là một người luôn học hỏi không ngừng và thích nghi nhanh với kiến thức mới." }
);

// Ngày 102: Phỏng vấn - Kinh nghiệm làm việc & Dự án
LESSON_DATA.push(
  { id: 1011, day: 102, en: "I have over five years of experience in human resources.", cn: "我在人力资源领域有超过五年的工作经验。", pinyin: "wǒ zài rénlì zīyuán lǐngyù yǒu chāoguò wǔ nián de gōngzuò jīngyàn.", vi: "Tôi có hơn 5 năm kinh nghiệm trong lĩnh vực nhân sự." },
  { id: 1012, day: 102, en: "In my previous role, I was responsible for digital marketing campaigns.", cn: "在之前的职位上，我负责数字营销活动。", pinyin: "zài zhīqián de zhíwèi shàng, wǒ fùzé shùzì yíngxiāo huódòng.", vi: "Ở vị trí trước đây, tôi chịu trách nhiệm cho các chiến dịch marketing kỹ thuật số." },
  { id: 1013, day: 102, en: "I successfully led a team of six members to achieve targets.", cn: "我成功带领一个六人团队完成了目标。", pinyin: "wǒ chénggōng dàilǐng yí gè liù rén tuánduì wánchéng le mùbiāo.", vi: "Tôi đã dẫn dắt thành công một đội ngũ 6 thành viên đạt được các mục tiêu." },
  { id: 1014, day: 102, en: "My main achievement was increasing sales revenue by 20%.", cn: "我的主要业绩是将销售收入提升了20%。", pinyin: "wǒ de zhǔyào yèjì shì jiāng xiāoshòu shōurù tíshēng le bǎi fēn zhī èrshí.", vi: "Thành tựu chính của tôi là tăng doanh thu bán hàng lên 20%." },
  { id: 1015, day: 102, en: "I managed client relationships and resolved complex service issues.", cn: "我负责客户关系维系并解决复杂的服务问题。", pinyin: "wǒ fùzé kèhù guānxi wéixì bìng jiějué fùzá de fúwù wèntí.", vi: "Tôi quản lý quan hệ khách hàng và giải quyết các vấn đề dịch vụ phức tạp." },
  { id: 1016, day: 102, en: "How did you handle heavy workload under pressure?", cn: "你是如何在高压下处理繁重工作的？", pinyin: "nǐ shì rúhé zài gāoyā xià chǔlǐ fánzhòng gōngzuò de?", vi: "Bạn đã xử lý khối lượng công việc lớn dưới áp lực như thế nào?" },
  { id: 1017, day: 102, en: "I optimized the operational workflow, saving 15% in operational costs.", cn: "我优化了操作流程，节省了15%的运营成本。", pinyin: "wǒ yōuhuà le cāozuò liúchéng, jiéshěng le bǎi fēn zhī shíwǔ de yùnyíng chéngběn.", vi: "Tôi đã tối ưu hóa quy trình vận hành, tiết kiệm 15% chi phí vận hành." },
  { id: 1018, day: 102, en: "I have rich hands-on experience in cross-functional coordination.", cn: "我拥有丰富的跨部门协调实战经验。", pinyin: "wǒ yǒngyǒu fēngfù de kuà bùmén xiétiáo shízhàn jīngyàn.", vi: "Tôi có nhiều kinh nghiệm thực chiến trong việc phối hợp liên phòng ban." },
  { id: 1019, day: 102, en: "Could you describe a challenging project you executed recently?", cn: "能描述一下你最近执行过的一个有挑战性的项目吗？", pinyin: "néng miáoshù yíxià nǐ zuìjìn zhíxíng guò de yí gè yǒu tiǎozhǎnxìng de xiàngmù ma?", vi: "Bạn có thể mô tả một dự án đầy thách thức mà bạn vừa thực hiện gần đây không?" },
  { id: 1020, day: 102, en: "I delivered the project on time and within budget limitations.", cn: "按时且在预算范围内交付了该项目。", pinyin: "ānshí qiě zài yùsuàn fànwéi nèi jiāofù le gāi xiàngmù.", vi: "Tôi đã bàn giao dự án đúng hạn và nằm trong giới hạn ngân sách." }
);

// Ngày 103: Phỏng vấn - Điểm mạnh (Strengths)
LESSON_DATA.push(
  { id: 1021, day: 103, en: "My greatest strength is strong analytical and problem-solving skills.", cn: "我最大的优势是强大的分析和解决问题能力。", pinyin: "wǒ zuì dà de yōushì shì qiángdà de fēnxī hé jiějué wèntí nénglì.", vi: "Điểm mạnh lớn nhất của tôi là khả năng phân tích và giải quyết vấn đề tốt." },
  { id: 1022, day: 103, en: "I am detail-oriented and very rigorous with data accuracy.", cn: "我注重细节，对数据的准确性要求非常严格。", pinyin: "wǒ zhùzhòng xìjié, duì shùjù de zhǔanquèxìng yāoqiú fēicháng yángé.", vi: "Tôi là người chú trọng chi tiết và rất khắt khe với độ chính xác của dữ liệu." },
  { id: 1023, day: 103, en: "I have excellent interpersonal and communication skills.", cn: "我拥有出色的沟通与人际交往能力。", pinyin: "wǒ yǒngyǒu chūsè de gōngtōng yǔ rénjì jiāowǎng nénglì.", vi: "Tôi có kỹ năng giao tiếp và ứng xử giữa cá nhân tuyệt vời." },
  { id: 1024, day: 103, en: "I am highly self-motivated and thrive in fast-paced workplaces.", cn: "我具有很强的自我驱动力，能在快节奏环境中高效工作。", pinyin: "wǒ jùyǒu hěn qiáng de zìwǒ qūdònglì, néng zài kuài jiézòu huánjìng zhōng gāoxiào gōngzuò.", vi: "Tôi có tinh thần tự giác cao và phát triển tốt trong môi trường làm việc tốc độ nhanh." },
  { id: 1025, day: 103, en: "My adaptability allows me to quickly master new software and tools.", cn: "我的适应能力强，能快速掌握新软件和新工具。", pinyin: "wǒ de shìyīng nénglì qiáng, néng kuàisù zhǎowò xīn ruǎnjiān hé xīn gōngjù.", vi: "Khả năng thích ứng giúp tôi nhanh chóng làm chủ các phần mềm và công cụ mới." },
  { id: 1026, day: 103, en: "I am good at prioritizing tasks to meet tight deadlines.", cn: "我善于合理安排任务优先级，以按时完成紧迫的工作。", pinyin: "wǒ shànyú hélǐ ānpái rènwu yōuxiānjí, yǐ ānshí wánchéng jǐnpò de gōngzuò.", vi: "Tôi giỏi sắp xếp thứ tự ưu tiên cho công việc để đáp ứng các hạn chót gấp." },
  { id: 1027, day: 103, en: "I bring creative perspectives to traditional marketing campaigns.", cn: "我能为传统的营销活动带来创新的视角。", pinyin: "wǒ néng wèi chuántǒng de yíngxiāo huódòng dài lái chuàngxīn de shìjiǎo.", vi: "Tôi mang lại những góc nhìn sáng tạo cho các chiến dịch marketing truyền thống." },
  { id: 1028, day: 103, en: "I am a solid team player who supports colleagues whenever needed.", cn: "我是一个有团队精神的人，总能在同事需要时给予支持。", pinyin: "wǒ shì yí gè yǒu tuánduì jīngshén de rén, zǒng néng zài tóngshì xūyào shí jǐyǔ zhīchí.", vi: "Tôi là một đồng đội đáng tin cậy, luôn sẵn sàng hỗ trợ đồng nghiệp khi cần." },
  { id: 1029, day: 103, en: "My strong negotiation skills help secure optimal supplier contracts.", cn: "我出色的谈判能力有助于争取到最佳的供应商合同。", pinyin: "wǒ chūsè de tánpàn nénglì yǒu zhù yú zhēngqǔ dào zuì jiā de gōngyìngshāng hétong.", vi: "Kỹ năng đàm phán tốt giúp tôi mang về những hợp đồng nhà cung cấp tối ưu nhất." },
  { id: 1030, day: 103, en: "I stay calm and clear-headed in crisis situations.", cn: "在危机时刻，我能保持冷静和清醒的头脑。", pinyin: "zài wēijī shíkè, wǒ néng bǎochí lěngjìng hé qīngxǐng de tóunǎo.", vi: "Tôi luôn giữ được sự bình tĩnh và đầu óc tỉnh táo trong các tình huống khủng hoảng." }
);

// Ngày 104: Phỏng vấn - Điểm yếu & Phương hướng cải thiện (Weaknesses)
LESSON_DATA.push(
  { id: 1031, day: 104, en: "Sometimes I focus too much on details, but I am learning to balance.", cn: "有时我太过于注重细节，但我正在学会如何保持平衡。", pinyin: "yǒushí wǒ tài guòyú zhùzhòng xìjié, dàn wǒ zhèngzài xuéhuì rúhé bǎochí pínghéng.", vi: "Đôi khi tôi quá tập trung vào chi tiết, nhưng tôi đang học cách cân bằng lại." },
  { id: 1032, day: 104, en: "I used to find it hard to delegate tasks, but now I trust my team.", cn: "我过去很难把任务委派给他人，但现在我学会了信任团队。", pinyin: "wǒ guòqù hěn nán bǎ rènwu wěipài gěi tārén, dàn xiànzài wǒ xuéhuì le xìnrèn tuánduì.", vi: "Tôi từng khó giao phó công việc cho người khác, nhưng giờ tôi đã biết tin tưởng đội ngũ." },
  { id: 1033, day: 104, en: "Public speaking used to intimidate me, so I joined a speaking workshop.", cn: "公开演讲曾让我紧张，所以我参加了演讲工作坊来提升。", pinyin: "gōngkāi yǎnjiǎng céng ràng wǒ jǐnzāng, suǒyǐ wǒ cānjiā le yǎnjiǎng gōngzuòfāng lái tíshēng.", vi: "Nói trước công chúng từng làm tôi e ngại, nên tôi đã tham gia một xưởng kỹ năng thuyết trình." },
  { id: 1034, day: 104, en: "I tend to take on too much work at once, so I now use management tools.", cn: "我倾向于一次承担过多工作，现在我使用管理工具来进行规划。", pinyin: "wǒ qīngxiàng yú yí cì chéngdān guòduō gōngzuò, xiànzài wǒ shǐyòng guǎnlǐ gōngjù jìnxíng guīhuà.", vi: "Tôi có khuynh hướng ôm đùm quá nhiều việc cùng lúc, nên giờ tôi dùng công cụ quản lý để lên kế hoạch." },
  { id: 1035, day: 104, en: "I am working on improving my data analysis skills with Python.", cn: "我正努力通过学习Python来提升我的数据分析能力。", pinyin: "wǒ zhèng nǔlì tōngguò xuéxí Python lái tíshēng wǒ de shùjù fēicháng nénglì.", vi: "Tôi đang nỗ lực cải thiện kỹ năng phân tích dữ liệu bằng việc học Python." },
  { id: 1036, day: 104, en: "How do you handle constructive criticism from superiors?", cn: "你如何对待上级提出的建设性批评意见？", pinyin: "nǐ rúhé duìdài shàngjí tíchū de jiànshèxìng pīpíng yìjiàn?", vi: "Bạn tiếp nhận những đóng góp ý kiến mang tính xây dựng từ cấp trên như thế nào?" },
  { id: 1037, day: 104, en: "I view feedback as an opportunity for continuous improvement.", cn: "我把反馈视为持续自我提升的绝佳机会。", pinyin: "wǒ bǎ fànkuì shìwéi chíxù zìwǒ tíshēng de juéjiā jīhuì.", vi: "Tôi coi các phản hồi là cơ hội tuyệt vời để liên tục hoàn thiện bản thân." },
  { id: 1038, day: 104, en: "I am naturally quiet in large groups, but I am practicing sharing more.", cn: "在人多的群体中我性格偏内向，但我正在练习多表达。", pinyin: "zài rén duō de qúntǐ zhōng wǒ xìnggé piān nèixiàng, dàn wǒ zhèngzài liànxí duō biǎodá.", vi: "Tôi vốn hơi trầm tính trước đám đông, nhưng tôi đang luyện tập để chia sẻ nhiều hơn." },
  { id: 1039, day: 104, en: "I used to hesitate to say no, but I am learning time boundary control.", cn: "我过去不太擅长拒绝拒绝，但现在我懂得了管理时间边界。", pinyin: "wǒ guòqù bú tài shànyú jùjué, dàn xiànzài wǒ dǒngde le guǎnlǐ shíjiān biānjiè.", vi: "Trước đây tôi ít khi biết từ chối, nhưng giờ tôi đã biết thiết lập giới hạn thời gian." },
  { id: 1040, day: 104, en: "Recognizing my weaknesses helps me proactively address them.", cn: "意识到自己的不足有助于我更主动地去做出改变。", pinyin: "yìshí dào zìjǐ de bùzú yǒu zhù yú wǒ gèng zhǔdòng de qù zuòchū gǎibiàn.", vi: "Nhận ra nhược điểm của bản thân giúp tôi chủ động cải thiện hơn." }
);

// Ngày 105: Phỏng vấn - Lý do ứng tuyển & Giá trị cốt lõi
LESSON_DATA.push(
  { id: 1041, day: 105, en: "Why are you interested in joining our company?", cn: "你为什么有兴趣加入我们公司？", pinyin: "nǐ wèishénme yǒu xìngqù jiārù wǒmen gōngsī?", vi: "Tại sao bạn lại có hứng thú gia nhập công ty chúng tôi?" },
  { id: 1042, day: 105, en: "I admire your corporate culture and commitment to innovation.", cn: "我非常钦佩贵公司的企业文化和对创新的追求。", pinyin: "wǒ fēicháng qīnpèi guì gōngsī de qǐyè wénhuà hé duì chuàngxīn de zhuīqiú.", vi: "Tôi rất khâm phục văn hóa doanh nghiệp và sự theo đuổi đổi mới của công ty." },
  { id: 1043, day: 105, en: "This position perfectly aligns with my career development goals.", cn: "这个职位与我的职业发展规划非常契合。", pinyin: "zhège zhíwèi yǔ wǒ de zhíyè fāzhǎn guīhuà fēicháng qìhé.", vi: "Vị trí này hoàn toàn phù hợp với định hướng phát triển sự nghiệp của tôi." },
  { id: 1044, day: 105, en: "Your company is an industry leader in renewable energy.", cn: "贵公司是可再生能源领域的行业领头羊。", pinyin: "guì gōngsī shì kě zǎishēng néngyuán lǐngyù de hángyè lǐngtóuyáng.", vi: "Công ty của bạn là đơn vị dẫn đầu ngành trong lĩnh vực năng lượng tái tạo." },
  { id: 1045, day: 105, en: "I want to apply my skills to drive real business impact here.", cn: "我想在此发挥我的技能，为公司创造实际的商业价值。", pinyin: "wǒ xiǎng zài cǐ fāhuī wǒ de jìnéng, wèi gōngsī chuàngzào shíji de shāngyè jiàzhí.", vi: "Tôi muốn cống hiến các kỹ năng của mình để tạo ra giá trị kinh doanh thực sự tại đây." },
  { id: 1046, day: 105, en: "I have been following your company's product launches with great interest.", cn: "我一直非常关注贵公司推出的新产品。", pinyin: "wǒ yìzhí fēicháng guānzhù guì gōngsī tuīchū de xīn chǎnpǐn.", vi: "Tôi luôn theo dõi sát sao các đợt ra mắt sản phẩm mới của công ty bạn." },
  { id: 1047, day: 105, en: "I believe my expertise can solve current challenges in your supply chain.", cn: "我相信我的专业知识能解决贵公司供应链当前的挑战。", pinyin: "wǒ xiāngxìn wǒ de zhuān業 zhīshi néng jiějué guì gōngsī gōngyìnglián dāngqián de tiǎozhǎn.", vi: "Tôi tin chuyên môn của mình có thể giải quyết các thách thức hiện tại trong chuỗi cung ứng của quý công ty." },
  { id: 1048, day: 105, en: "I am looking for a platform where I can grow long-term.", cn: "我在寻找一个可以长期共同发展的平台。", pinyin: "wǒ zài xúnzhǎo yí gè kěyǐ chángqī gòngtóng fāzhǎn de píngtái.", vi: "Tôi đang tìm kiếm một nền tảng nơi tôi có thể gắn bó và phát triển lâu dài." },
  { id: 1049, day: 105, en: "What unique perspective can you bring to our marketing team?", cn: "你能为我们的营销团队带来什么独特的视角？", pinyin: "nǐ néng wèi wǒmen de yíngxiāo tuánduì dài lái shénme dútè de shìjiǎo?", vi: "Bạn có thể mang lại góc nhìn độc đáo nào cho đội ngũ marketing của chúng tôi?" },
  { id: 1050, day: 105, en: "My values match your company's mission of client satisfaction.", cn: "我的价值观与贵公司以客户满意为本的使命相吻合。", pinyin: "wǒ de jiàzhíguān yǔ guì gōngsī yǐ kèhù mǎnyì wéi běn de shǐmìng xiāng wěnhé.", vi: "Giá trị cá nhân của tôi rất trùng khớp với sứ mệnh lấy sự hài lòng của khách hàng làm gốc của quý công ty." }
);

// Ngày 106: Phỏng vấn - Mức lương & Chế độ phúc lợi (Salary & Benefits)
LESSON_DATA.push(
  { id: 1051, day: 106, en: "What are your salary expectations for this position?", cn: "您对这个职位的期望薪资是多少？", pinyin: "nín duì zhège zhíwèi de qīwàng xīnzī shì duōshǎo?", vi: "Mức lương kỳ vọng của bạn cho vị trí này là bao nhiêu?" },
  { id: 1052, day: 106, en: "Based on market research and my background, I expect around $3,000 monthly.", cn: "结合市场行情和我的背景，我期望月薪在3000美元左右。", pinyin: "jiéhé shìchǎng hángqíng hé wǒ de bèijǐng, wǒ qīwàng yuèxīn zài sānqiān měiyuán zuǒyòu.", vi: "Dựa trên nghiên cứu thị trường và nền tảng của tôi, tôi kỳ vọng mức lương khoảng 3.000 USD/tháng." },
  { id: 1053, day: 106, en: "Is the salary package negotiable based on responsibilities?", cn: "薪酬福利方案可以根据具体职责进行协商吗？", pinyin: "xīnchóu fúlì fāng'àn kěyǐ gēnjù jùtǐ zhízé jìnxíng xiéshāng ma?", vi: "Gói đãi ngộ có thể thương lượng dựa trên trách nhiệm công việc cụ thể không?" },
  { id: 1054, day: 106, en: "My current total compensation package includes performance bonuses.", cn: "我目前的总薪酬结构里包含绩效奖金。", pinyin: "wǒ mùqián de zǒng xīnchóu jiégòu lǐ bāohán jìxiào jiǎngjīn.", vi: "Tổng gói thu nhập hiện tại của tôi bao gồm cả thưởng hiệu suất công việc." },
  { id: 1055, day: 106, en: "Does the company offer health insurance and wellness benefits?", cn: "公司提供补充医疗保险和健康福利吗？", pinyin: "gōngsī tígōng bǔchōng yīliáo bǎoxiǎn hé jiànkāng fúlì ma?", vi: "Công ty có cung cấp bảo hiểm sức khỏe bổ sung và chế độ chăm sóc sức khỏe không?" },
  { id: 1056, day: 106, en: "We offer competitive salaries with annual performance reviews.", cn: "我们提供具竞争力的薪资以及年度绩效评估。", pinyin: "wǒmen tígōng jù jìngzhēnglì de xīnzī yǐjí niándù jìxiào pínggū.", vi: "Chúng tôi cung cấp mức lương cạnh tranh đi kèm đợt đánh giá hiệu suất hàng năm." },
  { id: 1057, day: 106, en: "Are paid annual leave days offered in the first year?", cn: "入职第一年有带薪年假吗？", pinyin: "rùzhí dì yī nián yǒu dài xīn niánjià ma?", vi: "Năm đầu tiên đi làm có được hưởng ngày nghỉ phép năm có lương không?" },
  { id: 1058, day: 106, en: "I value opportunities for professional development as much as compensation.", cn: "我看重薪酬，但也同样看重职业发展的机会。", pinyin: "wǒ kànzhòng xīnchóu, dàn yě tóngyàng kànzhòng zhíyè fāzhǎn de jīhuì.", vi: "Tôi coi trọng mức đãi ngộ nhưng cũng rất xem trọng cơ hội phát triển nghề nghiệp." },
  { id: 1059, day: 106, en: "Does this role include stock options or equity?", cn: "该职位是否包含股票期权或股权激励？", pinyin: "gāi zhíwèi shìfǒu bāohán gǔpiào qīquán huò gǔquán jīlì?", vi: "Vị trí này có kèm theo quyền mua cổ phiếu hay cổ phần thưởng không?" },
  { id: 1060, day: 106, en: "I am open to discuss a fair offer that reflects my experience.", cn: "我愿接受基于我经验的合理薪资方案进行讨论。", pinyin: "wǒ yuàn jiēshòu jīyú wǒ jīngyàn de hélǐ xīnzī fāng'àn jìnxíng tǎolùn.", vi: "Tôi sẵn sàng thảo luận về một đề xuất hợp lý phản ánh đúng kinh nghiệm của tôi." }
);

// Ngày 107: Phỏng vấn - Giải quyết Tình huống & Phản xạ (Behavioral Questions)
LESSON_DATA.push(
  { id: 1061, day: 107, en: "Tell me about a time you handled a difficult conflict with a colleague.", cn: "请分享一次你处理与同事严重分歧的经历。", pinyin: "qǐng fēnxiǎng yí cì nǐ chǔlǐ yǔ tóngshì yánzhòng fēnqí de jīnglì.", vi: "Hãy kể về một lần bạn xử lý mâu thuẫn gay gắt với đồng nghiệp." },
  { id: 1062, day: 107, en: "I active listened to their concerns and found a compromise solution.", cn: "我倾听了他们的顾虑，并找到了折中的解决方案。", pinyin: "wǒ qīngtīng le tāmen de gùlǜ, bìng zhǎodào le zhézhōng de jiějué fāng'àn.", vi: "Tôi đã lắng nghe những lo ngại của họ và tìm ra một phương án thỏa hiệp." },
  { id: 1063, day: 107, en: "How do you respond when project requirements change suddenly?", cn: "当项目需求突然发生变更时，你如何应对？", pinyin: "dāng xiàngmù xūqiú tūrán fāshēng biàngēng shí, nǐ rúhé yìngduì?", vi: "Bạn ứng phó như thế nào khi các yêu cầu dự án đột ngột thay đổi?" },
  { id: 1064, day: 107, en: "I re-evaluated priority tasks and communicated with stakeholders immediately.", cn: "我重新评估了优先事项，并立即与相关方沟通。", pinyin: "wǒ chóngxīn pínggū le yōuxiān shìxiàng, bìng lìjí yǔ xiāngguānfāng gōutōng.", vi: "Tôi đã đánh giá lại các ưu tiên và trao đổi ngay lập tức với các bên liên quan." },
  { id: 1065, day: 107, en: "Describe a situation where you made a mistake and how you fixed it.", cn: "描述一次你犯错的经历以及你是如何弥补的。", pinyin: "miáoshù yí cì nǐ fàncuò de jīnglì yǐjí nǐ shì rúhé míbǔ de.", vi: "Mô tả một tình huống bạn đã phạm sai lầm và cách bạn khắc phục nó." },
  { id: 1066, day: 107, en: "I took full responsibility and took swift action to minimize losses.", cn: "我承担了全责，并采取迅速行动将损失降至最低。", pinyin: "wǒ chéngdān le quánzé, bìng cǎiqǔ xùnsù xíngdòng jiāng sǔnshī jiàng zhì zuìdī.", vi: "Tôi đã chịu trách nhiệm hoàn toàn và hành động nhanh chóng để giảm thiểu tổn thất." },
  { id: 1067, day: 107, en: "How do you keep yourself motivated during repetitive tasks?", cn: "在面对重复性工作时，你如何保持工作动力？", pinyin: "zài miànduì chóngfùxìng gōngzuò shí, nǐ rúhé bǎochí gōngzuò dònglì?", vi: "Bạn làm thế nào để duy trì động lực làm việc khi phải đối mặt với các công việc lặp đi lặp lại?" },
  { id: 1068, day: 107, en: "I break large goals down into small achievable daily milestones.", cn: "我把大目标拆解成每天可以实现的小里程碑。", pinyin: "wǒ bǎ dà mùbiāo chāijiě chéng měitiān kěyǐ shíxiàn de xiǎo lǐchéngbēi.", vi: "Tôi chia nhỏ mục tiêu lớn thành các mốc nhỏ hàng ngày có thể đạt được." },
  { id: 1069, day: 107, en: "Give an example of how you worked effectively under strict deadlines.", cn: "举例说明你如何在紧迫的截止日期前高效工作。", pinyin: "jǔlì shuōmíng nǐ rúhé zài jǐnpò de jiézhǐ rìqī qián gāoxiào gōngzuò.", vi: "Nêu một ví dụ về việc bạn đã làm việc hiệu quả như thế nào dưới những hạn chót khắt khe." },
  { id: 1070, day: 107, en: "I eliminated distractions and created a clear execution timeline.", cn: "我 Hook 排除干扰，制定了清晰的执行时间表。", pinyin: "wǒ páichú gānniǎo, zhìdìng le qīngxī de zhíxíng shíjiānbiǎo.", vi: "Tôi loai bỏ các xao nhãng và tạo ra một mốc thời gian thực hiện rõ ràng." }
);

// Ngày 108: Phỏng vấn - Câu hỏi đặt lại cho Nhà tuyển dụng (Asking Interviewer)
LESSON_DATA.push(
  { id: 1071, day: 108, en: "Do you have any questions for us about the role?", cn: "关于这个职位，您有什么想问我们的吗？", pinyin: "guānyú zhège zhíwèi, nín yǒu shénme xiǎng wèn wǒmen de ma?", vi: "Bạn có câu hỏi nào muốn dành cho chúng tôi về vị trí này không?" },
  { id: 1072, day: 108, en: "What does success look like in the first 90 days of this role?", cn: "在这个权责岗位的前90天里，怎样的表现才算成功？", pinyin: "zài zhège quánzé gǎngwèi de qián jiǔshí tiān lǐ, zěnyàng de biǎoxiàn cái suàn chénggōng?", vi: "Biểu hiện thành công trong 90 ngày đầu tiên ở vị trí này sẽ như thế nào?" },
  { id: 1073, day: 108, en: "What are the biggest challenges facing the team right now?", cn: "目前团队面临的最大挑战是什么？", pinyin: "mùqián tuánduì miànlín de zuì dà tiǎozhǎn shì shénme?", vi: "Những thách thức lớn nhất mà đội ngũ đang phải đối mặt hiện tại là gì?" },
  { id: 1074, day: 108, en: "Can you tell me more about the team structure I would be working with?", cn: "能多讲讲我即将合作的团队结构吗？", pinyin: "néng duō jiǎngjiang wǒ jíjiāng hézuò de tuánduì jiégòu ma?", vi: "Anh/chị có thể chia sẻ thêm về cơ cấu đội ngũ mà tôi sẽ làm việc cùng không?" },
  { id: 1075, day: 108, en: "What professional development opportunities are offered here?", cn: "公司提供哪些职业发展的培训机会？", pinyin: "gōngsī tígōng nǎxiē zhíyè fāzhǎn de péixùn jīhuì?", vi: "Công ty cung cấp những cơ hội đào tạo phát triển nghề nghiệp nào?" },
  { id: 1076, day: 108, en: "How would you describe the company's management style?", cn: "您如何描述公司的管理风格？", pinyin: "nín rúhé miáoshù gōngsī de guǎnlǐ fēnggé?", vi: "Anh/chị sẽ mô tả phong cách quản lý của công ty như thế nào?" },
  { id: 1077, day: 108, en: "What are the next steps in the recruitment process?", cn: "接下来的招聘流程是怎样的？", pinyin: "jiē xiàlái de zhāopìn liúchéng shì zěnyàng de?", vi: "Các bước tiếp theo trong quy trình tuyển dụng là gì?" },
  { id: 1078, day: 108, en: "How does the company support work-life balance for employees?", cn: "公司如何支持员工平衡工作与生活？", pinyin: "gōngsī rúhé zhīchí yuángōng pínghéng gōngzuò yǔ shēnghuó?", vi: "Công ty hỗ trợ nhân viên cân bằng công việc và cuộc sống như thế nào?" },
  { id: 1079, day: 108, en: "What do you enjoy most about working at this company?", cn: "在此工作，您最喜欢公司哪一点？", pinyin: "zài cǐ gōngzuò, nín zuì xǐhuan gōngsī nǎ yì diǎn?", vi: "Khi làm việc tại đây, điều gì khiến anh/chị cảm thấy yêu thích nhất?" },
  { id: 1080, day: 108, en: "When can I expect to hear back regarding the interview results?", cn: "我大概什么时候能收到面试结果通知？", pinyin: "wǒ dàgài shénme shíhou néng shōudào miànshì jiéguǒ tōngzhī?", vi: "Khoảng khi nào tôi có thể nhận được thông báo kết quả phỏng vấn?" }
);

// Ngày 109: Thư Cảm ơn & Kết quả Phỏng vấn (Follow-up & Thank You)
LESSON_DATA.push(
  { id: 1081, day: 109, en: "I am writing to express my appreciation for the interview today.", cn: "我写信是为了表达对今天面试的感谢。", pinyin: "wǒ xiě xìn shì wèi le biǎodá duì jīntiān miànshì de gǎnxiè.", vi: "Tôi viết thư này để gửi lời cảm ơn quý công ty về buổi phỏng vấn hôm nay." },
  { id: 1082, day: 109, en: "It was a pleasure learning more about your strategic goals.", cn: "很高兴能够深入了解贵公司的战略目标。", pinyin: "hěn gāoxìng nénggòu shēnrù liǎojiě guì gōngsī de zhànlüè mùbiāo.", vi: "Rất vui khi được tìm hiểu sâu hơn về các mục tiêu chiến lược của quý công ty." },
  { id: 1083, day: 109, en: "I remain very enthusiastic about the Senior Analyst opportunity.", cn: "我对高级分析师这个职位依然保持着极大的热情。", pinyin: "wǒ duì gāojí fēnxīshī zhège zhíwèi yīrán bǎochí zhe jídà de rèqíng.", vi: "Tôi vẫn rất hào hứng với cơ hội ở vị trí Chuyên viên phân tích cao cấp." },
  { id: 1084, day: 109, en: "Please feel free to contact me if you need additional references.", cn: "如果您需要额外的推荐人信息，请随时联系我。", pinyin: "rúguǒ nín xūyào éwài de tuījiànrén xìnxī, qǐng suíshí liánxì wǒ.", vi: "Xin vui lòng liên hệ nếu anh/chị cần thêm thông tin người tham chiếu." },
  { id: 1085, day: 109, en: "I am confident that my skill set aligns well with your current needs.", cn: "我确信我的技能组合与贵公司当前的需求高度契合。", pinyin: "wǒ quèxìn wǒ de jìnéng zǔhé yǔ guì gōngsī dāngqián de xūqiú gāodù qìhé.", vi: "Tôi tin chắc rằng bộ kỹ năng của mình rất phù hợp với nhu cầu hiện tại của quý công ty." },
  { id: 1086, day: 109, en: "I am pleased to accept the job offer extended by your company.", cn: "我很高兴接受贵公司发出的录用通知。", pinyin: "wǒ hěn gāoxìng jiēshòu guì gōngsī fāchū de lùyòng tōngzhī.", vi: "Tôi rất vui mừng khi chấp nhận thư mời nhận việc từ quý công ty." },
  { id: 1087, day: 109, en: "Could we confirm the official start date for my onboarding?", cn: "我们能确认一下我入职的正式报到日期吗？", pinyin: "wǒmen néng quèrèn yíxià wǒ rùzhí de zhèngshì bàodào rìqī ma?", vi: "Chúng ta có thể xác nhận ngày nhận việc chính thức của tôi được không?" },
  { id: 1088, day: 109, en: "Thank you for the opportunity, but I have accepted another offer.", cn: "感谢贵公司给予的机会，但我已接受了另一份录取。", pinyin: "gǎnxiè guì gōngsī jǐyǔ de jīhuì, dàn wǒ yǐ jiēshòu le lìng yì fèn lùyòng.", vi: "Cảm ơn quý công ty đã trao cơ hội, nhưng tôi đã chấp nhận một lời đề nghị làm việc khác." },
  { id: 1089, day: 109, en: "I hope we can keep in touch for future potential collaborations.", cn: "希望我们能保持联系，期待未来有合作的可能。", pinyin: "xīwàng wǒmen néng bǎochí liánxì, qīdài wèilái yǒu hézuò de kěnéng.", vi: "Tôi hy vọng chúng ta có thể giữ liên lạc cho các cơ hội hợp tác tiềm năng trong tương lai." },
  { id: 1090, day: 109, en: "I look forward to hearing from your HR department soon.", cn: "我期待尽快收到贵公司人力资源部的回复。", pinyin: "wǒ qīdài jìnkuài shōudào guì gōngsī rénlì zīyuánbù de huífù.", vi: "Tôi mong sớm nhận được phản hồi từ phòng Nhân sự của quý công ty." }
);

// Ngày 110: Tự tin & Phong thái Chuyên nghiệp (Professional Mindset)
LESSON_DATA.push(
  { id: 1091, day: 110, en: "Maintaining a professional posture leaves a great first impression.", cn: "保持专业的姿态能留下良好的第一印象。", pinyin: "bǎochí zhuānyè de zītài néng liúxià liánghǎo de dì yī yìnxiàng.", vi: "Duy trì tác phong chuyên nghiệp mang lại ấn tượng đầu tiên rất tốt." },
  { id: 1092, day: 110, en: "A firm handshake and warm eye contact build trust.", cn: "坚定有力的握手和友善的眼神交流能建立信任。", pinyin: "jiāndìng yǒulì de wòshǒu hé yǒu shàn de yǎnshén jiāoliú néng jiànlì xìnrèn.", vi: "Cái bắt tay chắc chắn và ánh mắt thân thiện giúp xây dựng niềm tin." },
  { id: 1093, day: 110, en: "Punctuality demonstrates your reliability and respect for others.", cn: "守时体现了你的可靠以及对他人的尊重。", pinyin: "shǒushí tǐxiàn le nǐ de kěkào yǐjí duì tārén de zūnzhòng.", vi: "Sự đúng giờ thể hiện mức độ đáng tin cậy và sự tôn trọng dành cho người khác." },
  { id: 1094, day: 110, en: "Dress appropriately according to the corporate dress code.", cn: "根据公司的着装要求穿着得体。", pinyin: "gēnjù gōngsī de zhuózhuāng yāoqiú chuānzhuó détǐ.", vi: "Ăn mặc lịch sự và đúng theo quy định trang phục của công ty." },
  { id: 1095, day: 110, en: "Speak clearly with a calm and confident tone of voice.", cn: "用沉稳自信的语调清晰表达。", pinyin: "yòng chénwěn zìxìn de yǔdiào qīngxī biǎodá.", vi: "Nói năng rõ ràng với tông giọng điềm tĩnh và tự tin." },
  { id: 1096, day: 110, en: "Preparation is the foundation of interview confidence.", cn: "充分的准备是面试自信的基石。", pinyin: "chōngfèn de zhǔnbèi shì miànshì zìxìn de jīshí.", vi: "Sự chuẩn bị chu đáo là nền tảng cho sự tự tin khi phỏng vấn." },
  { id: 1097, day: 110, en: "Be honest about what you know and eager to learn what you don't.", cn: "对已知的事实诚实，对未知的事物保持求知欲。", pinyin: "duì yǐzhī de shìshí chéngshí, duì wèizhī de shìwù bǎochí qiúzhīyù.", vi: "Trung thực với những gì mình biết và luôn khao khát học hỏi những điều chưa biết." },
  { id: 1098, day: 110, en: "Positive body language enhances your overall personal charisma.", cn: "积极的肢体语言能提升你的整体个人魅力。", pinyin: "jījí de zhītǐ yǔyán néng tíshēng nǐ de zhěngtǐ gèrén mèilì.", vi: "Ngôn ngữ cơ thể tích cực làm tăng thêm sức hút cá nhân của bạn." },
  { id: 1099, day: 110, en: "Always structure your thoughts logically before answering.", cn: "回答问题前，务必先梳理好逻辑思路。", pinyin: "huídá wèntí qián, wùbì xiān shūlǐ hǎo luójí sīlù.", vi: "Luôn sắp xếp tư duy một cách logic trước khi trả lời." },
  { id: 1100, day: 110, en: "Every interview experience brings you closer to your ideal job.", cn: "每一次面试经历都会让你离理想的工作更近一步。", pinyin: "měi yí cì miànshì jīnglì dōu huì ràng nǐ lí lǐxiǎng de gōngzuò gèng jìn yí bù.", vi: "Mỗi trải nghiệm phỏng vấn đều đưa bạn đến gần hơn với công việc mơ ước." }
);

// ==========================================
// CHẶNG 3: CÔNG SỞ, NGHỀ NGHIỆP & KỸ NĂNG MỀM (TIẾP THEO)
// DỮ LIỆU CÂU HỘI THOẠI CHI TIẾT: NGÀY 111 - NGÀY 120
// ==========================================

// Ngày 111: Giao tiếp Nội bộ - Chào hỏi & Làm quen đồng nghiệp mới
LESSON_DATA.push(
  { id: 1101, day: 111, en: "Welcome to the team! We are thrilled to have you here.", cn: "欢迎加入团队！我们非常高兴你能来。", pinyin: "huānyíng jiārù tuánduì! wǒmen fēicháng gāoxìng nǐ néng lái.", vi: "Chào mừng bạn gia nhập đội ngũ! Chúng tôi rất vui khi có sự góp mặt của bạn." },
  { id: 1102, day: 111, en: "Hi everyone, today is my first day in the IT department.", cn: "大家好，今天是我在技术部的第一天上班。", pinyin: "dàjiā hǎo, jīntiān shì wǒ zài jìshùbù de dì yī tiān shàngbān.", vi: "Chào mọi người, hôm nay là ngày làm việc đầu tiên của tôi ở phòng IT." },
  { id: 1103, day: 111, en: "Let me show you around the office and introduce the team.", cn: "我带你参观一下办公室，顺便介绍一下团队成员。", pinyin: "wǒ dài nǐ cānguān yíxià bànɡōnɡshì, shùnbiàn jièshào yíxià tuánduì chéngyuán.", vi: "Để tôi dẫn bạn đi tham quan văn phòng và giới thiệu các thành viên trong team." },
  { id: 1104, day: 111, en: "If you have any questions, please feel free to ask me.", cn: "如果你有任何问题，随时都可以问我。", pinyin: "rúguǒ nǐ yǒu rènhé wèntí, suíshí dōu kěyǐ wèn wǒ.", vi: "Nếu bạn có bất kỳ thắc mắc nào, cứ thoải mái hỏi tôi nhé." },
  { id: 1105, day: 111, en: "Where is your desk located? I can help you set up your PC.", cn: "你的工位在哪里？我可以帮你配置电脑。", pinyin: "nǐ de gōngwèi zài nǎlǐ? wǒ kěyǐ bāng nǐ pèizhì diànnǎo.", vi: "Vị trí ngồi của bạn ở đâu? Tôi có thể giúp bạn cài đặt máy tính." },
  { id: 1106, day: 111, en: "Would you like to join us for lunch today?", cn: "今天中午要不要和我们一起吃午饭？", pinyin: "jīntiān zhōngwǔ yào bú yào hé wǒmen yìqǐ chī wǔfàn?", vi: "Trưa nay bạn có muốn ăn trưa cùng chúng tôi không?" },
  { id: 1107, day: 111, en: "Nice to meet you! I will be working as the new Product Manager.", cn: "很高兴认识大家！我将担任新的产品经理。", pinyin: "hěn gāoxìng rènshi dàjiā! wǒ jiāng dānrèn xīn de chǎnpǐn jīnglǐ.", vi: "Rất vui được gặp mọi người! Tôi sẽ đảm nhận vị trí Quản lý sản phẩm mới." },
  { id: 1108, day: 111, en: "Here is the pantry, where you can get free coffee and tea.", cn: "这里是茶水间，你可以随时来喝咖啡或茶。", pinyin: "zhèlǐ shì cháshuǐjiān, nǐ kěyǐ suíshí lái hē kāfēi huò chá.", vi: "Đây là khu vực pantry, bạn có thể uống cà phê hoặc trà miễn phí ở đây." },
  { id: 1109, day: 111, en: "We usually have a weekly catch-up meeting every Monday morning.", cn: "我们通常每周一早上开例会。", pinyin: "wǒmen tōngcháng měi zhōuyī zǎoshang kāi lìhuì.", vi: "Chúng tôi thường họp giao ban định kỳ vào sáng thứ Hai hàng tuần." },
  { id: 1110, day: 111, en: "I am looking forward to working with all of you.", cn: "我很期待在接下来的工作中与大家愉快合作。", pinyin: "wǒ hěn qīdài zài jiē xiàlái de gōngzuò zhōng yǔ dàjiā yúkuài hézuò.", vi: "Tôi rất mong chờ được hợp tác vui vẻ với tất cả mọi người." }
);

// Ngày 112: Giao tiếp Nội bộ - Phân công công việc (Task Assignment)
LESSON_DATA.push(
  { id: 1111, day: 112, en: "I would like to assign this task to you because of your background.", cn: "考虑到你的背景，我想把这项任务交给你。", pinyin: "kǎolǜ dào nǐ de bèijǐng, wǒ xiǎng bǎ zhè xiàng rènwu jiāo gěi nǐ.", vi: "Dựa trên chuyên môn của bạn, tôi muốn giao nhiệm vụ này cho bạn." },
  { id: 1112, day: 112, en: "Who is in charge of preparing the quarterly financial report?", cn: "谁负责准备季度财务报告？", pinyin: "shéi fùzé zhǔnbèi jìdù cáiwù bàoɡào?", vi: "Ai chịu trách nhiệm chuẩn bị báo cáo tài chính quý?" },
  { id: 1113, day: 112, en: "Could you take ownership of the market research module?", cn: "你能全权负责市场调研这个模块吗？", pinyin: "nǐ néng quánquán fùzé shìchǎng diàoyán zhège mókuài ma?", vi: "Bạn có thể phụ trách chính phần nghiên cứu thị trường được không?" },
  { id: 1114, day: 112, en: "Please ensure this task is completed before 5 PM today.", cn: "请确保今天下午5点之前完成这项任务。", pinyin: "qǐng quèbǎo jīntiān xiàwǔ wǔ diǎn zhīqián wánchéng zhè xiàng rènwu.", vi: "Hãy đảm bảo công việc này được hoàn thành trước 5 giờ chiều nay." },
  { id: 1115, day: 112, en: "Let's divide this project into three main action items.", cn: "让我们把这个项目拆分成三个主要执行事项。", pinyin: "ràng wǒmen bǎ zhège xiàngmù chāifēn chéng sān gè zhǔyào zhíxíng shìxiàng.", vi: "Chúng ta hãy chia dự án này thành ba hạng mục công việc chính." },
  { id: 1116, day: 112, en: "David will assist you with the technical implementation.", cn: "大卫会协助你完成技术实施部分。", pinyin: "dàwèi huì xiézhù nǐ wánchéng jìshù shíshī bùfen.", vi: "David sẽ hỗ trợ bạn về mặt triển khai kỹ thuật." },
  { id: 1117, day: 112, en: "Are you clear about the deliverables required for this task?", cn: "你清楚这项任务需要交付的具体成果吗？", pinyin: "nǐ qīngchu zhè xiàng rènwu xūyào jiāofù de jùtǐ chéngguǒ ma?", vi: "Bạn đã nắm rõ các sản phẩm đầu ra cần hoàn thành cho công việc này chưa?" },
  { id: 1118, day: 112, en: "I need to delegate some of my responsibilities this week.", cn: "这周我需要分派一部分工作职责出去。", pinyin: "zhè zhōu wǒ xūyào fēnpài yíbùfen gōngzuò zhízé chūqù.", vi: "Tuần này tôi cần giao bớt một số trách nhiệm công việc cho người khác." },
  { id: 1119, day: 112, en: "Please make sure everyone knows their specific role.", cn: "请确保每个人都清楚各自的具体分工。", pinyin: "qǐng quèbǎo měi gè rén dōu qīngchu gèzì de jùtǐ fēngōng.", vi: "Vui lòng đảm bảo mọi người đều biết rõ phân công cụ thể của mình." },
  { id: 1120, day: 112, en: "Do you have enough capacity to take on an additional project?", cn: "你现在手头还有精力承担额外的项目吗？", pinyin: "nǐ xiànzài shǒutóu hái yǒu jīnglì chéngdān éwài de xiàngmù ma?", vi: "Hiện tại bạn có còn đủ quỹ thời gian để đảm nhận thêm một dự án nữa không?" }
);

// Ngày 113: Giao tiếp Nội bộ - Báo cáo tiến độ (Status Updates & Progress)
LESSON_DATA.push(
  { id: 1121, day: 113, en: "Everything is progressing according to the original schedule.", cn: "一切都在按原定计划顺利推进。", pinyin: "yìqiè dōu zài àn yuándìng jìhuà shùnlì tuījìn.", vi: "Mọi thứ đang tiến triển thuận lợi theo đúng kế hoạch ban đầu." },
  { id: 1122, day: 113, en: "We are currently running a few days behind schedule.", cn: "我们目前比原计划落后了几天进度。", pinyin: "wǒmen mùqián bǐ yuán jìhuà luòhòu le jǐ tiān jìdù.", vi: "Hiện tại chúng tôi đang chậm tiến độ vài ngày so với kế hoạch." },
  { id: 1123, day: 113, en: "I will send you a progress report by the end of today.", cn: "我会在今天下班前给你发一份进度报告。", pinyin: "wǒ huì zài jīntiān xiàbān qián gěi nǐ fā yí fèn jìdù bàoɡào.", vi: "Tôi sẽ gửi cho bạn bản báo cáo tiến độ trước khi tan làm hôm nay." },
  { id: 1124, day: 113, en: "We encountered an unexpected bottleneck in the development phase.", cn: "我们在开发阶段遇到了一个意料之外的瓶颈。", pinyin: "wǒmen yùdào le yí gè yìliào zhīwài de píngjǐng zài kāifā jiēduàn.", vi: "Chúng tôi đã gặp phải một điểm nghẽn bất ngờ trong giai đoạn phát triển." },
  { id: 1125, day: 113, en: "So far, we have completed about 80% of the workload.", cn: "到目前为止，我们已经完成了大约80%的工作量。", pinyin: "dào mùqián wéizhǐ, wǒmen yǐjīng wánchéng le dàyuē bǎi fēn zhī bābái de gōngzuòliàng.", vi: "Tính đến nay, chúng tôi đã hoàn thành khoảng 80% khối lượng công việc." },
  { id: 1126, day: 113, en: "Can you give me a quick status update on the marketing campaign?", cn: "能简要跟我同步一下营销活动的最新进展吗？", pinyin: "néng jiǎnyào gēn wǒ tóngbù yíxià yíngxiāo huódòng de zuìxīn jīnzǎn ma?", vi: "Bạn có thể cập nhật nhanh cho tôi tình hình mới nhất về chiến dịch marketing không?" },
  { id: 1127, day: 113, en: "We need to catch up to meet the hard deadline next Friday.", cn: "为了赶上下周五的最后期限，我们需要加快进度。", pinyin: "wèile gǎn shàng xià zhōuwǔ de zuìhòu qīxiàn, wǒmen xūyào jiākuài jìdù.", vi: "Chúng ta cần đẩy nhanh tiến độ để kịp hạn chót vào thứ Sáu tuần tới." },
  { id: 1128, day: 113, en: "The design phase is complete, and we are moving to testing.", cn: "设计阶段已完成，我们正进入测试阶段。", pinyin: "shèjì jiēduàn yǐ wánchéng, wǒmen zhèng jìnrù cèshì jiēduàn.", vi: "Giai đoạn thiết kế đã xong, chúng tôi đang chuyển sang giai đoạn kiểm thử." },
  { id: 1129, day: 113, en: "I will keep you updated on any further developments.", cn: "后续如有任何新进展，我会及时向您汇报。", pinyin: "hòuxù rú yǒu rènhé xīn jīnzǎn, wǒ huì jíshí xiàng nín huìbào.", vi: "Tôi sẽ tiếp tục cập nhật cho bạn nếu có bất kỳ biến chuyển mới nào." },
  { id: 1130, day: 113, en: "We need more manpower to get this project back on track.", cn: "我们需要增加人手以使项目回到正轨。", pinyin: "wǒmen xūyào zēngjiā rénshǒu yǐ shǐ xiàngmù huídào zhèngguǐ.", vi: "Chúng ta cần thêm nhân lực để đưa dự án này trở lại đúng tiến độ." }
);

// Ngày 114: Giao tiếp Nội bộ - Phối hợp & Nhờ hỗ trợ (Asking for Assistance)
LESSON_DATA.push(
  { id: 1131, day: 114, en: "Could you please give me a hand with this data sheet?", cn: "你能帮我处理一下这张数据表吗？", pinyin: "nǐ néng bāng wǒ chǔlǐ yíxià zhè zhāng shùjù biǎo ma?", vi: "Bạn có thể phụ tôi một tay xử lý bảng dữ liệu này được không?" },
  { id: 1132, day: 114, en: "I would appreciate your input on this proposal.", cn: "如果您能对这份提案提出建议，我将不胜感激。", pinyin: "rúguǒ nín néng duì zhè fèn tí'àn tíchū jiànyì, wǒ jiāng búshèng gǎnjī.", vi: "Tôi rất trân trọng những đóng góp ý kiến của bạn cho bản đề xuất này." },
  { id: 1133, day: 114, en: "Is there anyone available to cover my shift tomorrow?", cn: "明天有谁能替我值一下班吗？", pinyin: "míngtiān yǒu shéi néng tì wǒ zhí yíxià bān ma?", vi: "Có ai có thể trực thay ca cho tôi vào ngày mai được không?" },
  { id: 1134, day: 114, en: "I am currently tied up, but I can help you later afternoon.", cn: "我现在手头有点忙，不过今天下午晚些时候可以帮您。", pinyin: "wǒ xiànzài shǒutóu yǒudiǎn máng, búguò jīntiān xiàwǔ wǎn xiē shíhou kěyǐ bāng nín.", vi: "Hiện tại tôi đang bận, nhưng tầm muộn chiều nay tôi có thể giúp bạn." },
  { id: 1135, day: 114, en: "Let's cross-check these numbers together to avoid errors.", cn: "让我们一起核对一下这些数据，以免出错。", pinyin: "ràng wǒmen yìqǐ héduì yíxià zhèxiē shùjù, yǐmiǎn chūcuò.", vi: "Chúng ta hãy cùng nhau đối soát các con số này để tránh sai sót." },
  { id: 1136, day: 114, en: "Thanks for your timely support; it saved us a lot of time.", cn: "感谢你的及时协助，这为我们节省了大量时间。", pinyin: "gǎnxiè nǐ de jíshí xiézhù, zhè wèi wǒmen jiéshěng le dàliàng shíjiān.", vi: "Cảm ơn sự hỗ trợ kịp thời của bạn; nó đã giúp chúng tôi tiết kiệm rất nhiều thời gian." },
  { id: 1137, day: 114, en: "Sorry to bother you, but do you know how to fix printer jams?", cn: "不好意思打扰一下，你知道打印机卡纸怎么弄吗？", pinyin: "bù hǎoyìsi dǎrǎo yíxià, nǐ zhīdào dǎyìnjī kǎzhǐ zěnme nòng ma?", vi: "Xin lỗi đã làm phiền, nhưng bạn có biết cách sửa máy in bị kẹt giấy không?" },
  { id: 1138, day: 114, en: "We need to collaborate closely with the finance team on this.", cn: "在件事上，我们需要与财务团队紧密合作。", pinyin: "zài zhè jiàn shì shàng, wǒmen xūyào yǔ cáiwù tuánduì jǐnmì hézuò.", vi: "Về việc này, chúng ta cần phối hợp chặt chẽ với bộ phận tài chính." },
  { id: 1139, day: 114, en: "Feel free to ping me if you run into any technical difficulties.", cn: "如果你遇到任何技术困难，随时发消息给我。", pinyin: "rúguǒ nǐ yùdào rènhé jìshù kùnnan, suíshí fā xiāoxi gěi wǒ.", vi: "Cứ nhắn tin cho tôi nếu bạn gặp bất kỳ khó khăn nào về mặt kỹ thuật." },
  { id: 1140, day: 114, en: "Two heads are better than one; let's figure this out together.", cn: "三个臭皮匠顶个诸葛亮，我们一起想办法吧。", pinyin: "sān gè chòupíjiàng dǐng gè zhūgěliàng, wǒmen yìqǐ xiǎng bànfǎ ba.", vi: "Hai cái đầu vẫn tốt hơn một cái; chúng ta cùng giải quyết vấn đề này nhé." }
);

// Ngày 115: Giao tiếp Nội bộ - Xin nghỉ phép & Bàn giao (Leave Request & Handover)
LESSON_DATA.push(
  { id: 1141, day: 115, en: "I would like to request three days of annual leave next week.", cn: "我想申请下周三天的年假。", pinyin: "wǒ xiǎng shēnqǐng xià zhōu sān tiān de niánjià.", vi: "Tôi muốn xin nghỉ phép năm 3 ngày vào tuần tới." },
  { id: 1142, day: 115, en: "I need to take sick leave today due to a severe migraine.", cn: "由于严重偏头痛，我今天需要请病假。", pinyin: "yóuyú yánzhòng piāntóutòng, wǒ jīntiān xūyào qǐng bìngjià.", vi: "Do bị đau nửa đầu dữ dội, hôm nay tôi xin phép nghỉ chứng bệnh." },
  { id: 1143, day: 115, en: "I have submitted my leave application through the internal HR system.", cn: "我已经通过内部HR系统提交了请假申请。", pinyin: "wǒ yǐjīng tōngguò nèibù HR xìtǒng tíjiāo le qǐngjià shēnqǐng.", vi: "Tôi đã nộp đơn xin nghỉ phép qua hệ thống HR nội bộ." },
  { id: 1144, day: 115, en: "Sarah will be covering my responsibilities while I am away.", cn: "在我休假期间，萨拉会代为处理我的工作。", pinyin: "zài wǒ xiūjià qījiān, sàlā huì dài wéi chǔlǐ wǒ de gōngzuò.", vi: "Sarah sẽ đảm nhận và xử lý công việc của tôi trong lúc tôi vắng mặt." },
  { id: 1145, day: 115, en: "I will make sure all my urgent tasks are completed before leaving.", cn: "休假前我会确保把所有紧急任务都处理完毕。", pinyin: "xiūjià qián wǒ huì quèbǎo bǎ suǒyǒu jǐnjí rènwu dōu chǔlǐ wánbì.", vi: "Tôi sẽ đảm bảo giải quyết xong mọi việc gấp trước khi nghỉ." },
  { id: 1146, day: 115, en: "Here is the handover document detailing current client accounts.", cn: "这是交接文档，里面详细记录了当前的客户账户情况。", pinyin: "zhè shì jiāojiē wéndàng, lǐmiàn xiángxì jìlù le dāngqián de kèhù zhànghù qíngkuàng.", vi: "Đây là tài liệu bàn giao ghi rõ thông tin chi tiết các tài khoản khách hàng hiện tại." },
  { id: 1147, day: 115, en: "In case of emergency, you can reach me via mobile phone.", cn: "如有紧急情况，您可以通过手机联系我。", pinyin: "rú yǒu jǐnjí qíngkuàng, nín kěyǐ tōngguò shǒujī liánxì wǒ.", vi: "Trong trường hợp khẩn cấp, anh/chị có thể liên hệ với tôi qua điện thoại di động." },
  { id: 1148, day: 115, en: "Is your leave application approved by the department manager?", cn: "你的请假申请获得部门经理批准了吗？", pinyin: "nǐ de qǐngjià shēnqǐng huòdé bùmén jīnglǐ pīzhǔn le ma?", vi: "Đơn xin nghỉ của bạn đã được trưởng phòng phê duyệt chưa?" },
  { id: 1149, day: 115, en: "I am taking emergency personal leave to deal with a family matter.", cn: "因处理家庭事宜，我需要请紧急事假。", pinyin: "yīn chǔlǐ jiātíng shìyí, wǒ xūyào qǐng jǐnjí shìjià.", vi: "Tôi cần xin nghỉ việc riêng khẩn cấp để giải quyết chuyện gia đình." },
  { id: 1150, day: 115, en: "I will set an Out of Office auto-reply on my email.", cn: "我会设置邮箱的“自动回复”。", pinyin: "wǒ huì shèzhì yóuxiāng de “zìdòng huífù”.", vi: "Tôi sẽ cài đặt chế độ tự động trả lời thư (Out of Office) trên email." }
);

// Ngày 116: Giao tiếp Nội bộ - Góp ý & Khen thưởng (Feedback & Praise)
LESSON_DATA.push(
  { id: 1151, day: 116, en: "Great job on the presentation today! It was super clear.", cn: "今天的演示做得太棒了！非常清晰。", pinyin: "jīntiān de yǎnshì zuò de tài bàng le! fēicháng qīngxī.", vi: "Buổi thuyết trình hôm nay bạn làm xuất sắc lắm! Rất rõ ràng." },
  { id: 1152, day: 116, en: "I really appreciate your hard work and dedication to this project.", cn: "我非常非常感谢你在这个项目中的付出与努力。", pinyin: "wǒ fēicháng fēicháng gǎnxiè nǐ zài zhège xiàngmù zhōng de fùchū yǔ nǔlì.", vi: "Tôi thật sự ghi nhận sự chăm chỉ và tâm huyết của bạn dành cho dự án này." },
  { id: 1153, day: 116, en: "Can I offer a piece of constructive feedback regarding the report format?", cn: "关于报告格式，我能给一点建设性的意见吗？", pinyin: "guānyú bàoɡào géshì, wǒ néng gěi yìdiǎn jiànshèxìng de yìjiàn ma?", vi: "Tôi có thể đóng góp một vài ý kiến mang tính xây dựng về định dạng báo cáo không?" },
  { id: 1154, day: 116, en: "Your attention to detail saved the company from a major risk.", cn: "你对细节的关注避免了公司遭受重大风险。", pinyin: "nǐ duì xìjié de guānzhù bìmiǎn le gōngsī zāoshòu zhòngdà fēngxiǎn.", vi: "Sự tỉ mỉ của bạn đã giúp công ty tránh được một rủi ro lớn." },
  { id: 1155, day: 116, en: "Thank you for taking the initiative to solve that technical issue.", cn: "感谢你主动采取行动解决了那个技术难题。", pinyin: "gǎnxiè nǐ zhǔdòng cǎiqǔ xíngdòng jiějué le nàgè jìshù nándítì.", vi: "Cảm ơn bạn đã chủ động đứng ra giải quyết sự cố kỹ thuật đó." },
  { id: 1156, day: 116, en: "Let's recognize John for his outstanding performance this quarter.", cn: "让我们表彰约翰本季度的杰出表现。", pinyin: "ràng wǒmen biǎozhāng yuēhàn běn jìdù de jiéchū biǎoxiàn.", vi: "Chúng ta hãy cùng vinh danh John vì thành tích xuất sắc của anh ấy trong quý này." },
  { id: 1157, day: 116, en: "I think there is still room for improvement in communication efficiency.", cn: "我认为在沟通效率方面还有提升的空间。", pinyin: "wǒ rènwéi zài gōutōng xiàolǜ fāngmiàn hái yǒu tíshēng de kōngjiān.", vi: "Tôi nghĩ hiệu quả giao tiếp của chúng ta vẫn còn dư địa để cải thiện." },
  { id: 1158, day: 116, en: "Your positive attitude always boosts morale in our team.", cn: "你积极的态度总是能鼓舞团队的士气。", pinyin: "nǐ jījí de tàidu zǒngshì néng gǔwǔ tuánduì de shìqì.", vi: "Thái độ tích cực của bạn luôn tiếp thêm tinh thần làm việc cho cả đội." },
  { id: 1159, day: 116, en: "Don't be discouraged by mistakes; treat them as learning experiences.", cn: "不要因为犯错而沮丧，把它们当成学习经验。", pinyin: "bú yào yīnwèi fàncuò ér jǔsàng, bǎ tāmen dàngchéng xuéxí jīngyàn.", vi: "Đừng nản lòng vì sai lầm; hãy xem đó là những trải nghiệm học hỏi." },
  { id: 1160, day: 116, en: "Keep up the excellent work! You are an indispensable part of our team.", cn: "继续保持优秀！你是我们团队不可或缺的一部分。", pinyin: "jìxù bǎochí yōuxiù! nǐ shì wǒmen tuánduì bùkě huòquē de yíbùfen.", vi: "Hãy tiếp tục phát huy phong độ tuyệt vời này! Bạn là một phần không thể thiếu của đội." }
);

// Ngày 117: Giao tiếp Nội bộ - Quy định & Văn hóa Công ty (Office Policies)
LESSON_DATA.push(
  { id: 1161, day: 117, en: "Please remember to clock in and clock out every working day.", cn: "请记得每个工作日都要打卡上下班。", pinyin: "qǐng jìde měi gè gōngzuòrì dōu yào dǎkǎ shàng xià bān.", vi: "Xin nhớ quẹt thẻ/chấm công vào và ra mỗi ngày làm việc." },
  { id: 1162, day: 117, en: "Working hours are from 9:00 AM to 6:00 PM with a one-hour lunch break.", cn: "工作时间是上午9点到下午6点，包含一小时午休。", pinyin: "gōngzuò shíjiān shì shàngwǔ jiǔ diǎn dào xiàwǔ liù diǎn, bāohán yì xiǎoshí wǔxiū.", vi: "Giờ làm việc là từ 9 giờ sáng đến 6 giờ chiều, đã bao gồm 1 tiếng nghỉ trưa." },
  { id: 1163, day: 117, en: "All employee confidential documents must be shredded before disposal.", cn: "所有员工保密文件在丢弃前必须销毁。", pinyin: "suǒyǒu yuángōng bǎomì wéndàng zài diūqì qián bìxū xiāohuǐ.", vi: "Tất cả các tài liệu bảo mật phải được tiêu hủy/xé nhỏ trước khi vứt bỏ." },
  { id: 1164, day: 117, en: "Smoking is strictly prohibited inside the office building.", cn: "写字楼内部严禁吸烟。", pinyin: "xiězìlóu nèibù yánjìn xīyān.", vi: "Nghiêm cấm hút thuốc bên trong tòa nhà văn phòng." },
  { id: 1165, day: 117, en: "We adopt a Business Casual dress code from Monday to Thursday.", cn: "周一至周四我们实行商务休闲着装规范。", pinyin: "zhōuyī zhì zhōusì wǒmen shíxíng shāngwù xiūxián zhuózhuāng guīfàn.", vi: "Từ thứ Hai đến thứ Năm, chúng ta áp dụng phong cách trang phục lịch sự thường ngày." },
  { id: 1166, day: 117, en: "Friday is casual dress day, so jeans and t-shirts are allowed.", cn: "周五是便装日，可以穿牛仔裤和T恤。", pinyin: "zhōuwǔ shì biànzhuāng rì, kěyǐ chuān niúzǎikù hé T-xù.", vi: "Thứ Sáu là ngày mặc tự do, nên bạn có thể mặc quần jeans và áo phông." },
  { id: 1167, day: 117, en: "Please turn your mobile phone to silent mode during office hours.", cn: "办公时间内请将手机调至静音模式。", pinyin: "bànɡōnɡ shíjiān nèi qǐng jiāng shǒujī tiáo zhì jìngyīn móshì.", vi: "Vui lòng chuyển điện thoại sang chế độ im lặng trong giờ làm việc." },
  { id: 1168, day: 117, en: "Remote work options are available twice a week upon approval.", cn: "经批准后，每周可选择两天居家办公。", pinyin: "jīng pīzhǔn hòu, měi zhōu kě xuǎnzé liǎng tiān jūjiā bànɡōnɡ.", vi: "Sau khi được duyệt, bạn có thể chọn làm việc từ xa 2 ngày một tuần." },
  { id: 1169, day: 117, en: "Overtime pay must be pre-approved by your direct supervisor.", cn: "加班费必须提前获得直属主管的批准。", pinyin: "jiābānfèi bìxū tíqián huòdé zhíshǔ zhǔguǎn de pīzhǔn.", vi: "Tiền làm thêm giờ phải được người quản lý trực tiếp phê duyệt trước." },
  { id: 1170, day: 117, en: "We strictly adhere to zero-tolerance policy against harassment.", cn: "我们对骚扰行为实行零容忍政策。", pinyin: "wǒmen duì sāorǎo xíngwéi shíxíng líng róngrěn zhèngcè.", vi: "Chúng tôi tuân thủ nghiêm ngặt chính sách không khoan nhượng đối với hành vi quấy rối." }
);

// Ngày 118: Giao tiếp Nội bộ - Giải quyết mâu thuẫn & Hiểu lầm (Resolving Conflicts)
LESSON_DATA.push(
  { id: 1171, day: 118, en: "I think there was a misunderstanding regarding the project deadlines.", cn: "我认为关于项目截止日期存在一些误会。", pinyin: "wǒ rènwéi guānyú xiàngmù jiézhǐ rìqī cúnzài yìxiē wùhuì.", vi: "Tôi nghĩ đã có sự hiểu lầm về thời hạn hoàn thành dự án." },
  { id: 1172, day: 118, en: "Let's sit down and discuss this issue calmly face-to-face.", cn: "让我们坐下来，面对面冷静地讨论这个问题。", pinyin: "ràng wǒmen zuò xiàlái, miànduìmiàn lěngjìng de tǎolùn zhège wèntí.", vi: "Chúng ta hãy ngồi lại và trao đổi trực tiếp một cách bình tĩnh về vấn đề này." },
  { id: 1173, day: 118, en: "I apologize if my email tone sounded overly harsh earlier.", cn: "如果我刚才邮件里的语气显得太生硬，我向你道歉。", pinyin: "rúguǒ wǒ gāngcái yóuxiāng lǐ de yǔqi xiǎnde tài shēngyìng, wǒ xiàng nǐ dàoqiàn.", vi: "Tôi xin lỗi nếu tông giọng trong email lúc nãy của tôi có vẻ hơi gay gắt." },
  { id: 1174, day: 118, en: "We need to find common ground to move the proposal forward.", cn: "我们需要找到共同点，以推动提案继续进行。", pinyin: "wǒmen xūyào zhǎodào gòngtóngdiǎn, yǐ tuīdòng tí'àn jìxù jìnxíng.", vi: "Chúng ta cần tìm ra điểm chung để tiếp tục thúc đẩy đề xuất." },
  { id: 1175, day: 118, en: "I respect your perspective, but let me explain my reasoning.", cn: "我尊重你的观点，但也请听我解释一下我的理由。", pinyin: "wǒ zūnzhòng nǐ de guāndiǎn, dàn yě qǐng tīng wǒ jiěshì yíxià wǒ de lǐyóu.", vi: "Tôi tôn trọng góc nhìn của bạn, nhưng hãy để tôi giải thích lý do của mình." },
  { id: 1176, day: 118, en: "Let's focus on solutions rather than blaming each other.", cn: "让我们专注于解决方案，而不是互相指责。", pinyin: "ràng wǒmen zhuānzhù yú jiějué fāng'àn, ér búshì hùxiāng zhǐzé.", vi: "Hãy tập trung vào giải pháp thay vì đổ lỗi cho nhau." },
  { id: 1177, day: 118, en: "Can we involve a neutral party to help mediate this situation?", cn: "我们能找一个中立的第三方来调解这个局势吗？", pinyin: "wǒmen néng zhǎo yí gè zhōnglì de dì-sān fāng lái tiáojiě zhège júshì ma?", vi: "Chúng ta có thể mời một bên trung lập đứng ra hòa giải tình huống này không?" },
  { id: 1178, day: 118, en: "Thank you for being open and honest with me about this.", cn: "感谢你在这件事上对我坦诚相待。", pinyin: "gǎnxiè nǐ zài zhè jiàn shì shàng duì wǒ tǎnchéng xiāngdài.", vi: "Cảm ơn bạn đã cởi mở và thẳng thắn với tôi về việc này." },
  { id: 1179, day: 118, en: "I didn't mean to offend you; I was just worried about compliance.", cn: "我无意冒犯，只是有些担心合规问题。", pinyin: "wǒ wúyì màofàn, zhǐshì yǒudiǎn dānxīn héguī wèntí.", vi: "Tôi không có ý xúc phạm bạn; tôi chỉ lo lắng về vấn đề tuân thủ quy định." },
  { id: 1180, day: 118, en: "Glad we could clear the air and align our expectations.", cn: "很高兴我们消除隔阂并达成了一致期望。", pinyin: "hěn gāoxìng wǒmen xiāochú géhé bìng dáchéng le yízhì qīwàng.", vi: "Rất mừng vì chúng ta đã giải tỏa được vướng mắc và thống nhất được kỳ vọng." }
);

// Ngày 119: Giao tiếp Nội bộ - Thiết bị & Hỗ trợ kỹ thuật Văn phòng (Office IT Support)
LESSON_DATA.push(
  { id: 1181, day: 119, en: "My laptop keeps crashing whenever I open heavy software.", cn: "每当我打开大型软件，我的电脑就会崩溃。", pinyin: "měi dāng wǒ dǎkāi dàxíng ruǎnjiān, wǒ de diànnǎo jiù huì bēngkuì.", vi: "Laptop của tôi cứ bị treo máy mỗi khi tôi mở các phần mềm nặng." },
  { id: 1182, day: 119, en: "I need to submit an IT ticket for a password reset.", cn: "我需要提交一个IT工单来重置密码。", pinyin: "wǒ xūyào tíjiāo yí gè IT gōngdān lái chóngzhì mìmǎ.", vi: "Tôi cần gửi một yêu cầu hỗ trợ (ticket) cho IT để đặt lại mật khẩu." },
  { id: 1183, day: 119, en: "The Wi-Fi connection in the conference room is very unstable.", cn: "会议室的无线网络连接非常不稳定。", pinyin: "huìyìshì de wúxiàn wǎnglù liánjiē fēicháng bù wěndìng.", vi: "Kết nối Wi-Fi trong phòng họp rất chập chờn." },
  { id: 1184, day: 119, en: "Could you grant me access permission to the shared drive?", cn: "你能开通一下我对共享云盘的访问权限吗？", pinyin: "nǐ néng kāitōng yíxià wǒ duì gòngxiǎng yúnpán de fǎngwèn quánxián ma?", vi: "Bạn có thể cấp quyền truy cập vào ổ đĩa dùng chung cho tôi được không?" },
  { id: 1185, day: 119, en: "The projector is not displaying the screen properly.", cn: "投影仪无法正常显示屏幕画面。", pinyin: "tóuyǐngyí wúfǎ zhèngcháng xiǎnshì píngmù huàmiàn.", vi: "Máy chiếu không hiển thị màn hình một cách bình thường." },
  { id: 1186, day: 119, en: "Have you tried restarting your computer to see if it fixes it?", cn: "你试过重启电脑看看能不能解决吗？", pinyin: "nǐ shì guò chóngqǐ diànnǎo kànkan néng bù néng jiějué ma?", vi: "Bạn đã thử khởi động lại máy tính xem có sửa được lỗi không chưa?" },
  { id: 1187, day: 119, en: "We are undergoing scheduled server maintenance this weekend.", cn: "这个周末我们将进行例行服务器维护。", pinyin: "zhège zhōumò wǒmen jiāng jìnxíng lìxíng fúwùqì wéi hù.", vi: "Cuối tuần này chúng tôi sẽ tiến hành bảo trì máy chủ theo định kỳ." },
  { id: 1188, day: 119, en: "Please backup your important files to the company cloud storage.", cn: "请将重要文件备份到公司云存储中。", pinyin: "qǐng jiāng zhòngyào wéndàng bèifèn dào gōngsī yún chǔcún zhōng.", vi: "Vui lòng sao lưu các tệp quan trọng lên lưu trữ đám mây của công ty." },
  { id: 1189, day: 119, en: "My corporate email account is locked after three wrong attempts.", cn: "在连续三次输错密码后，我的公司邮箱被锁定了。", pinyin: "zài liánxù sān cì shū cuò mìmǎ hòu, wǒ de gōngsī yóuxiāng bèi suǒdìng le.", vi: "Tài khoản email công ty của tôi đã bị khóa sau ba lần nhập sai." },
  { id: 1190, day: 119, en: "The IT helpdesk technician will come to check your workstation.", cn: "IT运维人员会过来检查你的工作台。", pinyin: "IT yùnwéi rényuán huì guòlái jiǎnchá nǐ de gōngzuòtái.", vi: "Kỹ thuật viên hỗ trợ IT sẽ đến kiểm tra góc làm việc của bạn." }
);

// Ngày 120: Giao tiếp Nội bộ - Trò chuyện Thân mật & Teambuilding (Casual Small Talk)
LESSON_DATA.push(
  { id: 1191, day: 120, en: "How was your weekend? Did you do anything fun?", cn: "周末过得怎么样？有去哪里玩吗？", pinyin: "zhōumò guò de zěnmeyàng? yǒu qù nǎlǐ wán ma?", vi: "Cuối tuần của bạn thế nào? Có đi đâu chơi thú vị không?" },
  { id: 1192, day: 120, en: "Are you planning to sign up for the annual company trip?", cn: "你打算报名参加今年的公司年度旅游吗？", pinyin: "nǐ dǎsuan bàomíng cānjiā jīnnián de gōngsī niándù lǚyóu ma?", vi: "Bạn có định đăng ký tham gia chuyến du lịch thường niên của công ty không?" },
  { id: 1193, day: 120, en: "We are organizing a team-building dinner this Friday evening.", cn: "这周五晚上我们组织了团建聚餐。", pinyin: "zhè zhōuwǔ wǎnshang wǒmen zǔzhī le tuánjiàn jùcān.", vi: "Chúng tôi sẽ tổ chức một buổi ăn uống team-building vào tối thứ Sáu tuần này." },
  { id: 1194, day: 120, en: "Does anyone want to order milk tea together for afternoon tea?", cn: "有人想一起点下午茶的奶茶吗？", pinyin: "yǒu rén xiǎng yìqǐ diǎn xiàwǔchá de nǎichá ma?", vi: "Có ai muốn cùng đặt trà sữa cho bữa chiều không?" },
  { id: 1195, day: 120, en: "Happy Friday! Have a wonderful weekend ahead!", cn: "周五快乐！祝你度过一个愉快的周末！", pinyin: "zhōuwǔ kuàilè! zhù nǐ dùguò yí gè yúkuài de zhōumò!", vi: "Thứ Sáu vui vẻ nhé! Chúc bạn có một kỳ nghỉ cuối tuần tuyệt vời!" },
  { id: 1196, day: 120, en: "The new coffee machine in the lounge makes amazing espresso.", cn: "休息室新装的咖啡机做出的意式浓缩太棒了。", pinyin: "xiūxīshì xīn zhuāng de kāfēijī zuò chū de yìshì nóngsuō tài bàng le.", vi: "Máy pha cà phê mới lắp ở phòng nghỉ pha món espresso ngon tuyệt." },
  { id: 1197, day: 120, en: "Congratulations on your work anniversary with the company!", cn: "恭喜你在公司入职满一周年！", pinyin: "gōngxǐ nǐ zài gōngsī rùzhí mǎn yì zhōunián!", vi: "Chúc mừng kỷ niệm ngày bạn chính thức gia nhập công ty!" },
  { id: 1198, day: 120, en: "Let's take a group photo to remember this team event.", cn: "让我们拍张合照留念这次团建活动吧。", pinyin: "ràng wǒmen pāi zhāng hézhào liúniàn zhè cì tuánjiàn huódòng ba.", vi: "Chúng ta hãy chụp một tấm ảnh tập thể để làm kỷ niệm cho sự kiện team-building này nhé." },
  { id: 1199, day: 120, en: "Who won the badminton tournament organized by the HR department?", cn: "人力资源部举办的羽毛球赛谁拿了冠军？", pinyin: "rénlì zīyuánbù jǔbàn de yǔmáoqiú sài shéi ná le guànjūn?", vi: "Ai đã giành giải nhất giải cầu lông do phòng Nhân sự tổ chức vậy?" },
  { id: 1200, day: 120, en: "It was great chatting with you! Back to work now.", cn: "和你聊天真开心！现在该继续工作啦。", pinyin: "hé nǐ liáotiān zhēn kāixīn! xiànzài gāi jìxù gōngzuò la.", vi: "Nói chuyện với bạn rất vui! Giờ thì quay lại với công việc thôi." }
);

// ==========================================
// CHẶNG 3: CÔNG SỞ, NGHỀ NGHIỆP & KỸ NĂNG MỀM (TIẾP THEO)
// DỮ LIỆU CÂU HỘI THOẠI CHI TIẾT: NGÀY 121 - NGÀY 130
// ==========================================

// Ngày 121: Họp hành & Thuyết trình - Bắt đầu cuộc họp & Giới thiệu
LESSON_DATA.push(
  { id: 1201, day: 121, en: "Thank you all for coming to today's meeting on such short notice.", cn: "感谢大家百忙之中抽空来参加今天的会议。", pinyin: "gǎnxiè dàjiā bǎimáng zhīzhōng chōukòng lái cānjiā jīntiān de huìyì.", vi: "Cảm ơn tất cả mọi người đã sắp xếp thời gian tham dự buổi họp ngắn hôm nay." },
  { id: 1202, day: 121, en: "Since everyone is here, let's get started.", cn: "既然人都到齐了，那我们就开始吧。", pinyin: "jìrán rén dōu dào qí le, nà wǒmen jiù kāishǐ ba.", vi: "Vì mọi người đã đông đủ, chúng ta hãy bắt đầu thôi." },
  { id: 1203, day: 121, en: "The main objective of today's meeting is to review our Q3 targets.", cn: "今天会议的主要目的是回顾我们第三季度的目标。", pinyin: "jīntiān huìyì de zhǔyào mùdì shì huígù wǒmen dì-sān jìdù de mùbiāo.", vi: "Mục tiêu chính của buổi họp hôm nay là xem xét lại các mục tiêu quý 3." },
  { id: 1204, day: 121, en: "Before we begin, please make sure your phones are on silent.", cn: "在开始之前，请确保大家的手机都调至静音。", pinyin: "zài kāishǐ zhīqián, qǐng quèbǎo dàjiā de shǒujī dōu tiáo zhì jìngyīn.", vi: "Trước khi bắt đầu, vui lòng đảm bảo điện thoại của bạn đã chuyển sang chế độ im lặng." },
  { id: 1205, day: 121, en: "I would like to introduce our guest speaker for today, Mr. Smith.", cn: "我想介绍一下我们今天的特邀嘉宾，史密斯先生。", pinyin: "wǒ xiǎng jièshào yíxià wǒmen jīntiān de tèyāo jiābīn, shǐmìsī xiānsheng.", vi: "Tôi xin phép giới thiệu diễn giả khách mời của chúng ta hôm nay, ông Smith." },
  { id: 1206, day: 121, en: "Has everyone received a copy of today's agenda?", cn: "大家都收到今天的会议议程了吗？", pinyin: "dàjiā dōu shōudào jīntiān de huìyì yìchéng le ma?", vi: "Mọi người đã nhận được bản chương trình họp hôm nay chưa?" },
  { id: 1207, day: 121, en: "Let's quickly go around the table and introduce ourselves.", cn: "让我们简要地轮流自我介绍一下。", pinyin: "ràng wǒmen jiǎnyào de lúnliú zìwǒ jièshào yíxià.", vi: "Chúng ta hãy nhanh chóng lần lượt giới thiệu bản thân nhé." },
  { id: 1208, day: 121, en: "I will be chairing today's meeting, and Anna will take the minutes.", cn: "我将主持今天的会议，安娜负责记录会议纪要。", pinyin: "wǒ jiāng zhǔchí jīntiān de huìyì, ānnà fùzé jìlù huìyì jìyào.", vi: "Tôi sẽ chủ trì cuộc họp hôm nay, và Anna sẽ ghi biên bản họp." },
  { id: 1209, day: 121, en: "We have a tight schedule today, so let's stick to the topic.", cn: "我们今天的议程很紧凑，所以请紧扣主题。", pinyin: "wǒmen jīntiān de yìchéng hěn jǐncòu, suǒyǐ qǐng jǐnkòu zhǔtí.", vi: "Lịch trình hôm nay khá dày, nên chúng ta hãy đi đúng vào chủ đề." },
  { id: 1210, day: 121, en: "First, let's quickly review the action items from our last meeting.", cn: "首先，让我们快速回顾一下上次会议的待办事项。", pinyin: "shǒuxiān, ràng wǒmen kuàisù huígù yíxià shàng cì huìyì de dàibàn shìxiàng.", vi: "Đầu tiên, hãy điểm qua các hạng mục công việc từ cuộc họp trước." }
);

// Ngày 122: Họp hành & Thuyết trình - Điều phối & Quản lý chương trình họp
LESSON_DATA.push(
  { id: 1211, day: 122, en: "Let's move on to the next item on our agenda.", cn: "让我们进入议程的下一项内容。", pinyin: "ràng wǒmen jìnrù yìchéng de xià yì xiàng nèiróng.", vi: "Chúng ta hãy chuyển sang phần tiếp theo trong chương trình họp." },
  { id: 1212, day: 122, en: "We are running out of time, so let's keep this brief.", cn: "我们的时间不多了，所以请简短精炼一些。", pinyin: "wǒmen de shíjiān bù duō le, suǒyǐ qǐng jiǎnduǎn jīngliàn yìxiē.", vi: "Chúng ta không còn nhiều thời gian, vì vậy hãy nói gọn lại." },
  { id: 1213, day: 122, en: "That is an important topic, but let's park it for now.", cn: "那是个重要话题，但我们先把它暂存，待会儿再讨论。", pinyin: "nà shì gè zhòngyào huàtí, dàn wǒmen xiān bǎ tā zàncún, dàihuìr zài tǎolùn.", vi: "Đó là vấn đề quan trọng, nhưng chúng ta hãy gác lại một chút để bàn sau." },
  { id: 1214, day: 122, en: "I would like to pass the floor to Tom for the product demo.", cn: "我想把发言权交给汤姆，让他做产品演示。", pinyin: "wǒ xiǎng bǎ fāyánquán jiāo gěi tāngmǔ, ràng tā zuò chǎnpǐn yǎnshì.", vi: "Tôi xin nhường lời cho Tom để trình bày phần demo sản phẩm." },
  { id: 1215, day: 122, en: "Please try not to interrupt while someone else is speaking.", cn: "当其他人发言时，请尽量不要打断。", pinyin: "dāng qítā rén fāyán shí, qǐng jǐnliàng bú yào dǎduàn.", vi: "Xin vui lòng không ngắt lời khi người khác đang nói." },
  { id: 1216, day: 122, en: "Let's stay focused on the key issues at hand.", cn: "让我们集中精力讨论眼前的核心问题。", pinyin: "ràng wǒmen jízhōng jīnglì tǎolùn yǎnqián de héxīn wèntí.", vi: "Hãy tập trung vào các vấn đề cốt lõi hiện tại." },
  { id: 1217, day: 122, en: "Can we get back on track? We are straying off topic.", cn: "我们可以回到正题吗？我们有些偏离主题了。", pinyin: "wǒmen kěyǐ huídào zhèngtí ma? wǒmen yǒuxiān piānlí zhǔtí le.", vi: "Chúng ta có thể quay lại đúng đề tài được không? Chúng ta đang đi hơi xa đấy." },
  { id: 1218, day: 122, en: "Each speaker will have 5 minutes to present their idea.", cn: "每位发言者将有5分钟时间阐述其想法。", pinyin: "měi wèi fāyánzhě jiāng yǒu wǔ fēnzhōng shíjiān chǎnshù qí xiǎngfǎ.", vi: "Mỗi người nói sẽ có 5 phút để trình bày ý tưởng của mình." },
  { id: 1219, day: 122, en: "Let's pause here and see if anyone has questions so far.", cn: "让我们先停一下，看看大家到目前为止是否有疑问。", pinyin: "ràng wǒmen xiān tíng yíxià, kànkan dàjiā dào mùqián wéizhǐ shìfǒu yǒu yíwèn.", vi: "Hãy tạm dừng ở đây xem mọi người có thắc mắc gì không." },
  { id: 1220, day: 122, en: "We will take a 10-minute coffee break before the next session.", cn: "进入下一环节前，我们先休息10分钟喝杯咖啡。", pinyin: "jìnrù xià yì huánjié qián, wǒmen xiān xiūxi shí fēnzhōng hē bēi kāfēi.", vi: "Chúng ta sẽ nghỉ giải lao 10 phút trước khi sang phần tiếp theo." }
);

// Ngày 123: Họp hành & Thuyết trình - Trình bày Ý tưởng & Đề xuất
LESSON_DATA.push(
  { id: 1221, day: 123, en: "I would like to propose a new strategy for customer retention.", cn: "我想提议一个新的客户留存策略。", pinyin: "wǒ xiǎng tíyì yí gè xīn de kèhù liúcún cèlüè.", vi: "Tôi muốn đề xuất một chiến lược mới để giữ chân khách hàng." },
  { id: 1222, day: 123, en: "The main idea behind this concept is to simplify the user journey.", cn: "这个概念的核心思想是简化用户旅程。", pinyin: "zhège gàiniàn de héxīn sīxiǎng shì jiǎnhuà yònghù lǚchéng.", vi: "Ý tưởng cốt lõi đằng sau khái niệm này là đơn giản hóa trải nghiệm người dùng." },
  { id: 1223, day: 123, en: "Let me walk you through our proposed roadmap for next quarter.", cn: "让我带大家了解一下我们针对下季度的路线图规划。", pinyin: "ràng wǒ dài dàjiā liǎojiě yíxià wǒmen zhēnduì xià jìdù de lùxiàntú guīhuà.", vi: "Để tôi giải thích qua cho mọi người về lộ trình đề xuất quý tới." },
  { id: 1224, day: 123, en: "This solution will help us cut operational costs by 15%.", cn: "这个解决方案将帮助我们降低15%的运营成本。", pinyin: "zhège jiějué fāng'àn jiāng bāngzhù wǒmen jiàngdī bǎi fēn zhī shíwǔ de yùnyíng chéngběn.", vi: "Giải pháp này sẽ giúp chúng ta giảm 15% chi phí vận hành." },
  { id: 1225, day: 123, en: "To illustrate my point, let's take a look at this chart.", cn: "为了说明我的观点，让我们看一下这张图表。", pinyin: "wèile shuōmíng wǒ de guāndiǎn, ràng wǒmen kàn yíxià zhè zhāng túbiǎo.", vi: "Để làm rõ ý tôi, xin mời mọi người nhìn vào biểu đồ này." },
  { id: 1226, day: 123, en: "The key advantage of this design is its flexibility.", cn: "这种设计的核心优势在于其灵活性。", pinyin: "zhè zhǒng shèjì de héxīn yōushì zàiyú qí línghuóxìng.", vi: "Ưu điểm chính của thiết kế này nằm ở tính linh hoạt của nó." },
  { id: 1227, day: 123, en: "We recommend implementing this change in three phases.", cn: "我们建议分三个阶段实施这一变更。", pinyin: "wǒmen jiànyì fēn sān gè jiēduàn shíshī zhè yí biàngēng.", vi: "Chúng tôi đề xuất triển khai sự thay đổi này theo ba giai đoạn." },
  { id: 1228, day: 123, en: "As you can see on the screen, revenue increased steadily.", cn: "正如大家在屏幕上看到的，收入稳步增长。", pinyin: "zhèngrú dàjiā zài píngmù shàng kàndào de, shōurù wěnbù zēngzhǎng.", vi: "Như mọi người có thể thấy trên màn hình, doanh thu tăng trưởng rất ổn định." },
  { id: 1229, day: 123, en: "In summary, this initiative brings two major benefits.", cn: "总而言之，这项举措带来了两大核心好处。", pinyin: "zǒng'éryánzhī, zhè xiàng jǔcuò dài lái le liǎng dà héxīn hǎochu.", vi: "Tóm lại, sáng kiến này mang lại hai lợi ích lớn." },
  { id: 1230, day: 123, en: "I am confident that this approach will yield high return on investment.", cn: "我确信这种方法将带来高投资回报率。", pinyin: "wǒ quèxìn zhè zhǒng fāngfǎ jiāng dài lái gāo tóuzī huíbàolǜ.", vi: "Tôi tin chắc rằng phương pháp này sẽ mang lại lợi nhuận đầu tư cao." }
);

// Ngày 124: Họp hành & Thuyết trình - Thảo luận & Nêu ý kiến (Expressing Opinions)
LESSON_DATA.push(
  { id: 1231, day: 124, en: "From my perspective, this feature is not urgent.", cn: "在我看来，这个功能并不是当务之急。", pinyin: "zài wǒ kànlái, zhège gōngnéng bìng bú shì dāngwùzhījí.", vi: "Theo quan điểm của tôi, tính năng này không phải là việc cấp bách." },
  { id: 1232, day: 124, en: "I completely agree with what Sarah just mentioned.", cn: "我完全赞同莎拉刚才提到的观点。", pinyin: "wǒ quánquán zàntóng sàlā gāngcái tí dào de guāndiǎn.", vi: "Tôi hoàn toàn đồng ý với ý kiến Sarah vừa nêu." },
  { id: 1233, day: 124, en: "I see your point, but we need to consider the budget limits.", cn: "我理解你的意思，但我们需要考虑预算限制。", pinyin: "wǒ lǐjiě nǐ de yìsi, dàn wǒmen xūyào kǎolǜ yùsuàn xiànzhì.", vi: "Tôi hiểu ý bạn, nhưng chúng ta cần cân nhắc giới hạn ngân sách." },
  { id: 1234, day: 124, en: "I have a slightly different view on this matter.", cn: "关于这件事，我有稍微不同的看法。", pinyin: "guānyú zhè jiàn shì, wǒ yǒu shāowēi bù tóng de kànfǎ.", vi: "Tôi có quan điểm hơi khác một chút về vấn đề này." },
  { id: 1235, day: 124, en: "Could you clarify what you mean by 'scalable design'?", cn: "你能解释一下你说的“可扩展设计”是什么意思吗？", pinyin: "nǐ néng jiěshì yíxià nǐ shuō de “kě kuòzhǎn shèjì” shì shénme yìsi ma?", vi: "Bạn có thể làm rõ hơn ý 'thiết kế có thể mở rộng' là gì không?" },
  { id: 1236, day: 124, en: "I am afraid I cannot agree with that proposal.", cn: "恐怕我不能赞同那个提案。", pinyin: "kǒngpà wǒ bù néng zàntóng nàgè tí'àn.", vi: "Tôi e rằng mình không thể tán thành đề xuất đó." },
  { id: 1237, day: 124, en: "That is a valid point, we should definitely look into it.", cn: "说得很有道理，我们确实应该深入调查一下。", pinyin: "shuō de hěn yǒu dàolǐ, wǒmen quèshí yīnggāi shēnrù diàochá yíxià.", vi: "Đó là một ý kiến rất hợp lý, chúng ta nhất định phải xem xét kỹ." },
  { id: 1238, day: 124, en: "In my opinion, we should focus on customer feedback first.", cn: "依我看，我们应该优先关注客户反馈。", pinyin: "yī wǒ kàn, wǒmen yīnggāi yōuxiān guānzhù kèhù fǎnkuì.", vi: "Theo ý tôi, chúng ta nên ưu tiên xem xét phản hồi của khách hàng trước." },
  { id: 1239, day: 124, en: "Does anyone have a different perspective on this issue?", cn: "有人对此问题有不同的看法吗？", pinyin: "yǒu rén duì cǐ wèntí yǒu bù tóng de kànfǎ ma?", vi: "Có ai có góc nhìn khác về vấn đề này không?" },
  { id: 1240, day: 124, en: "I strongly support the idea of expanding our marketing channels.", cn: "我强烈支持拓展我们营销渠道的想法。", pinyin: "wǒ qiángliè zhīchí tuòzhǎn wǒmen yíngxiāo qúdào de xiǎngfǎ.", vi: "Tôi ủng hộ mạnh mẽ ý tưởng mở rộng các kênh marketing của chúng ta." }
);

// Ngày 125: Họp hành & Thuyết trình - Động não & Tìm giải pháp (Brainstorming)
LESSON_DATA.push(
  { id: 1241, day: 125, en: "Let's throw around some ideas for our upcoming campaign.", cn: "让我们为即将来临的活动集思广益抛出一些想法。", pinyin: "ràng wǒmen wèi jíjiāng láilín de huódòng jísīguǎngyì pāo chū yìxiē xiǎngfǎ.", vi: "Chúng ta hãy cùng động não đưa ra vài ý tưởng cho chiến dịch sắp tới." },
  { id: 1242, day: 125, en: "No idea is a bad idea during a brainstorming session.", cn: "在头脑风暴环节中，没有坏想法。", pinyin: "zài tóunǎo fēngbào huánjié zhōng, méiyǒu huài xiǎngfǎ.", vi: "Trong buổi brainstorming, không có ý tưởng nào là dở cả." },
  { id: 1243, day: 125, en: "What if we try a completely different approach this time?", cn: "要不我们这次尝试一种截然不同的方法？", pinyin: "yào bù wǒmen zhè cì chángshì yì zhǒng jiérán bù tóng de fāngfǎ?", vi: "Sẽ thế nào nếu lần này chúng ta thử một phương pháp hoàn toàn khác?" },
  { id: 1244, day: 125, en: "Can we build on what Mark just suggested?", cn: "我们可以基于马克刚才的提议继续深入扩展吗？", pinyin: "wǒmen kěyǐ jīyú mǎkè gāngcái de tíyì jìxù shēnrù kuòzhǎn ma?", vi: "Chúng ta có thể phát triển thêm dựa trên gợi ý của Mark không?" },
  { id: 1245, day: 125, en: "Let's write all potential solutions on the whiteboard.", cn: "让我们把所有潜在的解决方案都写在白板上。", pinyin: "ràng wǒmen bǎ suǒyǒu qiánzài de jiějué fāng'àn dōu xiě zài bái bǎn shàng.", vi: "Hãy ghi tất cả các giải pháp khả thi lên bảng trắng." },
  { id: 1246, day: 125, en: "How can we address the core pain point of our users?", cn: "我们该如何解决用户最核心的痛点？", pinyin: "wǒmen gāi rúhé jiějué yònghù zuì héxīn de tòngdiǎn?", vi: "Làm thế nào để chúng ta giải quyết điểm đau cốt lõi của người dùng?" },
  { id: 1247, day: 125, en: "We need to think outside the box to solve this issue.", cn: "我们需要打破常规思维来解决这个问题。", pinyin: "wǒmen xūyào dǎpò chángguī sīwéi lái jiějué zhège wèntí.", vi: "Chúng ta cần tư duy sáng tạo ngoài khuôn khổ để giải quyết sự cố này." },
  { id: 1248, day: 125, en: "Let's narrow down our choices to the top three options.", cn: "让我们把选择范围缩小到前三个最佳选项。", pinyin: "ràng wǒmen bǎ xuǎnzé fànwéi suǒxiǎo dào qián sān gè zuì jiā xuǎnxiàng.", vi: "Hãy khoanh vùng các lựa chọn còn lại 3 phương án tối ưu nhất." },
  { id: 1249, day: 125, en: "Is there any alternative way to lower our delivery cost?", cn: "还有没有其他替代方案可以降低我们的配送成本？", pinyin: "hái yǒu méiyǒu qítā tìdài fāng'àn kěyǐ jiàngdī wǒmen de pèisòng chéngběn?", vi: "Còn phương án thay thế nào khác để giảm chi phí giao hàng không?" },
  { id: 1250, day: 125, en: "That is a creative angle; let's explore it further.", cn: "这是个非常有创意的切入点，让我们继续探索一下。", pinyin: "zhè shì gè fēicháng yǒu chuàngyì de qiērùdiǎn, ràng wǒmen jìxù tànsuǒ yíxià.", vi: "Đó là một góc nhìn rất sáng tạo; hãy cùng khai thác thêm nhé." }
);

// Ngày 126: Họp hành & Thuyết trình - Hỏi & Đáp (Q&A Session)
LESSON_DATA.push(
  { id: 1251, day: 126, en: "We will now open the floor for any questions.", cn: "现在进入提问环节。", pinyin: "xiànzài jìnrù tíwèn huánjié.", vi: "Bây giờ chúng ta sẽ bắt đầu phần hỏi đáp." },
  { id: 1252, day: 126, en: "Thank you for that insightful question, John.", cn: "约翰，感谢你提出这么有见地的问题。", pinyin: "yuēhàn, gǎnxiè nǐ tíchū zhème yǒu jiàndì de wèntí.", vi: "Cảm ơn John vì một câu hỏi rất sâu sắc." },
  { id: 1253, day: 126, en: "To answer your question, yes, we plan to launch in May.", cn: "回答你的问题：是的，我们计划在五月份推出。", pinyin: "huídá nǐ de wèntí: shì de, wǒmen jìhuà zài wǔ yuèfèn tuīchū.", vi: "Để trả lời câu hỏi của bạn: vâng, chúng tôi dự định ra mắt vào tháng 5." },
  { id: 1254, day: 126, en: "I don't have the exact numbers right now, but I will get back to you.", cn: "我手头没有准确的数据，但我会在会后答复你。", pinyin: "wǒ shǒutóu méiyǒu zhǔnquè de shùjù, dàn wǒ huì zài huìhòu dáfù nǐ.", vi: "Hiện tại tôi chưa có con số chính xác, nhưng tôi sẽ phản hồi lại bạn sau." },
  { id: 1255, day: 126, en: "Could you repeat the question? The sound cut out briefly.", cn: "你能重复一下问题吗？刚才声音中断了一下。", pinyin: "nǐ néng chóngfù yíxià wèntí ma? gāngcái shēngyīn zhōngduàn le yíxià.", vi: "Bạn có thể nhắc lại câu hỏi không? Vừa rồi âm thanh bị ngắt đoạn một chút." },
  { id: 1256, day: 126, en: "Does that answer your question or would you like more detail?", cn: "这回答了你的问题吗？还是需要更详细的说明？", pinyin: "zhè huídá le nǐ de wèntí ma? háishì xūyào gèng xiángxì de shuōmíng?", vi: "Câu trả lời đó đã đáp ứng được thắc mắc của bạn chưa hay cần thêm thông tin chi tiết?" },
  { id: 1257, day: 126, en: "Allow me to address the concern regarding compliance.", cn: "请允许我针对合规方面的顾虑做出说明。", pinyin: "qǐng yǔnxǔ wǒ zhēnduì héguī fāngmiàn de gùlǜ zuòchū shuōmíng.", vi: "Cho phép tôi giải đáp lo ngại liên quan đến vấn đề tuân thủ." },
  { id: 1258, day: 126, en: "If there are no further questions, we can wrap up this part.", cn: "如果大家没有其他问题，我们可以总结这一环节。", pinyin: "rúguǒ dàjiā méiyǒu qítā wèntí, wǒmen kěyǐ zǒngjié zhè yī huánjié.", vi: "Nếu không còn câu hỏi nào khác, chúng ta có thể kết thúc phần này." },
  { id: 1259, day: 126, en: "That is a complex issue; let me check with our legal team first.", cn: "那是一个复杂的议题，让我先与法务团队核实一下。", pinyin: "nà shì gè fùzá de yìtí, ràng wǒ xiān yǔ fǎwù tuánduì héshí yíxià.", vi: "Đó là một vấn đề phức tạp; để tôi đối soát với bộ phận pháp lý trước." },
  { id: 1260, day: 126, en: "Who would like to go next with their question?", cn: "接下来哪位想提问？", pinyin: "jiē xiàlái nǎ wèi xiǎng tíwèn?", vi: "Ai muốn đặt câu hỏi tiếp theo ạ?" }
);

// Ngày 127: Họp trực tuyến & Sự cố kỹ thuật (Online Meetings & Tech Issues)
LESSON_DATA.push(
  { id: 1261, day: 127, en: "Can everyone hear me loud and clear?", cn: "大家能清楚地听到我的声音吗？", pinyin: "dàjiā néng qīngchu de tīngdào wǒ de shēngyīn ma?", vi: "Mọi người có nghe rõ tiếng tôi nói không?" },
  { id: 1262, day: 127, en: "You are muted. Please unmute your microphone.", cn: "你静音了。请取消静音。", pinyin: "nǐ jìngyīn le. qǐng qǔxiāo jìngyīn.", vi: "Bạn đang tắt mic đấy. Vui lòng bật mic lên." },
  { id: 1263, day: 127, en: "Sorry, my internet connection was a bit unstable.", cn: "抱歉，我刚才的网络连接有点不太稳定。", pinyin: "bàoqiàn, wǒ gāngcái de wǎnglù liánjiē yǒudiǎn bù tài wěndìng.", vi: "Xin lỗi, kết nối mạng của tôi vừa rồi hơi chập chờn." },
  { id: 1264, day: 127, en: "Let me share my screen so you can see the presentation.", cn: "我共享一下屏幕，大家就能看到演示文稿了。", pinyin: "wǒ gòngxiǎng yíxià píngmù, dàjiā jiù néng kàndào yǎnshì wéngǎo le.", vi: "Tôi xin phép chia sẻ màn hình để mọi người xem bản thuyết trình." },
  { id: 1265, day: 127, en: "Is my screen visible to everyone now?", cn: "大家现在能看到我的屏幕吗？", pinyin: "dàjiā xiànzài néng kàndào wǒ de píngmù ma?", vi: "Mọi người đã nhìn thấy màn hình của tôi chưa?" },
  { id: 1266, day: 127, en: "There seems to be an echo on the line.", cn: "通话线路里似乎有回音。", pinyin: "tōnghuà xiànlù lǐ sìhū yǒu huíyīn.", vi: "Có vẻ như đường truyền đang bị dội âm (nhại tiếng)." },
  { id: 1267, day: 127, en: "Could you please turn on your camera if possible?", cn: "方便的话，可以请您开启摄像头吗？", pinyin: "fāngbiàn de huà, kěyǐ qǐng nín kāiqǐ shèxiàngtóu ma?", vi: "Nếu tiện, bạn có thể bật camera lên được không?" },
  { id: 1268, day: 127, en: "I will record this meeting for those who couldn't attend.", cn: "我会录制本次会议，方便没能出席的人查看。", pinyin: "wǒ huì lùzhì běn cì huìyì, fāngbiàn méi néng chūxí de rén chákàn.", vi: "Tôi sẽ ghi hình cuộc họp này cho những ai không tham dự được." },
  { id: 1269, day: 127, en: "Please drop your questions in the chat box.", cn: "请将您的疑问发送在聊天框内。", pinyin: "qǐng jiāng nín de yíwèn fāsòng zài liáotiān kuāng nèi.", vi: "Vui lòng để lại câu hỏi của bạn trong hộp chat." },
  { id: 1270, day: 127, en: "I got kicked out of the meeting call earlier.", cn: "我刚才不小心被掉线掉出了会议室。", pinyin: "wǒ gāngcái bù xiǎoxīn bèi diàoxiàn diào chū le huìyìshì.", vi: "Vừa nãy tôi bị văng ra khỏi cuộc họp trực tuyến." }
);

// Ngày 128: Họp hành & Thuyết trình - Đi đến Thống nhất & Bỏ phiếu (Voting & Consensus)
LESSON_DATA.push(
  { id: 1271, day: 128, en: "Let's take a quick vote on this option.", cn: "让我们对这个选项进行快速表决。", pinyin: "ràng wǒmen duì zhège xuǎnxiàng jìnxíng kuàisù biǎojué.", vi: "Chúng ta hãy tiến hành bỏ phiếu nhanh cho phương án này." },
  { id: 1272, day: 128, en: "All in favor, please raise your hand or type in chat.", cn: "赞成的请举手或在聊天框打字。", pinyin: "zàntóng de qǐng jǔshǒu huò zài liáotiān kuāng dǎzì.", vi: "Ai đồng ý xin vui lòng giơ tay hoặc nhắn vào mục chat." },
  { id: 1273, day: 128, en: "Does anyone have any objections to this proposal?", cn: "有人对此提案有任何异议吗？", pinyin: "yǒu rén duì cǐ tí'àn yǒu rènhé yìyì ma?", vi: "Có ai phản đối đề xuất này không?" },
  { id: 1274, day: 128, en: "It seems we have reached a consensus on the deadline.", cn: "看来我们对截止日期已经达成了一致。", pinyin: "kànlái wǒmen duì jiézhǐ rìqī yǐjīng dáchéng le yízhì.", vi: "Có vẻ như chúng ta đã thống nhất được về thời hạn." },
  { id: 1275, day: 128, en: "The majority of the team supports Option A.", cn: "团队的大多数成员支持选项A。", pinyin: "tuánduì de dàduōshù chéngyuán zhīchí xuǎnxiàng A.", vi: "Đa số thành viên trong team đều ủng hộ Phương án A." },
  { id: 1276, day: 128, en: "Since there are split opinions, let's defer the final decision.", cn: "鉴于意见存在分歧，我们暂缓做出最终决定。", pinyin: "jiànyú yìjiàn cúnzài fēnqí, wǒmen zànhuǎn zuòchū zuìzhōng juédìng.", vi: "Vì ý kiến còn trái chiều, chúng ta sẽ tạm hoãn quyết định cuối cùng." },
  { id: 1277, day: 128, en: "We need a unanimous decision before proceeding further.", cn: "在进一步推进前，我们需要达成一致决议。", pinyin: "zài jìnyíbù tuījìn qián, wǒmen xūyào dáchéng yízhì juéyì.", vi: "Chúng ta cần sự nhất trí 100% trước khi triển khai tiếp." },
  { id: 1278, day: 128, en: "The motion is passed with a 4 to 1 vote.", cn: "该动议以 4 比 1 的表决结果通过。", pinyin: "gāi dòngyì yǐ sì bǐ yī de biǎojué jiéguǒ tōngguò.", vi: "Đề xuất đã được thông qua với tỷ lệ 4-1." },
  { id: 1279, day: 128, en: "Can we compromise on the scope to keep the budget?", cn: "我们能否在范围上做些妥协以维持预算？", pinyin: "wǒmen néngfǒu zài fànwéi shàng zuò xiē tuǒxié yǐ wéichí yùsuàn?", vi: "Chúng ta có thể thỏa thuận giảm bớt quy mô để giữ nguyên ngân sách không?" },
  { id: 1280, day: 128, en: "Thank you for sharing your thoughts; let's sign off on this.", cn: "感谢大家分享看法，让我们就此达成一致签字确认吧。", pinyin: "gǎnxiè dàjiā fēnxiǎng kànfǎ, ràng wǒmen jiùcǐ dáchéng yízhì qiānzì quèrèn ba.", vi: "Cảm ơn ý kiến của mọi người; chúng ta cùng chốt ý kiến này nhé." }
);

// Ngày 129: Họp hành & Thuyết trình - Tổng kết & Phân công công việc (Summarizing & Action Items)
LESSON_DATA.push(
  { id: 1281, day: 129, en: "Let's summarize the key action points from today's meeting.", cn: "让我们总结一下今天会议的关键执行事项。", pinyin: "ràng wǒmen zǒngjié yíxià jīntiān huìyì de guānjiàn zhíxíng shìxiàng.", vi: "Chúng ta hãy tóm tắt lại các việc cần làm chính từ buổi họp hôm nay." },
  { id: 1282, day: 129, en: "John, you will be responsible for drafting the contract.", cn: "约翰，你将负责起草合同。", pinyin: "yuēhàn, nǐ jiāng fùzé qǐcǎo hétong.", vi: "John, bạn sẽ chịu trách nhiệm soạn thảo hợp đồng." },
  { id: 1283, day: 129, en: "Anna will send out the meeting minutes by tomorrow morning.", cn: "安娜将在明天早上前发送会议纪要。", pinyin: "ānnà jiāng zài míngtiān zǎoshang qián fāsòng huìyì jìyào.", vi: "Anna sẽ gửi biên bản cuộc họp trước sáng mai." },
  { id: 1284, day: 129, en: "Please make sure to send your deliverables by Friday EOD.", cn: "请确保在周五下班前发送您的交付成果。", pinyin: "qǐng quèbǎo zài zhōuwǔ xiàbān qián fāsòng nín de jiāofù chéngguǒ.", vi: "Vui lòng đảm bảo gửi phần việc của bạn trước cuối ngày thứ Sáu." },
  { id: 1285, day: 129, en: "Our next follow-up meeting is scheduled for next Tuesday.", cn: "我们的下一次跟进会议定于下周二进行。", pinyin: "wǒmen de xià yí cì gēnjìn huìyì dìng yú xià zhōu'èr jìnxíng.", vi: "Cuộc họp theo dõi tiến độ tiếp theo được ấn định vào thứ Ba tuần tới." },
  { id: 1286, day: 129, en: "Who is taking ownership of testing the final build?", cn: "谁来全权负责测试最终的版本？", pinyin: "shéi lái quánquán fùzé cèshì zuìzhōng de bǎnběn?", vi: "Ai sẽ phụ trách chính việc kiểm thử bản hoàn thiện cuối cùng?" },
  { id: 1287, day: 129, en: "I will align with the design team regarding these changes.", cn: "我将针对这些变更与设计团队进行对接。", pinyin: "wǒ jiāng zhēnduì zhèxiē biàngēng yǔ shèjì tuánduì jìnxíng duìjiē.", vi: "Tôi sẽ làm việc với bên thiết kế để thống nhất về các thay đổi này." },
  { id: 1288, day: 129, en: "Please keep everyone loop in on any status changes.", cn: "如有任何状态更新，请抄送/通知所有人。", pinyin: "rú yǒu rènhé zhuàngtài gēngxīn, qǐng chāosòng/tōngzhī suǒyǒu rén.", vi: "Xin vui lòng cập nhật cho mọi người được biết nếu có thay đổi." },
  { id: 1289, day: 129, en: "We have clear targets and timelines for each team now.", cn: "我们现在为每个团队制定了明确的目标和时间表。", pinyin: "wǒmen xiànzài wèi měi gè tuánduì zhìdìng le míngquè de mùbiāo hé shíjiānbiǎo.", vi: "Hiện tại các team đều đã có mục tiêu và mốc thời gian rõ ràng." },
  { id: 1290, day: 129, en: "I will follow up with you individually if needed.", cn: "如有需要，我稍后会与大家单独跟进。", pinyin: "rú yǒu xūyào, wǒ shāohòu huì yǔ dàjiā dāndú gēnjìn.", vi: "Tôi sẽ trao đổi riêng với từng người nếu cần thiết." }
);

// Ngày 130: Họp hành & Thuyết trình - Kết thúc cuộc họp (Ending the Meeting)
LESSON_DATA.push(
  { id: 1291, day: 130, en: "That covers everything on today's agenda.", cn: "今天议程上的所有事项就讨论到这里。", pinyin: "jīntiān yìchéng shàng de suǒyǒu shìxiàng jiù tǎolùn dào zhèlǐ.", vi: "Chúng ta đã hoàn thành tất cả các mục trong agenda hôm nay." },
  { id: 1292, day: 130, en: "Thank you all for your valuable contribution today.", cn: "感谢大家今天提出的宝贵建议。", pinyin: "gǎnxiè dàjiā jīntiān tíchū de bǎoguì jiànyì.", vi: "Cảm ơn những đóng góp giá trị của tất cả mọi người hôm nay." },
  { id: 1293, day: 130, en: "If no one has anything else to add, we can adjourn.", cn: "如果大家没有补充，我们现在就可以散会了。", pinyin: "rúguǒ dàjiā méiyǒu bǔchōng, wǒmen xiànzài jiù kěyǐ sànhuì le.", vi: "Nếu không ai còn ý kiến gì thêm, chúng ta có thể kết thúc buổi họp." },
  { id: 1294, day: 130, en: "I appreciate your active participation in this discussion.", cn: "非常感谢大家在讨论中的积极参与。", pinyin: "fēicháng gǎnxiè dàjiā zài tǎolùn zhōng de jījí cān yù.", vi: "Tôi rất ghi nhận sự tham gia tích cực của mọi người trong buổi thảo luận." },
  { id: 1295, day: 130, en: "Please submit your meeting notes to the shared drive.", cn: "请将您的会议笔记上传至共享云盘。", pinyin: "qǐng jiāng nín de huìyì bǐjì shàngchuán zhì gòngxiǎng yúnpán.", vi: "Vui lòng tải ghi chú buổi họp của bạn lên ổ đĩa dùng chung." },
  { id: 1300, day: 130, en: "I look forward to seeing the progress next week.", cn: "我很期待看到下周的进展。", pinyin: "wǒ hěn qīdài kàndào xià zhōu de jīnzǎn.", vi: "Tôi rất mong chờ được thấy những tiến triển mới vào tuần tới." },
  { id: 1297, day: 130, en: "Have a great rest of your day, everyone!", cn: "祝大家今天接下来度过愉快的一天！", pinyin: "zhù dàjiā jīntiān jiē xiàlái dùguò yúkuài de yì tiān!", vi: "Chúc mọi người có một ngày làm việc còn lại thật vui vẻ!" },
  { id: 1298, day: 130, en: "The meeting is formally concluded now.", cn: "会议现在正式结束。", pinyin: "huìyì xiànzài zhèngshì jiéshù.", vi: "Cuộc họp bây giờ chính thức kết thúc." },
  { id: 1299, day: 130, en: "Feel free to reach out via Slack if you have post-meeting queries.", cn: "会后如有疑问，欢迎随时在 Slack 上与我联系。", pinyin: "huìhòu rú yǒu yíwèn, huānyíng suíshí zài Slack shàng yǔ wǒ liánxì.", vi: "Sau cuộc họp nếu có thắc mắc gì, cứ tự nhiên nhắn cho tôi qua Slack nhé." },
  { id: 1296, day: 130, en: "Thanks again for your time, see you all next time!", cn: "再次感谢大家的时间，我们下次再见！", pinyin: "zàicì gǎnxiè dàjiā de shíjiān, wǒmen xià cì zài jiàn!", vi: "Một lần nữa cảm ơn thời gian của mọi người, hẹn gặp lại lần sau!" }
);

// ==========================================
// CHẶNG 3: CÔNG SỞ, NGHỀ NGHIỆP & KỸ NĂNG MỀM (TIẾP THEO)
// DỮ LIỆU CÂU HỘI THOẠI CHI TIẾT: NGÀY 131 - NGÀY 140
// ==========================================

// Ngày 131: Đàm phán & Hợp đồng - Khởi động Đàm phán & Thiết lập Mục tiêu
LESSON_DATA.push(
  { id: 1301, day: 131, en: "We are glad to sit down today to discuss a potential partnership.", cn: "很高兴今天能坐下来探讨潜在的合作机会。", pinyin: "hěn gāoxìng jīntiān néng zuò xiàlái tàntǒu qiánzài de hézuò jīhuì.", vi: "Rất vui vì hôm nay có thể ngồi lại bàn về cơ hội hợp tác tiềm năng." },
  { id: 1302, day: 131, en: "Our main goal today is to reach a win-win agreement.", cn: "我们今天的首要目标是达成一份共赢的协议。", pinyin: "wǒmen jīntiān de shǒuyào mùbiāo shì dáchéng yí fèn gòngyíng de xiéyì.", vi: "Mục tiêu chính của chúng tôi hôm nay là đạt được một thỏa thuận đôi bên cùng có lợi." },
  { id: 1303, day: 131, en: "Let's lay out our key terms before diving into the details.", cn: "在深入细节之前，让我们先列出各自的核心条款。", pinyin: "zài shēnrù xìjié zhīqián, ràng wǒmen xiān liè chū gèzì de héxīn tiáokuǎn.", vi: "Trước khi đi vào chi tiết, chúng ta hãy đưa ra các điều khoản cốt lõi của mình." },
  { id: 1304, day: 131, en: "We value long-term cooperation over short-term gains.", cn: "相比短期利益，我们更看重长期的合作关系。", pinyin: "xiāngbǐ duǎnqī lìyì, wǒmen gèng kànzhòng chángqī de hézuò guānxi.", vi: "So với lợi ích ngắn hạn, chúng tôi coi trọng mối quan hệ hợp tác lâu dài hơn." },
  { id: 1305, day: 131, en: "What are your main expectations regarding this contract?", cn: "贵方对这份合同的主要期望是什么？", pinyin: "guìfāng duì zhè fèn hétong de zhǔyào qīwàng shì shénme?", vi: "Kỳ vọng chính của quý công ty đối với hợp đồng này là gì?" },
  { id: 1306, day: 131, en: "We hope to find a balance between price and service quality.", cn: "我们希望在价格与服务质量之间找到平衡点。", pinyin: "wǒmen xīwàng zài jiàgé yǔ fúwù zhìliàng zhījiān zhǎodào pínghéngdiǎn.", vi: "Chúng tôi hy vọng tìm được điểm cân bằng giữa giá cả và chất lượng dịch vụ." },
  { id: 1307, day: 131, en: "Before we proceed, let's review the proposed scope of work.", cn: "在继续之前，让我们先核对一下拟议的工作范围。", pinyin: "zài jìxù zhīqián, ràng wǒmen xiān héduì yíxià nǐyì de gōngzuò fànwéi.", vi: "Trước khi tiếp tục, hãy cùng xem lại phạm vi công việc đề xuất." },
  { id: 1308, day: 131, en: "We are open to flexible solutions to make this deal happen.", cn: "我们持开放态度，愿意探讨灵活的方案以促成这次交易。", pinyin: "wǒmen chí kāifàng tàidu, yuànyì tàntǒu línghuó de fāng'àn yǐ cùchéng zhè cì jiāoyì.", vi: "Chúng tôi cởi mở với các phương án linh hoạt để thúc đẩy giao dịch này thành công." },
  { id: 1309, day: 131, en: "Safety and legal compliance are non-negotiable for us.", cn: "对我们而言，安全与法律合规是不可妥协的前提。", pinyin: "duì wǒmen ér yán, ānquán yǔ fǎlǜ héguī shì bùkě tuǒxié de qiántí.", vi: "An toàn và tuân thủ pháp luật là các điều kiện không thể thương lượng của chúng tôi." },
  { id: 1310, day: 131, en: "Shall we start by addressing the core terms first?", cn: "我们要不先从最核心的条款开始讨论？", pinyin: "wǒmen yào bù xiān cóng zuì héxīn de tiáokuǎn kāishǐ tǎolùn?", vi: "Chúng ta bắt đầu thảo luận từ các điều khoản quan trọng nhất trước nhé?" }
);

// Ngày 132: Đàm phán & Hợp đồng - Thương lượng Giá cả & Chiết khấu
LESSON_DATA.push(
  { id: 1311, day: 132, en: "Your initial quote is slightly higher than our budget allowance.", cn: "贵方的 ban đầu 报价略高于我们的预算上限。", pinyin: "guìfāng de bǎojià lüè gāo yú wǒmen de yùsuàn shàngxiàn.", vi: "Báo giá ban đầu của quý công ty hơi cao so với hạn mức ngân sách của chúng tôi." },
  { id: 1312, day: 132, en: "Can you offer a bulk discount if we order 10,000 units?", cn: "如果我们订购一万件，贵方能提供批量折扣吗？", pinyin: "rúguǒ wǒmen dìnggòu yì wàn jiàn, guìfāng néng tígōng pīliàng zhékòu ma?", vi: "Nếu chúng tôi đặt hàng 10.000 sản phẩm, bên bạn có thể chiết khấu số lượng lớn không?" },
  { id: 1313, day: 132, en: "This price reflects the premium quality of our materials.", cn: "这个价格体现了我们原材料的高品质。", pinyin: "zhège jiàgé tǐxiàn le wǒmen yuáncáiliào de gāo pǐnzhì.", vi: "Mức giá này phản ánh chất lượng cao cấp của nguyên vật liệu của chúng tôi." },
  { id: 1314, day: 132, en: "If you can lower the unit price by 5%, we can sign today.", cn: "如果单价能降低5%，我们今天就可以签约。", pinyin: "rúguǒ dānjià néng jiàngdī bǎi fēn zhī wǔ, wǒmen jīntiān jiù kěyǐ qiānyuē.", vi: "Nếu quý vị có thể giảm 5% đơn giá, chúng tôi có thể ký hợp đồng ngay hôm nay." },
  { id: 1315, day: 132, en: "That price is non-negotiable due to rising production costs.", cn: "由于生产成本上涨，这个价格是没有谈判余地的。", pinyin: "yóuyú shēngchǎn chéngběn shàngzhǎng, zhège jiàgé shì méiyǒu tánpàn yúdì de.", vi: "Do chi phí sản xuất tăng, mức giá này là không thể thương lượng thêm." },
  { id: 1316, day: 132, en: "Could we meet in the middle at $50 per unit?", cn: "我们能否折中一下，按每件50美元计算？", pinyin: "wǒmen néngfǒu zhézhōng yíxià, àn měi jiàn wǔshí měiyuán jìsuàn?", vi: "Chúng ta có thể lấy mức giá trung bình là 50 USD mỗi đơn vị không?" },
  { id: 1317, day: 132, en: "What is your best and final offer on this package?", cn: "关于这个套餐，贵方能给出的最终最低报价是多少？", pinyin: "guānyú zhège tàocān, guìfāng néng gěichū de zuìzhōng zuìdī bǎojià shì duōshao?", vi: "Mức giá chốt cuối cùng và tốt nhất cho gói này của bên bạn là bao nhiêu?" },
  { id: 1318, day: 132, en: "We can provide free shipping to offset the product price.", cn: "我们可以提供包邮服务，以弥补产品价格上的差距。", pinyin: "wǒmen kěyǐ tígōng bāoyóu fúwù, yǐ míbǔ chǎnpǐn jiàgé shàng de chājù.", vi: "Chúng tôi có thể miễn phí vận chuyển để bù đắp cho mức giá sản phẩm." },
  { id: 1319, day: 132, en: "Is there any seasonal promotion we can take advantage of?", cn: "目前有没有我们可以享受的季度促销优惠？", pinyin: "mùqián yǒu méiyǒu wǒmen kěyǐ xiǎngshòu de jìdù cùxiāo yōuhuì?", vi: "Hiện tại có chương trình khuyến mãi theo mùa nào mà chúng tôi áp dụng được không?" },
  { id: 1320, day: 132, en: "We need to see a breakdown of all included costs first.", cn: "我们需要先查看所有包含成本的明细表。", pinyin: "wǒmen xūyào xiān chákàn suǒyǒu bāohán chéngběn de míngxìbiǎo.", vi: "Trước tiên chúng tôi cần xem bảng phân tích chi tiết tất cả các chi phí đi kèm." }
);

// Ngày 133: Đàm phán & Hợp đồng - Điều khoản Thanh toán (Payment Terms)
LESSON_DATA.push(
  { id: 1321, day: 133, en: "Our standard payment term is Net 30 days after invoice.", cn: "我们的标准付款条件是收到发票后30天内结清。", pinyin: "wǒmen de biāozhǔn fùkuǎn tiáojiàn shì shōudào fāpiào hòu sānshí tiān nèi jiéqīng.", vi: "Điều khoản thanh toán chuẩn của chúng tôi là 30 ngày kể từ khi nhận hóa đơn." },
  { id: 1322, day: 133, en: "We require a 30% advance deposit upon signing the contract.", cn: "在签署合同时，我们需要预付30%的定金。", pinyin: "zài qiānshǔ hétong shí, wǒmen xūyào yùfù bǎi fēn zhī sānshí de dìngjīn.", vi: "Chúng tôi yêu cầu đặt cọc trước 30% ngay khi ký hợp đồng." },
  { id: 1323, day: 133, en: "The remaining balance will be settled upon delivery of goods.", cn: "尾款将在货物交付时付清。", pinyin: "wěikuǎn jiāng zài huòwù jiāofù shí fùqīng.", vi: "Số tiền còn lại sẽ được thanh toán sau khi giao hàng." },
  { id: 1324, day: 133, en: "Do you accept payments via telegraphic transfer or Letter of Credit?", cn: "贵方接受电汇还是信用证付款方式？", pinyin: "guìfāng jiēshòu diànhuì háishì xìnyòngzhèng fùkuǎn fāngshì?", vi: "Quý công ty chấp nhận thanh toán bằng chuyển khoản (T/T) hay thư tín dụng (L/C)?" },
  { id: 1325, day: 133, en: "Can we split the payment into four equal installments?", cn: "我们能否将款项分四期等额支付？", pinyin: "wǒmen néngfǒu jiāng kuǎnxiàng fēn sì qī děng'é zhīfù?", vi: "Chúng tôi có thể chia khoản thanh toán thành 4 đợt bằng nhau không?" },
  { id: 1326, day: 133, en: "Late payments will incur an interest charge of 1.5% per month.", cn: "逾期付款将按每月1.5%收取滞纳利息。", pinyin: "yúqī fùkuǎn jiāng àn měi yuè bǎi fēn zhī yī diǎn wǔ shōuqǔ zhìnà lìxī.", vi: "Thanh toán trễ hạn sẽ chịu mức lãi suất 1,5% mỗi tháng." },
  { id: 1327, day: 133, en: "We would prefer payment in US Dollars rather than local currency.", cn: "相比本地货币，我们更倾向于用美元结算。", pinyin: "xiāngbǐ běndì huòbì, wǒmen gèng qīngxiàng yú yòng měiyuán jiésuàn.", vi: "Chúng tôi ưu tiên thanh toán bằng đồng USD hơn là đồng bản tệ." },
  { id: 1328, day: 133, en: "All bank transaction fees shall be borne by the buyer.", cn: "所有银行转账手续费应由买方承担。", pinyin: "suǒyǒu yínháng zhuǎnzhàng shǒuxùfèi yīng yóu mǎifāng chéngdān.", vi: "Mọi phí giao dịch ngân hàng sẽ do bên mua chịu." },
  { id: 1329, day: 133, en: "Is it possible to extend the payment cycle to 60 days?", cn: "能否将付款周期延长至60天？", pinyin: "néngfǒu jiāng fùkuǎn zhōuqi yáncháng zhì liùshí tiān?", vi: "Có thể nới thời hạn thanh toán lên 60 ngày được không?" },
  { id: 1330, day: 133, en: "Payment milestones will be tied to project deliverables.", cn: "付款节点将与项目阶段性成果挂钩。", pinyin: "fùkuǎn jiédiǎn jiāng yǔ xiàngmù jiēduànxìng chéngguǒ guàgōu.", vi: "Các mốc thanh toán sẽ được gắn liền với kết quả hoàn thành của từng giai đoạn dự án." }
);

// Ngày 134: Đàm phán & Hợp đồng - Thời gian Giao hàng & Vận chuyển (Delivery & Logistics)
LESSON_DATA.push(
  { id: 1331, day: 134, en: "What is the estimated lead time for manufacturing?", cn: "预计的生产周期需要多久？", pinyin: "yùjì de shēngchǎn zhōuqi xūyào duōjiǔ?", vi: "Thời gian dự kiến từ sản xuất đến bàn giao là bao lâu?" },
  { id: 1332, day: 134, en: "We guarantee delivery within four weeks from purchase order.", cn: "我们保证在收到采购订单后四周内交货。", pinyin: "wǒmen bǎozhèng zài shōudào cǎigòu dìngdān hòu sì zhōu nèi jiāohuò.", vi: "Chúng tôi đảm bảo giao hàng trong vòng 4 tuần kể từ khi nhận đơn đặt hàng." },
  { id: 1333, day: 134, en: "Which Incoterms will apply to this shipping contract?", cn: "本次运输合同适用哪种国际贸易术语？", pinyin: "běn cì yùnshū hétong shìyòng nǎ zhǒng guójì màoyì shùyǔ?", vi: "Điều khoản thương mại quốc tế (Incoterms) nào sẽ áp dụng cho hợp đồng vận chuyển này?" },
  { id: 1334, day: 134, en: "We suggest trading under FOB Shanghai terms.", cn: "我们建议按照上海港船上交货价（FOB Shanghai）条款交易。", pinyin: "wǒmen jiànyì ànzhào shànghǎi gǎng chuánshàng jiāohuòjià (FOB Shanghai) tiáokuǎn jiāoyì.", vi: "Chúng tôi đề xuất giao dịch theo điều kiện FOB Shanghai." },
  { id: 1335, day: 134, en: "Who will be responsible for customs clearance and import duties?", cn: "谁来负责清关和进口关税？", pinyin: "shéi lái fùzé qīngguān hé jìnkǒu guānshuì?", vi: "Ai sẽ là người chịu trách nhiệm thông quan và nộp thuế nhập khẩu?" },
  { id: 1336, day: 134, en: "Late delivery will be subject to a penalty of 0.5% per day.", cn: "延迟交货将按每天0.5%处以违约金。", pinyin: "yánchí jiāohuò jiāng àn měitiān bǎi fēn zhī líng diǎn wǔ chǔ yǐ wéiyuējīn.", vi: "Giao hàng chậm trễ sẽ chịu phạt 0,5% mỗi ngày." },
  { id: 1337, day: 134, en: "Can you expedite the shipment process if we pay extra?", cn: "如果我们支付额外费用，能够加急发货吗？", pinyin: "rúguǒ wǒmen zhīfù éwài fèiyong, nénggòu jiājí fāhuò ma?", vi: "Nếu chúng tôi trả thêm phí, bạn có thể đẩy nhanh tiến độ giao hàng không?" },
  { id: 1338, day: 134, en: "Partial shipments should be allowed for this large batch.", cn: "对于这批大额货物，应允许分批装运。", pinyin: "duìyú zhè pī dà'é huòwù, yīng yǔnxǔ fēnpī zhuāngyùn.", vi: "Đối với lô hàng lớn này, cần cho phép giao hàng từng phần." },
  { id: 1339, day: 134, en: "The seller assumes risk until goods arrive at destination port.", cn: "在货物到达目的港之前，风险由卖方承担。", pinyin: "zài huòwù dào dá mùdìgǎng zhīqián, fēngxiǎn yóu màifāng chéngdān.", vi: "Bên bán chịu rủi ro cho đến khi hàng cập cảng đích." },
  { id: 1340, day: 134, en: "Please ensure all packaging meets international export standards.", cn: "请确保所有包装符合国际出口标准。", pinyin: "qǐng quèbǎo suǒyǒu bāozhuāng fúhé guójì chūkǒu biāozhǔn.", vi: "Vui lòng đảm bảo bao bì quy cách đóng gói đáp ứng chuẩn xuất khẩu quốc tế." }
);

// Ngày 135: Đàm phán & Hợp đồng - Cam kết Bảo hành & Chất lượng (Warranty & SLA)
LESSON_DATA.push(
  { id: 1341, day: 135, en: "We offer a standard 12-month warranty from installation date.", cn: "我们提供自安装之日起为期12个月的标准保修。", pinyin: "wǒmen tígōng zì ānzhuāng zhī rì qǐ wéiqī shí'èr gè yuè de biāozhǔn bǎoxiū.", vi: "Chúng tôi cung cấp thời hạn bảo hành tiêu chuẩn 12 tháng kể từ ngày lắp đặt." },
  { id: 1342, day: 135, en: "Does the Service Level Agreement guarantee 99.9% uptime?", cn: "服务级别协议（SLA）是否保证99.9%的正常运行时间？", pinyin: "fúwù jíbié xiéyì (SLA) shìfǒu bǎozhèng bǎi fēn zhī jiǔshíjiǔ diǎn jiǔ de zhèngcháng yùnxíng shíjiān?", vi: "Cam kết chất lượng dịch vụ (SLA) có đảm bảo thời gian hoạt động liên tục 99,9% không?" },
  { id: 1343, day: 135, en: "Defective items will be replaced free of charge within 30 days.", cn: "有缺陷的物品将在30天内免费更换。", pinyin: "yǒu quēxiàn de wùpǐn jiāng zài sānshí tiān nèi miǎnfèi gēnghuàn.", vi: "Các sản phẩm bị lỗi sẽ được đổi trả miễn phí trong vòng 30 ngày." },
  { id: 1344, day: 135, en: "Can we extend the technical support period to three years?", cn: "我们能否将技术支持期限延长至三年？", pinyin: "wǒmen néngfǒu jiāng jìshù zhīchí qīxiàn yáncháng zhì sān nián?", vi: "Chúng tôi có thể kéo dài thời gian hỗ trợ kỹ thuật lên 3 năm không?" },
  { id: 1345, day: 135, en: "On-site maintenance is available 24/7 for emergency issues.", cn: "对于紧急问题，我们提供24/7全天候现场维护。", pinyin: "duìyú jǐnjí wèntí, wǒmen tígōng èrshísì qī quántiānhòu xiànchǎng wéihù.", vi: "Chúng tôi cung cấp dịch vụ bảo trì tận nơi 24/7 đối với các sự cố khẩn cấp." },
  { id: 1346, day: 135, en: "The warranty does not cover damage caused by misuse or neglect.", cn: "保修范围不包括因不当使用或疏忽造成的损坏。", pinyin: "bǎoxiū fànwéi bù bāokuò yīn bùdàng shǐyòng huò shūhu zàochéng de sǔnhuài.", vi: "Bảo hành không bao gồm hư hỏng do sử dụng sai cách hoặc lơ đễnh gây ra." },
  { id: 1347, day: 135, en: "What is your average response time for critical system bugs?", cn: "对于严重系统漏洞，贵方的平均响应时间是多少？", pinyin: "duìyú yánzhòng xìtǒng lòudòng, guìfāng de píngjūn xiǎngyìng shíjiān shì duōshao?", vi: "Thời gian phản hồi trung bình của bên bạn đối với lỗi hệ thống nghiêm trọng là bao lâu?" },
  { id: 1348, day: 135, en: "We conduct rigorous quality control checks before shipment.", cn: "发货前我们会进行严格的质量控制检测。", pinyin: "fāhuò qián wǒmen huì jìnxíng yánɡé de zhìliàng kòngzhì jiǎncè.", vi: "Chúng tôi thực hiện quy trình kiểm tra chất lượng nghiêm ngặt trước khi giao hàng." },
  { id: 1349, day: 135, en: "A quality certificate must accompany every batch of products.", cn: "每批产品必须附带质量合格证书。", pinyin: "měi pī chǎnpǐn bìxū fùdài zhìliàng hégé zhèngshū.", vi: "Mỗi lô hàng xuất đi phải kèm theo chứng nhận chất lượng." },
  { id: 1350, day: 135, en: "Is software upgrade included in the annual maintenance contract?", cn: "软件升级是否包含在年度维护合同中？", pinyin: "ruǎnjiān shēngjí shìfǒu bāohán zài niándù wéihù hétong zhōng?", vi: "Nâng cấp phần mềm có nằm trong hợp đồng bảo trì hàng năm không?" }
);

// Ngày 136: Đàm phán & Hợp đồng - Đóng góp & Bổ sung Điều khoản (Contract Clauses)
LESSON_DATA.push(
  { id: 1351, day: 136, en: "We need to insert a Non-Disclosure Agreement (NDA) clause.", cn: "我们需要增加一项保密协议（NDA）条款。", pinyin: "wǒmen xūyào zēngjiā yì xiàng bǎomì xiéyì (NDA) tiáokuǎn.", vi: "Chúng ta cần thêm một điều khoản cam kết bảo mật thông tin (NDA)." },
  { id: 1352, day: 136, en: "Either party may terminate the contract with a 30-day notice.", cn: "任何一方提前30天通知，均可终止合同。", pinyin: "rènhé yì fāng tíqián sānshí tiān tōngzhī, jūnkě zhōngzhǐ hétong.", vi: "Bất kỳ bên nào cũng có thể chấm dứt hợp đồng nếu thông báo trước 30 ngày." },
  { id: 1353, day: 136, en: "This agreement is subject to the laws of Singapore.", cn: "本协议受新加坡法律管辖。", pinyin: "běn xiéyì shòu xīnjiāpō fǎlǜ guǎnxiá.", vi: "Thỏa thuận này chịu sự điều chỉnh của pháp luật Singapore." },
  { id: 1354, day: 136, en: "We should clearly define Intellectual Property rights in Section 5.", cn: "我们应该在第五条中明确定义知识产权归属。", pinyin: "wǒmen yīnggāi zài dì-wǔ tiáo zhōng míngquè dìngyì zhīshi chǎnquán guīshǔ.", vi: "Chúng ta nên xác định rõ ràng quyền sở hữu trí tuệ ở Điều 5." },
  { id: 1355, day: 136, en: "The Force Majeure clause protects both parties during catastrophes.", cn: "不可抗力条款在发生重大灾难时保护双方利益。", pinyin: "bùkě kànglì tiáokuǎn zài fāshēng zhòngdà zāinàn shí bǎohù shuāngfāng lìyì.", vi: "Điều khoản Bất khả kháng sẽ bảo vệ quyền lợi hai bên khi xảy ra thiên tai thảm họa." },
  { id: 1356, day: 136, en: "We would like to modify the wording of Clause 3.2.", cn: "我们希望修改第3.2条的文字表述。", pinyin: "wǒmen xīwàng xiūgǎi dì-sān diǎn èr tiáo de wénzì biǎoshù.", vi: "Chúng tôi muốn sửa đổi lại văn phong câu chữ ở Điều 3.2." },
  { id: 1357, day: 136, en: "Subcontracting is not allowed without prior written consent.", cn: "未经事先书面同意，不得擅自转包。", pinyin: "wèijīng shìxiān shūmiàn tóngyì, bùdé shànzì zhuǎnbāo.", vi: "Không được phép giao lại cho nhà thầu phụ nếu không có chấp thuận bằng văn bản trước." },
  { id: 1358, day: 136, en: "Any amendment to this contract must be signed in writing.", cn: "本合同的任何修改均需签署书面文件。", pinyin: "běn hétong de rènhé xiūgǎi jūn xū qiānshǔ shūmiàn wéndàng.", vi: "Bất kỳ bổ sung chỉnh sửa nào cho hợp đồng này đều phải ký bằng văn bản." },
  { id: 1359, day: 136, en: "Let's review the limitation of liability section carefully.", cn: "让我们仔细审查一下责任限制部分的条款。", pinyin: "ràng wǒmen zǐxì shěnchá yíxià zérèn xiànzhì bùfen de tiáokuǎn.", vi: "Hãy xem xét kỹ phần quy định giới hạn trách nhiệm pháp lý." },
  { id: 1360, day: 136, en: "The exclusivity clause prohibits working with direct competitors.", cn: "排他性条款禁止与直接竞争对手合作。", pinyin: "páitāxìng tiáokuǎn jìnzhǐ yǔ zhíjiē jìngzhēng duìshǒu hézuò.", vi: "Điều khoản độc quyền cấm hợp tác với các đối thủ cạnh tranh trực tiếp." }
);

// Ngày 137: Đàm phán & Hợp đồng - Nhượng bộ & Giải quyết Bất đồng (Compromise & Deadlock)
LESSON_DATA.push(
  { id: 1361, day: 137, en: "If you can compromise on lead time, we can adjust the price.", cn: "如果贵方可以在交货期上妥协，我们可以调整价格。", pinyin: "rúguǒ guìfāng kěyǐ zài jiāohuòqī shàng tuǒxié, wǒmen kěyǐ tiáozhěng jiàgé.", vi: "Nếu quý vị nhượng bộ về thời gian giao hàng, chúng tôi có thể điều chỉnh giá." },
  { id: 1362, day: 137, en: "We seem to have reached a deadlock on the payment terms.", cn: "我们在付款条件上似乎陷入了僵局。", pinyin: "wǒmen zài fùkuǎn tiáokuǎn shàng sìhū xiànrù le jiāngjú.", vi: "Dường như chúng ta đã bế tắc ở khoản thương lượng điều kiện thanh toán." },
  { id: 1363, day: 137, en: "Is there any trade-off we can consider to resolve this dispute?", cn: "有没有什么互惠妥协方案可以解决这次争议？", pinyin: "yǒu méiyǒu shénme hùhuì tuǒxié fāng'àn kěyǐ jiějué zhè cì zhēngyì?", vi: "Có sự trao đổi nhượng bộ nào chúng ta có thể cân nhắc để giải quyết tranh chấp này không?" },
  { id: 1364, day: 137, en: "We are willing to make a concession on the initial order volume.", cn: "我们愿意在首批订购量上做出一些让步。", pinyin: "wǒmen yuànyì zài shǒupī dìnggòuliàng shàng zuòchū yìxiē ràngbù.", vi: "Chúng tôi sẵn sàng nhượng bộ về số lượng đơn hàng đầu tiên." },
  { id: 1365, day: 137, en: "Let's take a short break to consult with our management team.", cn: "让我们休会片刻，与管理团队协商一下。", pinyin: "ràng wǒmen xiūhuì piànkè, yǔ guǎnlǐ tuánduì xiéshāng yíxià.", vi: "Chúng ta hãy giải lao ít phút để tham vấn lại với ban quản lý." },
  { id: 1366, day: 137, en: "This condition is unacceptable from our business standpoint.", cn: "从我们的商业立场来看，这一条件是无法接受的。", pinyin: "cóng wǒmen de shāngyè lìchǎng kànlái, zhè yī tiáojiàn shì wúfǎ jiēshòu de.", vi: "Xét từ góc độ kinh doanh của chúng tôi, điều kiện này là không thể chấp nhận được." },
  { id: 1367, day: 137, en: "Can you offer any alternative solution to break the impasse?", cn: "贵方能提供什么替代方案来打破僵局吗？", pinyin: "guìfāng néng tígōng shénme tìdài fāng'àn lái dǎpò jiāngjú ma?", vi: "Bên bạn có đưa ra phương án thay thế nào để khai thông thế bế tắc không?" },
  { id: 1368, day: 137, en: "We need to protect our profit margin on this transaction.", cn: "我们必须保证我们在本次交易中的利润率。", pinyin: "wǒmen bìxū bǎozhèng wǒmen zài běn cì jiāoyì zhōng de lìrùnlǜ.", vi: "Chúng tôi phải bảo đảm biên lợi nhuận của mình trong giao dịch này." },
  { id: 1369, day: 137, en: "Let's re-examine the issues from a different angle.", cn: "让我们换个角度重新审视这些问题。", pinyin: "ràng wǒmen huàn gè jiǎodù chóngxīn shěnshì zhèxiē wèntí.", vi: "Chúng ta hãy nhìn nhận lại các vấn đề từ một góc độ khác." },
  { id: 1370, day: 137, en: "We are reaching the limit of what we can offer.", cn: "我们所能给出的优惠条件已经快达到极限了。", pinyin: "wǒmen suǒ néng gěichū de yōuhuì tiáojiàn yǐjīng kuài dádào jíxiàn le.", vi: "Chúng tôi đã sắp chạm tới hạn mức ưu đãi tối đa có thể đưa ra rồi." }
);

// Ngày 138: Đàm phán & Hợp đồng - Đóng dấu & Ký kết Hợp đồng (Signing & Closing)
LESSON_DATA.push(
  { id: 1371, day: 138, en: "Our legal team has thoroughly reviewed the revised draft.", cn: "我们的法务团队已全面审查了修改后的草案。", pinyin: "wǒmen de fǎwù tuánduì yǐ quánmiàn shěnchá le xiūgǎi hòu de cǎo'àn.", vi: "Đội ngũ pháp lý của chúng tôi đã xem xét kỹ càng bản dự thảo sửa đổi." },
  { id: 1372, day: 138, en: "Everything is in order; we are ready to sign the contract.", cn: "一切就绪，我们准备好签署合同了。", pinyin: "yìqiè jiùxù, wǒmen zhǔnbèi hǎo qiānshǔ hétong le.", vi: "Mọi thứ đã sẵn sàng; chúng tôi đã chuẩn bị xong để ký hợp đồng." },
  { id: 1373, day: 138, en: "Please prepare two original copies for execution.", cn: "请准备两份正本供签署生效。", pinyin: "qǐng zhǔnbèi liǎng fèn zhèngběn gōng qiānshǔ shēngxiào.", vi: "Vui lòng chuẩn bị 2 bản gốc để ký kết thi hành." },
  { id: 1374, day: 138, en: "Do you accept digital signatures via DocuSign?", cn: "贵方接受 DocuSign 的电子签名吗？", pinyin: "guìfāng jiēshòu DocuSign de diànzǐ qiānmíng ma?", vi: "Quý bên có chấp nhận chữ ký số qua DocuSign không?" },
  { id: 1375, day: 138, en: "Who will be the authorized signatory representing your company?", cn: "贵方将由谁作为授权代表进行签字？", pinyin: "guìfāng jiāng yóu shéi zuòwéi shòuquán dàibiǎo jìnxíng qiānzì?", vi: "Ai sẽ là đại diện ủy quyền ký kết thay mặt công ty bạn?" },
  { id: 1376, day: 138, en: "The agreement shall take effect upon the date of signing.", cn: "本协议自签署之日起生效。", pinyin: "běn xiéyì zì qiānshǔ zhī rì qǐ shēngxiào.", vi: "Thỏa thuận này bắt đầu có hiệu lực kể từ ngày ký." },
  { id: 1377, day: 138, en: "Congratulations on successfully closing this partnership deal!", cn: "恭喜成功达成本次合作协议！", pinyin: "gōngxǐ chénggōng dáchéng běn cì hézuò xiéyì!", vi: "Chúc mừng hai bên đã khép lại thương vụ hợp tác thành công!" },
  { id: 1378, day: 138, en: "We need to affix the official company seal on each page.", cn: "我们需要在每页合同上加盖公司公章/骑缝章。", pinyin: "wǒmen xūyào zài měi yè hétong shàng jiāgài gōngsī gōngzhāng/qíféngzhāng.", vi: "Chúng ta cần đóng dấu giáp lai/dấu công ty lên từng trang hợp đồng." },
  { id: 1379, day: 138, en: "I will email you the scanned copy once signed.", cn: "签署完成后，我会将扫描件发邮件给您。", pinyin: "qiānshǔ wánchéng hòu, wǒ huì jiāng sǎomiáojiàn fā yóujiān gěi nín.", vi: "Sau khi ký xong, tôi sẽ gửi bản quét (scan) qua email cho bạn." },
  { id: 1380, day: 138, en: "Here is to a fruitful and long-lasting partnership!", cn: "祝愿我们合作愉快，共创辉煌！", pinyin: "zhùyuàn wǒmen hézuò yúkuài, gòng chuàng huīhuáng!", vi: "Chúc cho mối quan hệ hợp tác của chúng ta gặt hái nhiều thành công và bền vững!" }
);

// Ngày 139: Đàm phán & Hợp đồng - Xử lý Bội ước & Phạt hợp đồng (Breach & Penalties)
LESSON_DATA.push(
  { id: 1381, day: 139, en: "Failure to deliver on time constitutes a breach of contract.", cn: "未能按时交货将构成违约。", pinyin: "wèinéng ànshí jiāohuò jiāng gòuchéng wéiyuē.", vi: "Không giao hàng đúng hạn sẽ cấu thành hành vi vi phạm hợp đồng." },
  { id: 1382, day: 139, en: "We reserve the right to claim liquidated damages for losses.", cn: "我们保留因损失要求赔偿违约金的权利。", pinyin: "wǒmen bǎoliú yīn sǔnshī yāoqiú péicháng wéiyuējīn de quánlì.", vi: "Chúng tôi bảo lưu quyền yêu cầu bồi thường thiệt hại ước tính theo thỏa thuận." },
  { id: 1383, day: 139, en: "We issued an official written notice of non-compliance today.", cn: "我们今天发出了一份关于未履约的正式书面通知。", pinyin: "wǒmen jīntiān fāchū le yì fèn guānyú wèi lǚyuē de zhèngshì shūmiàn tōngzhī.", vi: "Hôm nay chúng tôi đã gửi một thông báo bằng văn bản chính thức về việc không tuân thủ cam kết." },
  { id: 1384, day: 139, en: "You have 14 days to cure the breach before legal action.", cn: "在采取法律行动前，贵方有14天时间纠正违约行为。", pinyin: "zài cǎiqǔ fǎlǜ xíngdòng qián, guìfāng yǒu shísì tiān shíjiān jiūzhèng wéiyuē xíngwéi.", vi: "Bên bạn có 14 ngày để khắc phục vi phạm trước khi áp dụng các biện pháp pháp lý." },
  { id: 1385, day: 139, en: "The dispute shall be resolved through binding arbitration.", cn: "争议应通过具有约束力的仲裁方式解决。", pinyin: "zhēngyì yīng tōngguò jùyǒu yuēshùlì de zhòngcái fāngshì jiějué.", vi: "Tranh chấp sẽ được giải quyết thông qua trọng tài có phán quyết ràng buộc." },
  { id: 1386, day: 139, en: "We are holding back payment until quality issues are fixed.", cn: "在质量问题解决之前，我们将暂停支付款项。", pinyin: "zài zhìliàng wèntí jiějué zhīqián, wǒmen jiāng zàntíng zhīfù kuǎnxiàng.", vi: "Chúng tôi tạm ngưng thanh toán cho đến khi các sự cố chất lượng được khắc phục." },
  { id: 1387, day: 139, en: "The security deposit will be forfeited due to contract default.", cn: "因违约，履约保证金将被没收。", pinyin: "yīn wéiyuē, lǚyuē bǎozhèngjīn jiāng bèi mòshōu.", vi: "Tiền đặt cọc bảo đảm thực hiện hợp đồng sẽ bị tịch thu do vi phạm." },
  { id: 1388, day: 139, en: "We prefer an out-of-court settlement to minimize legal fees.", cn: "我们倾向于庭外和解，以减少诉讼费用。", pinyin: "wǒmen qīngxiàng yú tíngwài héjiě, yǐ jiǎnshǎo sùsòng fèiyong.", vi: "Chúng tôi ưu tiên giải pháp hòa giải ngoài tòa án để giảm thiểu chi phí pháp lý." },
  { id: 1389, day: 139, en: "The penalty shall not exceed 10% of the total contract value.", cn: "罚金总额不得超过合同总价值的10%。", pinyin: "fájīn zǒng'é bùdé chāoguò hétong zǒng jiàzhí de bǎi fēn zhī shí.", vi: "Mức phạt sẽ không vượt quá 10% tổng giá trị hợp đồng." },
  { id: 1390, day: 139, en: "Both parties agreed to waive damages for minor delays.", cn: "双方同意免除因轻微延误而产生的赔偿责任。", pinyin: "shuāngfāng tóngyì miǎnchú yīn qīngwēi yánwù ér chǎnshēng de péicháng zérèn.", vi: "Cả hai bên đã đồng ý miễn trừ trách nhiệm bồi thường cho các đợt chậm trễ nhỏ." }
);

// Ngày 140: Đàm phán & Hợp đồng - Gia hạn & Chấm dứt Hợp đồng (Renewal & Termination)
LESSON_DATA.push(
  { id: 1391, day: 140, en: "Our current contract is set to expire by the end of next month.", cn: "我们现有的合同将于下月底到期。", pinyin: "wǒmen xiànyǒu de hétong jiāng yú xià yuè dǐ dàoqī.", vi: "Hợp đồng hiện tại của chúng ta dự kiến sẽ hết hạn vào cuối tháng sau." },
  { id: 1392, day: 140, en: "Would you be interested in renewing the contract for another year?", cn: "贵方有意向将合同续签一年吗？", pinyin: "guìfāng yǒu yìxiàng jiāng hétong xùqiān yì nián ma?", vi: "Bên bạn có mong muốn gia hạn hợp đồng thêm một năm nữa không?" },
  { id: 1393, day: 140, en: "The agreement will automatically renew unless terminated in writing.", cn: "除非提出书面终止，否则本协议将自动续期。", pinyin: "chúfēi tíchū shūmiàn zhōngzhǐ, fǒuzé běn xiéyì jiāng zìdòng xùqī.", vi: "Thỏa thuận sẽ tự động gia hạn trừ khi có thông báo chấm dứt bằng văn bản." },
  { id: 1394, day: 140, en: "We regret to inform you that we will not renew this agreement.", cn: "我们遗憾地通知您，我们将不再续签本协议。", pinyin: "wǒmen yíhàn de tōngzhī nín, wǒmen jiāng bú zài xùqiān běn xiéyì.", vi: "Chúng tôi tiếc phải thông báo rằng chúng tôi sẽ không gia hạn thỏa thuận này." },
  { id: 1395, day: 140, en: "Please send a formal notice of termination 60 days in advance.", cn: "请提前60天发送正式的终止合同通知书。", pinyin: "qǐng tíqián liùshí tiān fāsòng zhèngshì de zhōngzhǐ hétong tōngzhīshū.", vi: "Vui lòng gửi thông báo chấm dứt chính thức trước 60 ngày." },
  { id: 1396, day: 140, en: "We need to re-negotiate the unit pricing before renewing.", cn: "在续约前，我们需要重新谈判单价。", pinyin: "zài xùyuē qián, wǒmen xūyào chóngxīn tánpàn dānjià.", vi: "Chúng ta cần đàm phán lại đơn giá trước khi tiến hành gia hạn." },
  { id: 1397, day: 140, en: "All confidentiality obligations remain effective after termination.", cn: "合同终止后，所有保密义务依然有效。", pinyin: "hétong zhōngzhǐ hòu, suǒyǒu bǎomì yìwù yīrán yǒuxiào.", vi: "Tất cả các nghĩa vụ bảo mật vẫn có hiệu lực sau khi hợp đồng chấm dứt." },
  { id: 1398, day: 140, en: "We should conduct an exit audit before wrapping up operations.", cn: "在结束合作前，我们应该进行一次退出审计。", pinyin: "zài jiéshù hézuò qián, wǒmen yīnggāi jìnxíng yí cì tuìchū shěnjì.", vi: "Chúng ta nên thực hiện một cuộc kiểm toán bàn giao trước khi kết thúc hợp tác." },
  { id: 1399, day: 140, en: "Here is the addendum extending the contract duration by six months.", cn: "这是将合同期限延长六个月的补充协议。", pinyin: "zhè shì jiāng hétong qīxiàn yáncháng liù gè yuè de bǔchōng xiéyì.", vi: "Đây là phụ lục gia hạn thời hạn hợp đồng thêm 6 tháng." },
  { id: 1400, day: 140, en: "Thank you for the seamless collaboration over the past two years.", cn: "感谢过去两年里我们愉快而顺畅的合作。", pinyin: "gǎnxiè guòqù liǎng nián lǐ wǒmen yúkuài ér shùnchàng de hézuò.", vi: "Cảm ơn sự hợp tác suôn sẻ và tuyệt vời của hai bên trong suốt hai năm qua." }
);

// ==========================================
// CHẶNG 3: CÔNG SỞ, NGHỀ NGHIỆP & KỸ NĂNG MỀM (TIẾP THEO)
// DỮ LIỆU CÂU HỘI THOẠI CHI TIẾT: NGÀY 141 - NGÀY 150
// ==========================================

// Ngày 141: Quản lý Dự án - Khởi động Dự án & Phân công Nhiệm vụ (Project Kickoff)
LESSON_DATA.push(
  { id: 1401, day: 141, en: "Welcome everyone to the official kickoff meeting for Project Apollo.", cn: "欢迎大家参加阿波罗项目的官方启动会。", pinyin: "huānyíng dàjiā cānjiā Ābōluó xiàngmù de guānfāng qǐdònghuì.", vi: "Chào mừng mọi người đến với buổi họp khởi động chính thức dự án Apollo." },
  { id: 1402, day: 141, en: "Let's review the project charter and key deliverables.", cn: "让我们审查一下项目章程和主要交付成果。", pinyin: "ràng wǒmen shěnchá yíxià xiàngmù zhāngchéng hé zhǔyào jiāofù chéngguǒ.", vi: "Chúng ta hãy cùng xem qua điều lệ dự án và các kết quả bàn giao chính." },
  { id: 1403, day: 141, en: "Sarah will be taking the role of Project Lead on this initiative.", cn: "莎拉将担任该项目的主要负责人。", pinyin: "Shālā jiāng dānrèn gāi xiàngmù de zhǔyào fùzérén.", vi: "Sarah sẽ đảm nhận vai trò trưởng dự án cho chiến dịch này." },
  { id: 1404, day: 141, en: "Who will be responsible for tracking the overall progress?", cn: "谁将负责跟踪整体项目进度？", pinyin: "shéi jiāng fùzé gēnzōng zhěngtǐ xiàngmù jìndù?", vi: "Ai sẽ là người chịu trách nhiệm theo dõi tiến độ tổng thể?" },
  { id: 1405, day: 141, en: "We need to define clear roles and responsibilities for each member.", cn: "我们需要为每位成员明确明确职责与分工。", pinyin: "wǒmen xūyào wèi měi wèi chéngyuán míngquè míngquè zhízé yǔ fēngōng.", vi: "Chúng ta cần xác định rõ ràng vai trò và trách nhiệm của từng thành viên." },
  { id: 1406, day: 141, en: "The primary objective is to launch the product before Q3.", cn: "首要目标是在第三季度之前推出该产品。", pinyin: "shǒuyào mùbiāo shì zài dì-sān jìdù zhīqián tuīchū gāi chǎnpǐn.", vi: "Mục tiêu hàng đầu là ra mắt sản phẩm trước quý 3." },
  { id: 1407, day: 141, en: "Please make sure everyone has access to the project board.", cn: "请确保每个人都能访问项目看板。", pinyin: "qǐng quèbǎo měi gè rén dōu néng fǎngwèn xiàngmù kànbǎn.", vi: "Vui lòng đảm bảo mọi người đều có quyền truy cập vào bảng quản lý dự án." },
  { id: 1408, day: 141, en: "We have assigned task ownership to the respective team leads.", cn: "我们已将任务负责人指派给各团队 Leader。", pinyin: "wǒmen yǐ jiāng rènwu fùzérén zhǐpài gěi gè tuánduì Leader.", vi: "Chúng tôi đã phân công người chịu trách nhiệm công việc cho các trưởng nhóm tương ứng." },
  { id: 1409, day: 141, en: "Let's schedule weekly standup meetings to monitor milestone updates.", cn: "让我们安排每周站会，以监控里程碑进展。", pinyin: "ràng wǒmen ānpái měi zhōu zhànhuì, yǐ jiānkòng lǐchéngbēi jìnzǎn.", vi: "Hãy lên lịch các buổi họp nhanh hàng tuần để theo dõi cập nhật các cột mốc." },
  { id: 1410, day: 141, en: "Does anyone have questions regarding the project baseline?", cn: "有人对项目基准有什么疑问吗？", pinyin: "yǒu rén duì xiàngmù jīzhǔn yǒu shénme yíwèn ma?", vi: "Có ai có câu hỏi gì liên quan đến quy chuẩn nền tảng của dự án không?" }
);

// Ngày 142: Quản lý Dự án - Tiến độ & Lịch trình (Timeline & Milestones)
LESSON_DATA.push(
  { id: 1411, day: 142, en: "Are we currently on track to hit the phase one deadline?", cn: "我们目前能否按时完成第一阶段的截止目标？", pinyin: "wǒmen mùqián néngfǒu ànshí wánchéng dì-yī jiēduàn de jiézhǐ mùbiāo?", vi: "Hiện tại chúng ta có đi đúng tiến độ để kịp hạn chót giai đoạn một không?" },
  { id: 1412, day: 142, en: "The project timeline has been compressed by two weeks.", cn: "项目 Timeline 被压缩了两周。", pinyin: "xiàngmù Timeline bèi yāsuō le liǎng zhōu.", vi: "Tiến độ dự án đã bị rút ngắn mất hai tuần." },
  { id: 1413, day: 142, en: "We are running behind schedule due to unexpected technical bugs.", cn: "由于意外的技术漏洞，我们的进度落后了。", pinyin: "yóuyú yìwài de jìshù lòudòng, wǒmen de jìndù luòhòu le.", vi: "Chúng ta đang bị chậm tiến độ do các lỗi kỹ thuật ngoài dự kiến." },
  { id: 1414, day: 142, en: "We need to reprioritize tasks to catch up with the baseline timeline.", cn: "我们需要重新排列任务优先级，以赶上原定进度。", pinyin: "wǒmen xūyào chóngxīn páiliè rènwu yōuxiānjí, yǐ gǎn shàng yuándìng jìndù.", vi: "Chúng ta cần sắp xếp lại thứ tự ưu tiên công việc để kịp lộ trình ban đầu." },
  { id: 1415, day: 142, en: "Hitting this milestone is critical for securing the next funding tranche.", cn: "达成这一里程碑对于获得下一笔融资至关重要。", pinyin: "dáchéng zhè yī lǐchéngbēi duìyú huòdé xià yì bǐ róngzī zhìguān zhòngyào.", vi: "Đạt được cột mốc này là điều then chốt để nhận đợt giải ngân vốn tiếp theo." },
  { id: 1416, day: 142, en: "Can we fast-track the testing phase without sacrificing quality?", cn: "在不牺牲质量的前提下，我们能加快测试阶段吗？", pinyin: "zài bù xīshēng zhìliàng de qiántí xià, wǒmen néng jiākuài cèshì jiēduàn ma?", vi: "Liệu chúng ta có thể đẩy nhanh giai đoạn kiểm thử mà không đánh đổi chất lượng?" },
  { id: 1417, day: 142, en: "Please update the Gantt chart to reflect the new completion dates.", cn: "请更新甘特图，以反映新的完成日期。", pinyin: "qǐng gēngxīn gāntètú, yǐ fǎnyìng xīn de wánchéng rìqī.", vi: "Vui lòng cập nhật sơ đồ Gantt để thể hiện ngày hoàn thành mới." },
  { id: 1418, day: 142, en: "We have successfully completed all tasks ahead of schedule.", cn: "我们已提前成功完成了所有任务。", pinyin: "wǒmen yǐ tíqián chénggōng wánchéng le suǒyǒu rènwu.", vi: "Chúng tôi đã hoàn thành thành công toàn bộ nhiệm vụ trước kế hoạch." },
  { id: 1419, day: 142, en: "Any delay in this task will bottleneck the entire launch process.", cn: "这项任务的任何延误都会成为整个发布流程的瓶颈。", pinyin: "zhè xiàng rènwu de rènhé yánwù dōu huì chéngwéi zhěngtǐ fābù liúchéng de píngjǐng.", vi: "Bất kỳ sự chậm trễ nào ở nhiệm vụ này cũng sẽ tạo nút thắt cổ chai cho toàn bộ đợt ra mắt." },
  { id: 1420, day: 142, en: "Let's push back the release date to guarantee stability.", cn: "为了保证稳定性，让我们推迟发布日期。", pinyin: "wèile bǎozhèng wěndìngxìng, ràng wǒmen tuīchí fābù rìqī.", vi: "Hãy lùi ngày phát hành để đảm bảo độ ổn định." }
);

// Ngày 143: Quản lý Dự án - Ngân sách & Chi phí (Budget & Resource Allocation)
LESSON_DATA.push(
  { id: 1421, day: 143, en: "We are operating under a very tight project budget this quarter.", cn: "本季度我们在非常紧张的项目预算下运营。", pinyin: "běn jìdù wǒmen zài fēicháng jǐnzhang de xiàngmù yùsuàn xià yùnyíng.", vi: "Quý này chúng ta đang hoạt động dưới mức ngân sách dự án rất hạn hẹp." },
  { id: 1422, day: 143, en: "We need approval for extra resource allocation on backend dev.", cn: "我们需要批准在后端开发上分配额外资源。", pinyin: "wǒmen xūyào pīzhǔn zài hòuduān kāifā shàng fēnpèi éwài zīyuán.", vi: "Chúng tôi cần sự phê duyệt để bổ sung nguồn lực cho lập trình backend." },
  { id: 1423, day: 143, en: "The current expense has exceeded our forecasted budget by 10%.", cn: "目前的支出已超出我们预测预算的10%。", pinyin: "mùqián de zhīchū yǐ chāochū wǒmen yùcè yùsuàn de bǎi fēn zhī shí.", vi: "Chi phí hiện tại đã vượt 10% so với dự toán ban đầu." },
  { id: 1424, day: 143, en: "How can we optimize operational expenditures without cutting headcount?", cn: "在不裁员的情况下，我们如何优化运营支出？", pinyin: "zài bù cáiyuán de qíngkuàng xià, wǒmen rúhé yōuhuà yùnyíng zhīchū?", vi: "Làm thế nào để tối ưu hóa chi phí vận hành mà không phải cắt giảm nhân sự?" },
  { id: 1425, day: 143, en: "Please submit all vendor receipts for audit compliance.", cn: "请提交所有供应商收据，以便进行审计合规审查。", pinyin: "qǐng tíjiāo suǒyǒu gōngyìngshāng shōujù, yǐbiàn jìnxíng shěnjì héguī shěnchá.", vi: "Vui lòng nộp tất cả hóa đơn của nhà cung cấp để phục vụ kiểm toán." },
  { id: 1426, day: 143, en: "We should reallocate unused funds from marketing to engineering.", cn: "我们应该将市场部门未使用的资金重新分配给工程部门。", pinyin: "wǒmen yīnggāi jiāng shìchǎng bùmén wèi shǐyòng de zījīn chóngxīn fēnpèi gěi gōngchéng bùmén.", vi: "Chúng ta nên chuyển ngân sách chưa dùng của tiếp thị sang cho kỹ thuật." },
  { id: 1427, day: 143, en: "This unexpected cost was not factored into the initial financial model.", cn: "这笔意外费用未计入最初的财务模型中。", pinyin: "zhè bǐ yìwài fèiyong wèi jìrù zuìchū de cáiwù móxíng zhōng.", vi: "Chi phí phát sinh này chưa được tính đến trong mô hình tài chính ban đầu." },
  { id: 1428, day: 143, en: "Who oversees the discretionary spending for this department?", cn: "谁来监督该部门的自主支配支出？", pinyin: "shéi lái jiāandū gāi bùmén de zìzhǔ zhīpèi zhīchū?", vi: "Ai là người giám sát các khoản chi tiêu linh hoạt của bộ phận này?" },
  { id: 1429, day: 143, en: "We need a contingency fund of 15% for potential risk management.", cn: "我们需要15%的应急资金用于潜在的风险管理。", pinyin: "wǒmen xūyào bǎi fēn zhī shíwǔ de yìngjí zījīn yòngyú qiánzài de fēngxiǎn guǎnlǐ.", vi: "Chúng ta cần dự phòng một khoản kinh phí 15% để quản trị rủi ro tiềm ẩn." },
  { id: 1430, day: 143, en: "Cost overruns will directly impact our profit margin.", cn: "成本超支将直接影响我们的利润率。", pinyin: "chéngběn chāozhī jiāng zhíjiē yǐngxiǎng wǒmen de lìrùnlǜ.", vi: "Sự vượt ngân sách sẽ ảnh hưởng trực tiếp đến biên lợi nhuận của chúng ta." }
);

// Ngày 144: Quản lý Dự án - Quản trị Rủi ro & Giải quyết Sự cố (Risk & Issues Management)
LESSON_DATA.push(
  { id: 1431, day: 144, en: "We must identify potential risks before launching the project.", cn: "在启动项目之前，我们必须识别潜在的风险。", pinyin: "zài qǐdòng xiàngmù zhīqián, wǒmen bìxū shíbié qiánzài de fēngxiǎn.", vi: "Chúng ta phải nhận diện các rủi ro tiềm ẩn trước khi khởi công dự án." },
  { id: 1432, day: 144, en: "What is our mitigation plan if the primary server crashes?", cn: "如果主服务器宕机，我们的缓解预案是什么？", pinyin: "rúguǒ zhǔ fúwùqì dàngjī, wǒmen de huǎnjiě yù'àn shì shénme?", vi: "Kế hoạch khắc phục của chúng ta là gì nếu máy chủ chính bị sập?" },
  { id: 1433, day: 144, en: "We encountered a major bottleneck in data migration today.", cn: "今天我们在数据迁移过程中遇到了重大瓶颈。", pinyin: "jīntiān wǒmen zài shùjù qiānyí guòchéng zhōng yùdào le zhòngdà píngjǐng.", vi: "Hôm nay chúng ta đã gặp phải nút thắt cổ chai lớn trong quá trình chuyển đổi dữ liệu." },
  { id: 1434, day: 144, en: "Let's log this incident into our risk management tracker.", cn: "让我们将这次事件记录到风险管理跟踪表中。", pinyin: "ràng wǒmen jiāng zhè cì shìjiàn jìlù dào fēngxiǎn guǎnlǐ gēnzōngbiǎo zhōng.", vi: "Hãy ghi nhận sự cố này vào sổ theo dõi quản lý rủi ro." },
  { id: 1435, day: 144, en: "Scope creep is ruining our initial project timeline.", cn: "范围蔓延正在破坏我们最初的项目进度。", pinyin: "fànwéi mànyán zhèngzài pòhuài wǒmen zuìchū de xiàngmù jìndù.", vi: "Tình trạng phình đại phạm vi công việc đang phá hỏng lộ trình ban đầu của chúng ta." },
  { id: 1436, day: 144, en: "We need to escalate this critical issue to senior executives immediately.", cn: "我们需要立即将这个严重问题升级呈报给高管。", pinyin: "wǒmen xūyào lìjí jiāng zhège yánzhòng wèntí shēngjí chéngbào gěi gāoguǎn.", vi: "Chúng ta cần leo thang vấn đề nghiêm trọng này lên các cấp lãnh đạo ngay lập tức." },
  { id: 1437, day: 144, en: "Do we have a Plan B in place if vendor delivery gets delayed?", cn: "如果供应商发货延迟，我们是否有 B 计划？", pinyin: "rúguǒ gōngyìngshāng fāhuò yánchí, wǒmen shìfǒu yǒu B jìhuà?", vi: "Chúng ta có phương án B nào chưa nếu việc giao hàng của nhà cung cấp bị trễ?" },
  { id: 1438, day: 144, en: "The team effectively contained the security vulnerability within hours.", cn: "团队在几小时内有效遏制了安全漏洞。", pinyin: "tuánduì zài jǐ xiǎoshí nèi yǒuxiào èzhì le ānquán lòudòng.", vi: "Đội ngũ đã khoanh vùng và xử lý sự cố lỗ hổng bảo mật hiệu quả chỉ trong vài giờ." },
  { id: 1439, day: 144, en: "High employee turnover posed a significant threat to project momentum.", cn: "高员工流失率对项目推进构成了重大威胁。", pinyin: "gāo yuángōng liúshīlǜ duì xiàngmù tuījìn gòuchéng le zhòngdà wēixié.", vi: "Tỷ lệ biến động nhân sự cao đặt ra thách thức lớn cho đà tiến triển của dự án." },
  { id: 1440, day: 144, en: "We should conduct a root cause analysis for this operational failure.", cn: "针对这次运营失误，我们应当进行根本原因分析。", pinyin: "zhēnduì zhè cì yùnyíng shīwù, wǒmen yāngdāng jìnxíng gēnběn yuányīn fēnxī.", vi: "Chúng ta nên thực hiện phân tích nguyên nhân gốc rễ cho sự cố vận hành này." }
);

// Ngày 145: Quản lý Dự án - Quản lý Bên liên quan (Stakeholder Management)
LESSON_DATA.push(
  { id: 1441, day: 145, en: "We need to manage stakeholder expectations carefully during this phase.", cn: "在这个阶段，我们需要谨慎管理利益相关者的期望。", pinyin: "zài zhège jiēduàn, wǒmen xūyào jǐnshèn guǎnlǐ lìyì xiāngguānzhě de qīwàng.", vi: "Chúng ta cần quản lý kỳ vọng của các bên liên quan một cách cẩn trọng trong giai đoạn này." },
  { id: 1442, day: 145, en: "Let's send out a bi-weekly status report to all key investors.", cn: "让我们向所有主要投资者发送双周状态报告。", pinyin: "ràng wǒmen xiàng suǒyǒu zhǔyào tóuzīzhě fāsòng shuāngzhōu zhuàngtài bàogào.", vi: "Hãy gửi bản báo cáo cập nhật tình hình hai tuần một lần cho tất cả nhà đầu tư chủ chốt." },
  { id: 1443, day: 145, en: "The client requested additional features that require extra sign-off.", cn: "客户要求增加额外功能，这需要额外的审批确认。", pinyin: "kèhù yāoqiú zēngjiā éwài gōngnéng, zhè xūyào éwài de shěnpī quèrèn.", vi: "Khách hàng yêu cầu thêm các tính năng bổ sung, điều này cần ký duyệt thêm." },
  { id: 1444, day: 145, en: "How should we address the concerns raised by the steering committee?", cn: "我们应当如何回应指导委员会提出的顾虑？", pinyin: "wǒmen yīngdāng rúhé huíyìng zhǐdǎo wěiyuánhuì tíchū de gùlǜ?", vi: "Chúng ta nên giải quyết các mối bận tâm do Ban cố vấn đưa ra như thế nào?" },
  { id: 1445, day: 145, en: "Maintaining transparent communication helps build trust with partners.", cn: "保持透明的沟通有助于建立与合作伙伴的信任。", pinyin: "bǎochí tòumíng de gōutōng yǒu zhù yú jiànlì yǔ hézuò huǒbàn de xìnrèn.", vi: "Duy trì sự giao tiếp minh bạch giúp xây dựng niềm tin với đối tác." },
  { id: 1446, day: 145, en: "We scheduled a feedback session with the product sponsor tomorrow.", cn: "我们安排了明天与产品赞助商的反馈会。", pinyin: "wǒmen ānpái le míngtiān yǔ chǎnpǐn zànzhùshāng de fànkuìhuì.", vi: "Chúng tôi đã lên lịch một buổi ghi nhận ý kiến phản hồi với nhà tài trợ dự án vào ngày mai." },
  { id: 1447, day: 145, en: "Some stakeholders are resistant to the proposed organizational changes.", cn: "部分利益相关者对拟议的组织变革持抵触态度。", pinyin: "bùfen lìyì xiāngguānzhě duì nǐyì de zǔzhī biàngé chí dǐchù tàidu.", vi: "Một số bên liên quan đang phản đối những thay đổi tổ chức được đề xuất." },
  { id: 1448, day: 145, en: "Please make sure all Change Requests are properly documented.", cn: "请确保所有变更请求（Change Request）都记录在案。", pinyin: "qǐng quèbǎo suǒyǒu biàngèng qǐngqiú dōu jìlù zài'àn.", vi: "Vui lòng đảm bảo tất cả Yêu cầu Thay đổi đều được lưu vết bằng tài liệu." },
  { id: 1449, day: 145, en: "We must align our strategy with the corporate business goals.", cn: "我们必须使我们的策略与公司的整体战略目标保持一致。", pinyin: "wǒmen bìxū shǐ wǒmen de cèlüè yǔ gōngsī de zhěngtǐ zhànlüè mùbiāo bǎochí yízhì.", vi: "Chúng ta phải đảm bảo chiến lược của mình nhất quán với mục tiêu kinh doanh của tập đoàn." },
  { id: 1450, day: 145, en: "Their approval is mandatory before moving to the next phase.", cn: "在进入下一阶段之前，他们的批准是强制性的。", pinyin: "zài jìnrù xià yì jiēduàn zhīqián, tāmen de pīzhǔn shì qiángzhìxìng de.", vi: "Sự phê duyệt của họ là bắt buộc trước khi chuyển sang giai đoạn kế tiếp." }
);

// Ngày 146: Vận hành Doanh nghiệp - Quy trình Vận hành Chuẩn (SOP & Workflows)
LESSON_DATA.push(
  { id: 1451, day: 146, en: "All new employees must follow the Standard Operating Procedure (SOP).", cn: "所有新员工必须遵循标准作业程序（SOP）。", pinyin: "suǒyǒu xīn yuángōng bìxū zūnxún biāozhǔn zuòyè chéngxù (SOP).", vi: "Tất cả nhân viên mới phải tuân thủ Quy trình Vận hành Chuẩn (SOP)." },
  { id: 1452, day: 146, en: "We are streamlining our internal workflow to boost efficiency.", cn: "我们正在精简内部工作流程以提高效率。", pinyin: "wǒmen zhèngzài jīngjiǎn nèibù gōngzuò liúchéng yǐ tígāo xiàolǜ.", vi: "Chúng tôi đang tinh gọn quy trình làm việc nội bộ để nâng cao hiệu suất." },
  { id: 1453, day: 146, en: "Automating repetitive tasks will save hundreds of man-hours.", cn: "将重复性任务自动化将节省数百个人工小时。", pinyin: "jiāng chóngfùxìng rènwu zìdònghuà jiāng jiěshěng shù bǎi gè réngōng xiǎoshí.", vi: "Tự động hóa các tác vụ lặp đi lặp lại sẽ tiết kiệm hàng trăm giờ công." },
  { id: 1454, day: 146, en: "Where can I find the latest documentation for operational guidelines?", cn: "我在哪里可以找到最新的运营指南文档？", pinyin: "wǒ zài nǎlǐ kěyǐ zhǎodào zuìxīn de yùnyíng zhǐnán wéndàng?", vi: "Tôi có thể tìm tài liệu hướng dẫn vận hành mới nhất ở đâu?" },
  { id: 1455, day: 146, en: "We need to eliminate redundancies in our approval hierarchy.", cn: "我们需要消除审批层级中的冗余环节。", pinyin: "wǒmen xūyào xiáochú shěnpī céngjí zhōng de rǒngyú huánjié.", vi: "Chúng ta cần loại bỏ những thủ tục rườm rà trong cấp bậc phê duyệt." },
  { id: 1456, day: 146, en: "Please update the operational manual to reflect new safety rules.", cn: "请更新操作手册，以体现新的安全规程。", pinyin: "qǐng gēngxīn cāozuò shǒucè, yǐ tǐxiàn xīn de ānquán guīchéng.", vi: "Vui lòng cập nhật sổ tay vận hành để phản ánh các quy định an toàn mới." },
  { id: 1457, day: 146, en: "This operational breakdown caused a temporary delay in fulfillment.", cn: "这次运营故障导致了履约过程中的临时延误。", pinyin: "zhè cì yùnyíng gùzhàng dǎozhì le lǚyuē guòchéng zhōng de línshí yánwù.", vi: "Sự cố gián đoạn vận hành này đã gây ra trễ hạn tạm thời trong khâu xử lý đơn hàng." },
  { id: 1458, day: 146, en: "We are conducting a process audit to identify operational bottlenecks.", cn: "我们正在进行流程审计，以找出运营中的瓶颈。", pinyin: "wǒmen zhèngzài jìnxíng liúchéng shěnjì, yǐ zhǎochū yùnyíng zhōng de píngjǐng.", vi: "Chúng tôi đang thực hiện đánh giá quy trình để tìm ra các điểm nghẽn vận hành." },
  { id: 1459, day: 146, en: "Continuous improvement is the core philosophy of our operational team.", cn: "持续改进是我们运营团队的核心理念。", pinyin: "chíxù gǎijìn shì wǒmen yùnyíng tuánduì de héxīn lǐniàn.", vi: "Cải tiến liên tục là triết lý cốt lõi của đội ngũ vận hành chúng tôi." },
  { id: 1460, day: 146, en: "Failure to comply with operating guidelines will result in penalties.", cn: "不遵守操作指南将导致处罚。", pinyin: "bù zūnxún cāozuò zhǐnán jiāng dǎozhì chǔfá.", vi: "Không tuân thủ các hướng dẫn vận hành sẽ dẫn đến việc bị xử phạt." }
);

// Ngày 147: Vận hành Doanh nghiệp - Chuỗi Cung ứng & Kho vận (Supply Chain & Inventory)
LESSON_DATA.push(
  { id: 1461, day: 147, en: "Global supply chain disruptions have severely impacted our stock levels.", cn: "全球供应链中断严重影响了我们的库存水平。", pinyin: "quánqiú gōngyìngliàn zhōngduàn yánzhòng yǐngxiǎng le wǒmen de kùcún shuǐpíng.", vi: "Sự gián đoạn chuỗi cung ứng toàn cầu đã ảnh hưởng nghiêm trọng đến lượng tồn kho của chúng ta." },
  { id: 1462, day: 147, en: "We need to perform a physical inventory count this weekend.", cn: "这个周末我们需要进行一次盘点库存。", pinyin: "zhège zhōumò wǒmen xūyào jìnxíng yí cì pándiǎn kùcún.", vi: "Cuối tuần này chúng ta cần tiến hành kiểm kê kho thực tế." },
  { id: 1463, day: 147, en: "Our goal is to reduce warehouse holding costs by 12%.", cn: "我们的目标是将仓库仓储成本降低12%。", pinyin: "wǒmen de mùbiāo shì jiāng cāngkù cāngchǔ chéngběn jiàngdī bǎi fēn zhī shí'èr.", vi: "Mục tiêu của chúng ta là giảm 12% chi phí lưu kho." },
  { id: 1464, day: 147, en: "We are sourcing alternative raw material suppliers from South Asia.", cn: "我们正在从南亚寻找替代的原材料供应商。", pinyin: "wǒmen zhèngzài cóng nányà zhǎodào tìdài de yuáncáiliào gōngyìngshāng.", vi: "Chúng tôi đang tìm kiếm các nhà cung cấp nguyên liệu thô thay thế từ Nam Á." },
  { id: 1465, day: 147, en: "The inventory turnover rate has improved significantly this quarter.", cn: "本季度库存周转率有了显著提升。", pinyin: "běn jìdù kùcún zhōuzhuǎnlǜ yǒu le xiǎnzhù tíshēng.", vi: "Tỷ lệ quay vòng tồn kho đã cải thiện đáng kể trong quý này." },
  { id: 1466, day: 147, en: "How do you handle backorders when product demand surges?", cn: "当产品需求暴增时，您如何处理缺货积压订单？", pinyin: "dāng chǎnpǐn xūqiú bàozēng shí, nín rúhé chǔlǐ quēhuò jīyā dìngdān?", vi: "Bạn xử lý các đơn hàng nợ (backorder) như thế nào khi nhu cầu sản phẩm tăng đột biến?" },
  { id: 1467, day: 147, en: "Just-In-Time manufacturing helps minimize waste and excess stock.", cn: "准时化生产（JIT）有助于减少浪费和过剩库存。", pinyin: "zhǔnshíhuà shēngchǎn (JIT) yǒu zhù yú jiǎnshǎo làngfèi hé guòshèng kùcún.", vi: "Mô hình sản xuất Just-In-Time giúp giảm thiểu lãng phí và tồn kho dư thừa." },
  { id: 1468, day: 147, en: "The shipment was delayed at customs due to missing documentation.", cn: "由于缺少单证，该批货物在海关被延误了。", pinyin: "yóuyú quēshǎo dānzhèng, gāi pī huòwù zài hǎiguān bèi yánwù le.", vi: "Lô hàng bị tắc ở cửa khẩu do thiếu chứng từ giấy tờ." },
  { id: 1469, day: 147, en: "We must establish a safety stock buffer for high-demand items.", cn: "我们必须为高需求商品建立安全库存缓冲。", pinyin: "wǒmen bìxū wèi gāo xūqiú shāngpǐn jiànlì ānquán kùcún huǎnchōng.", vi: "Chúng ta phải thiết lập mức dự trữ kho an toàn cho các mặt hàng có nhu cầu cao." },
  { id: 1470, day: 147, en: "Logistics tracking numbers will be generated upon dispatch.", cn: "物流追踪单号将在发货后生成。", pinyin: "wùliú zhuīzōng dānhào jiāng zài fāhuò hòu shēngchéng.", vi: "Mã vận đơn theo dõi mã hàng sẽ được khởi tạo ngay khi xuất kho." }
);

// Ngày 148: Vận hành Doanh nghiệp - Đảm bảo Chất lượng & Tuân thủ (QA & Compliance)
LESSON_DATA.push(
  { id: 1471, day: 148, en: "Quality assurance audits are conducted on a quarterly basis.", cn: "质量保证审计每季度进行一次。", pinyin: "zhìliàng bǎozhèng shěnjì měi jìdù jìnxíng yí cì.", vi: "Các cuộc kiểm toán đảm bảo chất lượng (QA) được thực hiện hàng quý." },
  { id: 1472, day: 148, en: "We must strictly follow ISO 9001 quality management standards.", cn: "我们必须严格遵守 ISO 9001 质量管理标准。", pinyin: "wǒmen bìxū yánɡé zūnxún ISO 9001 zhìliàng guǎnlǐ biāozhǔn.", vi: "Chúng ta phải tuân thủ nghiêm ngặt các tiêu chuẩn quản lý chất lượng ISO 9001." },
  { id: 1473, day: 148, en: "Non-compliance with GDPR regulations can result in heavy fines.", cn: "不遵守 GDPR 条例可能会导致巨额罚款。", pinyin: "bù zūnxún GDPR tiáolì kěnéng huì dǎozhì jù'é fákuǎn.", vi: "Không tuân thủ quy định bảo mật dữ liệu GDPR có thể chịu các khoản phạt khổng lồ." },
  { id: 1474, day: 148, en: "The product failed to pass the final safety inspection test.", cn: "该产品未能通过最终的安全检验测试。", pinyin: "gāi chǎnpǐn wèi néng tōngguò zuìzhōng de ānquán jiǎnyàn cèshì.", vi: "Sản phẩm đã không vượt qua bài kiểm tra kiểm định an toàn cuối cùng." },
  { id: 1475, day: 148, en: "Please conduct a thorough compliance review before submitting.", cn: "提交前请进行彻底的合规性审查。", pinyin: "tíjiāo qián qǐng jìnxíng chèdǐ de héguīxìng shěnchá.", vi: "Vui lòng kiểm tra đối chiếu tuân thủ thật kỹ trước khi nộp." },
  { id: 1476, day: 148, en: "Zero tolerance for defect rate is our factory's top priority.", cn: "零缺陷率是我们工厂的首要任务。", pinyin: "líng quēxiànlǜ shì wǒmen gōngchǎng de shǒu yào rènwu.", vi: "Tỷ lệ lỗi bằng 0 là ưu tiên hàng đầu tại nhà máy của chúng tôi." },
  { id: 1477, day: 148, en: "Our compliance officer will inspect the facilities tomorrow morning.", cn: "我们的合规官将于明天上午检查设施。", pinyin: "wǒmen de héguīguān jiāng yú míngtiān shàngwǔ jiǎnchá shèshī.", vi: "Cán bộ quản lý tuân thủ của chúng tôi sẽ đi kiểm tra cơ sở vật chất vào sáng mai." },
  { id: 1478, day: 148, en: "All employees must complete mandatory compliance training annually.", cn: "所有员工每年必须完成强制性的合规培训。", pinyin: "suǒyǒu yuángōng měi nián bìxū wánchéng qiángzhìxìng de héguī péixùn.", vi: "Tất cả nhân viên phải hoàn thành khóa đào tạo tuân thủ bắt buộc hàng năm." },
  { id: 1479, day: 148, en: "We received a notice of violation from local regulatory authorities.", cn: "我们收到了当地监管机构发的违规通知。", pinyin: "wǒmen shōudào le dāngdì jiānguǎn jīgòu fā de wéiguī tōngzhī.", vi: "Chúng tôi đã nhận được thông báo vi phạm từ cơ quan quản lý địa phương." },
  { id: 1480, day: 148, en: "Corrective actions have been implemented to fix the compliance gap.", cn: "已采取纠正措施，以弥补合规差距。", pinyin: "yǐ cǎiqǔ jiūzhèng cuòshī, yǐ míbǔ héguī chājù.", vi: "Các biện pháp khắc phục đã được triển khai để xử lý thiếu sót về tuân thủ." }
);

// Ngày 149: Quản lý Dự án & Vận hành - Đánh giá Hiệu suất (KPIs & OKRs)
LESSON_DATA.push(
  { id: 1481, day: 149, en: "We are evaluating team performance using Key Performance Indicators (KPIs).", cn: "我们正在使用关键绩效指标（KPI）评估团队表现。", pinyin: "wǒmen zhèngzài shǐyòng guānjiàn jìxiào zhǐbiāo (KPI) pínggū tuánduì biǎoxiàn.", vi: "Chúng tôi đang đánh giá hiệu suất làm việc của nhóm bằng các chỉ số KPI." },
  { id: 1482, day: 149, en: "What are your core Key Results for this quarterly OKR cycle?", cn: "对于本季度的 OKR 周期，您的核心关键结果（Key Results）是什么？", pinyin: "duìyú běn jìdù de OKR zhōuqi, nín de héxīn guānjiàn jiēguǒ shì shénme?", vi: "Các kết quả key result cốt lõi của bạn trong chu kỳ OKR quý này là gì?" },
  { id: 1483, day: 149, en: "Our objective is to increase operational throughput by 20%.", cn: "我们的目标是将运营吞吐量提高 20%。", pinyin: "wǒmen de mùbiāo shì jiāng yùnyíng tōngtùliàng tígāo bǎi fēn zhī èrshí.", vi: "Mục tiêu của chúng ta là nâng cao sản lượng công suất vận hành lên 20%." },
  { id: 1484, day: 149, en: "Did we meet our operational targets for the second quarter?", cn: "我们达成第二季度的运营目标了吗？", pinyin: "wǒmen dáchéng dì-èr jìdù de yùnyíng mùbiāo le ma?", vi: "Chúng ta đã đạt được các mục tiêu vận hành cho quý 2 chưa?" },
  { id: 1485, day: 149, en: "Performance metrics show a steady increase in customer satisfaction.", cn: "绩效指标显示客户满意度稳步上升。", pinyin: "jìxiào zhǐbiāo xiǎnshì kèhù mǎnyìdù wěnbù shàngshēng.", vi: "Các chỉ số đo lường hiệu suất cho thấy sự hài lòng của khách hàng đang tăng ổn định." },
  { id: 1486, day: 149, en: "We need to recalibrate our quarterly targets based on market trends.", cn: "我们需要根据市场趋势重新校准我们的季度目标。", pinyin: "wǒmen xūyào gēnjù shìchǎng qūshì chóngxīn jiàozhǔn wǒmen de jìdù mùbiāo.", vi: "Chúng ta cần căn chỉnh lại các mục tiêu hàng quý dựa trên xu hướng thị trường." },
  { id: 1487, day: 149, en: "Individual performance reviews will be conducted next week.", cn: "个人绩效考评将于下周进行。", pinyin: "gèrén jìxiào kǎopíng jiāng yú xià zhōu jìnxíng.", vi: "Đánh giá hiệu suất cá nhân sẽ được tổ chức vào tuần tới." },
  { id: 1488, day: 149, en: "He consistently exceeds all his operational deliverables and KPIs.", cn: "他一贯超越其所有运营交付指标和 KPI。", pinyin: "tā yíguàn chāoyuè qí suǒyǒu yùnyíng jiāofù zhǐbiāo hé KPI.", vi: "Anh ấy luôn vượt tất cả các chỉ số KPI và hạn mục bàn giao vận hành." },
  { id: 1489, day: 149, en: "Underperforming projects will be subject to operational review.", cn: "绩效不佳的项目将接受运营审查。", pinyin: "jìxiào bùjiā de xiàngmù jiāng jiēshòu yùnyíng shěnchá.", vi: "Các dự án có hiệu suất kém sẽ bị đưa vào diện xem xét đánh giá lại." },
  { id: 1490, day: 149, en: "Let's set ambitious but achievable Key Results for Q4.", cn: "让我们为第四季度设定具有野心但可实现的关键结果。", pinyin: "ràng wǒmen wèi dì-sì jìdù shèdìng jùyǒu yěxīn dàn kě shíxiàn de guānjiàn jiēguǒ.", vi: "Hãy đặt ra các Key Results đầy tham vọng nhưng khả thi cho quý 4." }
);

// Ngày 150: Quản lý Dự án & Vận hành - Tổng kết Dự án & Nghiệm thu (Project Closure)
LESSON_DATA.push(
  { id: 1491, day: 150, en: "We have officially completed all project phases and criteria.", cn: "我们已正式完成所有项目阶段与标准。", pinyin: "wǒmen yǐ zhèngshì wánchéng suǒyǒu xiàngmù jiēduàn yǔ biāozhǔn.", vi: "Chúng tôi đã chính thức hoàn thành tất cả các giai đoạn và tiêu chí của dự án." },
  { id: 1492, day: 150, en: "Please sign off on the final project acceptance document.", cn: "请在最终的项目验收文件上签字确认。", pinyin: "qǐng zài zuìzhōng de xiàngmù yànshōu wéndàng shàng qiānzì quèrèn.", vi: "Vui lòng ký xác nhận vào biên bản nghiệm thu dự án cuối cùng." },
  { id: 1493, day: 150, en: "We will hold a Lessons Learned session to discuss project outcomes.", cn: "我们将举办一场“经验教训总结会”，讨论项目成果。", pinyin: "wǒmen jiāng jǔbàn yì chǎng 'jīngyàn jiàoxun zǒngjiéhuì', tǎolùn xiàngmù chéngguǒ.", vi: "Chúng ta sẽ tổ chức buổi họp Rút kinh nghiệm (Lessons Learned) để thảo luận về kết quả dự án." },
  { id: 1494, day: 150, en: "All project documentation has been archived in the central database.", cn: "所有项目文档均已归档至中央数据库。", pinyin: "suǒyǒu xiàngmù wéndàng jūn yǐ guīdàng zhì zhōngyāng shùjùkù.", vi: "Tất cả tài liệu dự án đã được lưu trữ vào cơ sở dữ liệu trung tâm." },
  { id: 1495, day: 150, en: "We are releasing project resources back to their original teams.", cn: "我们正在将项目资源释放回各自原有的团队。", pinyin: "wǒmen zhèngzài jiāng xiàngmù zīyuán shìfàng huí gèzì yuányǒu de tuánduì.", vi: "Chúng tôi đang hoàn trả nguồn lực dự án về lại cho các phòng ban ban đầu." },
  { id: 1496, day: 150, en: "The client provided formal sign-off on the final project delivery.", cn: "客户已对最终的项目交付物予以正式签署确认。", pinyin: "kèhù yǐ duì zuìzhōng de xiàngmù jiāofùwù yǔyǐ zhèngshì qiānshǔ quèrèn.", vi: "Khách hàng đã chính thức ký duyệt phê chuẩn sản phẩm bàn giao cuối cùng." },
  { id: 1497, day: 150, en: "Let's celebrate our team's outstanding achievement and dedication!", cn: "让我们共同庆祝团队的卓越成就与奉献精神！", pinyin: "ràng wǒmen gòngtóng qìngzhù tuánduì de zhuóyuè chéngjiù yǔ fèèngxiàn jīngshén!", vi: "Hãy cùng ăn mừng thành tựu xuất sắc và sự cống hiến hết mình của đội ngũ!" },
  { id: 1498, day: 150, en: "The post-mortem review highlighted several areas for future improvement.", cn: "项目复盘总结 (Post-mortem) 指出了未来需改进的几个领域。", pinyin: "xiàngmù fùpán zǒngjié zhǐchū le wèi lái xū gǎijìn de jǐ gè lǐngyù.", vi: "Cuộc họp phân tích sau dự án đã chỉ ra một số điểm cần cải thiện trong tương lai." },
  { id: 1499, day: 150, en: "We stayed within budget and met all baseline quality requirements.", cn: "我们控制在预算之内，并满足了所有基准质量要求。", pinyin: "wǒmen kòngzhì zài yùsuàn zhīnèi, bìng mǎnzú le suǒyǒu jīzhǔn zhìliàng yāoqiú.", vi: "Chúng ta đã giữ đúng mức ngân sách và đạt mọi yêu cầu chất lượng tiêu chuẩn." },
  { id: 1500, day: 150, en: "Thank you for making Project Apollo a resounding success!", cn: "感谢大家让阿波罗项目取得了巨大的成功！", pinyin: "gǎnxiè dàjiā ràng Ābōluó xiàngmù qǔdé le jùdà de chénggōng!", vi: "Cảm ơn tất cả mọi người đã đưa dự án Apollo đến thành công rực rỡ!" }
);

// ==========================================
// CHẶNG 3: CÔNG SỞ, NGHỀ NGHIỆP & KỸ NĂNG MỀM (TIẾP THEO)
// DỮ LIỆU CÂU HỘI THOẠI CHI TIẾT: NGÀY 151 - NGÀY 160
// ==========================================

// Ngày 151: Công nghệ & Chuyển đổi Số - Hạ tầng IT & Điện toán Đám mây (Cloud & Infrastructure)
LESSON_DATA.push(
  { id: 1501, day: 151, en: "We are migrating our local databases to AWS cloud servers.", cn: "我们正在将本地数据库迁移到 AWS 云服务器。", pinyin: "wǒmen zhèngzài jiāng běndì shùjùkù qiānyí dào AWS yún fúwùqì.", vi: "Chúng tôi đang di chuyển toàn bộ cơ sở dữ liệu nội bộ lên máy chủ đám mây AWS." },
  { id: 1502, day: 151, en: "Our IT infrastructure requires a hardware upgrade this month.", cn: "本月我们的 IT 基础设施需要进行硬件升级。", pinyin: "běn yuè wǒmen de IT jīchǔ shèshī xūyào jìnxíng yìngjiàn shēngjí.", vi: "Hạ tầng CNTT của chúng ta cần được nâng cấp phần cứng trong tháng này." },
  { id: 1503, day: 151, en: "The server downtime was caused by a sudden network spike.", cn: "服务器宕机是由突发网络高峰引起的。", pinyin: "fúwùqì dàngjī shì yóu tūfā wǎngluò gāofēng yǐnqǐ de.", vi: "Thời gian máy chủ ngừng hoạt động là do lượng truy cập mạng tăng đột biến." },
  { id: 1504, day: 151, en: "We adopt a hybrid cloud architecture for optimal performance.", cn: "为了获得最佳性能，我们采用了混合云架构。", pinyin: "wèile huòdé zuìjiā xìngnéng, wǒmen cǎiyòng le hùnhéyún jiàgòu.", vi: "Chúng tôi áp dụng kiến trúc đám mây hỗn hợp (hybrid cloud) để đạt hiệu suất tối ưu." },
  { id: 1505, day: 151, en: "How scalable is this SaaS solution for enterprise customers?", cn: "这款 SaaS 解决方案对企业客户的可扩展性如何？", pinyin: "zhè kuǎn SaaS jiějué fāng'àn duì qǐyè kèhù de kě kuòzhǎnxìng rúhé?", vi: "Giải pháp SaaS này có khả năng mở rộng như thế nào đối với các khách hàng doanh nghiệp?" },
  { id: 1506, day: 151, en: "Daily automated backups ensure data loss is kept to zero.", cn: "每日自动备份可确保数据零丢失。", pinyin: "měi rì zìdòng bèifù kě quèbǎo shùjù líng diūshī.", vi: "Việc sao lưu tự động hàng ngày đảm bảo không xảy ra mất mát dữ liệu." },
  { id: 1507, day: 151, en: "Please configure the firewall rules to restrict unauthorized IP access.", cn: "请配置防火墙规则，限制未授权的 IP 访问。", pinyin: "qǐng pèizhì fánghuǒqiáng guīzé, xiànzhì wèi shòuquán de IP fǎngwèn.", vi: "Vui lòng cấu hình các quy tắc tường lửa để hạn chế truy cập từ các IP chưa được cấp quyền." },
  { id: 1508, day: 151, en: "Our bandwidth usage has increased significantly since last quarter.", cn: "自上季度以来，我们的带宽使用量显著增加。", pinyin: "zì shàng jìdù yǐlái, wǒmen de dàikuān shǐyòngliàng xiǎnzhù zēngjiā.", vi: "Lượng sử dụng băng thông của chúng ta đã tăng đáng kể kể từ quý trước." },
  { id: 1509, day: 151, en: "We need to set up a secondary redundant server for disaster recovery.", cn: "我们需要设置备用冗余服务器以备灾难恢复。", pinyin: "wǒmen xūyào shèzhì bèiyòng rǒngyú fúwùqì yǐ bèi zāinàn huīfù.", vi: "Chúng ta cần thiết lập một máy chủ dự phòng để khắc phục sự cố khi có thảm họa." },
  { id: 1510, day: 151, en: "The IT department is performing routine maintenance at midnight.", cn: "IT 部门将在午夜进行例行维护。", pinyin: "IT bùmén jiāng zài wǔyè jìnxíng lìxíng wéihù.", vi: "Bộ phận CNTT sẽ thực hiện bảo trì định kỳ vào lúc nửa đêm." }
);

// Ngày 152: Công nghệ & Chuyển đổi Số - Phát triển Phụ bản & Phần mềm (Software Dev & Agile)
LESSON_DATA.push(
  { id: 1511, day: 152, en: "We are running two-week Agile sprints for project development.", cn: "我们采用为期两周的 Agile 敏捷迭代进行项目开发。", pinyin: "wǒmen cǎiyòng wéiqī liǎng zhōu de Agile mǐnjié diédài jìnxíng xiàngmù kāifā.", vi: "Chúng tôi đang vận hành các chu kỳ sprint Agile kéo dài hai tuần để phát triển dự án." },
  { id: 1512, day: 152, en: "The dev team fixed the critical bug reported in the latest release.", cn: "开发团队修复了最新版本中报告的严重 Bug。", pinyin: "kāifā tuánduì xiūfù le zuìxīn bǎnběn zhōng bàogào de yánzhòng Bug.", vi: "Đội ngũ phát triển đã sửa lỗi nghiêm trọng được báo cáo trong bản phát hành mới nhất." },
  { id: 1513, day: 152, en: "Let's review the product backlog during our planning session.", cn: "让我们在规划会议期间审查产品需求积压清单 (Backlog)。", pinyin: "ràng wǒmen zài guīhuà huìyì qījiān shěnchá chǎnpǐn xūqiú jīyā qīngdān.", vi: "Hãy cùng xem xét danh sách công việc tồn đọng (backlog) trong buổi họp kế hoạch." },
  { id: 1514, day: 152, en: "We need to write clean code and conduct peer code reviews.", cn: "我们需要编写简洁的代码并进行同行代码审查。", pinyin: "wǒmen xūyào biānxiě jiǎnjié de dàimǎ bìng jìnxíng tóngháng dàimǎ shěnchá.", vi: "Chúng ta cần viết mã nguồn sạch và tiến hành kiểm tra chéo code (code review)." },
  { id: 1515, day: 152, en: "The API integration between CRM and ERP is complete.", cn: "CRM 与 ERP 系统之间的 API 对接已完成。", pinyin: "CRM yǔ ERP xìtǒng zhījiān de API duìjiē yǐ wánchéng.", vi: "Việc tích hợp API giữa hệ thống CRM và ERP đã hoàn tất." },
  { id: 1516, day: 152, en: "User Acceptance Testing (UAT) starts early next week.", cn: "用户验收测试（UAT）将于下周一早些时候开始。", pinyin: "yònghù yànshōu cèshì (UAT) jiāng yú xià zhōu yī zǎo xiē shíhou kāishǐ.", vi: "Quá trình kiểm thử chấp nhận người dùng (UAT) sẽ bắt đầu vào đầu tuần tới." },
  { id: 1517, day: 152, en: "Can we deploy the new patch to the staging environment first?", cn: "我们能否先将新补丁部署到预发布环境 (Staging)？", pinyin: "wǒmen néngfǒu xiān jiāng xīn bǔdīng bùshǔ dào yùfābù huánjìng?", vi: "Liệu chúng ta có thể triển khai bản vá mới lên môi trường staging trước được không?" },
  { id: 1518, day: 152, en: "This open-source framework significantly speeds up mobile development.", cn: "这个开源框架显著加快了移动端的开发速度。", pinyin: "zhège kāiyuán jiàgòu xiǎnzhù jiākuài le yídòngduān de kāifā sùdù.", vi: "Khung mã nguồn mở này giúp đẩy nhanh đáng kể tiến độ phát triển ứng dụng di động." },
  { id: 1519, day: 152, en: "Refactoring legacy code will reduce our technical debt.", cn: "重构重构遗留代码将减少我们的技术债务。", pinyin: "chónggòu chónggòu yílúi dàimǎ jiāng jiǎnshǎo wǒmen de jìshù zhàiwù.", vi: "Tái cấu trúc (refactor) lại mã nguồn cũ sẽ giúp giảm bớt nợ kỹ thuật cho hệ thống." },
  { id: 1520, day: 152, en: "Our Continuous Integration (CI/CD) pipeline automates deployments.", cn: "我们的持续集成（CI/CD）流水线实现了自动化部署。", pinyin: "wǒmen de chíxù jíchéng (CI/CD) liúshuǐxiàn shíxiàn le zìdònghuà bùshǔ.", vi: "Quy trình tích hợp và triển khai liên tục (CI/CD) giúp tự động hóa việc tung bản nâng cấp." }
);

// Ngày 153: Công nghệ & Chuyển đổi Số - An ninh Mạng & Bảo mật Dữ liệu (Cybersecurity & Privacy)
LESSON_DATA.push(
  { id: 1521, day: 153, en: "All staff must enable Two-Factor Authentication (2FA) immediately.", cn: "所有员工必须立即启用双重身份验证（2FA）。", pinyin: "suǒyǒu yuángōng bìxū lìjí qǐyòng shuāngchóng shēnfen yànzhèng.", vi: "Tất cả nhân viên phải kích hoạt xác thực hai yếu tố (2FA) ngay lập tức." },
  { id: 1522, day: 153, en: "Beware of suspicious phishing emails targetting corporate credentials.", cn: "警惕针对公司凭据的疑似钓鱼邮件。", pinyin: "jǐngtì zhēnduì gōngsī píngjù de yísì diàoyú yóujiàn.", vi: "Cảnh giác với các email câu giật gân (phishing) nhắm vào tài khoản công ty." },
  { id: 1523, day: 153, en: "Sensitive user information must be encrypted end-to-end.", cn: "敏感的用户信息必须进行端到端加密。", pinyin: "mǐngǎn de yònghù xìnxī bìxū jìnxíng duāndàoduān jiāmì.", vi: "Thông tin nhạy cảm của người dùng phải được mã hóa đầu-cuối." },
  { id: 1524, day: 153, en: "We detected a potential malware attempt on our internal network.", cn: "我们在内部网络中检测到一次潜在的恶意软件攻击企图。", pinyin: "wǒmen jiǎncè dào zài nèibù wǎngluò zhōng yí cì qiánzài de èyì ruǎnjiān gōngjī qǐtú.", vi: "Chúng tôi đã phát hiện một nỗ lực xâm nhập bằng phần mềm độc hại vào mạng nội bộ." },
  { id: 1525, day: 153, en: "The company enforces strict password complexity policies.", cn: "公司实行严格的密码复杂性策略。", pinyin: "gōngsī shíxíng yánɡé de mìmǎ fùzáxìng cèlüè.", vi: "Công ty áp dụng các chính sách mật khẩu phức tạp cực kỳ nghiêm ngặt." },
  { id: 1526, day: 153, en: "Penetration testing is scheduled for next month to find loopholes.", cn: "渗透测试定于下月进行，以查找安全漏洞。", pinyin: "shèntòu cèshì dìng yú xià yuè jìnxíng, yǐ zhǎocháo ānquán lòudòng.", vi: "Bài kiểm tra xâm nhập (Penetration testing) được lên lịch vào tháng tới để tìm lỗ hổng." },
  { id: 1527, day: 153, en: "Data privacy regulations require us to wipe inactive accounts.", cn: "数据隐私法规要求我们清除不活跃的账户。", pinyin: "shùjù yǐnsī fǎguī yāoqiú wǒmen qīngchú bù huóyuè de zhànghù.", vi: "Quy định bảo mật dữ liệu yêu cầu chúng ta xóa các tài khoản không còn hoạt động." },
  { id: 1528, day: 153, en: "Never share access tokens or administrative credentials on Slack.", cn: "切勿在 Slack 上共享访问令牌或管理员凭据。", pinyin: "qièwù zài Slack shàng gòngxiǎng fǎngwèn lìngpái huò guǎnlǐyuán píngjù.", vi: "Tuyệt đối không chia sẻ mã token hoặc mật khẩu quản trị viên trên kênh nhắn tin chung." },
  { id: 1529, day: 153, en: "A zero-trust security model is being implemented company-wide.", cn: "零信任（Zero-Trust）安全模型正在全公司范围内实施。", pinyin: "líng xìnrèn ānquán móxíng zhèngzài quán gōngsī fànwéi nèi shíshī.", vi: "Mô hình bảo mật Không tin tưởng (Zero-Trust) đang được áp dụng trên toàn công ty." },
  { id: 1530, day: 153, en: "In case of a data breach, notify the security team within one hour.", cn: "如果发生数据泄露，请在1小时内通知安全团队。", pinyin: "rúguǒ fāshēng shùjù xièlòu, qǐng zài yì xiǎoshí nèi tōngzhī ānquán tuánduì.", vi: "Trong trường hợp rò rỉ dữ liệu, hãy thông báo cho đội an ninh trong vòng 1 giờ." }
);

// Ngày 154: Công nghệ & Chuyển đổi Số - Phân tích Dữ liệu & Trí tuệ Nhân tạo (Data & AI)
LESSON_DATA.push(
  { id: 1531, day: 154, en: "We leverage Machine Learning to predict customer churn rate.", cn: "我们利用机器学习来预测客户流失率。", pinyin: "wǒmen lìyòng jīqì xuéxí lái yùcè kèhù liúshīlǜ.", vi: "Chúng tôi ứng dụng Machine Learning để dự đoán tỷ lệ rời bỏ của khách hàng." },
  { id: 1532, day: 154, en: "The BI team generated a real-time analytics dashboard for executives.", cn: "BI 团队为高管生成了实时数据分析仪表盘。", pinyin: "BI tuánduì wèi gāoguǎn shēngchéng le shíshí shùjù fēnxī yíbiǎopán.", vi: "Đội ngũ BI đã tạo ra bảng theo dõi phân tích dữ liệu thời gian thực cho cấp quản lý." },
  { id: 1533, day: 154, en: "Data cleaning is necessary before feeding the dataset into AI models.", cn: "在将数据集输入 AI 模型之前，必须进行数据清洗。", pinyin: "zài jiāng shùjùjí shūrù AI móxíng zhīqián, bìxū jìnxíng shùjù qīngxǐ.", vi: "Cần phải làm sạch dữ liệu trước khi đưa tập dữ liệu vào các mô hình AI." },
  { id: 1534, day: 154, en: "Big Data processing enables us to optimize marketing targeted ads.", cn: "大数据处理使我们能够优化精准营销广告。", pinyin: "dàshùjù chǔlǐ shǐ wǒmen nénggòu yōuhuà jīngzhǔn yíngxiāo guǎnggào.", vi: "Xử lý Dữ liệu lớn (Big Data) giúp chúng ta tối ưu hóa các chiến dịch quảng cáo nhắm mục tiêu." },
  { id: 1535, day: 154, en: "Generative AI can assist customer support with automated responses.", cn: "生成式 AI 可以通过自动回复协助客户支持工作。", pinyin: "shēngchéngxìng AI kěyǐ tōngguò zìdòng huífù xiézhù kèhù zhīchí gōngzuò.", vi: "AI tạo sinh (Generative AI) có thể hỗ trợ bộ phận CSKH bằng các phản hồi tự động." },
  { id: 1536, day: 154, en: "We are building a data warehouse to centralize all sales records.", cn: "我们正在建设数据仓库，以集中管理所有销售记录。", pinyin: "wǒmen zhèngzài jiànshè shùjù cāngkù, yǐ jízhōng guǎnlǐ suǒyǒu xiāoshòu jìlù.", vi: "Chúng tôi đang xây dựng một kho dữ liệu (Data Warehouse) để tập trung hóa hồ sơ bán hàng." },
  { id: 1537, day: 154, en: "The algorithm shows a high correlation between price and conversion.", cn: "该算法显示出价格与转化率之间的强相关性。", pinyin: "gāi suànfǎ xiǎnshì chū jiàgé yǔ zhuǎnhuàlǜ zhījiān de qiáng xiāngguānxìng.", vi: "Thuật toán cho thấy mối tương quan cao giữa giá cả và tỷ lệ chuyển đổi." },
  { id: 1538, day: 154, en: "Data governance policies protect against illegal data harvesting.", cn: "数据治理策略可防止非法数据抓取。", pinyin: "shùjù zhìlǐ cèlüè kě fángzhǐ fēifǎ shùjù zhuāqǔ.", vi: "Các chính sách quản trị dữ liệu bảo vệ chống lại việc thu thập dữ liệu trái phép." },
  { id: 1539, day: 154, en: "Predictive analytics can forecast our inventory needs next quarter.", cn: "预测性分析可以预测我们下一季度的库存需求。", pinyin: "yùcèxìng fēnxī kěyǐ yùcè wǒmen xià yí jìdù de kùcún xūqiú.", vi: "Phân tích dự báo có thể dự đoán nhu cầu tồn kho của chúng ta trong quý tới." },
  { id: 1540, day: 154, en: "Is there any bias present in the training datasets?", cn: "训练数据集中是否存在任何偏见/偏差？", pinyin: "xùnliàn shùjùjí zhōng shìfǒu cúnzài rènhé piānjiàn?", vi: "Liệu có yếu tố định kiến/sai lệch nào tồn tại trong tập dữ liệu huấn luyện không?" }
);

// Ngày 155: Công nghệ & Chuyển đổi Số - Chuyển đổi Số Doanh nghiệp (Digital Transformation)
LESSON_DATA.push(
  { id: 1541, day: 155, en: "Digital transformation requires a shift in company culture first.", cn: "数字化转型首先需要公司文化的转变。", pinyin: "shùzìhuà zhuǎn型 xūyào gōngsī wénhuà de zhuǎbiàn.", vi: "Chuyển đổi số trước hết đòi hỏi sự thay đổi trong văn hóa doanh nghiệp." },
  { id: 1542, day: 155, en: "We are paperless in all regional offices starting this month.", cn: "从本月开始，我们所有区域办事处均实现无纸化办公。", pinyin: "cóng běn yuè kāishǐ, wǒmen suǒyǒu qūyù bànshìchù jūn shíxiàn wúzhǐhuà bàngōng.", vi: "Bắt đầu từ tháng này, tất cả các văn phòng khu vực của chúng ta đã chuyển sang không dùng giấy." },
  { id: 1543, day: 155, en: "Legacy systems are holding back our operational speed.", cn: "传统老旧系统正在拖慢我们的运营速度。", pinyin: "chuántǒng lǎojiù xìtǒng zhèngzài tuōmàn wǒmen de yùnyíng sùdù.", vi: "Các hệ thống cũ kỹ (legacy systems) đang kìm hãm tốc độ vận hành của chúng ta." },
  { id: 1544, day: 155, en: "Adopting ERP software will integrate finance and supply chain seamlessly.", cn: "采用 ERP 软件将无缝整合财务与供应链。", pinyin: "cǎiyòng ERP ruǎnjiān jiāng wúfèng zhěnghé cáiwù yǔ gōngyìngliàn.", vi: "Việc áp dụng phần mềm ERP sẽ kết nối mượt mà giữa tài chính và chuỗi cung ứng." },
  { id: 1545, day: 155, en: "We offer digital onboarding for all newly hired remote workers.", cn: "我们为所有新入职的远程员工提供数字化入职流程。", pinyin: "wǒmen wèi suǒyǒu xīn rùzhí de yuǎnchéng yuángōng tígōng shùzìhuà rùzhí liúchéng.", vi: "Chúng tôi cung cấp quy trình làm thủ tục nhận việc trực tuyến cho nhân viên từ xa." },
  { id: 1546, day: 155, en: "Automation has reduced human error in accounting by 40%.", cn: "自动化使会计处理中的人为错误减少了40%。", pinyin: "zìdònghuà shǐ kuàijì chǔlǐ zhōng de rénwèi cuòwù jiǎnshǎo le bǎi fēn zhī sìshí.", vi: "Tự động hóa đã giúp giảm 40% sai sót do con người trong công tác kế toán." },
  { id: 1547, day: 155, en: "Our Chief Technology Officer is driving the new digital roadmap.", cn: "我们的首席技术官正在推进新的数字化路线图。", pinyin: "wǒmen de shǒuxí jìshùguān zhèngzài tuījìn xīn de shùzìhuà lùxiàntú.", vi: "Giám đốc Công nghệ (CTO) của chúng ta đang thúc đẩy lộ trình chuyển đổi số mới." },
  { id: 1548, day: 155, en: "Upgrading to a cloud-native platform is our top priority.", cn: "升级到云原生平台是我们的当务之急。", pinyin: "shēngjí dào yún yuánshēng píngtái shì wǒmen de dāngwùzhījí.", vi: "Nâng cấp lên nền tảng thuần đám mây (cloud-native) là ưu tiên hàng đầu của chúng tôi." },
  { id: 1549, day: 155, en: "Omnichannel customer experience is key to modern retail growth.", cn: "全渠道客户体验是现代零售增长的关键。", pinyin: "quán qúdào kèhù tǐyàn shì xiàndài língshòu zēngzhǎng de guānjiàn.", vi: "Trải nghiệm khách hàng đa kênh (omnichannel) là chìa khóa tăng trưởng bán lẻ hiện đại." },
  { id: 1550, day: 155, en: "Employees need upskilling training to adapt to digital tools.", cn: "员工需要提升技能培训，以适应数字工具。", pinyin: "yuángōng xūyào tíshēng jìnéng péixùn, yǐ shìyìng shùzì gōngjù.", vi: "Nhân viên cần được đào tạo nâng cao kỹ năng để thích ứng với các công cụ kỹ thuật số." }
);

// Ngày 156: Nhân sự & Tuyển dụng - Đăng tuyển & Sàng lọc Hồ sơ (Job Posting & Screening)
LESSON_DATA.push(
  { id: 1551, day: 156, en: "We are currently hiring for three Senior Developer positions.", cn: "我们目前正在招聘三个高级开发人员职位。", pinyin: "wǒmen mùqián zhèngzài zhāopìn sān gè gāojí kāifā rényuán zhíwèi.", vi: "Chúng tôi hiện đang tuyển dụng cho 3 vị trí Lập trình viên cao cấp." },
  { id: 1552, day: 156, en: "Please post this job opening on LinkedIn and local job boards.", cn: "请将该职位空缺发布在 LinkedIn 和本地招聘网站上。", pinyin: "qǐng jiāng gāi zhíwèi kòngquē fābù zài LinkedIn hé běndì zhāopìn wǎngzhàn shàng.", vi: "Vui lòng đăng thông tin tuyển dụng này lên LinkedIn và các trang việc làm địa phương." },
  { id: 1553, day: 156, en: "We received over 200 resumes for the Marketing Manager role.", cn: "我们收到了200多份市场经理职位的简历。", pinyin: "wǒmen shōudào le èr bǎi duō fèn shìchǎng jīnglǐ zhíwèi de jiǎnlì.", vi: "Chúng tôi đã nhận được hơn 200 hồ sơ cho vị trí Trưởng phòng Marketing." },
  { id: 1554, day: 156, en: "This candidate has extensive experience in cross-border e-commerce.", cn: "这位候选人在跨境电商方面拥有丰富的经验。", pinyin: "zhè wèi hòuxuǎnrén zài kuàjiàng diànshāng fāngmiàn yǒngyǒu fēngfù de jīngyàn.", vi: "Ứng viên này có kinh nghiệm phong phú trong lĩnh vực thương mại điện tử xuyên biên giới." },
  { id: 1555, day: 156, en: "Let's shortlist top five candidates for the first round of interviews.", cn: "让我们筛选出前五名候选人进入第一轮面试。", pinyin: "ràng wǒmen shāixuǎn chū qián wǔ míng hòuxuǎnrén jìnrù dì-yī lún miànshì.", vi: "Hãy rút gọn danh sách 5 ứng viên hàng đầu để đưa vào vòng phỏng vấn đầu tiên." },
  { id: 1556, day: 156, en: "Does the applicant meet all requirements listed in the job description?", cn: "求职者是否满足职位描述中列出的所有要求？", pinyin: "qiúzhízhě shìfǒu mǎnzú zhíwèi miáoshù zhōng lièchū de suǒyǒu yāoqiú?", vi: "Ứng viên có đáp ứng đủ các yêu cầu được liệt kê trong bản mô tả công việc không?" },
  { id: 1557, day: 156, en: "We offer a competitive salary package with performance bonuses.", cn: "我们提供具有竞争力的薪酬待遇和绩效奖金。", pinyin: "wǒmen tígōng jùyǒu jìngzhēnglì de xīnchóu dàiyù hé jìxiào jiǎngjīn.", vi: "Chúng tôi đưa ra gói lương thưởng cạnh tranh cùng tiền thưởng theo hiệu suất." },
  { id: 1558, day: 156, en: "His background check reveals solid professional credentials.", cn: "他的背景调查显示出扎实的专业资历。", pinyin: "tā de bèijǐng diàochá xiǎnshì chū zhāshi de zhuānyè zīlì.", vi: "Kết quả xác minh lý lịch của anh ấy cho thấy năng lực chuyên môn rất đáng tin cậy." },
  { id: 1559, day: 156, en: "We need an HR specialist fluent in both English and Mandarin.", cn: "我们需要一位精通英语和普通话的人力资源专员。", pinyin: "wǒmen xūyào yí wèi jīngtōng Yīngyǔ hé Pǔtōnghuà de rénlì zīyuán zhuānyuán.", vi: "Chúng tôi cần một chuyên viên HR thành thạo cả tiếng Anh và tiếng Trung." },
  { id: 1560, day: 156, en: "The application deadline is set for Friday end of day.", cn: "申请截止日期定于周五下班前。", pinyin: "shēnqǐng jiézhǐ rìqī dìng yú zhōuwǔ xiàbān qián.", vi: "Hạn chót nộp hồ sơ ứng tuyển được ấn định vào cuối ngày thứ Sáu." }
);

// Ngày 157: Nhân sự & Tuyển dụng - Phỏng vấn & Đánh giá (Interview & Assessment)
LESSON_DATA.push(
  { id: 1561, day: 157, en: "Could you walk us through your work history and achievements?", cn: "能否请您简单介绍一下您的工作经历和成就？", pinyin: "néngfǒu qǐng nín jiǎndān jièshào yíxià nín de gōngzuò jīnglì hé chéngjiù?", vi: "Bạn có thể sơ lược qua lịch sử làm việc và các thành tựu của mình được không?" },
  { id: 1562, day: 157, en: "How do you handle high-pressure situations and tight deadlines?", cn: "您如何处理高压环境和紧迫的截止日期？", pinyin: "nín rúhé chǔlǐ gāoyā huánjìng hé jǐnpò de jiézhǐ rìqī?", vi: "Bạn xử lý thế nào khi đối mặt với áp lực công việc cao và thời hạn gấp rút?" },
  { id: 1563, day: 157, en: "What is your expectation for monthly base compensation?", cn: "您对每月基本薪酬的期望是多少？", pinyin: "nín duì měi yuè jīběn xīnchóu de qīwàng shì duōshao?", vi: "Kỳ vọng của bạn về mức lương cơ bản hàng tháng là bao nhiêu?" },
  { id: 1564, day: 157, en: "The technical coding test will take about 60 minutes.", cn: "技术代码测试大约需要60分钟。", pinyin: "jìshù dàimǎ cèshì dàyuē xūyào liùshí fēnzhōng.", vi: "Bài kiểm tra kỹ năng lập trình sẽ kéo dài khoảng 60 phút." },
  { id: 1565, day: 157, en: "Why do you want to leave your current employer?", cn: "您为什么想离开目前的雇主？", pinyin: "nín wèishénme xiǎng líkāi mùqián de gùzhǔ?", vi: "Tại sao bạn lại muốn nghỉ việc ở công ty hiện tại?" },
  { id: 1566, day: 157, en: "She demonstrated strong leadership skills during the case study.", cn: "她在案例分析中展现了出色的领导力。", pinyin: "tā zài ànlì fēnxī zhōng zhǎnxiàn le chūsè de lǐngdǎolì.", vi: "Cô ấy đã thể hiện kỹ năng lãnh đạo xuất sắc trong phần giải quyết bài toán thực tế." },
  { id: 1567, day: 157, en: "We will make a decision after finishing all candidate interviews.", cn: "在完成所有候选人面试后，我们将做出决定。", pinyin: "zài wánchéng suǒyǒu hòuxuǎnrén miànshì hòu, wǒmen jiāng zuòchū juédìng.", vi: "Chúng tôi sẽ đưa ra quyết định sau khi hoàn tất cuộc phỏng vấn với tất cả các ứng viên." },
  { id: 1568, day: 157, en: "Do you have any questions for our management panel?", cn: "您对我们的管理层面试官有什么问题要问吗？", pinyin: "nín duì wǒmen de guǎnlǐcéng miànshìguān yǒu shénme wèntí yào wèn ma?", vi: "Bạn có câu hỏi nào muốn đặt ra cho hội đồng phỏng vấn không?" },
  { id: 1569, day: 157, en: "His technical assessment score was top among all applicants.", cn: "他的技术评估分数在所有申请人中名列前茅。", pinyin: "tā de jìshù pínggū fēnshù zài suǒyǒu shēnqǐngrén zhōng mínglièqiánmáo.", vi: "Điểm đánh giá kỹ thuật của anh ấy đứng đầu trong số các ứng viên." },
  { id: 1570, day: 157, en: "We will send feedback regarding your interview within three days.", cn: "我们将在三天内发送关于您面试的反馈。", pinyin: "wǒmen jiāng zài sān tiān nèi fāsòng guānyú nín miànshì de fànkuì.", vi: "Chúng tôi sẽ gửi kết quả/phản hồi cuộc phỏng vấn cho bạn trong vòng 3 ngày." }
);

// Ngày 158: Nhân sự & Tuyển dụng - Thư mời Làm việc & Hội nhập (Job Offer & Onboarding)
LESSON_DATA.push(
  { id: 1571, day: 158, en: "We are pleased to offer you the position of Senior Analyst.", cn: "我们很高兴向您提供高级分析师职位。", pinyin: "wǒmen hěn gāoxìng xiàng nín tígōng gāojí fēnxīshī zhíwèi.", vi: "Chúng tôi rất vui mừng gửi tới bạn lời mời nhận việc cho vị trí Chuyên viên Phân tích Cao cấp." },
  { id: 1572, day: 158, en: "Please sign and return the official offer letter by Monday.", cn: "请在周一前签署并寄回正式录取通知书 (Offer Letter)。", pinyin: "qǐng zài zhōuyī qián qiānshǔ bìng jìhuí zhèngshì lùqǔ tōngzhīshū.", vi: "Vui lòng ký và gửi lại thư mời nhận việc chính thức trước thứ Hai." },
  { id: 1573, day: 158, en: "Your probation period will last for two months from your start date.", cn: "您的试用期为自入职之日起两个月。", pinyin: "nín de shìyòngqī wèi zì rùzhí zhī rì qǐ liǎng gè yuè.", vi: "Thời gian thử việc của bạn sẽ kéo dài 2 tháng kể từ ngày bắt đầu đi làm." },
  { id: 1574, day: 158, en: "Welcome to the team! HR will guide you through orientation today.", cn: "欢迎加入团队！HR 今天将带您熟悉入职培训流程。", pinyin: "huānyíng jiārù tuánduì! HR jīntiān jiāng dài nín shúxī rùzhí péixùn liúchéng.", vi: "Chào mừng bạn đến với đội ngũ! HR sẽ hướng dẫn bạn hoàn tất các thủ tục định hướng hôm nay." },
  { id: 1575, day: 158, en: "Please submit your academic certificates and ID scan for personnel file.", cn: "请提交您的学历证书和身份证扫描件，以建立人事档案。", pinyin: "qǐng tíjiāo nín de xuélì zhèngshū hé shēnfènzhèng sǎomiáojiàn, yǐ jiànlì rénshì dàn'àn.", vi: "Vui lòng nộp bằng cấp và bản scan CMND/CCCD để hoàn thiện hồ sơ nhân sự." },
  { id: 1576, day: 158, en: "You will be assigned a mentor to help you get up to speed.", cn: "我们将为您指定一位导师 (Mentor)，帮助您快速熟悉工作。", pinyin: "wǒmen jiāng wèi nín zhǐdìng yí wèi dǎoshī, bāngzhù nín kuàisù shúxī gōngzuò.", vi: "Bạn sẽ được phân công một người hướng dẫn để giúp bắt nhịp công việc nhanh chóng." },
  { id: 1577, day: 158, en: "The company provides health insurance and annual leave entitlements.", cn: "公司提供医疗保险和带薪年假福利。", pinyin: "gōngsī tígōng yīliáo bǎoxiǎn hé dàixīn niánjià fúlì.", vi: "Công ty cung cấp chế độ bảo hiểm sức khỏe và phép năm theo quy định." },
  { id: 1578, day: 158, en: "Is the start date flexible or strictly set for next month?", cn: "入职日期是可以灵活调整，还是严格设定在下个月？", pinyin: "rùzhí rìqī shì kěyǐ línghuó tiáozhěng, háishì yánɡé shèdìng zài xià gè yuè?", vi: "Ngày nhận việc có thể linh hoạt được không hay cố định vào tháng sau?" },
  { id: 1579, day: 158, en: "Please set up your corporate email and Slack account today.", cn: "请于今天设置好您的公司邮箱和 Slack 账号。", pinyin: "qǐng yú jīntiān shèzhì hǎo nín de gōngsī yóuxiāng hé Slack zhànghào.", vi: "Vui lòng thiết lập email công ty và tài khoản Slack của bạn trong ngày hôm nay." },
  { id: 1580, day: 158, en: "We are excited to have you join our engineering branch.", cn: "我们很高兴您加入我们的工程部门。", pinyin: "wǒmen hěn gāoxìng nín jiārù wǒmen de gōngchéng bùmén.", vi: "Chúng tôi rất hào hứng khi có sự phục vụ của bạn tại bộ phận kỹ thuật." }
);

// Ngày 159: Đào tạo & Phát triển Nhân sự (Training & Development)
LESSON_DATA.push(
  { id: 1581, day: 159, en: "The HR department conducts regular skill workshops for employees.", cn: "HR 部门定期为员工举办技能工作坊。", pinyin: "HR bùmén dìngqī wèi yuángōng jǔbàn jìnéng gōngzuòfāng.", vi: "Bộ phận Nhân sự thường xuyên tổ chức các buổi hội thảo kỹ năng cho nhân viên." },
  { id: 1582, day: 159, en: "We encourage continuous learning and provide tuition reimbursement.", cn: "我们鼓励持续学习，并提供学费报销。", pinyin: "wǒmen gǔlì chíxù xuéxí, bìng tígōng xuéfèi bàoxiāo.", vi: "Chúng tôi khuyến khích việc học tập liên tục và hỗ trợ hoàn trả học phí." },
  { id: 1583, day: 159, en: "Leadership training is required for all newly promoted managers.", cn: "所有新晋升的经理都需要接受领导力培训。", pinyin: "suǒyǒu xīn jìnshēng de jīnglǐ dōu xūyào jiēshòu lǐngdǎolì péixùn.", vi: "Tất cả các quản lý mới được thăng chức bắt buộc phải tham gia khóa đào tạo lãnh đạo." },
  { id: 1584, day: 159, en: "How do you assess the training needs of your department?", cn: "您如何评估您部门的培训需求？", pinyin: "nín rúhé pínggū nín bùmén de péixùn xūqiú?", vi: "Bạn đánh giá nhu cầu đào tạo của bộ phận mình bằng cách nào?" },
  { id: 1585, day: 159, en: "Attending industry conferences helps staff stay updated on trends.", cn: "参加行业会议有助于员工了解最新趋势。", pinyin: "cānjiā hángyè huìyì yǒu zhù yú yuángōng liǎojiě zuìxīn qūshì.", vi: "Tham dự các hội thảo chuyên ngành giúp nhân viên luôn cập nhật xu hướng mới." },
  { id: 1586, day: 159, en: "Cross-departmental job shadowing builds better team collaboration.", cn: "跨部门轮岗轮训 (Job Shadowing) 有助于增强团队协作。", pinyin: "kuà bùmén lúngǎng lúnxùn yǒu zhù yú zēngqiáng tuánduì xiézuò.", vi: "Hoạt động trải nghiệm chéo giữa các bộ phận giúp xây dựng sự phối hợp tốt hơn." },
  { id: 1587, day: 159, en: "Each employee has an annual budget allocated for certifications.", cn: "每位员工每年都有考取专业认证的专项预算。", pinyin: "měi wèi yuángōng měi nián dōu yǒu kǎoqǔ zhuānyè rènzhèng de zhuānxiàng yùsuàn.", vi: "Mỗi nhân viên đều có ngân sách hàng năm dành riêng cho việc thi các chứng chỉ." },
  { id: 1588, day: 159, en: "Constructive feedback during reviews helps personal development.", cn: "绩效复盘中的建设性反馈有助于个人职业发展。", pinyin: "jìxiào fùpán zhōng de jiànshèxìng fànkuì yǒu zhù yú gèrén zhíyè fāzhǎn.", vi: "Ý kiến phản hồi mang tính xây dựng khi đánh giá giúp ích cho sự phát triển cá nhân." },
  { id: 1589, day: 159, en: "The company offers soft skills training in negotiation and presentation.", cn: "公司提供谈判和演讲等软技能培训。", pinyin: "gōngsī tígōng tánpàn hé yǎnjiǎng děng ruǎn jìnéng péixùn.", vi: "Công ty cung cấp các khóa đào tạo kỹ năng mềm về đàm phán và thuyết trình." },
  { id: 1590, day: 159, en: "Measuring ROI on training programs ensures budget efficiency.", cn: "衡量培训项目的投资回报率 (ROI) 可确保预算效益。", pinyin: "héngliáng péixùn xiàngmù de tóuzī huíbàolǜ (ROI) kě quèbǎo yùsuàn xiàoyì.", vi: "Đo lường chỉ số ROI của các chương trình đào tạo giúp bảo đảm hiệu quả ngân sách." }
);

// Ngày 160: Văn hóa Doanh nghiệp & Giữ chân Nhân tài (Company Culture & Retention)
LESSON_DATA.push(
  { id: 1591, day: 160, en: "Building an inclusive workplace culture boosts employee morale.", cn: "打造包容的职场文化能提高员工士气。", pinyin: "dǎzào bāoróng de zhíchǎng wénhuà néng tígāo yuángōng shìqì.", vi: "Xây dựng môi trường làm việc hòa nhập giúp nâng cao tinh thần làm việc của nhân viên." },
  { id: 1592, day: 160, en: "Work-life balance is highly valued in our company philosophy.", cn: "工作与生活的平衡在我们的公司理念中备受重视。", pinyin: "gōngzuò yǔ shēnghuó de pínghéng zài wǒmen de gōngsī lǐniàn zhōng bèishòu zhòngshì.", vi: "Cân bằng giữa công việc và cuộc sống rất được coi trọng trong triết lý công ty chúng tôi." },
  { id: 1593, day: 160, en: "We conduct annual employee engagement surveys to collect feedback.", cn: "我们每年开展员工敬业度调查以收集意见。", pinyin: "wǒmen měi nián kāizhǎn yuángōng jìngyèdù diàochá yǐ shōují yìjiàn.", vi: "Chúng tôi thực hiện khảo sát mức độ gắn kết của nhân viên hàng năm để lắng nghe ý kiến." },
  { id: 1594, day: 160, en: "Employee retention strategies are critical during rapid scaling.", cn: "在快速扩张时期，人才留存策略至关重要。", pinyin: "zài kuàisù kuòzhāng shíqī, réncái liúcún cèlüè zhìguān zhòngyào.", vi: "Các chiến lược giữ chân nhân tài là cực kỳ quan trọng trong giai đoạn mở rộng nhanh chóng." },
  { id: 1595, day: 160, en: "Recognizing outstanding contributions promotes employee loyalty.", cn: "表彰突出贡献有助于提高员工忠诚度。", pinyin: "biǎozhāng tūchū gòngxiàn yǒu zhù yú tígāo yuángōng zhōngchéngdù.", vi: "Ghi nhận sự cống hiến xuất sắc giúp tăng cường lòng trung thành của nhân viên." },
  { id: 1596, day: 160, en: "Flexible working hours allow team members to manage time better.", cn: "弹性工作时间让团队成员能更好地管理时间。", pinyin: "tánxìng gōngzuò shíjiān ràng tuánduì chéngyuán néng gèng hǎo de guǎnlǐ shíjiān.", vi: "Giờ làm việc linh hoạt giúp các thành viên trong nhóm quản lý thời gian tốt hơn." },
  { id: 1597, day: 160, en: "Town Hall meetings encourage open dialog between staff and CEO.", cn: "全员大会 (Town Hall) 鼓励员工与 CEO 之间展开公开对话。", pinyin: "quányuán dàhuì gǔlì yuángōng yǔ CEO zhījiān zhǎnkāi gōngkāi duìhuà.", vi: "Các buổi họp toàn thể (Town Hall) khuyến khích đối thoại cởi mở giữa nhân viên và CEO." },
  { id: 1598, day: 160, en: "High turnover rates indicate potential management issues.", cn: "高员工流失率往往表明可能存在管理问题。", pinyin: "gāo yuángōng liúshīlǜ wǎngwǎng biǎomíng kěnéng cúnzài guǎnlǐ wèntí.", vi: "Tỷ lệ nghỉ việc cao thường cảnh báo các vấn đề tiềm ẩn trong quản lý." },
  { id: 1599, day: 160, en: "We organize team-building retreats to foster team bonding.", cn: "我们组织团队建设团建活动，以增进团队凝聚力。", pinyin: "wǒmen zǔzhī tuánduì jiànshè tuánjiàn huódòng, yǐ zēngjìn tuánduì níngjùlì.", vi: "Chúng tôi tổ chức các kỳ nghỉ team-building để thắt chặt tinh thần đồng đội." },
  { id: 1600, day: 160, en: "Competitive benefits and clear career paths retain top talent.", cn: "具有竞争力的福利和清晰的职业通道能留住顶尖人才。", pinyin: "jùyǒu jìngzhēnglì de fúlì hé qīngxī de zhíyè tōngdào néng liúzhù dǐngjiān réncái.", vi: "Chế độ đãi ngộ tốt cùng lộ trình thăng tiến rõ ràng sẽ giúp giữ chân những nhân tài hàng đầu." }
);

// ==========================================
// CHẶNG 3: CÔNG SỞ, NGHỀ NGHIỆP & KỸ NĂNG MỀM (TIẾP THEO)
// DỮ LIỆU CÂU HỘI THOẠI CHI TIẾT: NGÀY 161 - NGÀY 170
// ==========================================

// Ngày 161: Tài chính & Kế toán - Báo cáo Tài chính & Doanh thu (Financial Statements & Revenue)
LESSON_DATA.push(
  { id: 1601, day: 161, en: "The accounting team is preparing the balance sheet for Q3.", cn: "会计团队正在编制第三季度的资产负债表。", pinyin: "kuàijì tuánduì zhèngzài biānzhì dì-sān jìdù de zīchǎn fùzhàibiǎo.", vi: "Đội ngũ kế toán đang lập bảng cân đối kế toán cho quý 3." },
  { id: 1602, day: 161, en: "Our net profit margin increased by 5% year-over-year.", cn: "我们的净利润率同比增长了 5%。", pinyin: "wǒmen de jìng lìrùnlǜ tóngbǐ zēngzhǎng le bǎi fēn zhī wǔ.", vi: "Biên lợi nhuận ròng của chúng ta đã tăng 5% so với cùng kỳ năm ngoái." },
  { id: 1603, day: 161, en: "Please check the income statement for any discrepancies.", cn: "请检查损益表是否存在任何不符之处。", pinyin: "qǐng jiǎnchá sǔnyìbiǎo shìfǒu cúnzài rènhé bùfú zhī chù.", vi: "Vui lòng kiểm tra báo cáo kết quả hoạt động kinh doanh xem có sai lệch nào không." },
  { id: 1604, day: 161, en: "Gross revenue exceeded our initial financial forecast.", cn: "总营收超过了我们最初的财务预测。", pinyin: "zǒng yíngshōu chāoguò le wǒmen zuìchū de cáiwù yùcè.", vi: "Tổng doanh thu đã vượt quá dự báo tài chính ban đầu của chúng tôi." },
  { id: 1605, day: 161, en: "Depreciation of assets must be accounted for in the annual report.", cn: "资产折旧必须计入年度报告中。", pinyin: "zīchǎn zhéjiù bìxū jìrù niándù bàogào zhōng.", vi: "Khấu hao tài sản phải được hạch toán vào báo cáo hàng năm." },
  { id: 1606, day: 161, en: "We need to audit our accounts receivable before the end of the fiscal year.", cn: "我们需要在财年结束前审计应收账款。", pinyin: "wǒmen xūyào zài cáinián jiéshù qián shěnjì yīngshōu zhàngkuǎn.", vi: "Chúng ta cần kiểm toán các khoản phải thu trước khi kết thúc năm tài chính." },
  { id: 1607, day: 161, en: "The company's liability has decreased significantly after debt payoff.", cn: "偿还债务后，公司的负债显著减少。", pinyin: "chánghuán zhàiwù hòu, gōngsī de fùzhài xiǎnzhù jiǎnshǎo.", vi: "Khoản nợ phải trả của công ty đã giảm đáng kể sau khi trả hết nợ." },
  { id: 1608, day: 161, en: "How does this acquisition affect our equity value?", cn: "这次收购如何影响我们的股东权益价值？", pinyin: "zhè cì shōugòu rúhé yǐngxiǎng wǒmen de gǔdōng quányì jiàzhí?", vi: "Vụ thâu tóm này ảnh hưởng thế nào đến giá trị vốn chủ sở hữu của chúng ta?" },
  { id: 1609, day: 161, en: "All financial records must be stored for auditing compliance.", cn: "所有财务记录必须妥善保存，以备审计合规。", pinyin: "suǒyǒu cáiwù jìlù bìxū tuǒshàn bǎocún, yǐ bèi shěnjì héguī.", vi: "Tất cả hồ sơ tài chính phải được lưu trữ để tuân thủ quy định kiểm toán." },
  { id: 1610, day: 161, en: "The CFO will present the financial performance at the board meeting.", cn: "首席财务官将在董事会上汇报财务绩效。", pinyin: "shǒuxí cáiwùguān jiāng zài dǒngshìhuì shàng huìbào cáiwù jìxiào.", vi: "Giám đốc tài chính (CFO) sẽ trình bày kết quả tài chính tại cuộc họp HĐQT." }
);

// Ngày 162: Tài chính & Kế toán - Quản lý Dòng tiền & Ngân sách (Cash Flow & Budgeting)
LESSON_DATA.push(
  { id: 1611, day: 162, en: "Maintaining positive cash flow is vital for daily operations.", cn: "保持正向现金流对日常运营至关重要。", pinyin: "bǎochí zhèngxiàng xiànjīnliú duì rìcháng yùnyíng zhìguān zhòngyào.", vi: "Duy trì dòng tiền dương là điều sống còn đối với các hoạt động hàng ngày." },
  { id: 1612, day: 162, en: "We are facing a temporary cash crunch due to delayed client payments.", cn: "由于客户付款延迟，我们正面临临时的现金紧张。", pinyin: "yóuyú kèhù fùkuǎn yánchí, wǒmen zhèng miànlín línshí de xiànjīn jǐnzhang.", vi: "Chúng ta đang bị thiếu hụt tiền mặt tạm thời do khách hàng chậm thanh toán." },
  { id: 1613, day: 162, en: "Capital expenditure (CapEx) needs strict approval from management.", cn: "资本支出（CapEx）需要管理层的严格审批。", pinyin: "zīběn zhīchū (CapEx) xūyào guǎnlǐcéng de yánɡé shěnpī.", vi: "Chi phí vốn (CapEx) cần sự phê duyệt nghiêm ngặt từ cấp quản lý." },
  { id: 1614, day: 162, en: "Operational expenditure (OpEx) was cut by 8% to reduce overhead.", cn: "运营支出（OpEx）削减了 8%，以降低日常开支。", pinyin: "yùnyíng zhīchū (OpEx) xuējiǎn le bǎi fēn zhī bā, yǐ jiàngdī rìcháng kāizhī.", vi: "Chi phí vận hành (OpEx) đã bị cắt giảm 8% để giảm bớt chi phí cố định." },
  { id: 1615, day: 162, en: "Please freeze all non-essential department spending for this month.", cn: "请冻结本月所有非必要的部门支出。", pinyin: "qǐng dòngjié běn yuè suǒyǒu fēi bìyào de bùmén zhīchū.", vi: "Vui lòng đóng băng tất cả các khoản chi tiêu không thiết yếu của bộ phận trong tháng này." },
  { id: 1616, day: 162, en: "We need a working capital line of credit to smooth out cash fluctuations.", cn: "我们需要营运资金信用额度来平滑现金流波动。", pinyin: "wǒmen xūyào yíngyùn zījīn xìnyòng éduó lái pínghuá xiànjīn liú bōdòng.", vi: "Chúng ta cần một hạn mức tín dụng vốn lưu động để xoa dịu sự biến động dòng tiền." },
  { id: 1617, day: 162, en: "The forecast indicates a healthy cash reserve at the end of Q4.", cn: "预测显示第四季度末将拥有健康的现金储备。", pinyin: "yùcè xiǎnshì dì-sì jìdù mò jiāng yǒngyǒu jiànkāng de xiànjīn chǔbèi.", vi: "Dự báo cho thấy dự trữ tiền mặt sẽ rất dồi dào vào cuối quý 4." },
  { id: 1618, day: 162, en: "All expense reports must be submitted before the 25th of each month.", cn: "所有费用报销单必须在每月 25 日前提交。", pinyin: "suǒyǒu fèiyong bàoxiāodān bìxū zài měi yuè èrshíwǔ rì qián tíjiāo.", vi: "Tất cả báo cáo chi phí phải được nộp trước ngày 25 hàng tháng." },
  { id: 1619, day: 162, en: "Why is there such a huge variance between budget and actual cost?", cn: "为什么预算与实际成本之间存在这么大的差异？", pinyin: "wèishénme yùsuàn yǔ shíjì chéngběn zhījiān cúnzài zhème dà de chāyì?", vi: "Tại sao lại có sự chênh lệch lớn như vậy giữa ngân sách và chi phí thực tế?" },
  { id: 1620, day: 162, en: "Liquidity ratio is a key indicator of our short-term solvency.", cn: "流动性比率是我们短期偿债能力的关键指标。", pinyin: "liúdòngxìng bǐlǜ shì wǒmen duǎnqī chángzhài nénglì de guānjiàn zhǐbiāo.", vi: "Tỷ lệ khả năng thanh toán nhanh là chỉ số then chốt về khả năng trả nợ ngắn hạn." }
);

// Ngày 163: Tài chính & Kế toán - Thuế & Thuế Doanh nghiệp (Taxation & Corporate Tax)
LESSON_DATA.push(
  { id: 1621, day: 163, en: "Our tax advisor is helping us file the annual corporate income tax return.", cn: "我们的税务顾问正在帮助我们申报年度企业所得税。", pinyin: "wǒmen de shuìwù gùwèn zhèngzài bāngzhù wǒmen shēnbào niándù qǐyè suǒdéshuì.", vi: "Cố vấn thuế của chúng tôi đang hỗ trợ kê khai thuế thu nhập doanh nghiệp hàng năm." },
  { id: 1622, day: 163, en: "We are eligible for Value-Added Tax (VAT) deductions this quarter.", cn: "本季度我们有资格享受增值税（VAT）抵扣。", pinyin: "běn jìdù wǒmen yǒu zīgé xiǎngshòu zēngzhíshuì dǐkòu.", vi: "Chúng ta đủ điều kiện được khấu trừ thuế giá trị gia tăng (GTGT) trong quý này." },
  { id: 1623, day: 163, en: "Ensure all invoices are compliant with local tax authority guidelines.", cn: "确保所有发票符合当地税务机关的指南要求。", pinyin: "quèbǎo suǒyǒu fāpiào fúhé dāngdì shuìwù jīgòu de zhǐnán yāoqiú.", vi: "Đảm bảo mọi hóa đơn đều hợp lệ theo hướng dẫn của cơ quan thuế địa phương." },
  { id: 1624, day: 163, en: "Cross-border transactions may incur withholding tax obligations.", cn: "跨境交易可能会产生预提税义务。", pinyin: "kuàjiàng jiāoyì kěnéng huì chǎnshēng yùtíshuì yìwù.", vi: "Các giao dịch xuyên biên giới có thể phát sinh nghĩa vụ thuế nhà thầu/thuế khấu trừ tại nguồn." },
  { id: 1625, day: 163, en: "The tax government audit is scheduled for next Tuesday morning.", cn: "税务局的审计定于下周二上午进行。", pinyin: "shuìwùjú de shěnjì dìng yú xià zhōu'èr shàngwǔ jìnxíng.", vi: "Đợt thanh tra thuế được ấn định vào sáng thứ Ba tuần tới." },
  { id: 1626, day: 163, en: "We take advantage of tax incentives offered for R&D investments.", cn: "我们利用了针对研发（R&D）投资的税收优惠。", pinyin: "wǒmen lìyòng le zhēnduì yánfā tóuzī de shuìshōu yōuhuì.", vi: "Chúng tôi tận dụng các chính sách ưu đãi thuế dành cho đầu tư nghiên cứu và phát triển." },
  { id: 1627, day: 163, en: "Transfer pricing policies must be documented for foreign subsidiaries.", cn: "海外子公司必须建立转让定价（Transfer Pricing）文档。", pinyin: "hǎiwài zǐgōngsī bìxū jiànlì zhuǎnràng dìngjià wéndàng.", vi: "Hồ sơ xác định giá giao dịch liên kết (chuyển giá) phải được lưu trữ đối với các công ty con ở nước ngoài." },
  { id: 1628, day: 163, en: "Failure to pay taxes on time will incur heavy late interest fees.", cn: "未按时缴纳税款将产生高额滞纳金。", pinyin: "wèi ànshí jiǎonà shuìkuǎn jiāng chǎnshēng gāo'é zhìnàjīn.", vi: "Việc không nộp thuế đúng hạn sẽ dẫn đến khoản tiền phạt chậm nộp rất cao." },
  { id: 1629, day: 163, en: "Is this training program tax-deductible as an operating expense?", cn: "这项培训计划可以作为运营费用抵税吗？", pinyin: "zhè xiàng péixùn jìhuà kěyǐ zuòwéi yùnyíng fèiyong dǐshuì ma?", vi: "Chương trình đào tạo này có được tính là chi phí hợp lý để trừ thuế không?" },
  { id: 1630, day: 163, en: "The government has introduced new tax tax exemption laws for tech startups.", cn: "政府针对科技初创企业推出了新的免税法律。", pinyin: "zhèngfǔ zhēnduì kējì chūchuàng qǐyè tuīchū le xīn de miǎnshuì fǎlǜ.", vi: "Chính phủ đã ban hành các quy định miễn thuế mới cho các công ty khởi nghiệp công nghệ." }
);

// Ngày 164: Đầu tư & Gọi vốn - Gọi vốn & Thâu tóm (Fundraising & M&A)
LESSON_DATA.push(
  { id: 1631, day: 164, en: "We are currently raising our Series A funding round from VCs.", cn: "我们目前正在向风投机构（VC）进行 A 轮融资。", pinyin: "wǒmen mùqián zhèngzài xiàng fēngtóu jīgòu jìnxíng A lún róngzī.", vi: "Chúng tôi hiện đang huy động vốn vòng Series A từ các quỹ đầu tư mạo hiểm." },
  { id: 1632, day: 164, en: "The company's pre-money valuation was estimated at $20 million.", cn: "该公司融前估值估计为 2000 万美元。", pinyin: "gāi gōngsī róngqián gūzhí gūjì wèi èrqiān wàn Měiyuán.", vi: "Định giá trước khi gọi vốn của công ty được ước tính là 20 triệu USD." },
  { id: 1633, day: 164, en: "We need to conduct financial and legal due diligence before merging.", cn: "合并前我们需要进行财务和法律尽职调查（Due Diligence）。", pinyin: "hébìng qián wǒmen xūyào jìnxíng cáiwù hé fǎlǜ jìnzhí diàochá.", vi: "Chúng ta cần tiến hành thẩm định chi tiết (Due Diligence) về tài chính và pháp lý trước khi sáp nhập." },
  { id: 1634, day: 164, en: "The term sheet outlines core terms and equity ownership percentages.", cn: "投资意向书（Term Sheet）概述了核心条款和股权比例。", pinyin: "tóuzī yìxiàngshū gàishù le héxīn tiáokuǎn hé gǔquán bǐlì.", vi: "Bản cam kết đầu tư (Term Sheet) nêu phác thảo các điều khoản cốt lõi và tỷ lệ sở hữu cổ phần." },
  { id: 1635, day: 164, en: "Angel investors provided seed capital to jumpstart our R&D.", cn: "天使投资人提供了种子资金，以启动我们的研发。", pinyin: "tiānshǐ tóuzīrén tígōng le zhǒngzǐ zījīn, yǐ qǐdòng wǒmen de yánfā.", vi: "Các nhà đầu tư thiên thần đã cung cấp vốn hạt giống để khởi động khâu nghiên cứu và phát triển." },
  { id: 1636, day: 164, en: "This strategic merger will double our combined market share.", cn: "这次战略合并将使我们的合并市场份额翻倍。", pinyin: "zhè cì zhànlüè hébìng jiāng shǐ wǒmen de hébìng shìchǎng fèn'é fānbèi.", vi: "Thương vụ sáp nhập chiến lược này sẽ giúp gấp đôi thị phần chung của cả hai bên." },
  { id: 1637, day: 164, en: "What is the expected Return on Investment (ROI) over five years?", cn: "未来五年的预期投资回报率（ROI）是多少？", pinyin: "wèilái wǔ nián de yùqī tóuzī huíbàolǜ shì duōshao?", vi: "Tỷ suất hoàn vốn đầu tư (ROI) kỳ vọng trong 5 năm tới là bao nhiêu?" },
  { id: 1638, day: 164, en: "Investors requested a seat on our board of directors.", cn: "投资者要求在我们的董事会中获得一个席位。", pinyin: "tóuzīzhě yāoqiú zài wǒmen de dǒngshìhuì zhōng huòdé yí gè xíwèi.", vi: "Các nhà đầu tư đã yêu cầu một ghế trong Hội đồng Quản trị của chúng ta." },
  { id: 1639, day: 164, en: "Pitching to institutional investors requires a compelling pitch deck.", cn: "向机构投资者路演需要一份有说服力的 Pitch Deck 演示文稿。", pinyin: "xiàng jīgòu tóuzīzhě lùyǎn xūyào yì fèn yǒu shuōfúlì de Pitch Deck yǎnshì wéndàng.", vi: "Thuyết trình gọi vốn trước các nhà đầu tư tổ chức đòi hỏi một bộ tài liệu Pitch Deck cực kỳ thuyết phục." },
  { id: 1640, day: 164, en: "The acquisition contract was signed late last night.", cn: "收购合同于昨晚深夜签署。", pinyin: "shōugòu hétóng yú zuówǎn shēnyè qiānshǔ.", vi: "Hợp đồng thâu tóm đã được ký kết vào đêm muộn ngày hôm qua." }
);

// Ngày 165: Pháp lý & Hợp đồng Doanh nghiệp (Corporate Legal & Contracts)
LESSON_DATA.push(
  { id: 1641, day: 165, en: "Please make sure both parties sign the Non-Disclosure Agreement (NDA).", cn: "请确保双方均签署保密协议（NDA）。", pinyin: "qǐng quèbǎo shuāngfāng jūn qiānshǔ bǎomì xiéyì.", vi: "Vui lòng đảm bảo cả hai bên đã ký Thỏa thuận Bảo mật Thông tin (NDA)." },
  { id: 1642, day: 165, en: "Our legal counsel is reviewing the breach of contract clause.", cn: "我们的法律顾问正在审查违约条款。", pinyin: "wǒmen de fǎlǜ gùwèn zhèngzài shěnchá wéiyuē tiáokuǎn.", vi: "Cố vấn pháp lý của chúng tôi đang xem xét lại điều khoản vi phạm hợp đồng." },
  { id: 1643, day: 165, en: "This agreement shall remain effective for a period of three years.", cn: "本协议有效期为三年。", pinyin: "běn xiéyì yǒuxiàoqī wèi sān nián.", vi: "Thỏa thuận này có hiệu lực trong thời hạn 3 năm." },
  { id: 1644, day: 165, en: "Intellectual property rights belong exclusively to the company.", cn: "知识产权专属于本公司所有。", pinyin: "zhīshi quánchǎn quán zhuānshǔ yú běn gōngsī suǒyǒu.", vi: "Quyền sở hữu trí tuệ thuộc quyền sở hữu độc quyền của công ty." },
  { id: 1645, day: 165, en: "Any dispute arising from this contract will be settled by arbitration.", cn: "因本合同引起的任何争议将通过仲裁解决。", pinyin: "yīn běn hétóng yǐnqǐ de rènhé zhēngyì jiāng tōngguò zhòngcái jiějué.", vi: "Mọi tranh chấp phát sinh từ hợp đồng này sẽ được giải quyết bằng trọng tài." },
  { id: 1646, day: 165, en: "We need to add an indemnity clause to protect against third-party claims.", cn: "我们需要增加赔偿条款，以抵御第三方索赔。", pinyin: "wǒmen xūyào zēngjiā péicháng tiáokuǎn, yǐ dǐyù dì-sānfāng suǒpéi.", vi: "Chúng ta cần thêm điều khoản bồi thường thiệt hại để bảo vệ khỏi các khiếu nại từ bên thứ ba." },
  { id: 1647, day: 165, en: "The contract auto-renews unless notice is given 30 days prior.", cn: "除非提前 30 天通知，否则合同将自动续签。", pinyin: "chúfēi tíqián sānshí tiān tōngzhī, fǒuzé hétóng jiāng zìdòng xùqiān.", vi: "Hợp đồng sẽ tự động gia hạn trừ khi có thông báo báo trước 30 ngày." },
  { id: 1648, day: 165, en: "Is there any ambiguity in the termination penalty terms?", cn: "解约赔偿金条款中是否存在任何模糊之处？", pinyin: "jiěyuē péichángjīn tiáokuǎn zhōng shìfǒu cúnzài rènhé móhu zhī chù?", vi: "Có điểm nào mơ hồ trong các điều khoản phạt chấm dứt hợp đồng không?" },
  { id: 1649, day: 165, en: "The court issued a ruling in favor of our company.", cn: "法院作出了有利于我司的判决。", pinyin: "fǎyuàn zuòchū le yǒulì yú wǒsī de pànjué.", vi: "Tòa án đã đưa ra phán quyết có lợi cho công ty chúng ta." },
  { id: 1650, day: 165, en: "Please provide proof of power of attorney for corporate sign-off.", cn: "请提供公司签署授权委托书（Power of Attorney）证明。", pinyin: "qǐng tígōng gōngsī qiānshǔ shòuquán wěituōshū zhèngmíng.", vi: "Vui lòng cung cấp giấy ủy quyền chính thức để ký kết cấp doanh nghiệp." }
);

// Ngày 166: Kỹ năng Mềm - Kỹ năng Đàm phán Doanh nghiệp (Business Negotiation)
LESSON_DATA.push(
  { id: 1651, day: 166, en: "Our objective is to create a win-win outcome for both companies.", cn: "我们的目标是为两家公司创造双赢的结果。", pinyin: "wǒmen de mùbiāo shì wèi liǎng jiā gōngsī chuàngzào shuāngyíng de jiēguǒ.", vi: "Mục tiêu của chúng tôi là tạo ra một kết quả đôi bên cùng có lợi (win-win)." },
  { id: 1652, day: 166, en: "We cannot compromise on the payment installment structure.", cn: "我们不能在分期付款结构上做出妥协。", pinyin: "wǒmen bù néng zài fēnqī fùkuǎn jiégòu shàng zuòchū tuǒxié.", vi: "Chúng tôi không thể thỏa hiệp về cấu trúc trả góp thanh toán." },
  { id: 1653, day: 166, en: "Let's find common ground to move the deadlock forward.", cn: "让我们寻找共同点，打破僵局。", pinyin: "ràng wǒmen xúnzhǎo gòngtóngdiǎn, dǎpò jiāngjú.", vi: "Hãy tìm điểm chung để khai thông thế bế tắc này." },
  { id: 1654, day: 166, en: "If you increase order volume, we can offer a 5% bulk discount.", cn: "如果您增加订购量，我们可以提供 5% 的批量折扣。", pinyin: "rúguǒ nín zēngjiā dìnggòuliàng, wǒmen kěyǐ tígōng bǎi fēn zhī wǔ de pīliàng zhékòu.", vi: "Nếu quý khách tăng số lượng đặt hàng, chúng tôi có thể chiết khấu 5% cho đơn hàng lớn." },
  { id: 1655, day: 166, en: "What is your Best Alternative to a Negotiated Agreement (BATNA)?", cn: "您的谈判协议最佳替代方案（BATNA）是什么？", pinyin: "nín de tánpàn xiéyì zuìjiā tìdài fāng'àn shì shénme?", vi: "Phương án thay thế tốt nhất cho một thỏa thuận được đàm phán (BATNA) của bạn là gì?" },
  { id: 1656, day: 166, en: "They pushed back hard against our proposed fee structure.", cn: "他们对我们提出的费用结构进行了强烈反驳。", pinyin: "tāmen duì wǒmen tíchū de fèiyong jiégòu jìnxíng le qiángliè fǎnbó.", vi: "Họ đã phản đối rất gay gắt mức phí mà chúng ta đề xuất." },
  { id: 1657, day: 166, en: "Can we table this touchy issue for now and discuss it later?", cn: "我们现在能否先搁置这个敏感问题，稍后讨论？", pinyin: "wǒmen xiànzài néngfǒu xiān gēzhì zhège mǐngǎn wèntí, shāohòu tǎolùn?", vi: "Liệu chúng ta có thể tạm thời gác lại vấn đề nhạy cảm này và thảo luận sau được không?" },
  { id: 1658, day: 166, en: "We need leverage before going into the final contract round.", cn: "在进入最后一轮合同谈判前，我们需要筹码。", pinyin: "zài jìnrù zuìhòu yì lún hétóng tánpàn qián, wǒmen xūyào chóumǎ.", vi: "Chúng ta cần thêm thế mạnh/chúng mã trước khi bước vào vòng đàm phán hợp đồng cuối cùng." },
  { id: 1659, day: 166, en: "Is there any room for flexibility regarding the delivery schedule?", cn: "在交货时间表方面还有灵活调整的空间吗？", pinyin: "zài jiāohuò shíjiānbiǎo fāngmiàn hái yǒu línghuó tiáozhěng de kōngjiān ma?", vi: "Liệu còn dư địa linh hoạt nào liên quan đến tiến độ giao hàng không?" },
  { id: 1660, day: 166, en: "We reached a tentative agreement pending final approval.", cn: "在等待最终批准的同时，我们达成了初步协议。", pinyin: "zài děngdài zuìzhōng pīzhǔn de tóngshí, wǒmen dáchéng le chūbù xiéyì.", vi: "Chúng tôi đã đạt được thỏa thuận sơ bộ trong khi chờ đợi phán quyết ký duyệt cuối cùng." }
);

// Ngày 167: Kỹ năng Mềm - Quản lý Căng thẳng & Xung đột (Conflict Resolution & Stress)
LESSON_DATA.push(
  { id: 1661, day: 167, en: "Let's address interpersonal conflicts constructively and privately.", cn: "让我们建设性地私下解决人际冲突。", pinyin: "ràng wǒmen jiànshèxìng de sīxià jiějué rénjì chōngtū.", vi: "Hãy giải quyết các xung đột cá nhân một cách mang tính xây dựng và riêng tư." },
  { id: 1662, day: 167, en: "Maintaining emotional intelligence (EQ) is critical during high-stress situations.", cn: "在高压环境下，保持高情商（EQ）至关重要。", pinyin: "zài gāoyā huánjìng xià, bǎochí gāo qíngshāng (EQ) zhìguān zhòngyào.", vi: "Giữ vững chỉ số thông minh cảm xúc (EQ) là điều vô cùng quan trọng trong các tình huống căng thẳng." },
  { id: 1663, day: 167, en: "We should focus on solving the issue rather than placing blame.", cn: "我们应该专注于解决问题，而不是互相指责。", pinyin: "wǒmen yīnggāi zhuānzhù yú jiějué wèntí, ér bú shì hùxiāng zhǐzé.", vi: "Chúng ta nên tập trung vào giải quyết vấn đề thay vì đổ lỗi cho nhau." },
  { id: 1664, day: 167, en: "Heavy workload can lead to employee burnout if left unmanaged.", cn: "如果管理不当，过重的工作负担会导致员工倦怠/职业倦怠。", pinyin: "rúguǒ guǎnlǐ bùdàng, guòzhòng de gōngzuò fùdān huì dǎozhì yuángōng juàndài.", vi: "Khối lượng công việc quá tải có thể dẫn đến kiệt sức ở nhân viên nếu không được quản lý tốt." },
  { id: 1665, day: 167, en: "I suggest taking a short break to cool off before continuing.", cn: "我建议在继续之前先稍作休息，冷静一下。", pinyin: "wǒ jiànyì zài jìxù zhīqián xiān shāo zuò xiūxi, lěngjìng yíxià.", vi: "Tôi đề xuất nên nghỉ giải lao một chút để bình tĩnh lại trước khi tiếp tục." },
  { id: 1666, day: 167, en: "Open mediation helped clear up misunderstandings between teams.", cn: "公开调解有助于消除团队之间的误解。", pinyin: "gōngkāi tiáojiě yǒu zhù yú xiāochú tuánduì zhījiān de wùjiě.", vi: "Buổi hòa giải cởi mở đã giúp xóa tan những hiểu lầm giữa các đội ngũ." },
  { id: 1667, day: 167, en: "How can management help reduce workplace anxiety for the staff?", cn: "管理层如何帮助员工减轻职场焦虑？", pinyin: "guǎnlǐcéng rúhé bāngzhù yuángōng jiǎnqīng zhíchǎng jiāolǜ?", vi: "Cấp quản lý có thể làm gì để giúp giải tỏa sự lo âu tại nơi làm việc cho nhân viên?" },
  { id: 1668, day: 167, en: "Encouraging open dialogue prevents small issues from escalating.", cn: "鼓励公开对话可以防止小问题升级。", pinyin: "gǔlì gōngkāi duìhuà kěyǐ fángzhǐ xiǎo wèntí shēngjí.", vi: "Khuyến khích đối thoại cởi mở ngăn ngừa những xích mích nhỏ leo thang thành rắc rối lớn." },
  { id: 1669, day: 167, en: "He handled the difficult customer complaints with great patience.", cn: "他非常耐心地处理了棘手的客户投诉。", pinyin: "tā fēicháng nàixīn de chǔlǐ le jíshǒu de kèhù tóusù.", vi: "Anh ấy đã xử lý các phàn nàn phức tạp từ khách hàng với sự kiên nhẫn tuyệt vời." },
  { id: 1670, day: 167, en: "A supportive work culture protects mental health in the workplace.", cn: "互相支持的工作文化能保护职场心理健康。", pinyin: "hùxiāng zhīchí de gōngzuò wénhuà néng bǎohù zhíchǎng xīnlǐ jiànkāng.", vi: "Văn hóa làm việc mang tính hỗ trợ giúp bảo vệ sức khỏe tinh thần nơi công sở." }
);

// Ngày 168: Kỹ năng Mềm - Kỹ năng Quản lý Thời gian & Ưu tiên (Time Management & Prioritization)
LESSON_DATA.push(
  { id: 1671, day: 168, en: "Using the Eisenhower Matrix helps prioritize urgent vs important tasks.", cn: "使用艾森豪威尔矩阵有助于区分紧急任务与重要任务的优先级。", pinyin: "shǐyòng Àisēnháowēi'ěr jǔzhèn yǒu zhù yú qūfēn jǐnjí rènwu yǔ zhòngyào rènwu de yōuxiānjí.", vi: "Sử dụng Ma trận Eisenhower giúp phân loại ưu tiên giữa công việc khẩn cấp và công việc quan trọng." },
  { id: 1672, day: 168, en: "Avoid multitasking if you want to increase deep work focus.", cn: "如果您想提高深度工作的专注度，请避免多任务并行 (Multitasking)。", pinyin: "rúguǒ nín xiǎng tígāo shēndù gōngzuò de zhuānzhùdù, qǐng bìmiǎn duō rènwu bìngxíng.", vi: "Hãy tránh làm nhiều việc cùng lúc (multitasking) nếu bạn muốn tăng độ tập trung cho công việc chuyên sâu." },
  { id: 1673, day: 168, en: "I block out two hours every morning for high-priority coding.", cn: "我每天早上预留两个小时专门用于高优先级的代码编写。", pinyin: "wǒ měi tiān zǎoshang yùliú liǎng gè xiǎoshí zhuānmén yòngyú gāo yōuxiānjí de dàimǎ biānxiě.", vi: "Tôi dành riêng 2 tiếng mỗi sáng chỉ để tập trung lập trình cho các nhiệm vụ ưu tiên cao." },
  { id: 1674, day: 168, en: "Procrastination often leads to missed deadlines and poor output.", cn: "拖延往往导致错过截止日期和产出质量低下。", pinyin: "tuōyán wǎngwǎng dǎozhì cuòguò jiézhǐ rìqī hé chǎnchū zhìliàng dīxià.", vi: "Sự trì hoãn thường dẫn đến việc trễ hạn chót và chất lượng đầu ra kém." },
  { id: 1675, day: 168, en: "Delegating routine tasks allows managers to focus on strategic goals.", cn: "委派例行任务让管理者能够专注于战略目标。", pinyin: "wěipài lìxíng rènwu ràng guǎnlǐzhě nénggòu zhuānzhù yú zhànlüè mùbiāo.", vi: "Việc giao bớt các tác vụ thường nhật giúp các quản lý tập trung vào mục tiêu chiến lược." },
  { id: 1676, day: 168, en: "Set realistic daily goals to maintain steady productivity momentum.", cn: "设定切合实际的每日目标，以保持稳定的生产力势头。", pinyin: "shèdìng qièhé shíjì de měi rì mùbiāo, yǐ bǎochí wěndìng de shēngchǎnlì shìtóu.", vi: "Đặt ra mục tiêu thực tế hàng ngày để duy trì đà năng suất ổn định." },
  { id: 1677, day: 168, en: "Too many unnecessary meetings disrupt my daily work rhythm.", cn: "太多不必要的会议打乱了我日常的工作节奏。", pinyin: "tài duō bù bìyào de huìyì dǎluàn le wǒ rìcháng de gōngzuò jiézòu.", vi: "Quá nhiều cuộc họp không cần thiết làm gián đoạn nhịp độ làm việc hàng ngày của tôi." },
  { id: 1678, day: 168, en: "Please send an agenda ahead of time to keep the meeting efficient.", cn: "请提前发送议程，以保证会议的高效率。", pinyin: "qǐng tíqián fāsòng yìchéng, yǐ bǎozhèng huìyì de gāo xiàolǜ.", vi: "Vui lòng gửi chương trình họp trước để giữ cho buổi họp hiệu quả." },
  { id: 1679, day: 168, en: "Time-tracking tools provide insights into productivity bottlenecks.", cn: "时间跟踪工具可以深入了解生产力瓶颈。", pinyin: "shíjiān gēnzōng gōngjù kěyǐ shēnrù liǎojiě shēngchǎnlì píngjǐng.", vi: "Các công cụ theo dõi thời gian giúp nhận diện những nút thắt làm giảm năng suất." },
  { id: 1680, day: 168, en: "Batching similar tasks together saves context switching overhead.", cn: "将类似的任务批量处理可以减少上下文切换的开销。", pinyin: "jiāng lèisì de rènwu pīliàng chǔlǐ kěyǐ jiǎnshǎo shàngxiàwén qiēhuàn de kāixiāo.", vi: "Gộp các việc tương tự để xử lý cùng lúc sẽ giảm lãng phí thời gian khi chuyển đổi ngữ cảnh." }
);

// Ngày 169: Kỹ năng Mềm - Kỹ năng Thuyết trình & Báo cáo (Public Speaking & Presentation)
LESSON_DATA.push(
  { id: 1681, day: 169, en: "Good morning everyone, today I'd like to share our Q3 achievements.", cn: "大家早上好，今天我想分享一下我们第三季度的成就。", pinyin: "dàjiā zǎoshang hǎo, jīntiān wǒ xiǎng xiǎngxiǎng fēnxiǎng yíxià wǒmen dì-sān jìdù de chéngjiù.", vi: "Chào buổi sáng mọi người, hôm nay tôi xin chia sẻ về các thành tựu trong quý 3 của chúng ta." },
  { id: 1682, day: 169, en: "Let me draw your attention to this chart on slide four.", cn: "请大家看第 4 页幻灯片上的这张图表。", pinyin: "qǐng dàjiā kàn dì-sì yè huàndēngpiàn shàng de zhè zhāng túbiǎo.", vi: "Mời mọi người chú ý vào biểu đồ trên trang slide thứ tư." },
  { id: 1683, day: 169, en: "Keep your presentation slides visual with concise bullet points.", cn: "保持幻灯片视觉化，使用简明扼要的要点 (Bullet points)。", pinyin: "bǎochí huàndēngpiàn shìjuéhuà, shǐyòng jiǎnmíng èyào de yàodiǎn.", vi: "Hãy giữ cho các slide trình chiếu trực quan bằng các đầu dòng ngắn gọn." },
  { id: 1684, day: 169, en: "Maintaining eye contact builds strong rapport with your audience.", cn: "保持眼神交流有助于与听众建立良好的互动关系。", pinyin: "bǎochí yǎnshén jiāoliú yǒu zhù yú yǔ tīngzhòng jiànlì liánghǎo de hùdòng guānxi.", vi: "Duy trì giao tiếp bằng mắt giúp xây dựng kết nối tốt với người nghe." },
  { id: 1685, day: 169, en: "To summarize my main points, we must focus on market expansion.", cn: "总结我的要点，我们必须专注于市场扩张。", pinyin: "zǒngjié wǒ de yàodiǎn, wǒmen bìxū zhuānzhù yú shìchǎng kuòzhāng.", vi: "Tóm tắt các ý chính của tôi: Chúng ta bắt buộc phải tập trung mở rộng thị trường." },
  { id: 1686, day: 169, en: "Now I'd like to open the floor for any questions or comments.", cn: "现在我想请大家提问或发表意见。", pinyin: "xiànzài wǒ xiǎng qǐng dàjiā tíwèn huò fābiǎo yìjiàn.", vi: "Bây giờ tôi xin mở phần thảo luận cho các câu hỏi hoặc ý kiến đóng góp." },
  { id: 1687, day: 169, en: "That is a very insightful question, thank you for bringing it up.", cn: "这是一个非常深刻的问题，感谢您提出来。", pinyin: "zhè shì yí gè fēicháng shēnkè de wèntí, gǎnxiè nín tí chūlái.", vi: "Đó là một câu hỏi rất sâu sắc, cảm ơn bạn đã nêu lên." },
  { id: 1688, day: 169, en: "Using storytelling makes complex financial data easier to understand.", cn: "运用故事化叙事 (Storytelling) 能让复杂的财务数据更容易理解。", pinyin: "yùnyòng gùshìhuà xùshì néng ràng fùzá de cáiwù shùjù gèng róngyì lǐjiě.", vi: "Sử dụng nghệ thuật kể chuyện giúp cho các dữ liệu tài chính phức tạp trở nên dễ hiểu hơn." },
  { id: 1689, day: 169, en: "Please rehearse your presentation timing to avoid overrunning schedule.", cn: "请演练您的演讲时间，以免超时。", pinyin: "qǐng yǎnliàn nín de yǎnjiǎng shíjiān, yǐmiǎn chāoshí.", vi: "Vui lòng tập luyện căn thời gian thuyết trình để tránh làm lố thời lượng." },
  { id: 1690, day: 169, en: "A confident posture and calm voice tone reflect authority.", cn: "自信的姿态和沉稳的语调能体现专业权威。", pinyin: "zìxìn de zītài hé chénwěn de yǔdiào néng tǐxiàn zhuānyè quánwēi.", vi: "Tác phong tự tin cùng giọng nói trầm tĩnh thể hiện sự uy tín và chuyên nghiệp." }
);

// Ngày 170: Kỹ năng Mềm - Kỹ năng Quản lý Đổi mới & Sáng tạo (Innovation & Problem Solving)
LESSON_DATA.push(
  { id: 1691, day: 170, en: "Let's brainstorm out-of-the-box ideas for our next campaign.", cn: "让我们为下一个活动集思广益，提出打破常规的想法。", pinyin: "ràng wǒmen wèi xià yí gè huódòng jísī-guǎngyì, tíchū dǎpò chángguī de xiǎngfǎ.", vi: "Hãy cùng động não (brainstorm) các ý tưởng táo bạo ngoài khuôn khổ cho chiến dịch tới." },
  { id: 1700, day: 170, en: "Failure should be treated as a valuable learning opportunity.", cn: "失败应当被视为宝贵的学习机会。", pinyin: "shībài yāngdāng bèi shìwéi bǎoguì de xuéxí jīhuì.", vi: "Thất bại nên được nhìn nhận như một cơ hội học hỏi quý giá." },
  { id: 1693, day: 170, en: "Design Thinking places customer empathy at the heart of innovation.", cn: "设计思维（Design Thinking）将客户同理心置于创新的核心。", pinyin: "shèjì sīwéi jiāng kèhù tónglǐxīn zhì yú chuàngxīn de héxīn.", vi: "Tư duy Thiết kế (Design Thinking) đặt sự thấu cảm khách hàng làm trung tâm của sự đổi mới." },
  { id: 1694, day: 170, en: "We built a rapid prototype to test consumer reaction quickly.", cn: "我们制作了一个快速原型，以迅速测试消费者的反应。", pinyin: "wǒmen zhìzuò le yí gè kuàisù yuánxíng, yǐ xùnsù cèshì xiāofèizhě de fǎnyìng.", vi: "Chúng tôi đã tạo một bản mẫu thử nghiệm (prototype) nhanh để đo lường phản ứng người dùng." },
  { id: 1695, day: 170, en: "Fostering an innovative culture requires psychological safety.", cn: "培养创新文化需要心理安全感。", pinyin: "péiyǎng chuàngxīn wénhuà xūyào xīnlǐ ānquángǎn.", vi: "Nuôi dưỡng một văn hóa đổi mới sáng tạo đòi hỏi sự an toàn về mặt tâm lý." },
  { id: 1696, day: 170, en: "How can we disrupt the existing market with a fresh approach?", cn: "我们如何通过全新的方法颠覆现有市场？", pinyin: "wǒmen rúhé tōngguò quánxīn de fāngfǎ diānfù xiànyǒu shìchǎng?", vi: "Làm cách nào chúng ta có thể làm khuynh đảo thị trường hiện tại bằng một hướng đi mới?" },
  { id: 1697, day: 170, en: "Cross-functional collaboration breeds creative problem solving.", cn: "跨部门 diệu 协作孕育出创造性的问题解决方案。", pinyin: "kuà bùmén xiézuò yùnyù chū chuàngzàoxìng de wèntí jiějué fāng'àn.", vi: "Sự hợp tác liên phòng ban khơi nguồn cho những giải pháp giải quyết vấn đề đầy sáng tạo." },
  { id: 1698, day: 170, en: "We encourage calculated risk-taking in research and development.", cn: "我们鼓励在研发中承担经过计算的风险。", pinyin: "wǒmen gǔlì zài yánfā zhōng chéngdān jīngguò jìsuàn de fēngxiǎn.", vi: "Chúng tôi khuyến khích việc chấp nhận các rủi ro có tính toán trong nghiên cứu và phát triển." },
  { id: 1699, day: 170, en: "Iterative testing helps us continuously refine the product features.", cn: "迭代测试有助于我们不断完善产品功能。", pinyin: "diédài cèshì yǒu zhù yú wǒmen bùduàn wánshàn chǎnpǐn gōngnéng.", vi: "Việc kiểm thử lặp đi lặp lại giúp chúng tôi không ngừng hoàn thiện các tính năng sản phẩm." },
  { id: 1692, day: 170, en: "Congratulations on completing 170 days of language mastery!", cn: "恭喜您完成 170 天的语言精通之旅！", pinyin: "gōngxǐ nín wánchéng 170 tiān de yǔyán jīngtōng zhī lǚ!", vi: "Chúc mừng bạn đã hoàn thành 170 ngày làm chủ ngôn ngữ!" }
);

// ==========================================
// CHẶNG 3: CÔNG SỞ, NGHỀ NGHIỆP & KỸ NĂNG MỀM (TIẾP THEO)
// DỮ LIỆU CÂU HỘI THOẠI CHI TIẾT: NGÀY 171 - NGÀY 180
// ==========================================

// Ngày 171: Quản trị Doanh nghiệp - Quản lý Rủi ro & Khủng hoảng (Risk & Crisis Management)
LESSON_DATA.push(
  { id: 1701, day: 171, en: "We need a comprehensive contingency plan to mitigate operational risks.", cn: "我们需要制定一份 chuàn 复杂的应急计划，以降低运营风险。", pinyin: "wǒmen xūyào zhìdìng yì fèn zōnghé de yìngjí jìhuà, yǐ jiàngdī yùnyíng fēngxiǎn.", vi: "Chúng ta cần lập một kế hoạch dự phòng toàn diện để giảm thiểu các rủi ro vận hành." },
  { id: 1702, day: 171, en: "The crisis management team met to handle the PR fallout.", cn: "危机管理团队开会讨论如何处理公关危机的影响。", pinyin: "wēijī guǎnlǐ tuánduì kāihuì tǎolùn rúhé chǔlǐ gōngguān wēijī de yǐngxiǎng.", vi: "Đội ngũ quản lý khủng hoảng đã họp để xử lý hậu quả sự cố truyền thông/PR." },
  { id: 1703, day: 171, en: "Cybersecurity breaches pose a severe threat to our data safety.", cn: "网络安全漏洞对我们的数据安全构成了严重威胁。", pinyin: "wǎngluò ānquán lòudòng duì wǒmen de shùjù ānquán gòuchéng le yánzhòng wēihéi.", vi: "Các vi phạm an ninh mạng đang đe dọa nghiêm trọng đến an toàn dữ liệu của chúng ta." },
  { id: 1704, day: 171, en: "How do we hedge against foreign exchange currency risks?", cn: "我们如何规避外汇汇率风险？", pinyin: "wǒmen rúhé guībì wàihuì huìlǜ fēngxiǎn?", vi: "Làm thế nào để chúng ta phòng ngừa (hedge) rủi ro tỷ giá hối đoái?" },
  { id: 1705, day: 171, en: "Regular risk assessments help identify vulnerabilities early.", cn: "定期风险评估有助于尽早发现漏洞。", pinyin: "dìngqī fēngxiǎn pínggū yǒu zhù yú jǐn zǎo fāxiàn lòudòng.", vi: "Đánh giá rủi ro định kỳ giúp phát hiện các điểm yếu từ sớm." },
  { id: 1706, day: 171, en: "Transparency with the public is key during a product recall.", cn: "在产品召回期间，对公众保持透明是关键。", pinyin: "zài chǎnpǐn zhàohuí qījiān, duì gōngzhòng bǎochí tòumíng shì guānjiàn.", vi: "Minh bạch với công chúng là chìa khóa trong đợt thu hồi sản phẩm." },
  { id: 1707, day: 171, en: "Insurance coverage offsets potential losses from natural disasters.", cn: "保险承保可以弥补自然灾害带来的潜在损失。", pinyin: "bǎoxiǎn chéngbǎo kěyǐ míbǔ zìrán zāihài dài lái de qiánzài sǔnshī.", vi: "Hợp đồng bảo hiểm giúp bù đắp tổn thất tiềm ẩn do thiên tai." },
  { id: 1708, day: 171, en: "We must ensure business continuity even during server outages.", cn: "即便在服务器中断期间，我们也必须确保业务连续性。", pinyin: "jíbiàn zài fúwùqì zhōngduàn qījiān, wǒmen yě bìxū quèbǎo yèwù liánxùxìng.", vi: "Chúng ta phải đảm bảo duy trì hoạt động kinh doanh ngay cả khi máy chủ bị gián đoạn." },
  { id: 1709, day: 171, en: "The PR spokesman released an official statement to clear rumors.", cn: "公关发言人发表了官方声明以澄清谣言。", pinyin: "gōngguān fāyánrén fābiǎo le guānfāng shēngmíng yǐ chéngqīng yáoyán.", vi: "Người phát ngôn PR đã đưa ra tuyên bố chính thức để đập tan các tin đồn." },
  { id: 1710, day: 171, en: "Conducting post-mortem analysis prevents repeating past mistakes.", cn: "进行事后复盘分析可以防止重蹈覆辙。", pinyin: "jìnxíng shìhòu fùpán fēnxi kěyǐ fángzhǐ chóngdǎo-fùzhé.", vi: "Thực hiện phân tích rút kinh nghiệm (post-mortem) giúp tránh lặp lại sai lầm trong tương lai." }
);

// Ngày 172: Quản trị Doanh nghiệp - Đổi mới Công nghệ & Chuyển đổi Số (Digital Transformation & Tech)
LESSON_DATA.push(
  { id: 1711, day: 172, en: "Digital transformation is reshaping our core business model.", cn: "数字化转型正在重塑我们的核心商业模式。", pinyin: "shùzìhuà zhuǎnxíng zhèngzài chóngsù wǒmen de héxīn shāngyè móshì.", vi: "Chuyển đổi số đang tái cấu trúc mô hình kinh doanh cốt lõi của chúng ta." },
  { id: 1712, day: 172, en: "Adopting AI tools automates repetitive tasks and boosts efficiency.", cn: "采用人工智能工具可以实现重复任务自动化，提升效率。", pinyin: "cǎiyòng réngōng zhìnéng gōngjù kěyǐ shíxiàn chóngfù rènwu zìdònghuà, tíshēng xiàolǜ.", vi: "Áp dụng các công cụ AI giúp tự động hóa công việc lặp đi lặp lại và nâng cao hiệu suất." },
  { id: 1713, day: 172, en: "Migrating data to the cloud improves flexibility and accessibility.", cn: "将数据迁移到云端可以提高灵活性和可访问性。", pinyin: "jiāng shùjù qiānyí dào yúnduān kěyǐ tígāo línghuóxìng hé kě fǎngwènxìng.", vi: "Chuyển đổi dữ liệu lên nền tảng điện toán đám mây giúp nâng cao tính linh hoạt và khả năng truy cập." },
  { id: 1714, day: 172, en: "Data privacy regulations like GDPR must be strictly followed.", cn: "必须严格遵守像 GDPR 这样的数据隐私法规。", pinyin: "bìxū yángé zūnshǒu xiàng GDPR zhèyàng de shùjù yǐnsī fǎguī.", vi: "Phải tuân thủ nghiêm ngặt các quy định về bảo mật dữ liệu như GDPR." },
  { id: 1715, day: 172, en: "Our IT infrastructure requires a major upgrade to support growth.", cn: "我们的 IT 基础设施需要重大升级以支持业务增长。", pinyin: "wǒmen de IT jīchǔ shèshī xūyào zhòngdà shēngjí yǐ zhīchí yèwù zēngzhǎng.", vi: "Hạ tầng CNTT của chúng ta cần được nâng cấp toàn diện để đáp ứng đà phát triển." },
  { id: 1716, day: 172, en: "Big data analytics enables precise customer targeting.", cn: "大数据分析能够实现精准的客户定位。", pinyin: "dàshùjù fēnxi nénggòu shíxiàn jīngzhǔn de kèhù dìngwèi.", vi: "Phân tích dữ liệu lớn giúp nhắm mục tiêu khách hàng một cách chính xác." },
  { id: 1717, day: 172, en: "Automation reduces manual input errors in financial reports.", cn: "自动化减少了财务报告中的人工输入错误。", pinyin: "zìdònghuà jiǎnshǎo le cáiwù bàogào zhōng de réngōng shūrù cuòwù.", vi: "Tự động hóa giúp cắt giảm sai sót nhập liệu thủ công trong báo cáo tài chính." },
  { id: 1718, day: 172, en: "We are developing an omnichannel platform for seamless retail.", cn: "我们正在开发全渠道平台，实现无缝全渠道全零售。", pinyin: "wǒmen zhèngzài kāifā quán qúdào píngtái, shíxiàn wúféng quán qúdào língshòu.", vi: "Chúng tôi đang phát triển nền tảng bán hàng đa kênh (omnichannel) liền mạch." },
  { id: 1719, day: 172, en: "Legacy systems are costing us too much maintenance overhead.", cn: "旧版系统在维护开支上消耗了我们太多成本。", pinyin: "jiùbǎn xìtǒng zài wéihù kāizhī shàng xiāohào le wǒmen tài duō chéngběn.", vi: "Các hệ thống cũ kỹ đang làm chúng ta tốn quá nhiều chi phí bảo trì." },
  { id: 1720, day: 172, en: "Upskilling staff in digital tools is necessary for smooth onboarding.", cn: "提升员工在数字工具方面的 mỡ 技能，对于顺利) onboard 至关重要。", pinyin: "tíshēng yuángōng zài shùzì gōngjù fāngmiàn de jìnéng, duìyú shùnlì zhíbān zhìguān zhòngyào.", vi: "Nâng cao kỹ năng công nghệ cho nhân viên là điều cần thiết để tinh gọn quy trình." }
);

// Ngày 173: Văn hóa Doanh nghiệp - Trách nhiệm Xã hội & Bền vững (ESG & Sustainability)
LESSON_DATA.push(
  { id: 1721, day: 173, en: "Our ESG initiative focuses on reducing carbon footprint across supply chain.", cn: "我们的 ESG 计划专注于减少整个供应链的碳足迹。", pinyin: "wǒmen de ESG jìhuà zhuānzhù yú jiǎnshǎo zhěnggè gōngyìngliàn de tàn zújì.", vi: "Sáng kiến ESG của chúng tôi tập trung giảm thiểu lượng dấu chân carbon trong chuỗi cung ứng." },
  { id: 1722, day: 173, en: "Sustainable manufacturing practices build long-term brand equity.", cn: "可持续的制造实践能够构建 long-term 品牌资产。", pinyin: "kěchíxù de zhìzào shíjiàn nénggòu gòujiàn kěchíxù de pǐnpái zīchǎn.", vi: "Các phương thức sản xuất bền vững giúp gia tăng giá trị thương hiệu dài hạn." },
  { id: 1723, day: 173, en: "We aim to transition to 100% renewable energy by 2030.", cn: "我们的目标是到 2030 年过渡到 100% 可再生能源。", pinyin: "wǒmen de mùbiāo shì dào 2030 nián guòdù dào bǎi fēn zhī bǎi kě zàishēng néngyuán.", vi: "Mục tiêu của chúng tôi là chuyển đổi sang 100% năng lượng tái tạo vào năm 2030." },
  { id: 1724, day: 174, en: "Corporate Social Responsibility (CSR) projects strengthen community relations.", cn: "企业社会责任（CSR）项目能 củng cố 社区关系。", pinyin: "qǐyè shèhuì zérèn (CSR) xiàngmù néng gǒnggù shèqū guānxi.", vi: "Các dự án Trách nhiệm Xã hội của Doanh nghiệp (CSR) củng cố mối quan hệ với cộng đồng." },
  { id: 1725, day: 173, en: "Investors are increasingly prioritizing companies with high ESG scores.", cn: "投资者越来越优先考虑 ESG 得分高的公司。", pinyin: "tóuzīzhě yuè lái yuè yōuxiān kǎolǜ ESG dé fēn gāo de gōngsī.", vi: "Các nhà đầu tư ngày càng ưu tiên những công ty đạt chỉ số ESG cao." },
  { id: 1726, day: 173, en: "Paperless office policies significantly reduce workplace waste.", cn: "无纸化办公政策显著减少了工作场所的浪费。", pinyin: "wúzhǐhuà bàngōng zhèngcè xiǎnzhù jiǎnshǎo le gōngzuò chǎngsuǒ de làngfèi.", vi: "Chính sách văn phòng không giấy tờ giúp giảm thiểu đáng kể lãng phí công sở." },
  { id: 1727, day: 173, en: "Ethical sourcing ensures fair labor standards at supplier factories.", cn: "道德采购确保了供应商工厂符合公平的劳工标准。", pinyin: "dàodé cǎigòu quèbǎo le gōngyìngshāng gōngchǎng fúhé gōngpíng de láogōng biāozhǔn.", vi: "Nguồn cung ứng đạo đức đảm bảo các tiêu chuẩn lao động công bằng tại các xưởng đối tác." },
  { id: 1728, day: 173, en: "The annual sustainability report highlights our eco-friendly achievements.", cn: "年度可持续发展报告 highlights 了我们的环保成就。", pinyin: "niándù kěchíxù fāzhǎn bàogào xǐxiǎn le wǒmen de huánbǎo chéngjiù.", vi: "Báo cáo phát triển bền vững hàng năm làm nổi bật các thành tựu thân thiện với môi trường." },
  { id: 1729, day: 173, en: "Greenwashing can harm a corporate reputation permanently.", cn: "洗绿（Greenwashing）可能会永久损害企业声誉。", pinyin: "xǐlǜ (Greenwashing) kěnéng huì yǒngjiǔ sǔnhài qǐyè shēngyù.", vi: "Hành vi 'tẩy xanh' (quảng cáo xanh giả tạo) có thể tàn phá vĩnh viễn uy tín doanh nghiệp." },
  { id: 1730, day: 173, en: "Diversity, Equity, and Inclusion (DEI) drives innovation inside teams.", cn: "多元化、公平性和包容性（DEI）推动团队内部创新。", pinyin: "duōyuánhuà, gōngpíngxìng hé bāoróngxìng (DEI) tuīdòng tuánduì nèibù chuàngxīn.", vi: "Sự Đa dạng, Bình đẳng và Hòa nhập (DEI) thúc đẩy sự đổi mới sáng tạo trong nội bộ." }
);

// Ngày 174: Kỹ năng Lãnh đạo - Chiến lược Quản trị & Điều hành (Executive Leadership Strategy)
LESSON_DATA.push(
  { id: 1731, day: 174, en: "Great leaders inspire vision and empower team members to take ownership.", cn: "伟大的领导者激发愿景，并赋能团队成员承担主人翁责任。", pinyin: "wěidà de lǐngdǎozhě jīfā yuànjǐng, bìng fùnéng tuánduì chéngyuán chéngdān zhǔrénwēng zérèn.", vi: "Những nhà lãnh đạo vĩ đại truyền cảm hứng cho tầm nhìn và trao quyền cho nhân viên làm chủ công việc." },
  { id: 1732, day: 174, en: "Strategic planning sessions outline the 5-year growth roadmap.", cn: "战略规划会议勾勒出未来 5 年的增长路线图。", pinyin: "zhànlüè guīhuà huìyì gōulè chū wèilái wǔ nián de zēngzhǎng lùxiàntú.", vi: "Các buổi họp hoạch định chiến lược vạch ra lộ trình phát triển trong 5 năm tới." },
  { id: 1733, day: 174, en: "Leading by example builds deep trust across all organization levels.", cn: "以身作则可以在整个组织各层级建立深厚的信任。", pinyin: "yǐshēn-zuòzé kěyǐ zài zhěnggè zǔzhī gè céngjí jiànlì shēnhòu de xìnrèn.", vi: "Lãnh đạo bằng cách làm gương xây dựng niềm tin vững chắc ở mọi cấp bậc tổ chức." },
  { id: 1734, day: 174, en: "Managing change requires transparent communication with employees.", cn: "变革管理需要与员工进行透明的沟通。", pinyin: "biàngēng guǎnlǐ xūyào yǔ yuángōng jìnxíng tòumíng de gōutōng.", vi: "Quản trị sự thay đổi đòi hỏi giao tiếp minh bạch với nhân viên." },
  { id: 1735, day: 174, en: "Constructive feedback helps direct reports grow professionally.", cn: "建设性的反馈能帮助下属获得专业成长。", pinyin: "jiànshèxìng de fànkuì néng bāngzhù xiàshǔ huòdé zhuānyè chéngzhǎng.", vi: "Phản hồi mang tính xây dựng giúp cấp dưới phát triển chuyên môn tốt hơn." },
  { id: 1736, day: 174, en: "How do you align individual team goals with overall corporate strategy?", cn: "您如何将个人/团队目标与整体公司战略保持一致？", pinyin: "nín rúhé jiāng gèrén/tuánduì mùbiāo yǔ zhěngtǐ gōngsī zhànlüè bǎochí yízhì?", vi: "Làm cách nào bạn đồng bộ mục tiêu của từng nhóm với chiến lược chung của công ty?" },
  { id: 1737, day: 174, en: "Crisis leadership demands decisive decision-making under pressure.", cn: "危机中的领导力需要高压下的果断决策。", pinyin: "wēijī zhōng de lǐngdǎolì xūyào gāoyā xià de guǒduàn juécè.", vi: "Năng lực lãnh đạo thời khủng hoảng đòi hỏi việc đưa ra quyết định quyết đoán dưới áp lực." },
  { id: 1738, day: 174, en: "Succession planning ensures smooth leadership transition for key roles.", cn: "接班人计划/继任规划可确保关键岗位的平稳过渡。", pinyin: "jiēbānrén jìhuà kě quèbǎo guānjiàn gǎngwèi de píngwěn guòdù.", vi: "Quy hoạch kế thừa bảo đảm sự chuyển giao vị trí lãnh đạo diễn ra êm đẹp." },
  { id: 1739, day: 174, en: "Micromanagement often stifles innovation and demotivates staff.", cn: "微观管理（Micromanagement）往往会扼杀创新并打压员工积极性。", pinyin: "wēiguān guǎnlǐ wǎngwǎng huì èshā chuàngxīn bìng dǎyā yuángōng jījíxìng.", vi: "Quản lý soi mói (micromanagement) thường kìm hãm sự sáng tạo và làm nhụt chí nhân viên." },
  { id: 1740, day: 174, en: "An effective leader knows how to leverage each member's strength.", cn: "优秀的领导者懂得如何发挥每位成员的优势。", pinyin: "yōuxiù de lǐngdǎozhě dǒngde rúhé fāhuī měi wèi chéngyuán de yōushì.", vi: "Một nhà lãnh đạo giỏi biết cách khai thác tối đa điểm mạnh của từng thành viên." }
);

// Ngày 175: Quan hệ Công chúng & Truyền thông (PR & Executive Communications)
LESSON_DATA.push(
  { id: 1741, day: 175, en: "We are organizing a press conference for the new product launch.", cn: "我们正在为新产品发布会组织新闻发布会。", pinyin: "wǒmen zhèngzài wèi xīn chǎnpǐn fābùhuì zǔzhī xīnwén fābùhuì.", vi: "Chúng tôi đang tổ chức một buổi họp báo cho đợt ra mắt sản phẩm mới." },
  { id: 1742, day: 175, en: "The official press release was distributed to major media outlets.", cn: "官方新闻稿已发送至各大主流媒体。", pinyin: "guānfāng xīnwéngǎo yǐ fāsòng zhì gè dà zhǔliú méitǐ.", vi: "Thông cáo báo chí chính thức đã được gửi tới các đơn vị truyền thông lớn." },
  { id: 1743, day: 175, en: "Media relations play a vital role in brand reputation management.", cn: "媒体关系在品牌声誉管理中起着至关重要的作用。", pinyin: "méitǐ guānxi zài pǐnpái shēngyù guǎnlǐ zhōng qǐzhe zhìguān zhòngyào de zuòyòng.", vi: "Quan hệ báo chí đóng vai trò cốt lõi trong quản trị uy tín thương hiệu." },
  { id: 1744, day: 175, en: "Internal communication keeps remote employees connected.", cn: "内部沟通让远程员工保持紧密联系。", pinyin: "nèibù gōutōng ràng yuǎnchéng yuángōng bǎochí jǐnmì liánxì.", vi: "Truyền thông nội bộ giúp nhân viên làm việc từ xa duy trì kết nối." },
  { id: 1745, day: 175, en: "The CEO was interviewed by Forbes regarding market trends.", cn: "首席执行官（CEO）就市场趋势接受了《福布斯》的专访。", pinyin: "shǒuxí zhíxíngguān jiù shìchǎng qūshì jiēshòu le Fúbùsī de zhuānfǎng.", vi: "Tổng giám đốc đã trả lời phỏng vấn Forbes về các xu hướng thị trường." },
  { id: 1746, day: 175, en: "We must control the narrative to prevent misinformation.", cn: "我们必须掌控叙事，以防止误导性信息的传播。", pinyin: "wǒmen bìxū zhǎngkòng xùshì, yǐ fángzhǐ wùdǎoxìng xìnxī de chuánbō.", vi: "Chúng ta phải chủ động định hướng thông tin để ngăn chặn sai lệch." },
  { id: 1747, day: 175, en: "Influencer marketing enhanced our product awareness among Gen Z.", cn: "网红/KOL 营销提升了 Z 世代对我们产品的认知度。", pinyin: "wǎnghóng yíngxiāo tíshēng le Z shìdài duì wǒmen chǎnpǐn de rènzhīdù.", vi: "Tiếp thị qua người ảnh hưởng (influencer) nâng cao độ nhận diện sản phẩm ở Gen Z." },
  { id: 1748, day: 175, en: "How should we respond to negative comments on social media?", cn: "我们应该如何回应社交媒体上的负面评论？", pinyin: "wǒmen yīnggāi rúhé huíyìng shèjiāo méitǐ shàng de fùmiàn pínglùn?", vi: "Chúng ta nên phản hồi các bình luận tiêu cực trên mạng xã hội như thế nào?" },
  { id: 1749, day: 175, en: "The quarterly newsletter highlights key milestone achievements.", cn: "季度通讯/简报 highlights 了关键里程碑成就。", pinyin: "jìdù tōngxùn xǐxiǎn le guānjiàn lǐchéngbēi chéngjiù.", vi: "Bản tin hàng quý điểm lại những cột mốc thành tựu quan trọng." },
  { id: 1750, day: 175, en: "Sponsoring charity events enhances our corporate social image.", cn: "赞助慈善活动能提升我们的企业社会形象。", pinyin: "zànzhù císhàn huódòng néng tíshēng wǒmen de qǐyè shèhuì xíngxiàng.", vi: "Tài trợ cho các hoạt động thiện nguyện giúp củng cố hình ảnh doanh nghiệp." }
);

// Ngày 176: Giao tiếp Đa văn hóa Doanh nghiệp (Cross-Cultural Business Communication)
LESSON_DATA.push(
  { id: 1751, day: 176, en: "Cultural awareness is crucial when conducting cross-border deals.", cn: "在进行跨境交易时，文化意识至关重要。", pinyin: "zài jìnxíng kuàjiàng jiāoyì shí, wénhuà yìshí zhìguān zhòngyào.", vi: "Sự thấu hiểu văn hóa là tối quan trọng khi đàm phán các thương vụ xuyên quốc gia." },
  { id: 1752, day: 176, en: "Be mindful of body language differences across international teams.", cn: "请注意跨国团队中肢体语言差异。", pinyin: "qǐng zhùyì kuàguó tuánduì zhōng zhītǐ yǔyán chāyì.", vi: "Hãy lưu ý đến sự khác biệt về ngôn ngữ cơ thể giữa các đội ngũ quốc tế." },
  { id: 1753, day: 176, en: "In some cultures, direct refusal is considered impolite in business.", cn: "在某些文化中，商务场合的直接拒绝被认为是不礼貌的。", pinyin: "zài mǒu xiē wénhuà zhōng, shāngwù chǎnghé de zhíjiē jùjué bèi rènwéi shì bù lǐmào de.", vi: "Ở một số văn hóa, từ chối trực tiếp trong kinh doanh bị coi là thiếu lịch sự." },
  { id: 1754, day: 176, en: "Punctuality expectations vary between Western and Asian markets.", cn: "西方与亚洲市场对准时（Punctuality）的期望有所不同。", pinyin: "xīfāng yǔ Yàzhōu shìchǎng duì zhǔnshí de qīwàng yǒu suǒ bùtóng.", vi: "Kỳ vọng về sự đúng giờ có khác biệt giữa thị trường phương Tây và châu Á." },
  { id: 1755, day: 176, en: "Exchanging business cards with both hands shows respect in Asia.", cn: "在亚洲，双手递接名片表示尊重。", pinyin: "zài Yàzhōu, shuāngshǒu dì jiē míngpiàn biǎoshì zūnzhòng.", vi: "Ở châu Á, việc trao nhận danh thiếp bằng hai tay thể hiện sự tôn trọng." },
  { id: 1756, day: 176, en: "Avoid regional slang to ensure clarity in global video calls.", cn: "在跨国视频会议中，避免使用俚语/方言，以确保清晰明了。", pinyin: "zài kuàguó shìpín huìyì zhōng, bìmiǎn shǐyòng lǐyǔ, yǐ quèbǎo qīngxī míngliǎo.", vi: "Tránh dùng từ lóng vùng miền để đảm bảo tính rõ ràng trong các cuộc họp video toàn cầu." },
  { id: 1757, day: 176, en: "Understanding local business etiquette helps build long-term relationships.", cn: "了解当地商务礼仪有助于建立长期合作关系。", pinyin: "liǎojiě dāngdì shāngwù lǐyí yǒu zhù yú jiànlì chángqī hézuò guānxi.", vi: "Hiểu rõ nghi thức kinh doanh địa phương giúp xây dựng mối quan hệ hợp tác lâu dài." },
  { id: 1758, day: 176, en: "Active listening bridges language barriers in global teams.", cn: "积极倾听能够消除跨国团队中的语言障碍。", pinyin: "jījí qīngtīng nénggòu xiāochú kuàguó tuánduì zhōng de yǔyán zhàng'ài.", vi: "Lắng nghe chủ động giúp xóa bỏ rào cản ngôn ngữ trong các nhóm toàn cầu." },
  { id: 1759, day: 176, en: "Adapt your communication style to fit the audience's cultural context.", cn: "调整您的沟通风格，以适应听众的文化 context/背景。", pinyin: "tiáozhěng nín de gōutōng fēnggé, yǐ shìyìng tīngzhòng de wénhuà bèijǐng.", vi: "Điều chỉnh phong cách giao tiếp để phù hợp với bối cảnh văn hóa của đối tác." },
  { id: 1760, day: 176, en: "Building interpersonal harmony (Guanxi) is critical for China business.", cn: "建立良好的人际关系（关系）对在中国做生意至关重要。", pinyin: "jiànlì liánghǎo de rénjì guānxi (guānxi) duì zài Zhōngguó zuò shēngyi zhìguān zhòngyào.", vi: "Xây dựng mối quan hệ cá nhân hòa hợp (Quan hệ) là điều then chốt khi làm ăn tại Trung Quốc." }
);

// Ngày 177: Quản lý Chuỗi Cung ứng & Logistics (Supply Chain & Logistics Management)
LESSON_DATA.push(
  { id: 1761, day: 177, en: "Global supply chain disruptions have delayed component shipments.", cn: "全球供应链中断导致零部件运输延迟。", pinyin: "quánqiú gōngyìngliàn zhōngduàn dǎozhì língbùjiàn yùnshū yánchí.", vi: "Sự gián đoạn chuỗi cung ứng toàn cầu đã khiến việc vận chuyển linh kiện bị trễ." },
  { id: 1762, day: 177, en: "Just-In-Time (JIT) inventory reduces warehousing storage costs.", cn: "准时制（JIT）库存管理可以降低仓储成本。", pinyin: "zhǔnshízhì (JIT) kùcún guǎnlǐ kěyǐ jiàngdī cāngchǔ chéngběn.", vi: "Quản lý tồn kho Just-In-Time (JIT) giúp giảm bớt chi phí lưu kho." },
  { id: 1763, day: 177, en: "Freight rates have fluctuated sharply over the past quarter.", cn: "运费价格在过去一个季度大幅波动。", pinyin: "yùnfèi jiàgé zài guòqù yí gè jìdù dàfú bōdòng.", vi: "Cước phí vận chuyển đã biến động mạnh trong quý vừa qua." },
  { id: 1764, day: 177, en: "Customs clearance clearance procedures took longer than anticipated.", cn: "清关/海关通关手续耗费的时间超出预期。", pinyin: "qīngguān shǒuxù hàofèi de shíjiān chāochū yùqī.", vi: "Thủ tục thông quan hàng hóa mất nhiều thời gian hơn dự kiến." },
  { id: 1765, day: 177, en: "We signed a contract with a third-party logistics (3PL) provider.", cn: "我们与一家第三方物流（3PL）服务商签署了合同。", pinyin: "wǒmen yǔ yì jiā dì-sānfāng wùliú (3PL) fúwùshāng qiānshǔ le hétóng.", vi: "Chúng tôi đã ký hợp đồng với một đơn vị cung cấp dịch vụ logistics bên thứ ba (3PL)." },
  { id: 1766, day: 177, en: "Optimizing last-mile delivery improves final customer satisfaction.", cn: "优化最后一公里配送能够提高最终客户满意度。", pinyin: "yōuhuà zuìhòu yì gōnglǐ pèisòng nénggòu tígāo zuìzhōng kèhù mǎnyìdù.", vi: "Tối ưu hóa giao hàng chặng cuối (last-mile) giúp gia tăng sự hài lòng của khách hàng." },
  { id: 1767, day: 177, en: "Real-time tracking systems allow monitoring cargo location 24/7.", cn: "实时跟踪系统允许全天候监控货物位置。", pinyin: "shíshí gēnzōng xìtǒng yǔnxǔ quántiānhòu jiānkòng huòwù wèi zhì.", vi: "Hệ thống định vị thời gian thực cho phép theo dõi vị trí lô hàng 24/7." },
  { id: 1768, day: 177, en: "Raw material shortages forced us to lower production targets.", cn: "原材料短缺迫使我们下调了生产目标。", pinyin: "yuáncáiliào duǎnquē pòshǐ wǒmen xiàtiáo le shēngchǎn mùbiāo.", vi: "Sự thiếu hụt nguyên liệu raw đã buộc chúng tôi phải giảm chỉ tiêu sản xuất." },
  { id: 1769, day: 177, en: "Our vendor management system ensures supplier quality control.", cn: "我们的供应商管理系统可确保供应商的质量控制。", pinyin: "wǒmen de gōngyìngshāng guǎnlǐ xìtǒng kě quèbǎo gōngyìngshāng de zhìliàng kòngzhì.", vi: "Hệ thống quản lý nhà cung cấp của chúng tôi bảo đảm việc kiểm soát chất lượng." },
  { id: 1770, day: 177, en: "Diversifying suppliers reduces dependency on a single vendor.", cn: "供应商多元化可以减少对单一厂商的依赖。", pinyin: "gōngyìngshāng duōyuánhuà kěyǐ jiǎnshǎo duì dānyī chǎngshāng de yīlài.", vi: "Đa dạng hóa nguồn cung giúp giảm sự phụ thuộc vào một nhà cung cấp duy nhất." }
);

// Ngày 178: Quản lý Dự án & Phương pháp Linh hoạt (Agile & Project Management)
LESSON_DATA.push(
  { id: 1771, day: 178, en: "We conduct daily stand-up meetings to track sprint progress.", cn: "我们每天举行站立会议，以跟踪 Sprint 迭代进度。", pinyin: "wǒmen měitiān jǔxíng zhànlì huìyì, yǐ gēnzōng Sprint diédài jìndù.", vi: "Chúng tôi họp nhanh hàng ngày (stand-up) để theo dõi tiến độ vòng lặp sprint." },
  { id: 1772, day: 178, en: "Scope creep threatens to delay our project launch date.", cn: "范围蠕变/蔓延（Scope creep）威胁着要推迟我们的项目发布日期。", pinyin: "fànwéi mányán wēihéi zhe yào tuīchí wǒmen de xiàngmù fābù rìqī.", vi: "Việc phình đại phạm vi dự án (scope creep) đang đe dọa hoãn ngày ra mắt." },
  { id: 1773, day: 178, en: "The Scrum Master facilitated the sprint retrospective meeting.", cn: "Scrum Master 主持了 Sprint 回顾会议。", pinyin: "Scrum Master zhǔchí le Sprint huígù huìyì.", vi: "Scrum Master đã điều phối buổi họp đánh giá rút kinh nghiệm (retrospective)." },
  { id: 1774, day: 178, en: "Check the Kanban board to see pending tasks in the backlog.", cn: "请查看看板（Kanban board），了解 Backlog 中待处理的任务。", pinyin: "qǐng chákàn Kānbǎn, liǎojiě Backlog zhōng dài chǔlǐ de rènwu.", vi: "Hãy kiểm tra bảng Kanban để xem các công việc còn đọng trong backlog." },
  { id: 1775, day: 178, en: "Stakeholders requested additional feature requirements for V2.", cn: "利益相关者要求在 V2 版本中增加额外的功能需求。", pinyin: "lìyì xiāngguānzhě yāoqiú zài V2 bǎnběn zhōng zēngjiā éwài de gōngnéng xūqiú.", vi: "Các bên liên quan (stakeholders) đã yêu cầu bổ sung các tính năng cho phiên bản 2." },
  { id: 1776, day: 178, en: "We need to re-prioritize user stories based on market feedback.", cn: "我们需要根据市场反馈重新排列 User Story 的优先级。", pinyin: "wǒmen xūyào gēnjù shìchǎng fànkuì chóngxīn páiliè User Story de yōuxiānjí.", vi: "Chúng ta cần sắp xếp lại thứ tự ưu tiên các câu chuyện người dùng (user stories) dựa trên phản hồi." },
  { id: 1777, day: 178, en: "Milestones must be met to ensure timely project delivery.", cn: "必须达成里程碑，以确保项目按时交付。", pinyin: "bìxū dáchéng lǐchéngbēi, yǐ quèbǎo xiàngmù ànshí jiāofù.", vi: "Phải hoàn thành các cột mốc (milestones) để đảm bảo bàn giao dự án đúng hạn." },
  { id: 1778, day: 178, en: "Cross-functional teams work in two-week iteration cycles.", cn: "跨职能团队按两周的迭代周期工作。", pinyin: "kuà zhínéng tuánduì àn liǎng zhōu de diédài zhōuqī gōngzuò.", vi: "Các nhóm liên phòng ban làm việc theo chu kỳ lặp lại (iteration) 2 tuần." },
  { id: 1779, day: 178, en: "Who is responsible for sign-off on the final deliverables?", cn: "谁负责最终交付物/成果的签收审批？", pinyin: "shéi fùzé zuìzhōng jiāofùwù de qiānshōu shěnpī?", vi: "Ai là người chịu trách nhiệm nghiệm thu kết quả đầu ra cuối cùng?" },
  { id: 1780, day: 178, en: "Agile methodology allows us to adapt to changing requirements quickly.", cn: "Agile 敏捷开发方法使我们能够快速适应不断变化的需求。", pinyin: "Agile mǐnjié kāifā fāngfǎ shǐ wǒmen nénggòu kuàisù shìyìng bùduàn biànhuà de xūqiú.", vi: "Phương pháp Agile giúp chúng ta nhanh chóng thích ứng với những yêu cầu thay đổi." }
);

// Ngày 179: Phát triển Sự nghiệp & Thăng tiến (Career Growth & Promotion)
LESSON_DATA.push(
  { id: 1781, day: 179, en: "Building a personal professional brand opens up career opportunities.", cn: "打造个人专业品牌可以打开职业发展机会。", pinyin: "dǎzào gèrén zhuānyè pǐnpái kěyǐ dǎkāi zhíyè fāzhǎn jīhuì.", vi: "Xây dựng thương hiệu cá nhân chuyên nghiệp giúp mở ra nhiều cơ hội sự nghiệp." },
  { id: 1782, day: 179, en: "Continuous learning and upskilling are vital in today's economy.", cn: "在当今经济环境下，持续学习和提升技能至关重要。", pinyin: "zài dāngjīn jīngjì huánjìng xià, chíxù xuéxí hé tíshēng jìnéng zhìguān zhòngyào.", vi: "Học tập và trau dồi kỹ năng liên tục là điều tối quan trọng trong nền kinh tế hiện nay." },
  { id: 1783, day: 179, en: "I had a career development chat with my direct manager.", cn: "我和我的直属经理进行了职业发展对话。", pinyin: "wǒ hé wǒ de zhíshǔ jīnglǐ jìnxíng le zhíyè fāzhǎn duìhuà.", vi: "Tôi đã có cuộc trao đổi về định hướng phát triển sự nghiệp với quản lý trực tiếp." },
  { id: 1784, day: 179, en: "Networking on LinkedIn helped me connect with industry leaders.", cn: "在 LinkedIn 上建立人脉帮我与行业领袖建立了联系。", pinyin: "zài LinkedIn shàng jiànlì rénmài bāng wǒ yǔ hángyè lǐngxiù jiànlì le liánxì.", vi: "Mở rộng mạng lưới quan hệ trên LinkedIn đã giúp tôi kết nối với các thủ lĩnh ngành." },
  { id: 1785, day: 179, en: "She was promoted to Senior Director for outstanding performance.", cn: "由于表现出色，她被提拔为高级总监。", pinyin: "yóuyú biǎoxiàn chūsè, tā bèi tíbá wèi gāojí zǒngjiān.", vi: "Cô ấy đã được cất nhắc lên vị trí Giám đốc Cao cấp nhờ thành tích xuất sắc." },
  { id: 1786, day: 179, en: "Seeking a mentor provides valuable guidance for career decisions.", cn: "寻找一位导师（Mentor）能为职业决策提供宝贵指导。", pinyin: "xúnzhǎo yí wèi dǎoshī néng wèi zhíyè juécè tígōng bǎoguì zhǐdǎo.", vi: "Tìm kiếm một người cố vấn (mentor) mang lại những định hướng quý giá cho quyết định sự nghiệp." },
  { id: 1787, day: 179, en: "Soft skills are just as critical as technical expertise for advancement.", cn: "对于职业晋升来说，软技能与技术专长同样重要。", pinyin: "duìyú zhíyè jìnshēng láishuō, ruǎnjìnéng yǔ jìshù zhuāncháng tóngyàng zhòngyào.", vi: "Kỹ năng mềm cũng quan trọng không kém kiến thức chuyên môn đối với sự thăng tiến." },
  { id: 1788, day: 179, en: "Setting long-term career goals keeps you motivated and on track.", cn: "设定长期职业目标能让您保持动力并重回正轨。", pinyin: "shèdìng chángqī zhíyè mùbiāo néng ràng nín bǎochí dònglì bìng zhèngquè qiánjìng.", vi: "Đặt ra các mục tiêu sự nghiệp dài hạn giúp duy trì động lực và đi đúng hướng." },
  { id: 1789, day: 179, en: "Taking initiative on cross-team projects increases executive visibility.", cn: "在跨团队项目中采取主动，可增加高层对您的关注度。", pinyin: "zài kuà tuánduì xiàngmù zhōng cǎiqǔ zhǔdòng, kě zēngjiā gāocéng duì nín de guānzhùdù.", vi: "Chủ động nhận trách nhiệm ở các dự án liên phòng ban giúp tăng độ nhận diện với ban lãnh đạo." },
  { id: 1790, day: 179, en: "Adaptability to changing market trends is key to long-term employability.", cn: "适应不断变化的市场趋势是保持长期就业竞争力的关键。", pinyin: "shìyìng bùduàn biànhuà de shìchǎng qūshì shì bǎochí chángqī jiùyè jìngzhēnglì de guānjiàn.", vi: "Khả năng thích ứng với các xu hướng thị trường là chìa khóa duy trì năng lực cạnh tranh nghề nghiệp." }
);

// Ngày 180: Tổng kết & Tự tin Làm chủ 3 Ngôn ngữ (Mastery & Final Review)
LESSON_DATA.push(
  { id: 1791, day: 180, en: "Congratulations on completing this 180-day language journey!", cn: "恭喜您圆满完成这 180 天的语言学习之旅！", pinyin: "gōngxǐ nín yuánmǎn wánchéng zhè 180 tiān de yǔyán xuéxí zhī lǚ!", vi: "Chúc mừng bạn đã hoàn thành xuất sắc hành trình 180 ngày chinh phục ngôn ngữ!" },
  { id: 1792, day: 180, en: "You have built a strong foundation in English, Chinese, and Vietnamese.", cn: "您已在英语、中文和越南语方面打下了坚实的基础。", pinyin: "nín yǐ zài Yīngyǔ, Zhōngwén hé Yuènányǔ fāngmiàn dǎxià le jiānshí de jīchǔ.", vi: "Bạn đã xây dựng một nền tảng vững chắc trong tiếng Anh, tiếng Trung và tiếng Việt." },
  { id: 1793, day: 180, en: "Consistency and daily practice are the secrets to language fluency.", cn: "持之以恒和每天练习是语言流利的秘诀。", pinyin: "chízhīyǐhéng hé měitiān liànxí shì yǔyán liúlì de mìjué.", vi: "Sự kiên trì và luyện tập hàng ngày là bí quyết giúp bạn giao tiếp lưu loát." },
  { id: 1794, day: 180, en: "Never be afraid of making mistakes when speaking with native speakers.", cn: "与母语人士交流时，永远不要害怕犯错。", pinyin: "yǔ mǔyǔ rénshì jiāoliú shí, yǒngyuǎn bú yào hàipà fàncuò.", vi: "Đừng bao giờ sợ mắc lỗi khi trò chuyện với người bản xứ." },
  { id: 1795, day: 180, en: "You are now fully equipped for professional global business setups.", cn: "您现在已完全具备在跨国商务环境中应答自如的能力。", pinyin: "nín xiànzài yǐ wánquán jùbèi zài kuàguó shāngwù huánjìng zhōng yìngdá zìrú de nénglì.", vi: "Bây giờ bạn đã được trang bị đầy đủ để tự tin trong môi trường kinh doanh quốc tế." },
  { id: 1796, day: 180, en: "Keep practicing daily to maintain your trilingual communication skills.", cn: "保持每天练习，以维持您的三语沟通技能。", pinyin: "bǎochí měitiān liànxí, yǐ wéichí nín de sān yǔ gōutōng jìnéng.", vi: "Hãy duy trì việc luyện tập mỗi ngày để giữ vững khả năng giao tiếp ba ngôn ngữ." },
  { id: 1797, day: 180, en: "Knowledge opens doors, but effective communication closes deals.", cn: "知识打开大门，而有效的沟通达成交易。", pinyin: "zhīshi dǎkāi dàmén, ér yǒuxiào de gōutōng dáchéng jiāoyì.", vi: "Kiến thức mở ra những cánh cửa, nhưng giao tiếp hiệu quả mới giúp chốt thành công các thỏa thuận." },
  { id: 1798, day: 180, en: "Thank you for your dedication, hard work, and continuous effort.", cn: "感谢您的专注、努力和不断付出。", pinyin: "gǎnxiè nín de zhuānzhù, nǔlì hé bùduàn fùchū.", vi: "Cảm ơn sự tận tụy, nỗ lực và cố gắng không ngừng nghỉ của bạn." },
  { id: 1799, day: 180, en: "Wish you great success in your career and international endeavors!", cn: "祝愿您在职业生涯和国际化开拓中取得巨大成功！", pinyin: "zhùyuàn nín zài zhíyè shēngyá hé guójìhuà kāituò zhōng qǔdé jùdà chénggōng!", vi: "Chúc bạn đạt được nhiều thành công rực rỡ trong sự nghiệp và các định hướng vươn ra quốc tế!" },
  { id: 1800, day: 180, en: "Keep learning, stay curious, and achieve all your ambitious goals!", cn: "保持学习，保持好奇，实现您所有的宏伟目标！", pinyin: "bǎochí xuéxí, bǎochí hàoqí, shíxiàn nín suǒyǒu de hóngwěi mùbiāo!", vi: "Hãy không ngừng học hỏi, luôn tò mò và chinh phục mọi mục tiêu lớn lao của mình!" }
);

// ==========================================
// CHẶNG 4: TÔN GIÁO & CƠ ĐỐC GIÁO (CHRISTIANITY)
// DỮ LIỆU CÂU HỘI THOẠI CHI TIẾT: NGÀY 181 - NGÀY 190
// ==========================================

// Ngày 181: Khái niệm Cơ bản & Đức tin (Basic Concepts & Faith)
LESSON_DATA.push(
  { id: 1801, day: 181, en: "Christianity is a monotheistic religion based on the life and teachings of Jesus Christ.", cn: "基督教是一种基于耶稣基督的生命和教导的单神论/一神教信仰。", pinyin: "Jīdūjiào shì yì zhǒng jīyú Yēsū Jīdū de shēngmìng hé jiàodǎo de yīshénjiào xìnyǎng.", vi: "Cơ Đốc giáo là tôn giáo độc thần dựa trên cuộc đời và những lời giảng của Chúa Giê-su." },
  { id: 1802, day: 181, en: "Christians believe in the Holy Trinity: Father, Son, and Holy Spirit.", cn: "基督徒相信三位一体：圣父、圣子和圣灵。", pinyin: "Jīdūtú xiāngxìn Sānwèiyìtǐ: Shèngfù, Shèngzǐ hé Shènglíng.", vi: "Người Cơ Đốc tin vào Ba Ngôi Thiên Chúa: Đức Chúa Cha, Đức Chúa Con và Đức Chúa Thánh Linh." },
  { id: 1803, day: 181, en: "Faith, hope, and love are fundamental virtues in Christian teachings.", cn: "信、望、爱是基督教教导中的核心美德。", pinyin: "xìn, wàng, ài shì Jīdūjiào jiàodǎo zhōng de héxīn měidé.", vi: "Đức tin, hy vọng và tình yêu thương là những đức tính cốt lõi trong giáo lý Cơ Đốc." },
  { id: 1804, day: 181, en: "Do you attend church services regularly on Sundays?", cn: "你周日经常去教堂做礼拜吗？", pinyin: "nǐ zhōurì jīngcháng qù jiàotáng zuò lǐbài ma?", vi: "Bạn có thường xuyên đi lễ nhà thờ vào Chủ nhật không?" },
  { id: 1805, day: 181, en: "Grace is considered an unmerited gift of God's favor.", cn: "恩典被认为是上帝无偿赐予的恩宠。", pinyin: "ēndiǎn bèi rènwéi shì Shàngdì wúcháng cìyǔ de ēnchǒng.", vi: "Ân hiển/Ân điển được coi là món quà sủng ái ban cho mà không đòi hỏi điều kiện từ Chúa." },
  { id: 1806, day: 181, en: "The Bible is divided into two main parts: Old Testament and New Testament.", cn: "圣经分为两大主要部分：旧约和新约。", pinyin: "Shèngjīng fēn wéi liǎng dà zhǔyào bùfen: Jiùyuē hé Xīnyuē.", vi: "Kinh Thánh được chia thành hai phần chính: Cựu Ước và Tân Ước." },
  { id: 1807, day: 181, en: "Salvation comes through faith and divine grace.", cn: "救赎是通过信仰和神圣的恩典获得的。", pinyin: "jiùshú shì tōngguò xìnyǎng hé shénsèng de ēndiǎn huòdé de.", vi: "Sự cứu rỗi đến từ đức tin và sự ban ơn thần thánh." },
  { id: 1808, day: 181, en: "Jesus taught his followers to love their neighbors as themselves.", cn: "耶稣教导他的追随者要爱人如己。", pinyin: "Yēsū jiàodǎo tā de zhuīsuízhě yào àirén-rújǐ.", vi: "Chúa Giê-su dạy các môn đồ phải yêu thương người khác như chính mình." },
  { id: 1809, day: 181, en: "Forgiveness plays a central role in Christian theology.", cn: "宽恕在基督教神学中扮演着核心角色。", pinyin: "kuānshù zài Jīdūjiào shénxué zhōng bànyǎn zhe héxīn juésè.", vi: "Sự tha thứ đóng vai trò trung tâm trong thần học Cơ Đốc giáo." },
  { id: 1810, day: 181, en: "May God bless you and keep you safe.", cn: "愿上帝祝福你，保佑你平安。", pinyin: "yuàn Shàngdì zhùfú nǐ, bǎoyòu nǐ píng'ān.", vi: "Cầu xin Chúa ban phúc và gìn giữ bạn được bình an." }
);

// Ngày 182: Kinh Thánh & Các Điều Rơm (The Bible & The Commandments)
LESSON_DATA.push(
  { id: 1811, day: 182, en: "The Ten Commandments provide ethical standards for believers.", cn: "十诫为信徒提供了道德行为准则。", pinyin: "Shíjiè wèi xìntú tígōng le dàodé xíngwéi zhǔnzé.", vi: "Mười Điều Rơm/Mười Điều Răn đưa ra các chuẩn mực đạo đức cho người tin Chúa." },
  { id: 1812, day: 182, en: "Genesis is the first book of the Old Testament.", cn: "《创世记》是旧约的第一卷书。", pinyin: "Chuàngshìjì shì Jiùyuē de dì-yī juàn shū.", vi: "Sách Sáng Thế (Genesis) là cuốn sách đầu tiên của Cựu Ước." },
  { id: 1813, day: 182, en: "The Four Gospels record the life and resurrection of Jesus Christ.", cn: "四福音书记录了耶稣基督的一生与复活。", pinyin: "Sì Fúyīn Shū jìlù le Yēsū Jīdū de yìshēng yǔ fùhuó.", vi: "Bốn cuốn Sách Phúc Âm ghi chép lại cuộc đời và sự phục sinh của Chúa Giê-su." },
  { id: 1814, day: 182, en: "Reading scripture daily builds spiritual strength and wisdom.", cn: "每天阅读经文能积聚属灵的力量与智慧。", pinyin: "měitiān yuèdú jīngwén néng jījù shǔlíng de lìliang yǔ zhìhuì.", vi: "Đọc Kinh Thánh mỗi ngày giúp bồi đắp sức mạnh tâm linh và trí tuệ." },
  { id: 1815, day: 182, en: "The Lord's Prayer is a fundamental Christian prayer recited worldwide.", cn: "主祷文是全球广泛诵读的基本基督教祷文。", pinyin: "Zhǔdǎowén shì quánqiú guǎngfàn sòngdú de jīběn Jīdūjiào dǎowén.", vi: "Bài Cầu Nguyện Của Chúa (Kinh Lạy Cha) là bài cầu nguyện cơ bản được đọc trên khắp thế giới." },
  { id: 1816, day: 182, en: "The Psalms contain beautiful poetry and songs of praise.", cn: "《诗篇》包含优美的诗歌与赞美诗句。", pinyin: "Shīpiān bāohán yōuměi de shīgē yǔ zànměi shījù.", vi: "Sách Thi Thiên/Thánh Vịnh chứa đựng những bài thơ và bài ca ngợi khen tốt đẹp." },
  { id: 1817, day: 182, en: "Proverbs offer practical guidance for daily Christian living.", cn: "《箴言》为基督徒的日常生活提供了实用的指导。", pinyin: "Zhēnyán wèi Jīdūtú de rìcháng shēnghuó tígōng le shíyòng de zhǐdǎo.", vi: "Sách Châm Ngôn mang lại những chỉ dẫn thực tế cho cuộc sống Cơ Đốc nhân hàng ngày." },
  { id: 1818, day: 182, en: "Honor your father and your mother is one of the commandments.", cn: "“孝敬父母”是诫命之一。", pinyin: "xiàojìng fùmǔ shì jièmìng zhī yī.", vi: "'Hãy hiếu kính cha mẹ' là một trong những điều răn." },
  { id: 1819, day: 182, en: "Parables are short stories used by Jesus to convey spiritual lessons.", cn: "寓言故事是耶稣用来传授属灵教训的简短故事。", pinyin: "yùyán gùshi shì Yēsū yòng lái chuánshòu shǔlíng jiàoxun de jiǎnduǎn gùshi.", vi: "Cát dụ (Parables) là những câu chuyện ngắn được Chúa Giê-su dùng để truyền tải bài học tâm linh." },
  { id: 1820, day: 182, en: "Thy word is a lamp unto my feet and a light unto my path.", cn: "你的话是我脚前的灯，是我路上的光。", pinyin: "nǐ de huà shì wǒ jiǎo qián de dēng, shì wǒ lù shàng de guāng.", vi: "Lời Chúa là ngọn đèn cho chân tôi, là ánh sáng cho đường lối tôi." }
);

// Ngày 183: Các Giáo phái chính (Major Christian Denominations)
LESSON_DATA.push(
  { id: 1821, day: 183, en: "The main branches of Christianity include Catholicism, Protestantism, and Orthodoxy.", cn: "基督教的主要分支包括天主教、新教和东正教。", pinyin: "Jīdūjiào de zhǔyào fēnzhī bāokuò Tiānzhǔjiào, Xīnjiào hé Dōngzhèngjiào.", vi: "Các nhánh chính của Cơ Đốc giáo bao gồm Công giáo, Tin Lành và Chính thống giáo." },
  { id: 1822, day: 183, en: "Catholicism is led by the Pope in Vatican City.", cn: "天主教由梵蒂冈的教皇/教宗领导。", pinyin: "Tiānzhǔjiào yóu Fàndìgāng de Jiàohuáng lǐngdǎo.", vi: "Công giáo được lãnh đạo bởi Đức Giáo hoàng tại Vatican." },
  { id: 1823, day: 183, en: "Protestantism emerged during the Reformation in the 16th century.", cn: "新教出现在 16 世纪的宗教改革时期。", pinyin: "Xīnjiào chūxiàn zài shí-liù shìjì de zōngjiào gǎigé shíqī.", vi: "Đạo Tin Lành xuất hiện trong phong trào Cải cách Tôn giáo vào thế kỷ 16." },
  { id: 1824, day: 183, en: "Eastern Orthodox churches feature beautiful icons and rich liturgical traditions.", cn: "东正教教堂以精美的圣像和丰富的礼仪传统为特色。", pinyin: "Dōngzhèngjiào jiàotáng yǐ jīngměi de shèngxiàng hé fēngfù de lǐyí chuántǒng wèi tèsè.", vi: "Các nhà thờ Chính thống giáo Nổi bật với các bức thánh tượng đẹp mắt và nghi lễ giàu truyền thống." },
  { id: 1825, day: 183, en: "Baptists emphasize adult baptism upon personal confession of faith.", cn: "浸信会强调根据个人信仰宣告进行成人浸礼。", pinyin: "Jìnxìnhuì qiángdiào gēnjù gèrén xìnyǎng xuāngào jìnxíng chéngrén jìnlǐ.", vi: "Giáo hội Báp-tít nhấn mạnh phép rửa cho người trưởng thành dựa trên lời xưng xưng đức tin." },
  { id: 1826, day: 183, en: "Anglicanism shares elements of both Catholic liturgy and Protestant theology.", cn: "圣公宗兼具天主教礼仪与新教神学的元素。", pinyin: "Shènggōngzōng jiān jù Tiānzhǔjiào lǐyí yǔ Xīnjiào shénxué de yuánsù.", vi: "Anh quốc giáo (Anglicanism) kết hợp các yếu tố nghi lễ Công giáo và thần học Tin Lành." },
  { id: 1827, day: 183, en: "Methodists place strong focus on social service and personal holiness.", cn: "卫理公会高度重视社会服务与个人圣洁。", pinyin: "Wèilǐgōnghuì gāodù zhòngshì shèhuì fúwù yǔ gèrén shèngjié.", vi: "Giáo hội Giám Lý chú trọng vào công tác xã hội và sự thánh sạch cá nhân." },
  { id: 1828, day: 183, en: "Pentecostal churches emphasize the gifts of the Holy Spirit.", cn: "五旬节派教会强调圣灵的恩赐。", pinyin: "Wǔxúnjiépài jiàohuì qiángdiào Shènglíng de ēncì.", vi: "Giáo hội Ngũ Tuần nhấn mạnh vào các ân tứ của Đức Thánh Linh." },
  { id: 1829, day: 183, en: "Despite stylistic differences, all Christian denominations share core beliefs in Christ.", cn: "尽管形式不同，所有基督教派在对基督的信仰上是一致的。", pinyin: "jǐnguǎn xíngshì bùtóng, suǒyǒu Jīdūjiàopài zài duì Jīdū de xìnyǎng shàng shì yízhì de.", vi: "Dù phong cách khác nhau, tất cả các giáo phái Cơ Đốc đều chung đức tin cốt lõi nơi Chúa Giê-su." },
  { id: 1830, day: 183, en: "Ecumenical dialogue aims to promote unity among different churches.", cn: "普世教会对话旨在促进不同教会之间的团结。", pinyin: "Pǔshì jiàohuì duìhuà zhǐzài cùjìn bùtóng jiàohuì zhījiān de tuánjié.", vi: "Đối thoại liên giáo phái nhằm thúc đẩy sự hợp nhất giữa các nhà thờ khác nhau." }
);

// Ngày 184: Nghi lễ & Tương tác tại Nhà thờ (Church Services & Sacraments)
LESSON_DATA.push(
  { id: 1831, day: 184, en: "Baptism symbolizes spiritual rebirth and purification from sin.", cn: "洗礼象征着属灵的重生与罪恶的洗涤。", pinyin: "xǐlǐ xiàngzhēng zhe shǔlíng de chóngshēng yǔ zuì'è de xǐdí.", vi: "Phép rửa (Báp-tem) tượng trưng cho sự tái sinh tâm linh và gột rửa tội lỗi." },
  { id: 1832, day: 184, en: "The Holy Communion commemorates the Last Supper of Jesus.", cn: "圣餐礼是为了纪念耶稣的最后的晚餐。", pinyin: "shèngcānlǐ shì wèi le jìniàn Yēsū de Zuìhòu de Wǎncān.", vi: "Tiệc Thánh (Thánh Thể) là nghi thức tưởng niệm Bữa Ăn Tối Cuối Cùng của Chúa Giê-su." },
  { id: 1833, day: 184, en: "The pastor delivered an inspiring sermon this morning.", cn: "牧师今天早上发表了一篇鼓舞人心的讲道。", pinyin: "mùshī jīntiān zǎoshang fābiǎo le yì piān gǔwǔ rénxīn de jiǎngdào.", vi: "Mục sư / Linh mục đã trình bày một bài giảng đầy cảm hứng sáng nay." },
  { id: 1834, day: 184, en: "The choir sang beautiful hymns during the worship service.", cn: "诗班在崇拜仪式中演唱了优美的赞美诗。", pinyin: "shībān zài chóngbài yíshì zhōng yǎnchàng le yōuměi de zànměishī.", vi: "Ca đoàn đã hát những bài thánh ca tuyệt đẹp trong buổi nhóm lễ." },
  { id: 1835, day: 184, en: "Confession allows believers to ask God for forgiveness of sins.", cn: "告解/告白让信徒向上帝祈求罪过得赦免。", pinyin: "gàojiě ràng xìntú xiàng Shàngdì qíqiú zuìguò dé shèmiǎn.", vi: "Xưng tội cho phép tín hữu cầu xin Chúa thứ lỗi cho các sai phạm." },
  { id: 1836, day: 184, en: "Voluntary tithing helps support local church ministries.", cn: "自愿的什一奉献有助于支持当地教会的各项事工。", pinyin: "zìyuàn de shí-yī fèngxiàn yǒu zhù yú zhīchí dāngdì jiàohuì de gè xiàng shìgōng.", vi: "Dâng phần mười tự nguyện giúp hỗ trợ các hoạt động mục vụ của nhà thờ địa phương." },
  { id: 1837, day: 184, en: "Shall we sit in the front pew or near the aisle?", cn: "我们要坐在前排的长椅上还是靠走道？", pinyin: "wǒmen yào zuò zài qiánpái de chángyǐ shàng háishi kào zǒudào?", vi: "Chúng ta sẽ ngồi ở dãy ghế dài phía trước hay sát lối đi?" },
  { id: 1838, day: 184, en: "The priest blessed the congregation at the end of Mass.", cn: "神父在弥撒结束时降福给会众。", pinyin: "shénfu zài mísā jiéshù shí jiàngfú gěi huìzhòng.", vi: "Linh mục ban phép lành cho cộng đoàn vào cuối buổi lễ Misa." },
  { id: 1839, day: 184, en: "Confirmation is a commitment sacrament in many traditions.", cn: "坚振礼在许多传统中是表达信仰重申的圣事。", pinyin: "jiānzhènlǐ zài xǔduō chuántǒng zhōng shì biǎodá xìnyǎng chóngshēn de shèngshì.", vi: "Lễ Thêm Sức / Kiên Tín là bí tích cam kết trong nhiều truyền thống." },
  { id: 1840, day: 184, en: "Let us bow our heads in silent prayer.", cn: "让我们低头静默祷告。", pinyin: "ràng wǒmen dītóu jìngmò dǎogào.", vi: "Chúng ta hãy cúi đầu cầu nguyện trong thinh lặng." }
);

// Ngày 185: Ngày lễ & Mùa Phụng vụ lớn (Holidays & Liturgical Seasons)
LESSON_DATA.push(
  { id: 1841, day: 185, en: "Christmas celebrates the birth of Jesus Christ in Bethlehem.", cn: "圣诞节庆祝耶稣基督在伯利恒的降生。", pinyin: "Shèngdànjié qìngzhù Yēsū Jīdū zài Bólìhéng de jiàngshēng.", vi: "Giáng sinh kỷ niệm sự ra đời của Chúa Giê-su tại Bê-lem." },
  { id: 1842, day: 185, en: "Easter marks the resurrection of Jesus three days after his crucifixion.", cn: "复活节纪念耶稣被钉十字架三天后的复活。", pinyin: "Fùhuójié jìniàn Yēsū bèi dìng shízìjià sān tiān hòu de fùhuó.", vi: "Lễ Phục sinh đánh dấu sự sống lại của Chúa Giê-su ba ngày sau khi Ngài chịu đóng đinh." },
  { id: 1843, day: 185, en: "Advent is the preparation period leading up to Christmas.", cn: "降临节是迎接圣诞节到来前的准备时期。", pinyin: "Jiànglínjié shì yíngjiē Shèngdànjié dàolái qián de zhǔnbèi shíqī.", vi: "Mùa Vọng là thời kỳ chuẩn bị tâm hồn hướng tới Lễ Giáng Sinh." },
  { id: 1844, day: 185, en: "Lent is a 40-day season of fasting, repentance, and reflection.", cn: "大斋期/四旬期是为期 40 天的禁食、悔改与反省时期。", pinyin: "Dàzhāiqī shì wéi qī sìshí tiān de jìnshí, huǐgǎi yǔ fǎnxǐng shíqī.", vi: "Mùa Chay là thời gian 40 ngày ăn chay, sám hối và suy ngẫm." },
  { id: 1845, day: 185, en: "Good Friday commemorates the suffering and crucifixion of Christ.", cn: "耶稣受难日纪念基督的受难与被钉受死。", pinyin: "Yēsū Shòunànrì jìniàn Jīdū de shòunàn yǔ bèi dìng shòusǐ.", vi: "Thứ Sáu Tuần Thánh tưởng niệm sự thương khó và chịu đóng đinh của Chúa." },
  { id: 1846, day: 185, en: "Pentecost celebrates the descent of the Holy Spirit upon the disciples.", cn: "五旬节庆祝圣灵降临在门徒身上。", pinyin: "Wǔxúnjié qìngzhù Shènglíng jiànglín zài méntú shēnshàng.", vi: "Lễ Hiện Xuống (Lễ Ngũ Tuần) kỷ niệm Đức Thánh Linh hiện xuống trên các môn đồ." },
  { id: 1847, day: 185, en: "Families gather together for traditional Christmas Eve dinner.", cn: "家人在圣诞平安夜聚在一起享用传统晚餐。", pinyin: "jiārén zài Shèngdàn Píng'ān Yè jù zài yìqǐ xiǎngyòng chuántǒng wǎncān.", vi: "Các gia đình sum họp bên nhau trong bữa tối Đêm Giao Thừa Giáng Sinh (Đêm Pông-an)." },
  { id: 1848, day: 185, en: "Ash Wednesday marks the official beginning of the Lenten season.", cn: "圣灰星期三标志着四旬期/大斋期的正式开始。", pinyin: "Shènghuī Xīngqīsān biāozhì zhe Sìxúnqī de zhèngshì kāishǐ.", vi: "Thứ Tư Lễ Tro đánh dấu mốc khởi đầu chính thức cho Mùa Chay." },
  { id: 1849, day: 185, en: "Epiphany celebrates the visit of the Magi to the baby Jesus.", cn: "主显节/主显日庆祝三博士朝拜降生的婴孩耶稣。", pinyin: "Zhǔxiǎnjié qìngzhù Sān Bóshì cháobài jiàngshēng de yīnghái Yēsū.", vi: "Lễ Hiển Linh mừng sự kiện Ba Nhà Đạo Sĩ đến chiêm bái Chúa Hài Đồng." },
  { id: 1850, day: 185, en: "Merry Christmas and Happy New Year to you and your family!", cn: "祝你和你家人圣诞快乐，新年吉庆！", pinyin: "zhù nǐ hé nǐ jiārén Shèngdàn kuàilè, xīnnián jíqìng!", vi: "Chúc bạn và gia đình một mùa Giáng Sinh an lành và Năm Mới hạnh phúc!" }
);

// Ngày 186: Kiến trúc Nhà thờ & Biểu tượng (Church Architecture & Symbols)
LESSON_DATA.push(
  { id: 1851, day: 186, en: "The cross is the universal symbol of Christianity.", cn: "十字架是基督教通用的标志象征。", pinyin: "shízìjià shì Jīdūjiào tōngyòng de biāozhì xiàngzhēng.", vi: "Thánh giá là biểu tượng phổ quát của Cơ Đốc giáo." },
  { id: 1852, day: 186, en: "Cathedrals are large and historic Christian churches.", cn: "主教座堂/大教堂是大型且历史悠久的基督教教堂。", pinyin: "zhǔjiào zuòtáng shì dàxíng qiě lìshǐ yōujiǔ de Jīdūjiào jiàotáng.", vi: "Nhà thờ Chính tòa là những công trình nhà thờ lớn và cổ kính." },
  { id: 1853, day: 186, en: "Stained glass windows depict scenes from the Holy Scriptures.", cn: "彩色玻璃窗描绘了来自圣经的故事场景。", pinyin: "cǎisè bōli chuāng miáohuì le lái zì Shèngjīng de gùshi chǎngxǐng.", vi: "Các ô cửa kính màu diễn tả các phân đoạn truyền thuyết trong Kinh Thánh." },
  { id: 1854, day: 186, en: "The altar is located at the center front of the sanctuary.", cn: "圣坛位于圣殿前方的正中央。", pinyin: "shèngtán wèi yú shèngdiàn qiánfāng de zhèng zhōngyāng.", vi: "Bàn thờ (Altar) nằm ở vị trí trung tâm phía trước thánh đường." },
  { id: 1855, day: 186, en: "Church bells ring to call worshippers to prayer.", cn: "教堂钟声响起，召集信徒前来祷告。", pinyin: "jiàotáng zhōngshēng xiǎngqǐ, zhàojí xìntú qiánlái dǎogào.", vi: "Tiếng chuông nhà thờ vang lên để kêu gọi người tín hữu đến cầu nguyện." },
  { id: 1856, day: 186, en: "The dove represents peace and the Holy Spirit in Christian art.", cn: "在基督教艺术中，鸽子代表和平与圣灵。", pinyin: "zài Jīdūjiào yìshù zhōng, gēzi dàibiǎo hépíng yǔ Shènglíng.", vi: "Hình ảnh chim câu đại diện cho hòa bình và Đức Thánh Linh trong nghệ thuật Cơ Đốc." },
  { id: 1857, day: 186, en: "Gothic style architecture features high pointed arches and vaults.", cn: "哥特式建筑以高耸的尖拱和拱顶为特征。", pinyin: "Gētè shì jiànzhù yǐ gāosǒng de jiāngǒng hé gǒngdǐng wèi tèzhēng.", vi: "Kiến trúc phong cách Gothic nổi bật với các mái vòm vút cao và vòm nhọn." },
  { id: 1858, day: 186, en: "The baptismal font holds water used for baptismal rites.", cn: "洗礼池盛放着用于洗礼仪式的圣水。", pinyin: "xǐlǐchí chéngfàng zhe yòng yú xǐlǐ yíshì de shèngshuǐ.", vi: "Giếng rửa tội / Bồn rửa tội dùng để chứa nước cử hành phép rửa." },
  { id: 1859, day: 186, en: "Candles are lit to symbolize the light of Christ in darkness.", cn: "点燃蜡烛象征着基督在黑暗中的光明。", pinyin: "diǎnrán làzhú xiàngzhēng zhe Jīdū zài hēi'àn zhōng de guāngmíng.", vi: "Nến được thắp sáng tượng trưng cho ánh sáng của Chúa trong đêm tối." },
  { id: 1860, day: 186, en: "The pipe organ creates magnificent music for traditional hymns.", cn: "管风琴为传统赞美诗伴奏，奏出宏伟的乐音。", pinyin: "guǎnfēngqín wèi chuántǒng zànměishī bànzòu, zòu chū hóngwěi de yuèyīn.", vi: "Đàn đại phong cầm tạo ra âm thanh tráng lệ cho các bản thánh ca cổ điển." }
);

// Ngày 187: Lời Cầu nguyện & Lòng Nhân ái (Prayer & Christian Charity)
LESSON_DATA.push(
  { id: 1861, day: 187, en: "We offer prayers for the sick, the poor, and those in distress.", cn: "我们为病人、穷人以及处于困境中的人祈祷。", pinyin: "wǒmen wèi bìngrén, qióngrén yǐjí chǔyú kùnjìng zhōng de rén qídǎo.", vi: "Chúng ta dâng lời cầu nguyện cho người ốm đau, người nghèo khổ và người gặp hoạn nạn." },
  { id: 1862, day: 187, en: "Charity work is a core expression of faith in action.", cn: "慈善工作是“活出信仰”的核心体现。", pinyin: "císhàn gōngzuò shì huó chū xìnyǎng de héxīn tǐxiàn.", vi: "Công tác thiện nguyện là biểu hiện cốt lõi của một đức tin có hành động." },
  { id: 1863, day: 187, en: "Let us say grace before eating dinner tonight.", cn: "今晚晚餐前让我们做谢饭祷告。", pinyin: "jīnwǎn wǎncān qián ràng wǒmen zuò xièfàn dǎogào.", vi: "Chúng ta hãy dâng lời tạ ơn trước khi ăn tối đêm nay." },
  { id: 1864, day: 187, en: "Intercessory prayer means praying on behalf of others.", cn: "代祷意为代表他人向上帝祈求。", pinyin: "dàidǎo yì wéi dàibiǎo tārén xiàng Shàngdì qíqiú.", vi: "Cầu thay (Intercessory prayer) nghĩa là cầu nguyện thay cho người khác." },
  { id: 1865, day: 187, en: "Christian missions build schools, hospitals, and shelters worldwide.", cn: "基督教宣教团在世界各地建立学校、医院和避难所。", pinyin: "Jīdūjiào xuānjiàotuán zài shìjiè gèdì jiànlì xuéxiào, yīyuàn hé bìnànsuǒ.", vi: "Các đoàn truyền giáo Cơ Đốc xây dựng trường học, bệnh viện và mái ấm trên toàn cầu." },
  { id: 1866, day: 187, en: "Amen is spoken at the end of a prayer to mean 'so be it'.", cn: "在祷告结尾处说“阿们”，意为“实至名归/诚心所愿”。", pinyin: "zài dǎogào jiéwěi chù shuō Āmen, yì wéi chéngxīn-suǒyuàn.", vi: "Từ 'A-men' được thốt lên vào cuối bài cầu nguyện mang ý nghĩa 'nguyện như vậy'." },
  { id: 1867, day: 187, en: "Volunteering at food banks puts neighborly love into practice.", cn: "在食品救济站做义工是践行“爱邻如己”的体现。", pinyin: "zài shípǐn jiùjìzhàn zuò yìgōng shì jiànxíng àilín-rújǐ de tǐxiàn.", vi: "Làm tình nguyện tại bếp ăn từ thiện là đưa tình yêu thương xóm giềng vào thực tế." },
  { id: 1868, day: 187, en: "Daily devotion time includes Bible reading and personal reflection.", cn: "每日灵修包括阅读圣经和个人反思/默想。", pinyin: "měirì língxiū bāokuò yuèdú Shèngjīng hé gèrén fǎnxǐng.", vi: "Giờ tĩnh nguyện hàng ngày bao gồm đọc Kinh Thánh và tự suy ngẫm." },
  { id: 1869, day: 187, en: "I will keep your family in my prayers during this difficult time.", cn: "在这艰难时期，我会一直为你的家人祈祷。", pinyin: "zài zhè jiānnán shíqī, wǒ huì yìzhí wèi nǐ de jiārén qídǎo.", vi: "Tôi sẽ luôn nhớ và cầu nguyện cho gia đình bạn trong thời điểm khó khăn này." },
  { id: 1870, day: 187, en: "Blessed are the peacemakers, for they shall be called children of God.", cn: "使人和平的人有福了，因为他们必称为上帝的儿子。", pinyin: "shǐ rén hépíng de rén yǒu fú le, yīnwèi tāmen bì chēngwéi Shàngdì de érzi.", vi: "Phước cho những kẻ làm cho người hòa thuận, vì sẽ được gọi là con Đức Chúa Trời." }
);

// Ngày 188: Nhân vật Lịch sử & Thần học Cơ Đốc (Historical Figures & Theology)
LESSON_DATA.push(
  { id: 1871, day: 188, en: "Saint Paul wrote many epistles in the New Testament.", cn: "使徒保罗撰写了新约中的许多书信。", pinyin: "shǐtú Bǎoluó zhuànxiě le Xīnyuē zhōng de xǔduō shūxìn.", vi: "Sứ đồ Phao-lô đã viết nhiều thư tín trong Tân Ước." },
  { id: 1872, day: 188, en: "Martin Luther sparked the Protestant Reformation in 1517.", cn: "马丁·路德于 1517 年引爆了宗教改革运动。", pinyin: "Mǎdīng Lùdé yú yī-wǔ-yī-qī nián yǐnbào le zōngjiào gǎigé yùndòng.", vi: "Mác-tinh Lu-thơ đã khởi xướng cuộc Cải cách Đạo Tin Lành vào năm 1517." },
  { id: 1873, day: 188, en: "Saint Augustine is one of the most influential theologians in church history.", cn: "圣奥古斯丁是教会历史上最有影响力的神学家之一。", pinyin: "Shèng Àogǔsīdīng shì jiàohuì lìshǐ shàng zuì yǒu yǐngxiǎnglì de shénxuéjiā zhī yī.", vi: "Thánh Âu-gút-tinh (Augustine) là một trong những nhà thần học có ảnh hưởng nhất lịch sử giáo hội." },
  { id: 1874, day: 188, en: "The Nicene Creed outlines core orthodox Christian beliefs.", cn: "《尼西亚信经》概括了核心的正统基督教信仰。", pinyin: "Níxīyà Xìnjīng gàikuò le héxīn de zhèngtǒng Jīdūjiào xìnyǎng.", vi: "Bài Tín Điều Ni-xê (Nicene Creed) vạch ra những điều khoản đức tin Cơ Đốc chính thống." },
  { id: 1875, day: 188, en: "Mother Teresa dedicated her life to helping the poorest of the poor.", cn: "德兰修女/特蕾莎修女一生致力于帮助穷人中的穷人。", pinyin: "Tèlěishā Xiūnǚ yìshēng zhìlì yú bāngzhù qióngrén zhōng de qióngrén.", vi: "Mẹ Tê-rê-sa đã cống hiến cuộc đời mình để giúp đỡ những người nghèo khổ nhất." },
  { id: 1876, day: 188, en: "Monasticism preserved ancient texts and knowledge during the Middle Ages.", cn: "修道院制度在中世纪保存了古代典籍与知识。", pinyin: "xiūdàoyuàn zhìdù zài Zhōngshìjì bǎocún le gǔdài diǎnjí yǔ zhīshi.", vi: "Chế độ tu viện đã gìn giữ các bản thảo và tri thức cổ đại trong thời Trung Cổ." },
  { id: 1877, day: 188, en: "The Apostles were the twelve chief disciples chosen by Jesus.", cn: "使徒是耶稣选拔的十二位核心门徒。", pinyin: "shǐtú shì Yēsū xuǎnbá de shí-èr wèi héxīn méntú.", vi: "Các Sứ đồ (Apostles) là 12 môn đệ nòng cốt do Chúa Giê-su lựa chọn." },
  { id: 1878, day: 188, en: "The concept of original sin originates from the fall of man in Genesis.", cn: "原罪的概念源于《创世记》中人类的堕落。", pinyin: "yuánzuì de gàiniàn yuán yú Chuàngshìjì zhōng rénlèi de duòluò.", vi: "Khái niệm 'tội nguyên thủy' (tội tổ tông) bắt nguồn từ sự sa ngã của loài người trong Sách Sáng Thế." },
  { id: 1879, day: 188, en: "Christian ethics greatly influenced modern concepts of human rights.", cn: "基督教伦理极大地影响了现代人权观念。", pinyin: "Jīdūjiào lúnlǐ jídà de yǐngxiǎng le xiàndài rénquán guānniàn.", vi: "Đạo đức Cơ Đốc giáo có ảnh hưởng sâu sắc tới các khái niệm nhân quyền hiện đại." },
  { id: 1880, day: 188, en: "The Vatican City is the administrative center of the Roman Catholic Church.", cn: "梵蒂冈城是天主教会的行政中心。", pinyin: "Fàndìgāng Chéng shì Tiānzhǔjiàohuì de xíngzhèng zhōngxīn.", vi: "Thành quốc Vatican là trung tâm hành chính của Giáo hội Công giáo Rô-ma." }
);

// Ngày 189: Âm nhạc & Văn học Cơ Đốc (Christian Music & Literature)
LESSON_DATA.push(
  { id: 1881, day: 189, en: "'Amazing Grace' is one of the most famous Christian hymns in history.", cn: "《奇异恩典》是历史上最著名的基督教赞美诗之一。", pinyin: "Qíyì Ēndiǎn shì lìshǐ shàng zuì zhùmíng de Jīdūjiào zànměishī zhī yī.", vi: "'Amazing Grace' (Kỳ Diệu Ân Điển) là một trong những bài thánh ca nổi tiếng nhất lịch sử." },
  { id: 1882, day: 189, en: "The choir sings in four-part harmony during Sunday Mass.", cn: "合唱团在周日弥撒期间进行四声部合唱。", pinyin: "héchàngtuán zài zhōurì mísā qījiān jìnxíng sì shēngbù héchàng.", vi: "Ca đoàn hát hợp xướng bốn bè trong Thánh lễ Chủ nhật." },
  { id: 1883, day: 189, en: "Contemporary Christian Music (CCM) combines modern genres with worship lyrics.", cn: "当代基督教音乐（CCM）将现代曲风与崇拜歌词结合。", pinyin: "dāngdài Jīdūjiào yīnyuè jiāng xiàndài qūfēng yǔ chóngbài gēcí jiéhé.", vi: "Nhạc Cơ Đốc Hiện Đại (CCM) kết hợp các dòng nhạc trẻ trung với lời ca ngợi Chúa." },
  { id: 1884, day: 189, en: "'The Pilgrim's Progress' is a classic allegory of the Christian journey.", cn: "《天路历程》是基督教天路历程的经典寓言著作。", pinyin: "Tiānlù Lìchéng shì Jīdūjiào tiānlù lìchéng de jīngdiǎn yùyán zhùzuò.", vi: "'Thiên Lộ Lịch Trình' (The Pilgrim's Progress) là tác phẩm ẩn dụ kinh điển về hành trình Cơ Đốc nhân." },
  { id: 1885, day: 189, en: "Gospel music rooted in African American traditions is filled with soul and energy.", cn: "源于非裔美国人传统的福音音乐充满灵魂与活力。", pinyin: "fúyīn yīnyuè yuán yú Fēiyì Měiguórén chuántǒng, chōngmǎn línghún yǔ huólì.", vi: "Nhạc Phúc Âm (Gospel) xuất phát từ truyền thống người Mỹ gốc Phi đầy cảm xúc và năng lượng." },
  { id: 1886, day: 189, en: "CS Lewis wrote popular Christian apologetics books like 'Mere Christianity'.", cn: "C.S.路易斯撰写了诸如《纯粹的基督教》等著名护教学著作。", pinyin: "C.S. Lùyìsī zhuànxiě le zhūrú Chúncuì de Jīdūjiào děng zhùmíng hùjiàoxué zhùzuò.", vi: "C.S. Lewis đã viết các cuốn sách biện giáo Cơ Đốc nổi tiếng như 'Mere Christianity'." },
  { id: 1887, day: 189, en: "Handel's Messiah is a famous oratorio performed during Christmas and Easter.", cn: "韩德尔的《弥赛亚》是在圣诞节和复活节演奏的著名清唱剧。", pinyin: "Hándé'ěr de Mísàiyà shì zài Shèngdànjié hé Fùhuójié yǎnzòu de zhùmíng qīngchàngjù.", vi: "Tác phẩm 'Messiah' của Handel là bản trường ca giao hưởng nổi tiếng thường được biểu diễn vào dịp Giáng sinh và Phục sinh." },
  { id: 1888, day: 189, en: "Hymnals contain collections of traditional worship songs and notes.", cn: "赞美诗集包含传统崇拜歌曲与乐谱集锦。", pinyin: "zànměishījí bāohán chuántǒng chóngbài gēqǔ yǔ yuèpǔ jíjǐn.", vi: "Sách Thánh ca chứa đựng bộ sưu tập các bài hát ngợi khen và nốt nhạc truyền thống." },
  { id: 1889, day: 189, en: "Liturgical chants create a solemn and meditative atmosphere.", cn: "礼仪圣歌营造出庄严而沉思冥想的氛围。", pinyin: "lǐyí shènggē yíngzào chū zhuāngyán ér chénsī míngxiǎng de fēnwéi.", vi: "Những điệu xướng ca phụng vụ tạo nên một không khí trang nghiêm và trầm lắng." },
  { id: 1890, day: 189, en: "Religious art in museums reflects centuries of faith and culture.", cn: "博物馆中的宗教艺术品反映了几个世纪的信仰与文化。", pinyin: "bówùguǎn zhōng de zōngjiào yìshùpǐn fǎnyìng le jǐ gè shìjì de xìnyǎng yǔ wénhuà.", vi: "Nghệ thuật tôn giáo trong các bảo tàng phản ánh hàng thế kỷ của đức tin và văn hóa." }
);

// Ngày 190: Tôn trọng & Tự do Tôn giáo (Religious Tolerance & Interfaith Respect)
LESSON_DATA.push(
  { id: 1891, day: 190, en: "Freedom of religion is a fundamental human right.", cn: "宗教信仰自由是一项基本人权。", pinyin: "zōngjiào xìnyǎng zìyóu shì yí xiàng jīběn rénquán.", vi: "Tự do tôn giáo là một trong những quyền cơ bản của con người." },
  { id: 1892, day: 190, en: "Respecting diverse faith traditions promotes social harmony.", cn: "尊重不同的信仰传统能促进社会和谐。", pinyin: "zūnzhòng bùtóng de xìnyǎng chuántǒng néng cùjìn shèhuì héxié.", vi: "Tôn trọng các truyền thống đức tin khác nhau thúc đẩy sự hòa hợp xã hội." },
  { id: 1893, day: 190, en: "Interfaith dialogue fosters mutual understanding and peace.", cn: "跨信仰/跨宗教对话有助于增进相互理解与和平。", pinyin: "kuà zōngjiào duìhuà yǒu zhù yú zēngjìn xiānghù lǐjiě yǔ hépíng.", vi: "Đối thoại liên tôn giáo giúp thúc đẩy sự hiểu biết lẫn nhau và hòa bình." },
  { id: 1894, day: 190, en: "People of different faiths can work together for humanitarian goals.", cn: "不同信仰的人们可以为人道主义目标携手合作。", pinyin: "bùtóng xìnyǎng de rénmen kěyǐ wèi réndào zhǔyì mùbiāo xiéshǒu hézuò.", vi: "Những người thuộc các tín ngưỡng khác nhau có thể cùng hợp tác vì mục tiêu nhân đạo." },
  { id: 1895, day: 190, en: "We should treat everyone with kindness regardless of their religious beliefs.", cn: "无论人们的宗教信仰如何，我们都应该善待每个人。", pinyin: "wúlùn rénmen de zōngjiào xìnyǎng rúhé, wǒmen dōu yīnggāi shàndài měi gèrén.", vi: "Chúng ta nên đối xử tử tế với tất cả mọi người bất kể niềm tin tôn giáo của họ là gì." },
  { id: 1896, day: 190, en: "Love your neighbor as yourself is a universal value across cultures.", cn: "“爱人如己”是跨越文化的普世价值。", pinyin: "àirén-rújǐ shì kuàyuè wénhuà de pǔshì jiàzhí.", vi: "'Yêu thương người khác như chính mình' là giá trị phổ quát xuyên suốt các nền văn hóa." },
  { id: 1897, day: 190, en: "Open-minded discussions help clear up religious misconceptions.", cn: "包容开放的讨论有助于消除针对宗教的误解。", pinyin: "bāoróng kāifàng de tǎolùn yǒu zhù yú xiāochú zhēnduì zōngjiào de wùjiě.", vi: "Những thảo luận cởi mở giúp xóa bỏ những hiểu lầm về tôn giáo." },
  { id: 1898, day: 190, en: "May peace and love prevail in all our communities.", cn: "愿和平与爱在我们所有的社区里常驻。", pinyin: "yuàn hépíng yǔ ài zài wǒmen suǒyǒu de shèqū lǐ chángzhù.", vi: "Nguyện xin hòa bình và tình yêu thương luôn tràn ngập trong mọi cộng đồng của chúng ta." },
  { id: 1899, day: 190, en: "Learning about world religions broadens our cultural perspectives.", cn: "了解世界上的各大宗教能拓宽我们的文化视野。", pinyin: "liǎojiě shìjiè shàng de gè dà zōngjiào néng tuòkuān wǒmen de wénhuà shìyě.", vi: "Tìm hiểu về các tôn giáo trên thế giới giúp mở rộng tầm nhìn văn hóa của chúng ta." },
  { id: 1900, day: 190, en: "Congratulations on completing this dedicated religious communication module!", cn: "恭喜您圆满完成这个专题宗教沟通学习模块！", pinyin: "gōngxǐ nín yuánmǎn wánchéng zhè gè zhuāntí zōngjiào gōutōng xuéxí mókuài!", vi: "Chúc mừng bạn đã hoàn thành xuất sắc chuyên đề giao tiếp về chủ đề Tôn giáo này!" }
);

// ==========================================
// CHẶNG 5: MỞ RỘNG GIAO TIẾP CUỘC SỐNG & VĂN HÓA (ĐỜI SỐNG THỰC TẾ)
// DỮ LIỆU CÂU HỘI THOẠI CHI TIẾT: NGÀY 191 - NGÀY 366 (1,760 CÂU)
// ==========================================

// --- TUẦN 28: SỨC KHỎE TINH THẦN & QUẢN LÝ CẢM XÚC (NGÀY 191 - 197) ---
LESSON_DATA.push(
  { id: 1901, day: 191, en: "Taking a deep breath helps me calm down when I feel overwhelmed.", cn: "深呼吸能帮内我在感到吃力时平静下来。", pinyin: "shēnhūxī néng bāng wǒ zài gǎndào chīlì shí píngjìng xiàlái.", vi: "Hít một hơi thật sâu giúp tôi bình tĩnh lại khi cảm thấy quá tải." },
  { id: 1902, day: 191, en: "It is okay to express your emotions instead of bottling them up.", cn: "表达你的情绪是没关系的，不要把它们憋在心里。", pinyin: "biǎodá nǐ de qíngxù shì méi guānxi de, búyào bǎ tāmen biē zài xīn lǐ.", vi: "Bộc lộ cảm xúc của bạn là điều bình thường, đừng dồn nén chúng trong lòng." },
  { id: 1903, day: 191, en: "Mindfulness meditation improves focus and reduces anxiety.", cn: "正念冥想能提高专注力并减少焦虑。", pinyin: "zhèngniàn míngxiǎng néng tígāo zhuānzhùlì bìng jiǎnshǎo jiāolǜ.", vi: "Thiền chánh niệm giúp tăng cường sự tập trung và giảm bớt lo âu." },
  { id: 1904, day: 191, en: "Setting healthy boundaries is essential for emotional well-being.", cn: "划定健康的界限对于心理健康至关重要。", pinyin: "huàdìng jiànkāng de jièxiàn duìyú xīnlǐ jiànkāng zhìguān zhòngyào.", vi: "Thiết lập ranh giới lành mạnh là điều thiết yếu cho sức khỏe tinh thần." },
  { id: 1905, day: 191, en: "Do not hesitate to seek professional counseling if you need help.", cn: "如果你需要帮助，请毫不犹豫地寻求专业心理咨询。", pinyin: "rúguǒ nǐ xūyào bāngzhù, qǐng háobù yóuyù de xúnqiú zhuānyè xīnlǐ zīxún.", vi: "Đừng ngần ngại tìm kiếm sự tư vấn chuyên nghiệp nếu bạn cần trợ giúp." },
  { id: 1906, day: 191, en: "Burnout occurs when stress continues without sufficient rest.", cn: "当压力持续存在而缺乏足够休息时，就会出现倦怠感。", pinyin: "dāng yālì chíxù cúnzài ér quēfá zúgòu xiūxi shí, jiù huì chūxiàn juàndàigǎn.", vi: "Sự kiệt sức xảy ra khi áp lực kéo dài mà không có đủ thời gian nghỉ ngơi." },
  { id: 1907, day: 191, en: "Journaling thoughts helps process complex feelings clearly.", cn: "写日记记录想法有助于清晰梳理复杂的情感。", pinyin: "xiě rìjì jìlù xiǎngfǎ yǒu zhù yú qīngxī shūlǐ fùzá de qínggǎn.", vi: "Viết nhật ký suy nghĩ giúp xử lý các cảm xúc phức tạp một cách rõ ràng." },
  { id: 1908, day: 191, en: "Self-compassion means being gentle with yourself during tough times.", cn: "自我关怀意味着在艰难时期对自己温和一些。", pinyin: "zìwǒ guānhuái yìwèi zhe zài jiānnán shíqī duì zìjǐ wēnhé yìxiē.", vi: "Thấu cảm với bản thân có nghĩa là dịu dàng với chính mình trong những lúc khó khăn." },
  { id: 1909, day: 191, en: "Adequate sleep plays a key role in emotional balance.", cn: "充足的睡眠在情绪平衡中扮演着关键角色。", pinyin: "chōngzú de shuìmián zài qíngxù pínghéng zhōng bànyǎn zhe guānjiàn juésè.", vi: "Giấc ngủ đầy đủ đóng vai trò then chốt trong việc cân bằng cảm xúc." },
  { id: 1910, day: 191, en: "Remember that your mental health is as important as your physical health.", cn: "请记住，你的心理健康与生理健康同样重要。", pinyin: "qǐng jìzhù, nǐ de xīnlǐ jiànkāng yǔ shēnglǐ jiànkāng tóngyàng zhòngyào.", vi: "Hãy nhớ rằng sức khỏe tinh thần của bạn cũng quan trọng như sức khỏe thể chất." },
);

  // Ngày 192 đến Ngày 197: Chăm sóc bản thân, Đối phó áp lực, Tư duy tích cực...
LESSON_DATA.push(
  { id: 1911, day: 192, en: "Maintaining a work-life balance keeps you energized.", cn: "保持工作与生活的平衡能让你保持活力。", pinyin: "bǎochí gōngzuò yǔ shēnghuó de pínghéng néng ràng nǐ bǎochí huólì.", vi: "Duy trì sự cân bằng giữa công việc và cuộc sống giúp bạn luôn tràn đầy năng lượng." },
  { id: 1912, day: 192, en: "Regular physical exercise is a natural way to relieve stress.", cn: "定期进行体育锻炼是缓解压力的自然方法。", pinyin: "dìngqī jìnxíng tǐyù duànliàn shì huǎnjiě yālì de zìrán fāngfǎ.", vi: "Tập thể dục thường xuyên là một cách tự nhiên để giảm căng thẳng." },
  { id: 1913, day: 192, en: "Drinking enough water throughout the day boosts brain performance.", cn: "整天喝足够的水可以提高大脑性能。", pinyin: "zhěng tiān hē zúgòu de shuǐ kěyǐ tígāo dànáo xìngnéng.", vi: "Uống đủ nước suốt cả ngày giúp nâng cao hiệu suất hoạt động của não bộ." },
  { id: 1914, day: 192, en: "Eating a balanced diet rich in vegetables powers your immune system.", cn: "饮食均衡且富含蔬菜能增强你的免疫系统。", pinyin: "yǐnshí jūnhéng qiě fùhán shūcài néng zēngqiáng nǐ de miǎnyì xìtǒng.", vi: "Ăn chế độ ăn cân bằng giàu rau củ giúp tăng cường hệ miễn dịch của bạn." },
  { id: 1915, day: 192, en: "Taking short breaks during long work hours prevents fatigue.", cn: "在漫长的工作时间里短暂停顿休息可以防止疲劳。", pinyin: "zài màncháng de gōngzuò shíjiān lǐ duǎntíng xiūxi kěyǐ fángzhǐ píláo.", vi: "Nghỉ giải lao ngắn trong giờ làm việc kéo dài giúp ngăn ngừa mệt mỏi." },
  { id: 1916, day: 192, en: "A digital detox on weekends recharges your mental focus.", cn: "周末进行“数字排毒”可以重新充满你的精神专注力。", pinyin: "zhōumò jìnxíng shùzì páidú kěyǐ chóngxīn chōngmǎn nǐ de jīngshén zhuānzhùlì.", vi: "Cai thiết bị điện tử vào cuối tuần giúp nạp lại khả năng tập trung tinh thần." },
  { id: 1917, day: 192, en: "Listening to calming music lowers blood pressure and anxiety.", cn: "聆听舒缓的音乐可以降低血压和焦虑。", pinyin: "língtīng shūhuǎn de yīnyuè kěyǐ jiàngdī xiěyā hé jiāolǜ.", vi: "Nghe nhạc thư giãn giúp hạ huyết áp và giảm bớt lo lắng." },
  { id: 1918, day: 192, en: "Spending time in nature promotes inner peace and relaxation.", cn: "在大自然中度过时光能促进内心的平静与放松。", pinyin: "zài dàzìrán zhōng dùguò shíguāng néng cùjìn nèixīn de píngjìng yǔ fàngsōng.", vi: "Dành thời gian hòa mình vào thiên nhiên mang lại sự bình yên và thư thái." },
  { id: 1919, day: 192, en: "Laughter triggers the release of endorphins, making you feel happier.", cn: "开怀大笑能触发内啡肽的释放，让你感到更快乐。", pinyin: "kāihuái dàxiào néng chūfā nèifēitài de shìfàng, ràng nǐ gǎndào gèng kuàilè.", vi: "Tiếng cười thúc đẩy giải phóng endorphin, giúp bạn cảm thấy hạnh phúc hơn." },
  { id: 1920, day: 192, en: "Prioritizing rest is not laziness, it is self-care.", cn: "优先考虑休息不是懒惰，而是自我关爱。", pinyin: "yōuxiān kǎolǜ xiūxi búshì lǎnduò, érshì zìwǒ guān'ài.", vi: "Uu tiên nghỉ ngơi không phải là lười biếng, đó là sự tự chăm sóc bản thân." }
);

// --- TUẦN 29 - 35: KỸ NĂNG XÃ HỘI & GIAO TIẾP VĂN HÓA (NGÀY 198 - 245) ---
LESSON_DATA.push(
  { id: 1981, day: 198, en: "Active listening means focusing entirely on what the speaker says.", cn: "积极倾听意味着完全专注于说话者所说的内容。", pinyin: "jījí qīngtīng yìwèi zhe wánquán zhuānzhù yú shuōhuàzhě suǒ shuō de nèiróng.", vi: "Lắng nghe tích cực nghĩa là tập trung toàn bộ vào những gì người nói đang trình bày." },
  { id: 1982, day: 198, en: "Cultural etiquette differs widely around the world.", cn: "世界各地的文化礼仪差异很大。", pinyin: "shìjiè gèdì de wénhuà lǐyí chāyì hěn dà.", vi: "Nghi thức văn hóa giữa các nơi trên thế giới có sự khác biệt rất lớn." },
  { id: 1983, day: 198, en: "Maintaining eye contact builds trust during conversations.", cn: "在对话中保持眼神交流能建立信任。", pinyin: "zài duìhuà zhōng bǎochí yǎnshén jiāoliú néng jiànlì xìnrèn.", vi: "Duy trì sự giao tiếp bằng mắt giúp xây dựng lòng tin trong cuộc trò chuyện." },
  { id: 1984, day: 198, en: "Empathy allows us to see perspectives other than our own.", cn: "共情能力让我们能够看到自己之外的视角。", pinyin: "gòngqíng nénglì ràng wǒmen nénggòu kàndào zìjǐ zhīwài de shìjiǎo.", vi: "Sự thấu cảm cho phép chúng ta nhìn nhận từ những góc nhìn khác với bản thân." },
  { id: 1985, day: 198, en: "Small talk serves as a bridge to deeper connections.", cn: "闲聊是通往更深层次联系的桥梁。", pinyin: "xiánliáo shì tōng wǎng gèng shēn céngcì liánxì de qiáoliáng.", vi: "Trò chuyện phiếm đóng vai trò như chiếc cầu nối đến những kết nối sâu sắc hơn." },
  { id: 1986, day: 198, en: "Body language conveys powerful non-verbal signals.", cn: "肢体语言传达出强大的非语言信号。", pinyin: "zhītǐ yǔyán chuándá chū qiángdà de fēi yǔyán xìnhào.", vi: "Ngôn ngữ cơ thể truyền tải những tín hiệu phi ngôn ngữ rất mạnh mẽ." },
  { id: 1987, day: 198, en: "Polite refusal requires diplomacy and clear boundaries.", cn: "礼貌的拒绝需要外交技巧和清晰的界限。", pinyin: "lǐmào de jùjué xūyào wàijiāo jìqiǎo hé qīngxī de jièxiàn.", vi: "Lời từ chối lịch sự đòi hỏi sự khéo léo và ranh giới rõ ràng." },
  { id: 1988, day: 198, en: "Constructive feedback should focus on behavior, not personality.", cn: "建设性的反馈应当关注行为，而非个性。", pinyin: "jiànshèxìng de fǎnkuì yīngdāng guānzhù xíngwéi, ér fēi gèxìng.", vi: "Góp ý mang tính xây dựng nên tập trung vào hành vi chứ không phải nhân cách." },
  { id: 1989, day: 198, en: "A warm smile dissolves awkwardness in unfamiliar situations.", cn: "温暖的微笑可以在不熟悉的场合化解尴尬。", pinyin: "wēnnuǎn de wēixiào kěyǐ zài bù shúxī de chǎnghé huàjiě gāngà.", vi: "Nụ cười ấm áp có thể làm tan biến sự gượng gạo trong những tình huống lạ lẫm." },
  { id: 1990, day: 198, en: "Punctuality demonstrates respect for other people's time.", cn: "准时表明了对他人时间的尊重。", pinyin: "zhǔnshí biǎomíng le duì tārén shíjiān de zūnzhòng.", vi: "Đúng giờ thể hiện sự tôn trọng đối với thời gian của người khác." }
);

// --- TUẦN 36 - 45: QUẢN LÝ TÀI CHÍNH CÁ NHÂN & LỐI SỐNG (NGÀY 246 - 315) ---
LESSON_DATA.push(
  { id: 2461, day: 246, en: "Creating a monthly budget prevents unnecessary overspending.", cn: "制定每月预算可以防止不必要的过度消费。", pinyin: "zhìdìng měiyuè yùsuàn kěyǐ fángzhǐ bú bìyào de guòdù xiāofèi.", vi: "Lập ngân sách hàng tháng giúp ngăn ngừa việc chi tiêu quá độ không cần thiết." },
  { id: 2462, day: 246, en: "An emergency fund provides safety during unexpected events.", cn: "应急基金能在发生意外事件时提供安全保障。", pinyin: "yìngjí jījīn néng zài fāshēng yìwài shìjiàn shí tígōng ānquán bǎozhàng.", vi: "Quỹ khẩn cấp mang lại sự an toàn trong các sự cố bất ngờ." },
  { id: 2463, day: 246, en: "Distinguish clearly between your needs and your wants.", cn: "清晰地区分你的“需要”和“想要”。", pinyin: "qīngxī de qūfēn nǐ de xūyào hé xiǎngyào.", vi: "Phân biệt rõ ràng giữa nhu cầu thiết yếu và mong muốn cá nhân." },
  { id: 2464, day: 246, en: "Investing early helps compound interest grow over time.", cn: "提早投资有助于复利随着时间的推移而增长。", pinyin: "tízǎo tóuzī yǒu zhù yú fùlì suí zhe shíjiān de tuīyí ér zēngzhǎng.", vi: "Đầu tư sớm giúp lãi kép tăng trưởng theo thời gian." },
  { id: 2465, day: 246, en: "Tracking daily expenses identifies habits that drain money.", cn: "追踪日常开支可以找出消耗资金的习惯。", pinyin: "zhuīzōng rìcháng kāīzhī kěyǐ zhǎochū xiāohào zījīn de xíguàn.", vi: "Theo dõi chi tiêu hàng ngày giúp nhận diện các thói quen tiêu tốn tiền bạc." },
  { id: 2466, day: 246, en: "Avoiding high-interest credit card debt is financial wisdom.", cn: "避免高利息的高利贷/信用卡债务是理财智慧。", pinyin: "bìmiǎn gāo lìxī de xìnyòngkǎ zhàiwù shì lǐcái zhìhuì.", vi: "Tránh nợ thẻ tín dụng lãi suất cao là trí tuệ trong quản lý tài chính." },
  { id: 2467, day: 246, en: "Minimalism encourages living with intention rather than excess possessions.", cn: "极简主义鼓励有意图地生活，而不是拥有过多的物品。", pinyin: "jíjiǎn zhǔyì gǔlì yǒu yìtú de shēnghuó, ér búshì yǒngyǒu guòduō de wùpǐn.", vi: "Lối sống tối giản khuyến khích sống có ý niệm hơn là sở hữu quá nhiều đồ đạc." },
  { id: 2468, day: 246, en: "Diversifying income sources increases your financial resilience.", cn: "多元化收入来源能提高你的财务韧性。", pinyin: "duōyuánhuà shōurù láiyuán néng tígāo nǐ de cáiwù rèn xìng.", vi: "Đa dạng hóa nguồn thu nhập giúp tăng cường sự vững vàng tài chính của bạn." },
  { id: 2469, day: 246, en: "Reviewing financial goals every quarter keeps you on track.", cn: "每季度审查一次财务目标能让你保持在正确的轨道上。", pinyin: "měi jìdù shěnchá yí cì cáiwù mùbiāo néng ràng nǐ bǎochí zài zhèngquè de guǐdào shàng.", vi: "Xem lại mục tiêu tài chính mỗi quý giúp bạn đi đúng hướng." },
  { id: 2470, day: 246, en: "Financial freedom means having control over your time and choices.", cn: "财务自由意味着掌控自己的时间和选择。", pinyin: "cáiwù zìyóu yìwèi zhe zhǎngkòng zìjǐ de shíjiān hé xuǎnzé.", vi: "Tự do tài chính có nghĩa là làm chủ thời gian và các lựa chọn của bản thân." }
);

// --- TUẦN 46 - 52: TƯƠNG LAI, CÔNG NGHỆ BỀN VỮNG & PHÁT TRIỂN CÁ NHÂN (NGÀY 316 - 366) ---
  // Ngày 316 - 365...
LESSON_DATA.push(
  { id: 3161, day: 316, en: "Lifelong learning ensures adaptability in a rapidly changing world.", cn: "终身学习能确保在快速变化的世界中保持适应力。", pinyin: "zhōngshēn xuéxí néng quèbǎo zài kuàisù biànhuà de shìjiè zhōng bǎochí shìyìnglì.", vi: "Học tập suốt đời đảm bảo khả năng thích nghi trong một thế giới thay đổi nhanh chóng." },
  { id: 3162, day: 316, en: "Artificial intelligence is reshaping the future of work and lifestyle.", cn: "人工智能正在重塑工作和生活方式的未来。", pinyin: "réngōng zhìnéng zhèngzài chóngshù gōngzuò hé shēnghuó fāngshì de wèi lái.", vi: "Trí tuệ nhân tạo đang định hình lại tương lai của công việc và lối sống." },
  { id: 3163, day: 316, en: "Sustainable living habits reduce environmental footprint.", cn: "可持续的生活习惯可以减少环境足迹。", pinyin: "kěchíxù de shēnghuó xíguàn kěyǐ jiǎnshǎo huánjìng zújì.", vi: "Thói quen sống bền vững giúp giảm thiểu dấu chân carbon đối với môi trường." },
  { id: 3164, day: 316, en: "Critical thinking prevents spreading misleading information.", cn: "批判性思维可以防止传播误导性信息。", pinyin: "pīpànxìng sīwéi kěyǐ fángzhǐ chuánbō wùdǎoxìng xìnxī.", vi: "Tư duy phản biện ngăn chặn việc phát tán các thông tin sai lệch." },
  { id: 3165, day: 316, en: "Remote work offers flexibility but requires high self-discipline.", cn: "远程办公提供了灵活性，但需要高度的自我约束。", pinyin: "yuǎnchéng bàngōng tígōng le línghuóxìng, dàn xūyào gāodù de zìwǒ yuēshù.", vi: "Làm việc từ xa mang lại sự linh hoạt nhưng đòi hỏi tính tự giác rất cao." },
  { id: 3166, day: 316, en: "Building a personal brand highlights your unique strengths.", cn: "树立个人品牌能突出你的独特优势。", pinyin: "shùlì gèrén pǐnpái néng tūchū nǐ de dútè yōushì.", vi: "Xây dựng thương hiệu cá nhân giúp làm nổi bật những thế mạnh riêng của bạn." },
  { id: 3167, day: 316, en: "Networking is about building genuine, mutually beneficial relationships.", cn: "建立人脉旨在建立真诚、互利的关系。", pinyin: "jiànlì rénmài zhǐzài jiànlì zhēnchéng, hùlì de guānxi.", vi: "Mở rộng mối quan hệ là việc xây dựng các kết nối chân thành và đôi bên cùng có lợi." },
  { id: 3168, day: 316, en: "Resilience allows you to bounce back stronger from setbacks.", cn: "韧性让你能够从挫折中更强地复原。", pinyin: "rènxìng ràng nǐ nénggòu cóng cuòzhé zhōng gèng qiáng de fùyuán.", vi: "Sức bật (Resilience) giúp bạn đứng dậy mạnh mẽ hơn sau những thất bại." },
  { id: 3169, day: 316, en: "Setting SMART goals makes your ambitions clear and actionable.", cn: "设定 SMART 目标能让你的抱负清晰且具备可操作性。", pinyin: "shèdìng SMART mùbiāo néng ràng nǐ de bào fù qīngxī qiě jùbèi kě cāozuòxìng.", vi: "Thiết lập mục tiêu SMART giúp hoài bão của bạn trở nên rõ ràng và khả thi." },
  { id: 3170, day: 316, en: "Embracing change opens doors to unforeseen opportunities.", cn: "拥抱变化能为不可预见的机遇打开大门。", pinyin: "yōngbào biànhuà néng wèi bùkě yùjiàn de jīyù dǎkāi dàmén.", vi: "Sẵn sàng đón nhận sự thay đổi sẽ mở ra cánh cửa dẫn đến những cơ hội bất ngờ." },
);

  // --- NGÀY 366: TỔNG KẾT HÀNH TRÌNH BÌNH THƯỜNG & NĂM NHUẬN (DAY 366 LEAP YEAR SPECIAL) ---
 LESSON_DATA.push(
 { id: 3661, day: 366, en: "Consistency is the master key that unlocks long-term mastery.", cn: "坚持不懈是开启长期精通的大门的主钥匙。", pinyin: "jiānchí búxiè shì kāiqǐ chángqī jīngtōng de dàmén de zhǔ yàoshi.", vi: "Sự kiên trì là chìa khóa vạn năng mở ra sự thành thạo lâu dài." },
  { id: 3662, day: 366, en: "Every small step daily leads to extraordinary transformations over time.", cn: "每天的一小步，随着时间的推移都会带来非凡的转变。", pinyin: "měitiān de yì xiǎobù, suí zhe shíjiān de tuīyí dōu huì dàilái fēifán de zhuǎnbiàn.", vi: "Mỗi bước đi nhỏ hàng ngày sẽ mang lại những chuyển biến phi thường theo thời gian." },
  { id: 3663, day: 366, en: "Language is not just words, it is a bridge connecting human hearts.", cn: "语言不仅仅是文字，更是连接人心灵的桥梁。", pinyin: "yǔyán bù jǐnjǐn shì wénzì, gèng shì liánjiē rén xīnlíng de qiáoliáng.", vi: "Ngôn ngữ không chỉ là từ ngữ, đó là nhịp cầu kết nối những tâm hồn." },
  { id: 3664, day: 366, en: "You have built a powerful daily habit that will serve you forever.", cn: "你已经建立了一个将终身受益的强大日常习惯。", pinyin: "nǐ yǐjīng jiànlì le yí gè jiāng zhōngshēn shòuyì de qiángdà rìcháng xíguàn.", vi: "Bạn đã xây dựng được một thói quen hàng ngày mạnh mẽ sẽ có lợi cho bạn suốt đời." },
  { id: 3665, day: 366, en: "Knowledge gains true value when applied practically in daily life.", cn: "当知识实际应用于日常生活时，它才获得真正的价值。", pinyin: "dāng zhīshi shíjì yìngyòng yú rìcháng shēnghuó shí, tā cái huòdé zhēnzhèng de jiàzhí.", vi: "Kiến thức chỉ đạt giá trị thực sự khi được áp dụng thực tế vào đời sống hàng ngày." },
  { id: 3666, day: 366, en: "Be proud of how far you have come since day one.", cn: "为自己从第一天起走过这么远的路程而感到自豪吧。", pinyin: "wèi zìjǐ cóng dì-yī tiān qǐ zǒu guò zhème yuǎn de lùchéng ér gǎndào zìháo ba.", vi: "Hãy tự hào vì chặng đường dài bạn đã đi qua kể từ ngày đầu tiên." },
  { id: 3667, day: 366, en: "Never stop exploring, learning, and growing as a global citizen.", cn: "作为一名世界公民，永不停止探索、学习与成长。", pinyin: "zuòwéi yì míng shìjiè gōngmín, yǒng bù tíngzhǐ tànsuǒ, xuéxí yǔ chéngzhǎng.", vi: "Dưới danh nghĩa một công dân toàn cầu, đừng bao giờ ngừng khám phá, học hỏi và phát triển." },
  { id: 3668, day: 366, en: "Keep practicing daily to keep your multilingual skills fluent and sharp.", cn: "保持每天练习，让你的多语言技能保持流利与敏锐。", pinyin: "bǎochí měitiān liànxí, ràng nǐ de duō yǔyán jìnéng bǎochí liúlì yǔ mǐnruì.", vi: "Luyện tập hàng ngày để duy trì kỹ năng đa ngôn ngữ luôn trôi chảy và sắc bén." },
  { id: 3669, day: 366, en: "Thank you for dedication throughout this 366-day journey!", cn: "感谢您在整个 366 天旅程中的专注与奉献！", pinyin: "gǎnxiè nín zài zhěnggè 366 tiān lǚchéng zhōng de zhuānzhù yǔ fèngxiàn!", vi: "Cảm ơn sự tận tụy của bạn suốt hành trình 366 ngày qua!" },
  { id: 3670, day: 366, en: "Congratulations on fully mastering the complete 366-day communication series!", cn: "恭喜您完整精通全套 366 天多语沟通课程！", pinyin: "gōngxǐ nín wánzhěng jīngtōng quántào 366 tiān duōyǔ gōutōng kèchéng!", vi: "Chúc mừng bạn đã hoàn tất trọn vẹn chương trình giao tiếp đa ngôn ngữ 366 ngày!" }
);


