// Public-facing corrections shared by the home, download and information pages.
const customerCopyKeys = {
  home: ['capability.address.body', 'future.body', 'future.roadmap', 'platform.intro', 'platform.brandSub'],
  downloads: ['downloadSectionIntro', 'mobileBody', 'mobileDisabled', 'releaseHistoryTitle', 'releaseNowBody'],
  info: ['aboutPositionBody', 'aboutDeploymentBody', 'aboutAiBody', 'releaseStatus', 'releaseTitle', 'releaseBody', 'privacyDataProjectBody', 'privacyLocalBody', 'privacyRightsBody', 'privacyContactBody']
};

const customerCopyTranslations = {
  'zh-Hans': {
    home: [
      '查看和管理单个设备或整条 DALI 总线的短地址；疑似地址冲突可帮助现场排查。',
      '未来我们将探索 AI 辅助场景建议、异常提示与引导式调试。相关能力尚未在当前版本开放。',
      '未来方向',
      'Windows 预览版现可下载。macOS 与移动端体验将在开放时公布。',
      '面向专业照明的工程软件'
    ],
    downloads: [
      'Windows 预览版现可下载；macOS 版本暂未开放下载。',
      '移动端配套体验请等待后续应用商店版本。',
      '等待应用商店版本',
      '版本动态',
      '当前 Windows 预览版提供控制器发现、DALI 总线扫描与编址、设备信息、分组、场景，以及按设备能力开放的灯光控制。'
    ],
    info: [
      'DALI Control Platform 将控制器发现与管理、DALI 编址、分组与场景、设备信息、常用参数设置，以及设备支持的调光和 DT8 色彩控制集中在一个工程工作台。',
      '当前可下载 Windows 预览版；macOS 暂未开放下载，iPhone、iPad 与 Android 版本将在后续发布。实际支持范围请以相应版本说明为准。',
      '我们正在探索自然语言意图、场景建议、异常提示和引导式调试等 AI 辅助能力。当前版本尚未提供这些功能。',
      '预览版数据说明',
      '正式隐私政策随软件正式版公布',
      '本页介绍当前产品的数据处理方式。运营主体、隐私联系方式和适用地区条款将在软件正式发布时公布；产品咨询可通过圣昌官网进行。',
      '控制器与线路标识、短地址、分组、场景及参数等工程配置数据。当前版本不提供工程文件导出与快照功能。',
      '当前工作流程以 Type-C、受控局域网和本地诊断为主，不依赖云端账户。本网站仅在浏览器保存语言和主题偏好，不使用分析或广告追踪服务。',
      '您可以通过软件和操作系统管理当前提供的本地数据与权限。工程文件导出及相应删除功能尚未开放；依法享有的个人信息权利，可在正式隐私渠道公布后提出。',
      '如需了解产品的数据处理方式，请通过圣昌官网公布的联系渠道咨询。正式的隐私联系方式将在软件正式发布时公布。'
    ]
  },
  'zh-Hant': {
    home: [
      '查看和管理單一裝置或整條 DALI 匯流排的短位址；疑似位址衝突可協助現場排查。',
      '未來我們將探索 AI 輔助場景建議、異常提示及引導式調試。相關功能尚未在目前版本開放。',
      '未來方向',
      'Windows 預覽版現可下載。macOS 與流動裝置版本將於開放時公布。',
      '面向專業照明的工程軟件'
    ],
    downloads: [
      'Windows 預覽版現可下載；macOS 版本暫未開放下載。',
      '流動裝置配套體驗請等待後續應用程式商店版本。',
      '等待應用程式商店版本',
      '版本動態',
      '目前 Windows 預覽版提供控制器搜尋、DALI 匯流排掃描與定址、裝置資訊、群組、場景，以及依裝置能力開放的燈光控制。'
    ],
    info: [
      'DALI Control Platform 將控制器搜尋與管理、DALI 定址、群組與場景、裝置資訊、常用參數設定，以及裝置支援的調光與 DT8 色彩控制整合於同一工程工作台。',
      '目前可下載 Windows 預覽版；macOS 暫未開放下載，iPhone、iPad 與 Android 版本將於日後推出。實際支援範圍請以相應版本說明為準。',
      '我們正探索自然語言意圖、場景建議、異常提示與引導式調試等 AI 輔助功能。目前版本尚未提供這些功能。',
      '預覽版資料說明',
      '正式隱私政策將隨軟件正式版公布',
      '本頁介紹目前產品的資料處理方式。營運主體、隱私聯絡方式及適用地區條款將於軟件正式推出時公布；產品諮詢可透過聖昌官網進行。',
      '控制器與線路標識、短位址、群組、場景及參數等工程設定資料。目前版本不提供工程檔案匯出與快照功能。',
      '目前工作流程以 Type-C、受控區域網路和本機診斷為主，不依賴雲端帳戶。本網站只在瀏覽器儲存語言與主題偏好，不使用分析或廣告追蹤服務。',
      '您可透過軟件和作業系統管理目前提供的本機資料與權限。工程檔案匯出及相關刪除功能尚未開放；依法享有的個人資料權利，可在正式隱私管道公布後提出。',
      '如需了解產品的資料處理方式，請透過聖昌官網公布的聯絡管道諮詢。正式隱私聯絡方式將於軟件正式推出時公布。'
    ]
  },
  en: {
    home: [
      'View and manage short addresses for individual devices or the DALI line. Suspected conflicts help guide on-site checks.',
      'We are exploring future AI assistance for scene suggestions, anomaly awareness and guided commissioning. These features are not available in the current release.',
      'FUTURE DIRECTION',
      'Download the Windows preview today. macOS and mobile experiences will be announced when available.',
      'Engineering software for professional lighting'
    ],
    downloads: [
      'The Windows preview is available now; the macOS download is not yet open.',
      'Please wait for a later app-store release for the mobile companion experience.',
      'APP-STORE RELEASE TO FOLLOW',
      'Release updates',
      'The current Windows preview includes controller discovery, DALI line scanning and addressing, device information, groups, scenes and lighting control where supported by the device.'
    ],
    info: [
      'DALI Control Platform brings controller discovery and management, DALI addressing, groups and scenes, device information, common parameter settings, and supported dimming and DT8 colour controls into one engineering workspace.',
      'The Windows preview is available to download. macOS downloads are not yet open, while iPhone, iPad and Android versions will follow. Refer to each release for its supported scope.',
      'We are exploring AI assistance for natural-language intent, scene suggestions, anomaly awareness and guided commissioning. These features are not available in the current release.',
      'Preview data notice',
      'The formal privacy policy will accompany the full software release',
      'This page describes how the current product handles data. The operator, privacy contact and regional terms will be published with the full software release. For product inquiries, use the official Suretron website.',
      'Engineering configuration data such as controller and line identifiers, short addresses, groups, scenes and parameters. Project-file export and snapshots are not available in the current version.',
      'Current workflows use Type-C, controlled local networks and on-device diagnostics without requiring a cloud account. This website stores only language and theme preferences in your browser and uses no analytics or advertising trackers.',
      'You can manage currently available local data and permissions through the software and operating system. Project-file export and related deletion controls are not yet available. Applicable privacy rights can be exercised through the official privacy channel once published.',
      'For questions about product data practices, use the contact details on the official Suretron website. A dedicated privacy contact will be published with the full software release.'
    ]
  },
  ja: {
    home: ['機器ごと、または DALI ライン全体のショートアドレスを確認・管理できます。アドレス競合の疑いは現場確認の手掛かりになります。', '将来は、シーン提案、異常の通知、試運転ガイドなどの AI 支援を検討しています。現在の版では利用できません。', '今後の方向性', 'Windows プレビュー版をダウンロードできます。macOS とモバイル版は提供開始時にお知らせします。', 'プロ向け照明エンジニアリングソフトウェア'],
    downloads: ['Windows プレビュー版はダウンロード可能です。macOS 版のダウンロードはまだ始まっていません。', 'モバイル版は今後のアプリストア公開をお待ちください。', 'アプリストア版を準備中', 'リリース情報', '現在の Windows プレビュー版では、コントローラー検出、DALI ラインのスキャンとアドレス設定、機器情報、グループ、シーン、対応機器の照明制御を利用できます。'],
    info: ['DALI Control Platform は、コントローラーの検出と管理、DALI アドレス設定、グループ、シーン、機器情報、一般的なパラメーター設定、対応機器の調光と DT8 色制御を一つの作業画面にまとめます。', 'Windows プレビュー版はダウンロードできます。macOS 版は未公開で、iPhone、iPad、Android 版は今後提供予定です。対応範囲は各版の案内をご確認ください。', '自然言語による操作意図、シーン提案、異常の通知、試運転ガイドなどの AI 支援を検討しています。現在の版では利用できません。', 'プレビュー版のデータ案内', '正式なプライバシーポリシーはソフトウェア正式版とともに公開します', 'このページでは現在の製品によるデータの取扱いを説明します。運営者、プライバシー窓口、地域別条件は正式版の公開時にお知らせします。製品に関するお問い合わせは Suretron 公式サイトをご利用ください。', 'コントローラーとラインの識別子、ショートアドレス、グループ、シーン、パラメーターなどの設定データ。現在の版ではプロジェクトファイルの書き出しとスナップショットは利用できません。', '現在の作業は Type-C、管理されたローカルネットワーク、端末内の診断を中心とし、クラウドアカウントは不要です。このサイトは言語とテーマの設定だけをブラウザーに保存し、解析や広告追跡を行いません。', '現在提供中のローカルデータと権限はソフトウェアや OS で管理できます。プロジェクトファイルの書き出しと関連する削除機能は未提供です。法令上の権利は、正式な窓口の公開後に請求できます。', '製品のデータ取扱いに関する質問は Suretron 公式サイトの連絡先をご利用ください。専用のプライバシー窓口は正式版の公開時にお知らせします。']
  },
  ko: {
    home: ['개별 장치 또는 DALI 라인의 단축 주소를 확인하고 관리하세요. 주소 충돌 의심 항목은 현장 점검에 도움이 됩니다.', '향후 장면 추천, 이상 징후 알림, 시운전 안내 등 AI 지원을 검토하고 있습니다. 현재 버전에서는 제공되지 않습니다.', '향후 방향', 'Windows 미리보기 버전을 지금 다운로드할 수 있습니다. macOS와 모바일 버전은 제공 시 안내합니다.', '전문 조명용 엔지니어링 소프트웨어'],
    downloads: ['Windows 미리보기 버전을 다운로드할 수 있습니다. macOS 다운로드는 아직 제공되지 않습니다.', '모바일 버전은 추후 앱 스토어 출시를 기다려 주세요.', '앱 스토어 출시 예정', '출시 소식', '현재 Windows 미리보기 버전은 컨트롤러 검색, DALI 라인 검색과 주소 지정, 장치 정보, 그룹, 장면 및 장치가 지원하는 조명 제어를 제공합니다.'],
    info: ['DALI Control Platform은 컨트롤러 검색과 관리, DALI 주소 지정, 그룹과 장면, 장치 정보, 일반 매개변수 설정 및 지원되는 디밍과 DT8 색상 제어를 하나의 작업 공간에 모았습니다.', 'Windows 미리보기 버전은 다운로드할 수 있습니다. macOS 다운로드는 아직 제공되지 않으며 iPhone, iPad, Android 버전은 추후 출시됩니다. 지원 범위는 각 버전 안내를 확인하세요.', '자연어 의도, 장면 추천, 이상 징후 알림, 시운전 안내 등의 AI 지원을 검토하고 있습니다. 현재 버전에서는 제공되지 않습니다.', '미리보기 데이터 안내', '정식 개인정보 처리방침은 소프트웨어 정식 출시와 함께 공개됩니다', '이 페이지는 현재 제품의 데이터 처리 방식을 설명합니다. 운영 주체, 개인정보 연락처 및 지역별 조건은 정식 출시 시 공개됩니다. 제품 문의는 Suretron 공식 사이트를 이용하세요.', '컨트롤러와 라인 식별자, 단축 주소, 그룹, 장면, 매개변수 등의 엔지니어링 설정 데이터입니다. 현재 버전에서는 프로젝트 파일 내보내기와 스냅샷을 제공하지 않습니다.', '현재 작업은 Type-C, 통제된 로컬 네트워크와 기기 내 진단을 중심으로 하며 클라우드 계정이 필요하지 않습니다. 이 사이트는 언어와 테마 설정만 브라우저에 저장하고 분석 또는 광고 추적을 사용하지 않습니다.', '현재 제공되는 로컬 데이터와 권한은 소프트웨어 및 운영체제에서 관리할 수 있습니다. 프로젝트 파일 내보내기와 관련 삭제 기능은 아직 제공되지 않습니다. 법률상 권리는 공식 개인정보 창구가 공개된 후 요청할 수 있습니다.', '제품의 데이터 처리 방식에 관한 문의는 Suretron 공식 사이트의 연락처를 이용하세요. 전용 개인정보 연락처는 소프트웨어 정식 출시 시 공개됩니다.']
  },
  fr: {
    home: ['Consultez et gérez les adresses courtes des appareils ou de la ligne DALI. Les conflits présumés orientent les vérifications sur site.', 'Nous étudions une future assistance IA pour suggérer des scènes, signaler des anomalies et guider la mise en service. Ces fonctions ne sont pas disponibles dans la version actuelle.', 'PERSPECTIVE FUTURE', 'La préversion Windows est disponible. Les versions macOS et mobiles seront annoncées dès leur disponibilité.', 'Logiciel d’ingénierie pour l’éclairage professionnel'],
    downloads: ['La préversion Windows est disponible au téléchargement ; le téléchargement macOS n’est pas encore ouvert.', 'Veuillez attendre une prochaine version sur les boutiques d’applications pour l’expérience mobile.', 'VERSION EN BOUTIQUE À VENIR', 'Actualités des versions', 'La préversion Windows actuelle comprend la détection des contrôleurs, le scan et l’adressage de la ligne DALI, les informations appareil, les groupes, les scènes et la commande d’éclairage selon les capacités de l’appareil.'],
    info: ['DALI Control Platform réunit dans un même espace la détection et la gestion des contrôleurs, l’adressage DALI, les groupes et scènes, les informations appareil, les réglages courants ainsi que la gradation et la couleur DT8 sur les appareils compatibles.', 'La préversion Windows est téléchargeable. Le téléchargement macOS n’est pas encore ouvert ; les versions iPhone, iPad et Android suivront. Consultez chaque version pour connaître les fonctions prises en charge.', 'Nous étudions une assistance IA pour interpréter des intentions en langage naturel, suggérer des scènes, signaler des anomalies et guider la mise en service. Ces fonctions ne sont pas disponibles actuellement.', 'Avis relatif aux données de préversion', 'La politique de confidentialité définitive accompagnera la version complète du logiciel', 'Cette page explique le traitement des données par le produit actuel. L’exploitant, le contact confidentialité et les conditions régionales seront publiés avec la version complète. Pour toute question produit, utilisez le site officiel Suretron.', 'Données de configuration telles que les identifiants de contrôleur et de ligne, les adresses courtes, les groupes, scènes et paramètres. L’export de fichiers projet et les instantanés ne sont pas disponibles dans la version actuelle.', 'Les opérations actuelles utilisent Type-C, des réseaux locaux contrôlés et le diagnostic sur l’appareil, sans compte cloud obligatoire. Ce site enregistre uniquement la langue et le thème dans votre navigateur, sans analyse ni suivi publicitaire.', 'Vous pouvez gérer les données locales et autorisations actuellement disponibles dans le logiciel et le système. L’export de fichiers projet et les commandes de suppression associées ne sont pas encore disponibles. Vos droits légaux pourront être exercés via le canal officiel une fois publié.', 'Pour toute question sur le traitement des données du produit, utilisez les coordonnées du site officiel Suretron. Un contact dédié à la confidentialité sera publié avec la version complète.']
  },
  de: {
    home: ['Sehen und verwalten Sie Kurzadressen einzelner Geräte oder der DALI-Linie. Vermutete Konflikte erleichtern die Prüfung vor Ort.', 'Wir prüfen künftige KI-Unterstützung für Szenenvorschläge, Anomaliehinweise und geführte Inbetriebnahme. Diese Funktionen sind in der aktuellen Version nicht verfügbar.', 'ZUKÜNFTIGE ENTWICKLUNG', 'Die Windows-Vorschau ist jetzt verfügbar. macOS- und Mobilversionen werden bei Verfügbarkeit angekündigt.', 'Engineering-Software für professionelle Beleuchtung'],
    downloads: ['Die Windows-Vorschau steht zum Download bereit; der macOS-Download ist noch nicht freigegeben.', 'Bitte warten Sie für die mobile Begleitversion auf eine spätere Veröffentlichung im App-Store.', 'APP-STORE-VERSION FOLGT', 'Versionsneuigkeiten', 'Die aktuelle Windows-Vorschau bietet Controller-Erkennung, DALI-Linienscan und Adressierung, Geräteinformationen, Gruppen, Szenen und geräteabhängige Lichtsteuerung.'],
    info: ['DALI Control Platform vereint Controller-Erkennung und -Verwaltung, DALI-Adressierung, Gruppen und Szenen, Gerätedaten, gängige Parametereinstellungen sowie unterstützte Dimm- und DT8-Farbsteuerung in einem Engineering-Arbeitsplatz.', 'Die Windows-Vorschau ist verfügbar. Der macOS-Download ist noch nicht freigegeben; iPhone-, iPad- und Android-Versionen folgen später. Der jeweilige Funktionsumfang steht in den Versionshinweisen.', 'Wir prüfen KI-Unterstützung für natürlichsprachliche Absichten, Szenenvorschläge, Anomaliehinweise und geführte Inbetriebnahme. Diese Funktionen sind aktuell nicht verfügbar.', 'Datenhinweis zur Vorschau', 'Die endgültige Datenschutzerklärung folgt mit der vollständigen Softwareversion', 'Diese Seite beschreibt die Datenverarbeitung des aktuellen Produkts. Betreiber, Datenschutzkontakt und regionale Bedingungen werden mit der vollständigen Version veröffentlicht. Produktfragen richten Sie bitte über die offizielle Suretron-Website.', 'Konfigurationsdaten wie Controller- und Linienkennungen, Kurzadressen, Gruppen, Szenen und Parameter. Der Export von Projektdateien und Snapshots ist in der aktuellen Version nicht verfügbar.', 'Aktuelle Abläufe nutzen Type-C, kontrollierte lokale Netzwerke und geräteinterne Diagnose ohne erforderliches Cloud-Konto. Diese Website speichert nur Sprache und Design im Browser und nutzt weder Analyse- noch Werbetracker.', 'Verfügbare lokale Daten und Berechtigungen können Sie in Software und Betriebssystem verwalten. Projektdatei-Export und zugehörige Löschfunktionen sind noch nicht verfügbar. Gesetzliche Datenschutzrechte können nach Veröffentlichung des offiziellen Kanals geltend gemacht werden.', 'Bei Fragen zur Datenverarbeitung des Produkts nutzen Sie die Kontaktdaten auf der offiziellen Suretron-Website. Ein eigener Datenschutzkontakt wird mit der vollständigen Version veröffentlicht.']
  },
  es: {
    home: ['Consulta y gestiona las direcciones cortas de dispositivos individuales o de la línea DALI. Los posibles conflictos orientan las comprobaciones en campo.', 'Estamos estudiando futuras ayudas de IA para sugerir escenas, detectar anomalías y guiar la puesta en marcha. Estas funciones no están disponibles en la versión actual.', 'PRÓXIMAMENTE', 'La versión preliminar para Windows ya se puede descargar. Anunciaremos macOS y móvil cuando estén disponibles.', 'Software de ingeniería para iluminación profesional'],
    downloads: ['La versión preliminar para Windows ya se puede descargar; la descarga para macOS aún no está disponible.', 'Espera a una futura publicación en las tiendas de aplicaciones para la experiencia móvil.', 'VERSIÓN EN TIENDA PENDIENTE', 'Novedades de versiones', 'La versión preliminar actual para Windows incluye detección de controladores, escaneo y direccionamiento de la línea DALI, información de dispositivos, grupos, escenas y control de iluminación según las capacidades de cada dispositivo.'],
    info: ['DALI Control Platform reúne en un solo espacio la detección y gestión de controladores, el direccionamiento DALI, grupos y escenas, información de dispositivos, ajustes comunes y control de atenuación y color DT8 cuando el dispositivo lo permite.', 'La versión preliminar para Windows está disponible. La descarga para macOS aún no se ha abierto; las versiones para iPhone, iPad y Android llegarán más adelante. Consulta cada versión para conocer su alcance.', 'Estamos estudiando ayudas de IA para interpretar intenciones en lenguaje natural, sugerir escenas, detectar anomalías y guiar la puesta en marcha. No están disponibles en la versión actual.', 'Aviso de datos de la versión preliminar', 'La política de privacidad definitiva acompañará a la versión completa del software', 'Esta página explica cómo trata los datos el producto actual. El operador, el contacto de privacidad y las condiciones regionales se publicarán con la versión completa. Para consultas sobre el producto, utiliza el sitio oficial de Suretron.', 'Datos de configuración como identificadores de controlador y línea, direcciones cortas, grupos, escenas y parámetros. La exportación de archivos de proyecto y las instantáneas no están disponibles en la versión actual.', 'Los flujos actuales utilizan Type-C, redes locales controladas y diagnóstico en el dispositivo, sin requerir una cuenta en la nube. Este sitio solo guarda idioma y tema en tu navegador y no usa analítica ni rastreadores publicitarios.', 'Puedes gestionar los datos locales y permisos disponibles mediante el software y el sistema operativo. La exportación de archivos de proyecto y los controles de eliminación asociados aún no están disponibles. Los derechos legales podrán ejercerse mediante el canal oficial cuando se publique.', 'Para preguntas sobre el tratamiento de datos del producto, usa los datos de contacto del sitio oficial de Suretron. El contacto específico de privacidad se publicará con la versión completa.']
  },
  pt: {
    home: ['Consulte e gerencie endereços curtos de dispositivos ou da linha DALI. Possíveis conflitos ajudam a orientar a verificação no local.', 'Estamos a estudar futura assistência de IA para sugestões de cenas, alertas de anomalias e comissionamento guiado. Estas funções não estão disponíveis na versão atual.', 'DIREÇÃO FUTURA', 'A pré-visualização Windows já está disponível. As versões macOS e móveis serão anunciadas quando estiverem prontas.', 'Software de engenharia para iluminação profissional'],
    downloads: ['A pré-visualização Windows está disponível para download; o download macOS ainda não está aberto.', 'Aguarde uma futura versão nas lojas de aplicações para a experiência móvel.', 'VERSÃO NAS LOJAS A SEGUIR', 'Novidades das versões', 'A pré-visualização atual para Windows inclui descoberta de controladores, análise e endereçamento da linha DALI, informações de dispositivos, grupos, cenas e controlo de iluminação conforme as capacidades do dispositivo.'],
    info: ['O DALI Control Platform reúne descoberta e gestão de controladores, endereçamento DALI, grupos e cenas, dados dos dispositivos, definições comuns e controlo de intensidade e cor DT8 quando suportados, num único espaço de trabalho.', 'A pré-visualização Windows está disponível. O download macOS ainda não está aberto; as versões para iPhone, iPad e Android virão depois. Consulte cada versão para conhecer o suporte.', 'Estamos a estudar assistência de IA para interpretar intenções em linguagem natural, sugerir cenas, alertar para anomalias e orientar o comissionamento. Estas funções não estão disponíveis atualmente.', 'Aviso de dados da pré-visualização', 'A política de privacidade definitiva acompanhará a versão completa do software', 'Esta página descreve o tratamento de dados pelo produto atual. O operador, o contacto de privacidade e as condições regionais serão publicados com a versão completa. Para dúvidas sobre o produto, use o site oficial da Suretron.', 'Dados de configuração como identificadores de controlador e linha, endereços curtos, grupos, cenas e parâmetros. A exportação de ficheiros de projeto e os instantâneos não estão disponíveis na versão atual.', 'Os fluxos atuais utilizam Type-C, redes locais controladas e diagnósticos no dispositivo sem exigir conta na nuvem. Este site guarda apenas idioma e tema no navegador e não usa análise nem rastreadores publicitários.', 'Pode gerir os dados locais e permissões atualmente disponíveis no software e no sistema operativo. A exportação de ficheiros de projeto e os controlos de eliminação relacionados ainda não estão disponíveis. Os direitos legais podem ser exercidos pelo canal oficial após a sua publicação.', 'Para questões sobre o tratamento de dados do produto, use os contactos do site oficial da Suretron. Um contacto de privacidade dedicado será publicado com a versão completa.']
  },
  nl: {
    home: ['Bekijk en beheer korte adressen van afzonderlijke apparaten of de DALI-lijn. Vermoedelijke conflicten helpen bij controles op locatie.', 'We onderzoeken toekomstige AI-hulp voor scènesuggesties, signalen van afwijkingen en begeleide inbedrijfstelling. Deze functies zijn nog niet beschikbaar.', 'TOEKOMSTIGE RICHTING', 'De Windows-preview is nu te downloaden. macOS en mobiel worden aangekondigd zodra ze beschikbaar zijn.', 'Engineeringsoftware voor professionele verlichting'],
    downloads: ['De Windows-preview is te downloaden; de macOS-download is nog niet beschikbaar.', 'Wacht voor de mobiele ervaring op een latere uitgave in de appstores.', 'APPSTORE-VERSIE VOLGT', 'Versienieuws', 'De huidige Windows-preview biedt controllerdetectie, DALI-lijnscan en adressering, apparaatinformatie, groepen, scènes en lichtregeling voor zover het apparaat die ondersteunt.'],
    info: ['DALI Control Platform brengt controllerdetectie en -beheer, DALI-adressering, groepen en scènes, apparaatinformatie, algemene parameterinstellingen en ondersteunde dim- en DT8-kleurregeling samen in één werkruimte.', 'De Windows-preview is te downloaden. De macOS-download is nog niet beschikbaar; versies voor iPhone, iPad en Android volgen later. Raadpleeg de versieinformatie voor de ondersteunde functies.', 'We onderzoeken AI-hulp voor natuurlijke taal, scènesuggesties, signalen van afwijkingen en begeleide inbedrijfstelling. Deze functies zijn momenteel niet beschikbaar.', 'Gegevensbericht voor de preview', 'Het definitieve privacybeleid verschijnt bij de volledige softwareversie', 'Deze pagina beschrijft hoe het huidige product gegevens verwerkt. De beheerder, privacycontactpersoon en regionale voorwaarden worden bij de volledige versie gepubliceerd. Gebruik voor productvragen de officiële Suretron-website.', 'Configuratiegegevens zoals controller- en lijn-ID’s, korte adressen, groepen, scènes en parameters. Export van projectbestanden en momentopnamen zijn in de huidige versie niet beschikbaar.', 'Huidige workflows gebruiken Type-C, beheerde lokale netwerken en diagnose op het apparaat zonder cloudaccount. Deze website bewaart alleen taal- en themavoorkeuren in uw browser en gebruikt geen analyse- of advertentietrackers.', 'U kunt beschikbare lokale gegevens en rechten beheren in de software en het besturingssysteem. Export van projectbestanden en bijbehorende verwijderfuncties zijn nog niet beschikbaar. Wettelijke privacyrechten kunnen via het officiële kanaal worden uitgeoefend zodra dit gepubliceerd is.', 'Gebruik voor vragen over productgegevens de contactgegevens op de officiële Suretron-website. Een specifiek privacycontact wordt bij de volledige versie gepubliceerd.']
  },
  it: {
    home: ['Consulta e gestisci gli indirizzi brevi dei singoli dispositivi o della linea DALI. I possibili conflitti aiutano le verifiche sul campo.', 'Stiamo valutando una futura assistenza AI per suggerire scene, segnalare anomalie e guidare la messa in servizio. Queste funzioni non sono disponibili nella versione attuale.', 'SVILUPPI FUTURI', 'La versione preliminare Windows è scaricabile. Le versioni macOS e mobili saranno annunciate quando disponibili.', 'Software di progettazione per l’illuminazione professionale'],
    downloads: ['La versione preliminare Windows è scaricabile; il download per macOS non è ancora disponibile.', 'Per l’esperienza mobile, attendi una futura versione negli store delle app.', 'VERSIONE STORE IN ARRIVO', 'Novità delle versioni', 'L’attuale versione preliminare Windows include rilevamento dei controller, scansione e indirizzamento della linea DALI, dati dei dispositivi, gruppi, scene e controllo dell’illuminazione in base alle capacità dei dispositivi.'],
    info: ['DALI Control Platform riunisce rilevamento e gestione dei controller, indirizzamento DALI, gruppi e scene, informazioni sui dispositivi, impostazioni comuni e controllo dimmer e colore DT8 supportato in un unico ambiente di lavoro.', 'La versione preliminare Windows è scaricabile. Il download macOS non è ancora disponibile; seguiranno le versioni iPhone, iPad e Android. Consulta ogni versione per le funzioni supportate.', 'Stiamo valutando l’assistenza AI per interpretare richieste in linguaggio naturale, suggerire scene, segnalare anomalie e guidare la messa in servizio. Queste funzioni non sono ancora disponibili.', 'Informativa sui dati della versione preliminare', 'L’informativa definitiva sulla privacy accompagnerà la versione completa del software', 'Questa pagina descrive il trattamento dei dati nel prodotto attuale. Operatore, contatto privacy e condizioni regionali saranno pubblicati con la versione completa. Per domande sul prodotto, usa il sito ufficiale Suretron.', 'Dati di configurazione come identificativi di controller e linea, indirizzi brevi, gruppi, scene e parametri. L’esportazione di file di progetto e le istantanee non sono disponibili nella versione attuale.', 'I flussi attuali utilizzano Type-C, reti locali controllate e diagnostica sul dispositivo senza richiedere un account cloud. Questo sito salva nel browser solo lingua e tema e non usa strumenti di analisi o tracciamento pubblicitario.', 'Puoi gestire i dati locali e le autorizzazioni disponibili nel software e nel sistema operativo. Esportazione dei file di progetto e relativi controlli di eliminazione non sono ancora disponibili. I diritti di legge potranno essere esercitati tramite il canale ufficiale quando sarà pubblicato.', 'Per domande sui dati del prodotto, usa i contatti del sito ufficiale Suretron. Un contatto privacy dedicato sarà pubblicato con la versione completa.']
  },
  el: {
    home: ['Δείτε και διαχειριστείτε σύντομες διευθύνσεις μεμονωμένων συσκευών ή της γραμμής DALI. Πιθανές διενέξεις βοηθούν στον επιτόπιο έλεγχο.', 'Εξετάζουμε μελλοντική βοήθεια AI για προτάσεις σκηνών, ενδείξεις ανωμαλιών και καθοδηγούμενη θέση σε λειτουργία. Αυτές οι δυνατότητες δεν είναι διαθέσιμες τώρα.', 'ΜΕΛΛΟΝΤΙΚΗ ΚΑΤΕΥΘΥΝΣΗ', 'Η δοκιμαστική έκδοση Windows είναι διαθέσιμη. Οι εκδόσεις macOS και κινητών θα ανακοινωθούν όταν είναι έτοιμες.', 'Λογισμικό μηχανικής για επαγγελματικό φωτισμό'],
    downloads: ['Η δοκιμαστική έκδοση Windows είναι διαθέσιμη για λήψη· η λήψη για macOS δεν έχει ανοίξει ακόμη.', 'Περιμένετε μελλοντική κυκλοφορία στα καταστήματα εφαρμογών για την εμπειρία κινητών.', 'ΕΚΔΟΣΗ ΚΑΤΑΣΤΗΜΑΤΟΣ ΑΡΓΟΤΕΡΑ', 'Νέα εκδόσεων', 'Η τρέχουσα δοκιμαστική έκδοση Windows προσφέρει εντοπισμό ελεγκτών, σάρωση και διευθυνσιοδότηση γραμμής DALI, πληροφορίες συσκευών, ομάδες, σκηνές και έλεγχο φωτισμού όπου υποστηρίζεται.'],
    info: ['Το DALI Control Platform συγκεντρώνει εντοπισμό και διαχείριση ελεγκτών, διευθυνσιοδότηση DALI, ομάδες και σκηνές, πληροφορίες συσκευών, βασικές ρυθμίσεις και υποστηριζόμενο έλεγχο έντασης και χρώματος DT8 σε έναν χώρο εργασίας.', 'Η δοκιμαστική έκδοση Windows είναι διαθέσιμη. Η λήψη macOS δεν έχει ανοίξει ακόμη, ενώ οι εκδόσεις iPhone, iPad και Android θα ακολουθήσουν. Ελέγξτε κάθε έκδοση για το εύρος υποστήριξης.', 'Εξετάζουμε βοήθεια AI για πρόθεση σε φυσική γλώσσα, προτάσεις σκηνών, ενδείξεις ανωμαλιών και καθοδηγούμενη θέση σε λειτουργία. Αυτές οι λειτουργίες δεν είναι διαθέσιμες τώρα.', 'Ενημέρωση δεδομένων δοκιμαστικής έκδοσης', 'Η οριστική πολιτική απορρήτου θα δημοσιευτεί με την πλήρη έκδοση', 'Η σελίδα περιγράφει την επεξεργασία δεδομένων του σημερινού προϊόντος. Ο φορέας, η επαφή απορρήτου και οι περιφερειακοί όροι θα ανακοινωθούν με την πλήρη έκδοση. Για ερωτήσεις προϊόντος, χρησιμοποιήστε τον επίσημο ιστότοπο Suretron.', 'Δεδομένα ρυθμίσεων όπως αναγνωριστικά ελεγκτών και γραμμών, σύντομες διευθύνσεις, ομάδες, σκηνές και παράμετροι. Η εξαγωγή αρχείων έργου και τα στιγμιότυπα δεν διατίθενται στην τρέχουσα έκδοση.', 'Οι τρέχουσες εργασίες χρησιμοποιούν Type-C, ελεγχόμενα τοπικά δίκτυα και διαγνωστικά συσκευής χωρίς να απαιτείται λογαριασμός cloud. Ο ιστότοπος αποθηκεύει μόνο γλώσσα και θέμα στο πρόγραμμα περιήγησης, χωρίς αναλυτικά ή διαφημιστική παρακολούθηση.', 'Μπορείτε να διαχειρίζεστε διαθέσιμα τοπικά δεδομένα και δικαιώματα στο λογισμικό και το λειτουργικό. Η εξαγωγή έργων και η σχετική διαγραφή δεν διατίθενται ακόμη. Τα νόμιμα δικαιώματα απορρήτου ασκούνται μέσω του επίσημου καναλιού όταν δημοσιευτεί.', 'Για ερωτήσεις σχετικά με τα δεδομένα του προϊόντος, χρησιμοποιήστε τα στοιχεία επικοινωνίας του επίσημου ιστότοπου Suretron. Ειδική επαφή απορρήτου θα ανακοινωθεί με την πλήρη έκδοση.']
  },
  et: {
    home: ['Vaadake ja hallake üksikseadmete või DALI-liini lühiaadresse. Võimalikud konfliktid aitavad kohapealset kontrolli suunata.', 'Uurime tulevast tehisintellekti abi stseenisoovituste, kõrvalekallete märguannete ja juhendatud kasutuselevõtu jaoks. Neid võimalusi praeguses versioonis ei ole.', 'TULEVIKUSUUND', 'Windowsi eelvaade on nüüd allalaaditav. macOS-i ja mobiiliversioonidest teatame nende valmimisel.', 'Professionaalse valgustuse inseneritarkvara'],
    downloads: ['Windowsi eelvaade on allalaaditav; macOS-i allalaadimine pole veel avatud.', 'Mobiilse kaasrakenduse jaoks oodake hilisemat rakendusepoe väljalaset.', 'RAKENDUSEPOE VERSIOON TULEKUL', 'Versiooniuudised', 'Praegune Windowsi eelvaade sisaldab kontrollerite leidmist, DALI-liini skannimist ja adresseerimist, seadmeteavet, gruppe, stseene ning seadme toel valguse juhtimist.'],
    info: ['DALI Control Platform ühendab kontrollerite leidmise ja halduse, DALI-aadressid, grupid ja stseenid, seadmeteabe, tavapärased parameetrisätted ning toetatud hämarduse ja DT8 värvijuhtimise ühes tööruumis.', 'Windowsi eelvaade on allalaaditav. macOS-i allalaadimine pole veel avatud; iPhone’i, iPadi ja Androidi versioonid järgnevad hiljem. Toetatud võimalusi vaadake iga versiooni kirjeldusest.', 'Uurime tehisintellekti abi loomuliku keele, stseenisoovituste, kõrvalekallete märguannete ja juhendatud kasutuselevõtu jaoks. Need võimalused ei ole praegu saadaval.', 'Eelvaate andmeteave', 'Lõplik privaatsuspoliitika avaldatakse koos tarkvara täisversiooniga', 'See leht kirjeldab praeguse toote andmetöötlust. Käitaja, privaatsuskontakt ja piirkondlikud tingimused avaldatakse koos täisversiooniga. Tooteküsimustes kasutage Suretroni ametlikku veebisaiti.', 'Seadistusandmed, nagu kontrolleri ja liini tunnused, lühiaadressid, grupid, stseenid ning parameetrid. Projektifailide eksport ja hetktõmmised pole praeguses versioonis saadaval.', 'Praegused töövood kasutavad Type-C ühendust, kontrollitud kohalikke võrke ja seadmesiseseid diagnostikaid ilma pilvekonto nõudeta. Sait salvestab brauserisse ainult keele ja teema ning ei kasuta analüütikat ega reklaamijälgimist.', 'Praegu saadaolevaid kohalikke andmeid ja õigusi saate hallata tarkvaras ja operatsioonisüsteemis. Projektifailide eksport ja seotud kustutamisvõimalused pole veel saadaval. Seaduslikke õigusi saab kasutada ametliku kanali kaudu pärast selle avaldamist.', 'Toote andmetöötluse küsimustes kasutage Suretroni ametliku veebisaidi kontakte. Eraldi privaatsuskontakt avaldatakse koos täisversiooniga.']
  },
  ms: {
    home: ['Lihat dan urus alamat pendek bagi peranti atau talian DALI. Konflik yang disyaki membantu pemeriksaan di lokasi.', 'Kami sedang meneliti bantuan AI masa depan untuk cadangan adegan, amaran anomali dan pentauliahan berpandu. Ciri ini belum tersedia dalam versi semasa.', 'HALA TUJU MASA DEPAN', 'Pratonton Windows boleh dimuat turun sekarang. Versi macOS dan mudah alih akan diumumkan apabila tersedia.', 'Perisian kejuruteraan untuk pencahayaan profesional'],
    downloads: ['Pratonton Windows boleh dimuat turun sekarang; muat turun macOS belum dibuka.', 'Sila tunggu keluaran gedung aplikasi yang akan datang untuk pengalaman mudah alih.', 'VERSI GEDUNG APLIKASI AKAN DATANG', 'Berita versi', 'Pratonton Windows semasa menyediakan penemuan pengawal, imbasan dan pengalamatan talian DALI, maklumat peranti, kumpulan, adegan serta kawalan lampu mengikut keupayaan peranti.'],
    info: ['DALI Control Platform menggabungkan penemuan dan pengurusan pengawal, pengalamatan DALI, kumpulan dan adegan, maklumat peranti, tetapan parameter lazim serta kawalan pemalapan dan warna DT8 yang disokong dalam satu ruang kerja.', 'Pratonton Windows boleh dimuat turun. Muat turun macOS belum dibuka; versi iPhone, iPad dan Android akan menyusul. Rujuk maklumat setiap keluaran untuk skop sokongan.', 'Kami sedang meneliti bantuan AI untuk memahami niat bahasa semula jadi, cadangan adegan, amaran anomali dan pentauliahan berpandu. Ciri ini belum tersedia sekarang.', 'Notis data versi pratonton', 'Dasar privasi muktamad akan diterbitkan bersama versi penuh perisian', 'Halaman ini menerangkan pemprosesan data produk semasa. Pengendali, hubungan privasi dan terma wilayah akan diumumkan bersama versi penuh. Untuk pertanyaan produk, gunakan laman rasmi Suretron.', 'Data konfigurasi seperti pengenal pengawal dan talian, alamat pendek, kumpulan, adegan serta parameter. Eksport fail projek dan petikan keadaan belum tersedia dalam versi semasa.', 'Aliran kerja semasa menggunakan Type-C, rangkaian setempat terkawal dan diagnosis pada peranti tanpa memerlukan akaun awan. Laman ini hanya menyimpan bahasa dan tema dalam pelayar serta tidak menggunakan analitik atau penjejak iklan.', 'Anda boleh mengurus data setempat dan kebenaran yang tersedia melalui perisian dan sistem pengendalian. Eksport fail projek dan kawalan pemadaman berkaitan belum tersedia. Hak privasi yang berkenaan boleh digunakan melalui saluran rasmi apabila diumumkan.', 'Untuk pertanyaan tentang data produk, gunakan maklumat hubungan di laman rasmi Suretron. Hubungan privasi khusus akan diumumkan bersama versi penuh.']
  },
  fil: {
    home: ['Tingnan at pamahalaan ang maiikling address ng bawat device o ng DALI line. Makakatulong ang posibleng banggaan ng address sa pagsusuri sa site.', 'Pinag-aaralan namin ang AI assistance para sa mungkahing scene, babala sa anomaly at gabay sa commissioning. Hindi pa available ang mga ito sa kasalukuyang bersyon.', 'DIREKSYON SA HINAHARAP', 'Maaari nang i-download ang Windows preview. Ia-anunsyo ang macOS at mobile kapag available na.', 'Engineering software para sa propesyonal na pag-iilaw'],
    downloads: ['Maaari nang i-download ang Windows preview; hindi pa bukas ang macOS download.', 'Hintayin ang susunod na app-store release para sa mobile companion experience.', 'SUSUNOD ANG APP-STORE RELEASE', 'Balita sa bersyon', 'Kasama sa kasalukuyang Windows preview ang pagtuklas ng controller, pag-scan at pag-address ng DALI line, impormasyon ng device, grupo, scene at kontrol ng ilaw kung suportado ng device.'],
    info: ['Pinagsasama ng DALI Control Platform ang pagtuklas at pamamahala ng controller, DALI addressing, grupo at scene, impormasyon ng device, karaniwang parameter at suportadong dimming at DT8 color control sa iisang workspace.', 'Maaari nang i-download ang Windows preview. Hindi pa bukas ang macOS download; susunod ang mga bersyon para sa iPhone, iPad at Android. Tingnan ang saklaw ng bawat release.', 'Pinag-aaralan namin ang AI assistance para sa natural-language intent, mungkahing scene, anomaly alert at gabay sa commissioning. Hindi pa available ang mga ito sa kasalukuyang bersyon.', 'Paunawa sa data ng preview', 'Ilalathala ang pinal na patakaran sa privacy kasama ng buong bersyon ng software', 'Inilalarawan dito ang pagproseso ng data ng kasalukuyang produkto. Ilalathala kasama ng buong bersyon ang operator, privacy contact at mga tuntunin sa bawat rehiyon. Para sa tanong tungkol sa produkto, gamitin ang opisyal na site ng Suretron.', 'Configuration data gaya ng controller at line identifier, maiikling address, grupo, scene at parameter. Hindi pa available sa kasalukuyang bersyon ang project-file export at snapshot.', 'Gumagamit ang kasalukuyang daloy ng Type-C, kontroladong lokal na network at diagnosis sa device nang hindi nangangailangan ng cloud account. Wika at tema lang ang iniimbak ng site sa browser; wala itong analytics o ad tracker.', 'Mapapamahalaan mo ang kasalukuyang available na lokal na data at pahintulot sa software at operating system. Hindi pa available ang project-file export at kaugnay na deletion control. Maaaring gamitin ang naaangkop na karapatan sa privacy sa opisyal na channel kapag nailathala na ito.', 'Para sa tanong tungkol sa data ng produkto, gamitin ang contact sa opisyal na site ng Suretron. Ilalathala ang nakalaang privacy contact kasama ng buong bersyon.']
  },
  vi: {
    home: ['Xem và quản lý địa chỉ ngắn của từng thiết bị hoặc toàn tuyến DALI. Các xung đột nghi ngờ giúp định hướng kiểm tra tại hiện trường.', 'Chúng tôi đang nghiên cứu hỗ trợ AI trong tương lai cho gợi ý cảnh, cảnh báo bất thường và hướng dẫn chạy thử. Các tính năng này chưa có trong phiên bản hiện tại.', 'ĐỊNH HƯỚNG TƯƠNG LAI', 'Bản xem trước Windows hiện có thể tải xuống. Phiên bản macOS và di động sẽ được công bố khi sẵn sàng.', 'Phần mềm kỹ thuật cho chiếu sáng chuyên nghiệp'],
    downloads: ['Bản xem trước Windows hiện có thể tải xuống; bản macOS chưa mở tải.', 'Vui lòng chờ phiên bản trên cửa hàng ứng dụng trong tương lai để sử dụng trải nghiệm di động.', 'PHIÊN BẢN CỬA HÀNG SẼ RA MẮT', 'Tin phiên bản', 'Bản xem trước Windows hiện có tính năng tìm bộ điều khiển, quét và gán địa chỉ tuyến DALI, xem thông tin thiết bị, nhóm, cảnh và điều khiển ánh sáng theo khả năng thiết bị.'],
    info: ['DALI Control Platform kết hợp tìm và quản lý bộ điều khiển, gán địa chỉ DALI, nhóm và cảnh, thông tin thiết bị, cài đặt thông số thông dụng cùng điều chỉnh sáng và màu DT8 khi được hỗ trợ trong một không gian làm việc.', 'Bản xem trước Windows hiện có thể tải xuống. Bản macOS chưa mở tải; phiên bản iPhone, iPad và Android sẽ ra mắt sau. Vui lòng xem phạm vi hỗ trợ của từng bản phát hành.', 'Chúng tôi đang nghiên cứu hỗ trợ AI cho ý định ngôn ngữ tự nhiên, gợi ý cảnh, cảnh báo bất thường và hướng dẫn chạy thử. Các tính năng này chưa có trong phiên bản hiện tại.', 'Thông báo dữ liệu bản xem trước', 'Chính sách quyền riêng tư chính thức sẽ được công bố cùng bản phần mềm hoàn chỉnh', 'Trang này mô tả cách sản phẩm hiện tại xử lý dữ liệu. Đơn vị vận hành, liên hệ về quyền riêng tư và điều khoản theo khu vực sẽ được công bố cùng bản hoàn chỉnh. Với câu hỏi về sản phẩm, hãy dùng trang chính thức của Suretron.', 'Dữ liệu cấu hình như mã bộ điều khiển và tuyến, địa chỉ ngắn, nhóm, cảnh và thông số. Xuất tệp dự án và ảnh chụp trạng thái chưa có trong phiên bản hiện tại.', 'Quy trình hiện tại dùng Type-C, mạng cục bộ có kiểm soát và chẩn đoán trên thiết bị mà không cần tài khoản đám mây. Trang web chỉ lưu ngôn ngữ và chủ đề trong trình duyệt, không dùng công cụ phân tích hoặc theo dõi quảng cáo.', 'Bạn có thể quản lý dữ liệu cục bộ và quyền hiện có trong phần mềm hoặc hệ điều hành. Tính năng xuất tệp dự án và xóa dữ liệu liên quan chưa được cung cấp. Các quyền riêng tư theo luật có thể thực hiện qua kênh chính thức sau khi được công bố.', 'Với câu hỏi về dữ liệu sản phẩm, hãy dùng thông tin liên hệ trên trang chính thức của Suretron. Địa chỉ liên hệ riêng về quyền riêng tư sẽ được công bố cùng bản hoàn chỉnh.']
  },
  tr: {
    home: ['Tek tek cihazların veya DALI hattının kısa adreslerini görüntüleyin ve yönetin. Olası çakışmalar sahadaki kontrolleri yönlendirmeye yardımcı olur.', 'Sahne önerileri, anormallik uyarıları ve yönlendirmeli devreye alma için gelecekte AI desteğini değerlendiriyoruz. Bu özellikler mevcut sürümde sunulmuyor.', 'GELECEK YÖNÜ', 'Windows önizlemesi şimdi indirilebilir. macOS ve mobil sürümler kullanıma açıldığında duyurulacak.', 'Profesyonel aydınlatma için mühendislik yazılımı'],
    downloads: ['Windows önizlemesi indirilebilir; macOS indirmesi henüz açılmadı.', 'Mobil deneyim için ilerideki uygulama mağazası sürümünü bekleyin.', 'UYGULAMA MAĞAZASI SÜRÜMÜ SONRA', 'Sürüm haberleri', 'Mevcut Windows önizlemesi kontrolör keşfi, DALI hattı tarama ve adresleme, cihaz bilgileri, gruplar, sahneler ve cihazın desteklediği aydınlatma denetimini sunar.'],
    info: ['DALI Control Platform; kontrolör keşfi ve yönetimi, DALI adresleme, gruplar ve sahneler, cihaz bilgileri, yaygın parametre ayarları ile desteklenen karartma ve DT8 renk kontrolünü tek çalışma alanında birleştirir.', 'Windows önizlemesi indirilebilir. macOS indirmesi henüz açılmadı; iPhone, iPad ve Android sürümleri daha sonra sunulacak. Destek kapsamı için ilgili sürüm bilgilerine bakın.', 'Doğal dilde niyet, sahne önerileri, anormallik uyarıları ve yönlendirmeli devreye alma için AI desteğini değerlendiriyoruz. Bu özellikler mevcut sürümde sunulmuyor.', 'Önizleme veri bildirimi', 'Kesin gizlilik politikası tam yazılım sürümüyle yayımlanacak', 'Bu sayfa mevcut ürünün verileri nasıl işlediğini açıklar. İşletmeci, gizlilik iletişimi ve bölgesel şartlar tam sürümle duyurulacak. Ürün soruları için resmi Suretron sitesini kullanın.', 'Kontrolör ve hat kimlikleri, kısa adresler, gruplar, sahneler ve parametreler gibi mühendislik yapılandırma verileri. Proje dosyası dışa aktarımı ve anlık görüntüler mevcut sürümde yoktur.', 'Mevcut iş akışları Type-C, kontrollü yerel ağlar ve cihaz üzerindeki tanılamayı kullanır; bulut hesabı gerekmez. Bu site tarayıcıda yalnızca dil ve tema tercihlerini saklar, analiz veya reklam izleyicisi kullanmaz.', 'Mevcut yerel verileri ve izinleri yazılım ve işletim sistemi üzerinden yönetebilirsiniz. Proje dosyası dışa aktarımı ve ilgili silme kontrolleri henüz sunulmamaktadır. Yasal gizlilik hakları resmi kanal yayımlandıktan sonra kullanılabilir.', 'Ürün verileriyle ilgili sorular için resmi Suretron sitesindeki iletişim bilgilerini kullanın. Özel gizlilik iletişimi tam sürümle duyurulacak.']
  }
};

const privacyDetailKeys = ['privacyScopeBody', 'privacyPrinciple2', 'privacyDataDeviceBody', 'privacyPurposeBody', 'privacyPermissionsBody', 'privacyAiBody'];
const privacyDetailTranslations = {
  'zh-Hans': [
    '本说明涵盖当前桌面工程软件与配套 DALI 控制器或网关之间的连接、配置、诊断和技术支持。后续平台的具体数据处理方式，以该平台发布时的说明为准。第三方系统和服务适用其自身规则。',
    '优先在用户设备与受控局域网内处理工程数据。',
    '局域网地址、连接状态、软件与固件版本、设备能力及相关操作记录。',
    '相关信息用于发现和连接控制器、执行当前提供的配置与控制、显示状态、诊断问题，以及提供您请求的支持。我们不会出售个人信息或用于广告画像。',
    '根据当前使用的功能，软件可能请求本地网络访问或连接配套设备的权限。您可以在操作系统中管理这些权限；拒绝后相应功能可能无法使用。未来如提供文件功能，会另行说明所需权限。',
    'AI 辅助功能尚未开放，当前产品不会因本页的 AI 介绍而上传工程数据。未来如引入云端分析或模型服务，我们会在启用前说明数据范围、处理位置、保留期限和可用选择。'
  ],
  'zh-Hant': [
    '本說明涵蓋目前桌面工程軟件與配套 DALI 控制器或網關之間的連線、設定、診斷及技術支援。後續平台的資料處理方式，以該平台推出時的說明為準。第三方系統和服務適用其自身規則。',
    '優先在使用者裝置與受控區域網路內處理工程資料。',
    '區域網路位址、連線狀態、軟件與韌體版本、裝置能力及相關操作紀錄。',
    '相關資訊用於搜尋和連線控制器、執行目前提供的設定與控制、顯示狀態、診斷問題，以及提供您要求的支援。我們不會出售個人資料或用於廣告分類。',
    '視目前使用的功能，軟件可能要求區域網路存取或連線配套裝置的權限。您可在作業系統中管理這些權限；拒絕後相關功能可能無法使用。未來如提供檔案功能，會另行說明所需權限。',
    'AI 輔助功能尚未開放，目前產品不會因本頁的 AI 介紹而上傳工程資料。未來如引入雲端分析或模型服務，我們會在啟用前說明資料範圍、處理位置、保留期限及可用選擇。'
  ],
  en: [
    'This notice covers connections, configuration, diagnostics and support between the current desktop engineering software and companion DALI controllers or gateways. Data practices for future platforms will be explained when those versions are released. Third-party systems and services follow their own terms.',
    'Prefer processing engineering data on the user device and within controlled local networks.',
    'Local network addresses, connection state, software and firmware versions, device capabilities and relevant operation records.',
    'Information is used to discover and connect controllers, perform currently available configuration and control, show status, diagnose issues and provide support you request. We do not sell personal information or use it for advertising profiles.',
    'Depending on the feature in use, the software may request local network or companion-device access. You can manage permissions in your operating system; denying them may prevent related functions from working. File permissions will be explained if file features are released.',
    'AI assistance is not yet available, and the AI information on this site does not mean engineering data is currently uploaded. If cloud analysis or model services are introduced, we will explain the data scope, processing location, retention and available choices before activation.'
  ],
  ja: [
    '本通知は、現在のデスクトップ版と対応 DALI コントローラー間の接続、設定、診断、サポートを対象とします。将来のプラットフォームでのデータ取扱いは公開時に案内します。第三者のシステムやサービスには各自の規約が適用されます。',
    'エンジニアリングデータは、ユーザー端末と管理されたローカルネットワーク内での処理を優先します。',
    'ローカルネットワークアドレス、接続状態、ソフトウェアとファームウェアの版、機器能力、関連する操作記録。',
    '情報は、コントローラーの検出と接続、現在利用できる設定と制御、状態表示、問題診断、依頼されたサポートに使用します。個人情報の販売や広告用プロファイルには使用しません。',
    '利用する機能に応じて、ローカルネットワークや対応機器への接続権限を求める場合があります。OS で管理でき、拒否すると関連機能を利用できない場合があります。ファイル機能の権限は提供時に説明します。',
    'AI 支援はまだ利用できず、このサイトの AI 紹介によって現在のエンジニアリングデータがアップロードされることはありません。将来クラウド解析やモデルサービスを導入する場合は、開始前にデータ範囲、処理場所、保持期間、選択肢を説明します。'
  ],
  ko: [
    '이 안내는 현재 데스크톱 소프트웨어와 연동 DALI 컨트롤러 사이의 연결, 설정, 진단 및 지원을 다룹니다. 향후 플랫폼의 데이터 처리 방식은 해당 버전 출시 시 안내합니다. 제3자 시스템과 서비스에는 자체 조건이 적용됩니다.',
    '엔지니어링 데이터는 사용자 기기와 통제된 로컬 네트워크 안에서 우선 처리합니다.',
    '로컬 네트워크 주소, 연결 상태, 소프트웨어 및 펌웨어 버전, 장치 기능과 관련 작업 기록.',
    '정보는 컨트롤러 검색과 연결, 현재 제공되는 설정 및 제어, 상태 표시, 문제 진단과 요청한 지원에 사용됩니다. 개인정보를 판매하거나 광고 프로필에 사용하지 않습니다.',
    '사용하는 기능에 따라 로컬 네트워크 또는 연동 장치 접근 권한을 요청할 수 있습니다. 운영체제에서 관리할 수 있으며 거부하면 관련 기능이 작동하지 않을 수 있습니다. 파일 기능의 권한은 출시 시 별도로 안내합니다.',
    'AI 지원은 아직 제공되지 않으며 이 사이트의 AI 소개로 현재 엔지니어링 데이터가 업로드되는 것은 아닙니다. 향후 클라우드 분석이나 모델 서비스를 도입하면 활성화 전에 데이터 범위, 처리 위치, 보관 기간과 선택 사항을 안내합니다.'
  ],
  fr: [
    'Cet avis couvre les connexions, la configuration, le diagnostic et l’assistance entre le logiciel de bureau actuel et les contrôleurs DALI compatibles. Le traitement des données des futures plateformes sera précisé à leur sortie. Les services tiers suivent leurs propres conditions.',
    'Privilégier le traitement des données techniques sur l’appareil utilisateur et les réseaux locaux contrôlés.',
    'Adresses réseau locales, état de connexion, versions du logiciel et du micrologiciel, capacités des appareils et opérations pertinentes.',
    'Les informations servent à détecter et connecter les contrôleurs, effectuer les réglages et commandes actuellement disponibles, afficher l’état, diagnostiquer les problèmes et fournir l’assistance demandée. Nous ne vendons pas les données personnelles ni ne les utilisons pour le profilage publicitaire.',
    'Selon la fonction utilisée, le logiciel peut demander l’accès au réseau local ou aux appareils associés. Vous pouvez gérer ces autorisations dans le système ; un refus peut empêcher la fonction. Les autorisations de fichiers seront expliquées si ces fonctions sont publiées.',
    'L’assistance IA n’est pas encore disponible et les informations IA du site ne signifient pas que les données techniques sont actuellement téléversées. Si des services cloud ou de modèles sont introduits, nous expliquerons avant activation les données, le lieu de traitement, la conservation et les choix possibles.'
  ],
  de: [
    'Dieser Hinweis gilt für Verbindung, Konfiguration, Diagnose und Support zwischen der aktuellen Desktop-Software und passenden DALI-Controllern. Datenpraktiken künftiger Plattformen werden bei deren Veröffentlichung erläutert. Für Drittsysteme gelten deren eigene Bedingungen.',
    'Engineering-Daten werden bevorzugt auf dem Nutzergerät und in kontrollierten lokalen Netzwerken verarbeitet.',
    'Lokale Netzwerkadressen, Verbindungsstatus, Software- und Firmwareversionen, Gerätefunktionen und relevante Bedienprotokolle.',
    'Daten dienen dem Finden und Verbinden von Controllern, aktuell verfügbaren Einstellungen und Steuerungen, der Statusanzeige, Fehlerdiagnose und angeforderter Unterstützung. Wir verkaufen keine personenbezogenen Daten und verwenden sie nicht für Werbeprofile.',
    'Je nach Funktion kann die Software Zugriff auf das lokale Netzwerk oder verbundene Geräte anfordern. Sie verwalten diese Rechte im Betriebssystem; ohne Zugriff funktionieren betroffene Funktionen möglicherweise nicht. Dateiberechtigungen werden bei Veröffentlichung solcher Funktionen erklärt.',
    'KI-Unterstützung ist noch nicht verfügbar; die KI-Informationen dieser Website bedeuten keine derzeitige Übertragung von Engineering-Daten. Bei künftigen Cloud- oder Modelldiensten erläutern wir vor der Aktivierung Datenumfang, Verarbeitungsort, Aufbewahrung und Wahlmöglichkeiten.'
  ],
  es: [
    'Este aviso cubre conexiones, configuración, diagnóstico y asistencia entre el software de escritorio actual y los controladores DALI compatibles. El tratamiento de datos de futuras plataformas se explicará al publicarlas. Los servicios de terceros siguen sus propias condiciones.',
    'Priorizar el tratamiento de datos técnicos en el dispositivo del usuario y en redes locales controladas.',
    'Direcciones de red local, estado de conexión, versiones de software y firmware, capacidades del dispositivo y registros de operación pertinentes.',
    'Los datos se usan para encontrar y conectar controladores, realizar las configuraciones y controles disponibles, mostrar el estado, diagnosticar problemas y prestar la asistencia solicitada. No vendemos datos personales ni los usamos para perfiles publicitarios.',
    'Según la función utilizada, el software puede solicitar acceso a la red local o a dispositivos asociados. Puedes gestionar los permisos en el sistema operativo; denegarlos puede impedir la función. Los permisos de archivos se explicarán si se publican esas funciones.',
    'La ayuda de IA todavía no está disponible y la información sobre IA de este sitio no significa que se suban ahora datos técnicos. Si se introducen servicios en la nube o de modelos, explicaremos antes de activarlos los datos, el lugar de tratamiento, la conservación y las opciones disponibles.'
  ],
  pt: [
    'Este aviso abrange ligações, configuração, diagnóstico e apoio entre o software de desktop atual e controladores DALI compatíveis. O tratamento de dados de futuras plataformas será explicado quando forem lançadas. Serviços de terceiros seguem os seus próprios termos.',
    'Privilegiar o tratamento dos dados de engenharia no dispositivo do utilizador e em redes locais controladas.',
    'Endereços de rede local, estado de ligação, versões de software e firmware, capacidades dos dispositivos e registos de operações relevantes.',
    'Os dados são usados para encontrar e ligar controladores, realizar configurações e comandos atualmente disponíveis, mostrar estados, diagnosticar problemas e prestar o apoio solicitado. Não vendemos dados pessoais nem os utilizamos para perfis publicitários.',
    'Conforme a função, o software pode pedir acesso à rede local ou a dispositivos associados. Pode gerir permissões no sistema operativo; recusá-las pode impedir a função. As permissões de ficheiros serão explicadas se essas funções forem lançadas.',
    'A assistência de IA ainda não está disponível e a informação sobre IA neste site não significa que dados de engenharia sejam atualmente carregados. Se forem introduzidos serviços cloud ou de modelos, explicaremos antes da ativação os dados, o local de tratamento, a retenção e as opções.'
  ],
  nl: [
    'Deze melding gaat over verbinding, configuratie, diagnose en ondersteuning tussen de huidige desktopsoftware en bijbehorende DALI-controllers. Het gegevensgebruik van toekomstige platforms wordt bij hun uitgave uitgelegd. Voor systemen van derden gelden hun eigen voorwaarden.',
    'Technische gegevens worden bij voorkeur op het apparaat van de gebruiker en binnen beheerde lokale netwerken verwerkt.',
    'Lokale netwerkadressen, verbindingsstatus, software- en firmwareversies, apparaatmogelijkheden en relevante gebruiksregistraties.',
    'Gegevens worden gebruikt om controllers te vinden en verbinden, beschikbare instellingen en bediening uit te voeren, status te tonen, problemen vast te stellen en gevraagde ondersteuning te bieden. We verkopen geen persoonsgegevens en gebruiken ze niet voor advertentieprofielen.',
    'Afhankelijk van de functie kan de software toegang tot het lokale netwerk of gekoppelde apparaten vragen. U beheert rechten in het besturingssysteem; weigeren kan de functie blokkeren. Bestandsrechten worden toegelicht als zulke functies beschikbaar komen.',
    'AI-hulp is nog niet beschikbaar; de AI-informatie op deze site betekent niet dat technische gegevens nu worden geüpload. Bij toekomstige cloud- of modeldiensten lichten we vóór inschakeling de gegevens, verwerkingslocatie, bewaartermijn en keuzes toe.'
  ],
  it: [
    'Questa informativa riguarda connessione, configurazione, diagnostica e supporto tra il software desktop attuale e i controller DALI compatibili. Il trattamento dei dati delle piattaforme future sarà spiegato al loro rilascio. Ai servizi di terzi si applicano le rispettive condizioni.',
    'Preferiamo trattare i dati tecnici sul dispositivo dell’utente e nelle reti locali controllate.',
    'Indirizzi di rete locale, stato della connessione, versioni di software e firmware, capacità dei dispositivi e registrazioni operative pertinenti.',
    'I dati servono a trovare e collegare controller, svolgere configurazione e controllo attualmente disponibili, mostrare lo stato, diagnosticare problemi e fornire il supporto richiesto. Non vendiamo dati personali né li usiamo per profili pubblicitari.',
    'In base alla funzione, il software può chiedere l’accesso alla rete locale o ai dispositivi associati. Puoi gestire i permessi nel sistema operativo; negarli può impedire la funzione. I permessi sui file saranno spiegati se queste funzioni verranno pubblicate.',
    'L’assistenza AI non è ancora disponibile e le informazioni AI sul sito non significano che ora vengano caricati dati tecnici. Se introdurremo servizi cloud o modelli, spiegheremo prima dell’attivazione dati, luogo di trattamento, conservazione e opzioni disponibili.'
  ],
  el: [
    'Η παρούσα ενημέρωση καλύπτει σύνδεση, ρύθμιση, διάγνωση και υποστήριξη μεταξύ του σημερινού λογισμικού υπολογιστή και συμβατών ελεγκτών DALI. Η διαχείριση δεδομένων μελλοντικών πλατφορμών θα εξηγηθεί κατά την κυκλοφορία τους. Για τρίτες υπηρεσίες ισχύουν οι δικοί τους όροι.',
    'Προτιμούμε η επεξεργασία τεχνικών δεδομένων να γίνεται στη συσκευή του χρήστη και σε ελεγχόμενα τοπικά δίκτυα.',
    'Τοπικές διευθύνσεις δικτύου, κατάσταση σύνδεσης, εκδόσεις λογισμικού και υλικολογισμικού, δυνατότητες συσκευών και σχετικά αρχεία ενεργειών.',
    'Οι πληροφορίες χρησιμοποιούνται για εντοπισμό και σύνδεση ελεγκτών, διαθέσιμες ρυθμίσεις και έλεγχο, εμφάνιση κατάστασης, διάγνωση προβλημάτων και υποστήριξη που ζητάτε. Δεν πωλούμε προσωπικά δεδομένα ούτε τα χρησιμοποιούμε για διαφημιστικά προφίλ.',
    'Ανάλογα με τη λειτουργία, το λογισμικό μπορεί να ζητήσει πρόσβαση σε τοπικό δίκτυο ή συμβατές συσκευές. Μπορείτε να διαχειριστείτε τις άδειες στο λειτουργικό· η άρνηση μπορεί να εμποδίσει τη λειτουργία. Άδειες αρχείων θα εξηγηθούν αν κυκλοφορήσουν σχετικές λειτουργίες.',
    'Η βοήθεια AI δεν είναι ακόμη διαθέσιμη και οι αναφορές AI στον ιστότοπο δεν σημαίνουν ότι μεταφορτώνονται τώρα τεχνικά δεδομένα. Αν εισαχθούν υπηρεσίες cloud ή μοντέλων, θα εξηγήσουμε πριν την ενεργοποίηση τα δεδομένα, τον τόπο επεξεργασίας, τη διατήρηση και τις επιλογές.'
  ],
  et: [
    'See teade hõlmab praeguse töölauatarkvara ja sobivate DALI-kontrollerite ühendust, seadistamist, diagnostikat ning tuge. Tulevaste platvormide andmekasutust selgitatakse nende ilmumisel. Kolmandate osapoolte teenustele kehtivad nende tingimused.',
    'Eelistame tehnilisi andmeid töödelda kasutaja seadmes ja kontrollitud kohalikes võrkudes.',
    'Kohalikud võrguaadressid, ühenduse olek, tarkvara- ja püsivaraversioonid, seadmete võimalused ning asjakohased toimingukirjed.',
    'Andmeid kasutatakse kontrollerite leidmiseks ja ühendamiseks, praegu saadaolevaks seadistamiseks ja juhtimiseks, oleku näitamiseks, probleemide tuvastamiseks ning tellitud toe osutamiseks. Me ei müü isikuandmeid ega kasuta neid reklaamiprofiilideks.',
    'Sõltuvalt funktsioonist võib tarkvara küsida ligipääsu kohalikule võrgule või ühendatud seadmele. Õigusi saab hallata operatsioonisüsteemis; keeldumine võib funktsiooni takistada. Failiõigusi selgitatakse, kui vastavad võimalused ilmuvad.',
    'Tehisintellekti abi ei ole veel saadaval ja selle saidi AI-teave ei tähenda, et tehnilisi andmeid praegu üles laaditakse. Kui tulevad pilve- või mudeliteenused, selgitame enne aktiveerimist andmete ulatust, töötlemiskohta, säilitamist ja valikuid.'
  ],
  ms: [
    'Notis ini meliputi sambungan, konfigurasi, diagnosis dan sokongan antara perisian desktop semasa dengan pengawal DALI yang serasi. Amalan data bagi platform masa depan akan dijelaskan apabila dikeluarkan. Sistem pihak ketiga tertakluk pada terma mereka sendiri.',
    'Utamakan pemprosesan data kejuruteraan pada peranti pengguna dan dalam rangkaian setempat terkawal.',
    'Alamat rangkaian setempat, status sambungan, versi perisian dan perisian tegar, keupayaan peranti serta rekod operasi berkaitan.',
    'Maklumat digunakan untuk mencari dan menyambungkan pengawal, menjalankan tetapan dan kawalan yang tersedia sekarang, memaparkan status, mendiagnosis masalah serta memberi sokongan yang diminta. Kami tidak menjual data peribadi atau menggunakannya untuk profil iklan.',
    'Bergantung pada fungsi, perisian mungkin meminta akses rangkaian setempat atau peranti berkaitan. Anda boleh mengurus kebenaran dalam sistem pengendalian; penolakan mungkin menghalang fungsi tersebut. Kebenaran fail akan dijelaskan jika fungsi fail dikeluarkan.',
    'Bantuan AI belum tersedia dan maklumat AI di laman ini tidak bermakna data kejuruteraan sedang dimuat naik. Jika perkhidmatan awan atau model diperkenalkan, kami akan menerangkan skop data, tempat pemprosesan, tempoh simpanan dan pilihan sebelum pengaktifan.'
  ],
  fil: [
    'Saklaw ng paunawang ito ang koneksyon, configuration, diagnosis at suporta sa pagitan ng kasalukuyang desktop software at mga katugmang DALI controller. Ipapaliwanag ang paggamit ng data sa mga susunod na platform sa paglabas ng mga ito. May sariling tuntunin ang mga third-party service.',
    'Mas inuuna ang pagproseso ng engineering data sa device ng user at sa kontroladong lokal na network.',
    'Mga lokal na network address, estado ng koneksyon, bersyon ng software at firmware, kakayahan ng device at kaugnay na tala ng operasyon.',
    'Ginagamit ang impormasyon upang mahanap at ikonekta ang controller, gawin ang kasalukuyang available na configuration at control, ipakita ang estado, suriin ang problema at magbigay ng hiniling na suporta. Hindi kami nagbebenta ng personal na data o gumagawa ng ad profile.',
    'Depende sa feature, maaaring humingi ang software ng access sa lokal na network o kaugnay na device. Mapapamahalaan mo ang pahintulot sa operating system; maaaring hindi gumana ang feature kapag tinanggihan. Ipapaliwanag ang file permission kapag inilabas ang kaugnay na feature.',
    'Hindi pa available ang AI assistance at hindi ibig sabihin ng AI content sa site na ina-upload na ngayon ang engineering data. Kung magpakilala ng cloud o model service, ipapaliwanag muna ang saklaw ng data, lugar ng pagproseso, pananatili at mga pagpipilian.'
  ],
  vi: [
    'Thông báo này áp dụng cho kết nối, cấu hình, chẩn đoán và hỗ trợ giữa phần mềm máy tính hiện tại với bộ điều khiển DALI tương thích. Cách xử lý dữ liệu trên nền tảng tương lai sẽ được giải thích khi phát hành. Hệ thống bên thứ ba theo điều khoản riêng.',
    'Ưu tiên xử lý dữ liệu kỹ thuật trên thiết bị người dùng và trong mạng cục bộ có kiểm soát.',
    'Địa chỉ mạng cục bộ, trạng thái kết nối, phiên bản phần mềm và firmware, khả năng thiết bị cùng các bản ghi thao tác liên quan.',
    'Thông tin được dùng để tìm và kết nối bộ điều khiển, thực hiện cấu hình và điều khiển hiện có, hiển thị trạng thái, chẩn đoán sự cố và hỗ trợ theo yêu cầu. Chúng tôi không bán dữ liệu cá nhân hay dùng để lập hồ sơ quảng cáo.',
    'Tùy tính năng, phần mềm có thể yêu cầu quyền truy cập mạng cục bộ hoặc thiết bị liên quan. Bạn có thể quản lý quyền trong hệ điều hành; từ chối có thể khiến tính năng không hoạt động. Quyền tệp sẽ được giải thích nếu có tính năng liên quan.',
    'Hỗ trợ AI hiện chưa có và nội dung AI trên trang không có nghĩa dữ liệu kỹ thuật đang được tải lên. Nếu sau này có dịch vụ đám mây hoặc mô hình, chúng tôi sẽ giải thích phạm vi dữ liệu, nơi xử lý, thời gian lưu và lựa chọn trước khi kích hoạt.'
  ],
  tr: [
    'Bu bildirim mevcut masaüstü yazılımı ile uyumlu DALI kontrolörleri arasındaki bağlantı, yapılandırma, tanılama ve desteği kapsar. Gelecek platformların veri kullanımı yayımlandıklarında açıklanacaktır. Üçüncü taraf hizmetlere kendi koşulları uygulanır.',
    'Mühendislik verilerini öncelikle kullanıcının cihazında ve kontrollü yerel ağlarda işleriz.',
    'Yerel ağ adresleri, bağlantı durumu, yazılım ve ürün yazılımı sürümleri, cihaz yetenekleri ve ilgili işlem kayıtları.',
    'Veriler kontrolörleri bulup bağlamak, şu anda sunulan ayar ve denetimleri gerçekleştirmek, durumu göstermek, sorunları tanılamak ve talep edilen desteği sağlamak için kullanılır. Kişisel verileri satmayız veya reklam profilleri için kullanmayız.',
    'Kullanılan özelliğe göre yazılım yerel ağa veya bağlı cihaza erişim isteyebilir. İzinleri işletim sisteminde yönetebilirsiniz; reddetmek ilgili işlevi engelleyebilir. Dosya izinleri, dosya özellikleri yayımlanırsa açıklanacaktır.',
    'AI desteği henüz sunulmuyor; sitedeki AI bilgisi teknik verilerin şimdi yüklendiği anlamına gelmez. Bulut veya model hizmetleri sunulursa veri kapsamını, işleme yerini, saklama süresini ve seçenekleri etkinleştirmeden önce açıklayacağız.'
  ]
};

globalThis.daliCustomerCopy = Object.fromEntries(Object.entries(customerCopyTranslations).map(([locale, sections]) => {
  const localized = {};
  for (const [section, keys] of Object.entries(customerCopyKeys)) {
    if (sections[section]?.length !== keys.length) throw new Error(`Incomplete ${locale} ${section} customer copy`);
    localized[section] = Object.fromEntries(keys.map((key, index) => [key, sections[section][index]]));
  }
  if (privacyDetailTranslations[locale]?.length !== privacyDetailKeys.length) throw new Error(`Incomplete ${locale} privacy copy`);
  Object.assign(localized.info, Object.fromEntries(privacyDetailKeys.map((key, index) => [key, privacyDetailTranslations[locale][index]])));
  return [locale, localized];
}));

const customerClaimKeys = {
  home: ['market.office.body', 'capability.control.body', 'platform.title'],
  info: ['aboutLead', 'aboutFactWindows', 'privacyRightsBody', 'privacySecurityBody']
};

const customerClaimTranslations = {
  'zh-Hans': {
    home: ["让分组与场景适应空间的不同使用方式。", "按设备支持情况，对广播、分组或单地址目标执行开关、调光及 DT8 色彩控制。", "从 Windows 开始，<em>逐步延伸至更多平台。</em>"],
    info: ["面向专业照明工程，将配套控制器、DALI 配置与现场维护整合为清晰的工程体验。", "预览版可下载", "您可以在软件和操作系统中管理当前可用的本地数据与权限。工程文件导出与相关删除功能尚未开放。如需咨询个人信息处理或行使适用法律下的权利，请通过圣昌官网公布的联系渠道联系我们。", "本地处理和受控网络有助于降低数据暴露风险。请保护设备、网络及系统访问权限，并审慎分享诊断资料。任何技术措施都不能保证绝对安全。"]
  },
  'zh-Hant': {
    home: ["讓群組與場景配合空間的不同使用方式。", "依裝置支援情況，對廣播、群組或單一位址目標進行開關、調光及 DT8 色彩控制。", "從 Windows 開始，<em>逐步延伸至更多平台。</em>"],
    info: ["面向專業照明工程，將配套控制器、DALI 設定與現場維護整合為清晰的工程體驗。", "預覽版可下載", "您可透過軟件和作業系統管理目前提供的本機資料與權限。工程檔案匯出及相關刪除功能尚未開放。如需諮詢個人資料處理或行使適用法律下的權利，請透過聖昌官網公布的聯絡管道聯絡我們。", "本機處理與受控網路有助減少資料外洩風險。請保護裝置、網路和系統存取權限，並審慎分享診斷資料。任何技術措施都不能保證絕對安全。"]
  },
  en: {
    home: ["Adapt groups and scenes to different ways a space is used.", "Switch, dim and control DT8 colour for broadcast, group or single-address targets where supported by the device.", "Starting with Windows, <em>growing across platforms.</em>"],
    info: ["Companion controllers, DALI configuration and field maintenance come together in a clear engineering experience for professional lighting projects.", "preview available to download", "You can manage currently available local data and permissions through the software and operating system. Project-file export and related deletion controls are not yet available. For personal-data questions or applicable rights requests, use the contact details on the official Suretron website.", "Local processing and controlled networks help limit data exposure. Protect devices, networks and system access, and share diagnostic material carefully. No technical measure can guarantee absolute security."]
  },
  ja: {
    home: ["空間の使い方に合わせてグループとシーンを調整できます。", "対応する機器では、ブロードキャスト、グループ、単一アドレスを対象にオンオフ、調光、DT8 カラー制御を行えます。", "Windows から始め、<em>対応プラットフォームを広げます。</em>"],
    info: ["対応コントローラー、DALI 設定、現場保守を専門照明向けの分かりやすい作業体験にまとめます。", "プレビュー版をダウンロード可能", "現在利用できるローカルデータと権限は、ソフトウェアと OS で管理できます。プロジェクトファイルの書き出しと関連する削除機能は未提供です。個人データに関する質問や法令上の権利行使は、Suretron 公式サイトの連絡先からお問い合わせください。", "ローカル処理と管理されたネットワークは、データ露出の抑制に役立ちます。機器、ネットワーク、システムへのアクセスを保護し、診断資料は慎重に共有してください。絶対的な安全を保証する技術はありません。"]
  },
  ko: {
    home: ["공간의 다양한 사용 방식에 맞게 그룹과 장면을 조정하세요.", "장치가 지원하는 경우 브로드캐스트, 그룹 또는 개별 주소를 대상으로 켜기·끄기, 디밍 및 DT8 색상 제어를 사용할 수 있습니다.", "Windows에서 시작해 <em>지원 플랫폼을 넓혀 갑니다.</em>"],
    info: ["연동 컨트롤러, DALI 설정과 현장 유지관리를 전문 조명 프로젝트를 위한 명확한 작업 경험으로 연결합니다.", "미리 보기 다운로드 가능", "현재 제공되는 로컬 데이터와 권한은 소프트웨어 및 운영체제에서 관리할 수 있습니다. 프로젝트 파일 내보내기와 관련 삭제 기능은 아직 제공되지 않습니다. 개인정보 문의 또는 법률상 권리 요청은 Suretron 공식 사이트의 연락처를 이용해 주세요.", "로컬 처리와 통제된 네트워크는 데이터 노출 위험을 줄이는 데 도움이 됩니다. 장치, 네트워크와 시스템 접근을 보호하고 진단 자료를 신중하게 공유하세요. 어떤 기술도 절대적인 보안을 보장하지는 않습니다."]
  },
  fr: {
    home: ["Adaptez groupes et scènes aux différents usages d’un espace.", "Selon les capacités de l’appareil, commandez marche/arrêt, gradation et couleur DT8 par diffusion, groupe ou adresse individuelle.", "À partir de Windows, <em>vers davantage de plateformes.</em>"],
    info: ["Contrôleurs associés, configuration DALI et maintenance sur site forment une expérience claire pour les projets d’éclairage professionnels.", "préversion téléchargeable", "Vous pouvez gérer les données locales et autorisations actuellement disponibles dans le logiciel et le système. L’export des fichiers projet et les commandes de suppression associées ne sont pas encore disponibles. Pour toute question sur vos données personnelles ou l’exercice de vos droits, utilisez les coordonnées du site officiel Suretron.", "Le traitement local et les réseaux maîtrisés contribuent à limiter l’exposition des données. Protégez les appareils, les réseaux et les accès au système, et partagez les diagnostics avec prudence. Aucune mesure technique ne garantit une sécurité absolue."]
  },
  de: {
    home: ["Passen Sie Gruppen und Szenen an die unterschiedliche Nutzung eines Raums an.", "Sofern das Gerät dies unterstützt, steuern Sie Schalten, Dimmen und DT8-Farbe per Broadcast, Gruppe oder Einzeladresse.", "Beginnend mit Windows, <em>schrittweise auf weiteren Plattformen.</em>"],
    info: ["Passende Controller, DALI-Konfiguration und Wartung vor Ort bilden einen klaren Arbeitsablauf für professionelle Beleuchtungsprojekte.", "Vorschau zum Download verfügbar", "Verfügbare lokale Daten und Berechtigungen können Sie in Software und Betriebssystem verwalten. Projektdatei-Export und zugehörige Löschfunktionen sind noch nicht verfügbar. Fragen zu personenbezogenen Daten oder Anfragen zu gesetzlichen Rechten richten Sie bitte über die Kontaktdaten auf der offiziellen Suretron-Website an uns.", "Lokale Verarbeitung und kontrollierte Netzwerke helfen, Datenrisiken zu begrenzen. Schützen Sie Geräte, Netzwerke und Systemzugänge und teilen Sie Diagnosematerial mit Bedacht. Keine technische Maßnahme garantiert absolute Sicherheit."]
  },
  es: {
    home: ["Adapta grupos y escenas a las distintas formas de uso de un espacio.", "Cuando el dispositivo lo permite, controla encendido, atenuación y color DT8 por difusión, grupo o dirección individual.", "Empezamos por Windows <em>y avanzamos hacia más plataformas.</em>"],
    info: ["Los controladores asociados, la configuración DALI y el mantenimiento en campo forman una experiencia clara para proyectos de iluminación profesional.", "versión preliminar descargable", "Puedes gestionar los datos locales y permisos disponibles mediante el software y el sistema operativo. La exportación de archivos de proyecto y los controles de eliminación asociados aún no están disponibles. Para consultas sobre datos personales o solicitudes de derechos legales, utiliza los datos de contacto del sitio oficial de Suretron.", "El tratamiento local y las redes controladas ayudan a limitar la exposición de datos. Protege dispositivos, redes y accesos al sistema, y comparte los diagnósticos con prudencia. Ninguna medida técnica garantiza una seguridad absoluta."]
  },
  pt: {
    home: ["Adapte grupos e cenas às diferentes formas de utilização de um espaço.", "Quando o dispositivo suporta, controle ligar/desligar, regulação e cor DT8 por difusão, grupo ou endereço individual.", "Começamos no Windows <em>e avançamos para mais plataformas.</em>"],
    info: ["Controladores associados, configuração DALI e manutenção em campo formam uma experiência clara para projetos de iluminação profissional.", "pré-visualização disponível", "Pode gerir os dados locais e permissões disponíveis no software e no sistema operativo. A exportação de ficheiros de projeto e os controlos de eliminação relacionados ainda não estão disponíveis. Para questões sobre dados pessoais ou pedidos relativos aos seus direitos legais, utilize os contactos do site oficial Suretron.", "O tratamento local e as redes controladas ajudam a limitar a exposição de dados. Proteja dispositivos, redes e acessos ao sistema e partilhe diagnósticos com cuidado. Nenhuma medida técnica garante segurança absoluta."]
  },
  nl: {
    home: ["Stem groepen en scènes af op de verschillende manieren waarop een ruimte wordt gebruikt.", "Schakel, dim en regel DT8-kleur per broadcast, groep of afzonderlijk adres wanneer het apparaat dit ondersteunt.", "We beginnen met Windows <em>en breiden uit naar meer platforms.</em>"],
    info: ["Bijbehorende controllers, DALI-configuratie en onderhoud op locatie vormen een heldere werkomgeving voor professionele verlichtingsprojecten.", "preview te downloaden", "U kunt beschikbare lokale gegevens en rechten beheren in de software en het besturingssysteem. Export van projectbestanden en bijbehorende verwijderfuncties zijn nog niet beschikbaar. Gebruik voor vragen over persoonsgegevens of verzoeken op grond van uw wettelijke rechten de contactgegevens op de officiële Suretron-website.", "Lokale verwerking en beheerde netwerken helpen blootstelling van gegevens te beperken. Bescherm apparaten, netwerken en systeemtoegang en deel diagnostische gegevens zorgvuldig. Geen technische maatregel garandeert absolute veiligheid."]
  },
  it: {
    home: ["Adattate gruppi e scene ai diversi usi di uno spazio.", "Se il dispositivo lo supporta, gestite accensione, dimmerazione e colore DT8 per broadcast, gruppo o singolo indirizzo.", "Partiamo da Windows <em>per arrivare a più piattaforme.</em>"],
    info: ["Controller associati, configurazione DALI e manutenzione sul campo si uniscono in un’esperienza chiara per progetti di illuminazione professionale.", "anteprima scaricabile", "Puoi gestire i dati locali e le autorizzazioni disponibili nel software e nel sistema operativo. Esportazione dei file di progetto e relativi controlli di eliminazione non sono ancora disponibili. Per domande sui dati personali o richieste relative ai tuoi diritti di legge, usa i recapiti del sito ufficiale Suretron.", "L’elaborazione locale e le reti controllate aiutano a limitare l’esposizione dei dati. Proteggi dispositivi, reti e accessi al sistema e condividi con attenzione i materiali diagnostici. Nessuna misura tecnica garantisce sicurezza assoluta."]
  },
  el: {
    home: ["Προσαρμόστε ομάδες και σκηνές στους διαφορετικούς τρόπους χρήσης ενός χώρου.", "Όπου το επιτρέπει η συσκευή, ελέγξτε ενεργοποίηση, ρύθμιση έντασης και χρώμα DT8 με γενική εντολή, ομάδα ή μεμονωμένη διεύθυνση.", "Ξεκινάμε από τα Windows <em>και επεκτεινόμαστε σε περισσότερες πλατφόρμες.</em>"],
    info: ["Συμβατοί ελεγκτές, ρυθμίσεις DALI και συντήρηση στον χώρο συνθέτουν μια σαφή εμπειρία για επαγγελματικά έργα φωτισμού.", "διαθέσιμη έκδοση προεπισκόπησης", "Μπορείτε να διαχειρίζεστε τα διαθέσιμα τοπικά δεδομένα και δικαιώματα μέσω του λογισμικού και του λειτουργικού. Η εξαγωγή αρχείων έργου και οι σχετικές λειτουργίες διαγραφής δεν διατίθενται ακόμη. Για ερωτήσεις σχετικά με προσωπικά δεδομένα ή αιτήματα άσκησης νόμιμων δικαιωμάτων, χρησιμοποιήστε τα στοιχεία επικοινωνίας στον επίσημο ιστότοπο Suretron.", "Η τοπική επεξεργασία και τα ελεγχόμενα δίκτυα βοηθούν στον περιορισμό της έκθεσης δεδομένων. Προστατεύστε συσκευές, δίκτυα και πρόσβαση στο σύστημα και μοιραστείτε διαγνωστικό υλικό με προσοχή. Καμία τεχνική μέθοδος δεν εγγυάται απόλυτη ασφάλεια."]
  },
  et: {
    home: ["Kohandage rühmad ja stseenid ruumi erinevate kasutusviisidega.", "Kui seade seda toetab, kasutage sisse-välja lülitamist, hämardamist ja DT8 värvijuhtimist üldkäsu, rühma või üksikaadressi kaudu.", "Alustame Windowsist <em>ja laieneme teistele platvormidele.</em>"],
    info: ["Ühilduvad kontrollerid, DALI seadistus ja kohapealne hooldus moodustavad selge töökeskkonna professionaalsetele valgustusprojektidele.", "eelvaade allalaadimiseks", "Praegu saadaolevaid kohalikke andmeid ja õigusi saate hallata tarkvaras ning operatsioonisüsteemis. Projektifailide eksport ja seotud kustutamisvõimalused pole veel saadaval. Isikuandmete küsimuste või seaduslike õiguste taotluste jaoks kasutage ametliku Suretroni veebisaidi kontaktandmeid.", "Kohalik töötlus ja kontrollitud võrgud aitavad vähendada andmete avaldumist. Kaitske seadmeid, võrke ja süsteemipääsu ning jagage diagnostikamaterjali hoolikalt. Ükski tehniline meede ei taga täielikku turvalisust."]
  },
  ms: {
    home: ["Sesuaikan kumpulan dan suasana dengan pelbagai cara ruang digunakan.", "Jika disokong oleh peranti, kawal hidup/mati, pemalapan dan warna DT8 melalui siaran, kumpulan atau alamat tunggal.", "Bermula dengan Windows, <em>berkembang ke lebih banyak platform.</em>"],
    info: ["Pengawal yang serasi, konfigurasi DALI dan penyelenggaraan di tapak disatukan dalam pengalaman kerja yang jelas untuk projek pencahayaan profesional.", "pratonton boleh dimuat turun", "Anda boleh mengurus data setempat dan kebenaran yang tersedia melalui perisian dan sistem pengendalian. Eksport fail projek dan kawalan pemadaman berkaitan belum tersedia. Untuk pertanyaan data peribadi atau permintaan hak yang terpakai, gunakan butiran hubungan di laman rasmi Suretron.", "Pemprosesan setempat dan rangkaian terkawal membantu mengurangkan pendedahan data. Lindungi peranti, rangkaian dan akses sistem, serta kongsi bahan diagnostik dengan cermat. Tiada langkah teknikal yang menjamin keselamatan mutlak."]
  },
  fil: {
    home: ["Iangkop ang mga grupo at eksena sa iba’t ibang paggamit ng espasyo.", "Kung suportado ng device, gamitin ang on/off, dimming at DT8 color control para sa broadcast, grupo o iisang address.", "Nagsisimula sa Windows <em>at lalawak sa iba pang platform.</em>"],
    info: ["Pinagsasama ang kaugnay na controller, DALI configuration at field maintenance sa malinaw na karanasan para sa propesyonal na proyekto ng ilaw.", "mada-download ang preview", "Mapapamahalaan mo ang kasalukuyang lokal na data at pahintulot sa software at operating system. Hindi pa available ang project-file export at kaugnay na deletion control. Para sa tanong tungkol sa personal na data o kahilingan sa naaangkop na karapatan, gamitin ang contact details sa opisyal na site ng Suretron.", "Nakakatulong ang lokal na pagproseso at kontroladong network na mabawasan ang pagkakalantad ng data. Protektahan ang device, network at access sa system, at maingat na ibahagi ang diagnostic material. Walang teknikal na hakbang na makakagarantiya ng lubos na seguridad."]
  },
  vi: {
    home: ["Điều chỉnh nhóm và cảnh cho các cách sử dụng không gian khác nhau.", "Khi thiết bị hỗ trợ, hãy bật tắt, điều chỉnh độ sáng và màu DT8 theo toàn tuyến, nhóm hoặc địa chỉ đơn.", "Bắt đầu với Windows <em>và mở rộng sang nhiều nền tảng hơn.</em>"],
    info: ["Bộ điều khiển tương thích, cấu hình DALI và bảo trì tại hiện trường tạo nên trải nghiệm rõ ràng cho dự án chiếu sáng chuyên nghiệp.", "bản xem trước có thể tải", "Bạn có thể quản lý dữ liệu cục bộ và quyền hiện có trong phần mềm hoặc hệ điều hành. Tính năng xuất tệp dự án và xóa dữ liệu liên quan chưa được cung cấp. Để hỏi về dữ liệu cá nhân hoặc thực hiện các quyền theo luật, hãy dùng thông tin liên hệ trên trang chính thức của Suretron.", "Xử lý tại chỗ và mạng được kiểm soát giúp hạn chế dữ liệu bị lộ. Hãy bảo vệ thiết bị, mạng và quyền truy cập hệ thống, đồng thời thận trọng khi chia sẻ tài liệu chẩn đoán. Không biện pháp kỹ thuật nào bảo đảm an toàn tuyệt đối."]
  },
  tr: {
    home: ["Grupları ve sahneleri mekânın farklı kullanım biçimlerine uyarlayın.", "Cihaz destekliyorsa yayın, grup veya tek adres için açma-kapama, karartma ve DT8 renk kontrolünü kullanın.", "Windows ile başlayıp <em>daha fazla platforma yayılıyoruz.</em>"],
    info: ["Uyumlu kontrolörler, DALI yapılandırması ve saha bakımı profesyonel aydınlatma projeleri için anlaşılır bir çalışma deneyiminde birleşiyor.", "önizleme indirilebilir", "Mevcut yerel verileri ve izinleri yazılım ile işletim sistemi üzerinden yönetebilirsiniz. Proje dosyası dışa aktarımı ve ilgili silme kontrolleri henüz sunulmamaktadır. Kişisel verilerle ilgili sorular veya yasal hak talepleri için resmi Suretron sitesindeki iletişim bilgilerini kullanın.", "Yerel işleme ve kontrollü ağlar veri maruziyetini azaltmaya yardımcı olur. Cihazları, ağları ve sistem erişimini koruyun; tanılama materyallerini dikkatle paylaşın. Hiçbir teknik önlem mutlak güvenlik sağlamaz."]
  }
};

for (const [locale, sections] of Object.entries(customerClaimTranslations)) {
  for (const [section, keys] of Object.entries(customerClaimKeys)) {
    if (sections[section]?.length !== keys.length) throw new Error(`Incomplete ${locale} ${section} claim copy`);
    Object.assign(globalThis.daliCustomerCopy[locale][section], Object.fromEntries(keys.map((key, index) => [key, sections[section][index]])));
  }
}

const platformThemeKeys = ['platform.previewLabel', 'platform.desktopPreview', 'platform.previewNote'];
const platformThemeTranslations = {
  'zh-Hans': ['桌面版主题', 'Suretron Studio 桌面软件欢迎页主题截图', '下方四张图片展示桌面软件欢迎页的不同主题。'],
  'zh-Hant': ['桌面版主題', 'Suretron Studio 桌面軟件歡迎頁主題截圖', '下方四張圖片展示桌面軟件歡迎頁的不同主題。'],
  en: ['Desktop theme', 'Suretron Studio desktop welcome screen theme preview', 'The four images below show welcome-screen themes from the desktop software.'],
  ja: ['デスクトップ版テーマ', 'Suretron Studio デスクトップ版のホーム画面テーマ', '以下の 4 枚は、デスクトップ版のホーム画面テーマを示しています。'],
  ko: ['데스크톱 테마', 'Suretron Studio 데스크톱 시작 화면 테마 미리 보기', '아래 네 장의 이미지는 데스크톱 소프트웨어 시작 화면의 다양한 테마를 보여 줍니다.'],
  fr: ['Thème du bureau', 'Aperçu du thème de l’accueil Suretron Studio sur ordinateur', 'Les quatre images ci-dessous présentent les thèmes de l’écran d’accueil du logiciel de bureau.'],
  de: ['Desktop-Design', 'Designvorschau des Suretron-Studio-Startbildschirms auf dem Desktop', 'Die vier Bilder unten zeigen Designs des Startbildschirms der Desktop-Software.'],
  es: ['Tema de escritorio', 'Vista del tema de inicio de Suretron Studio para escritorio', 'Las cuatro imágenes siguientes muestran temas de la pantalla de inicio del software de escritorio.'],
  pt: ['Tema de desktop', 'Pré-visualização do tema do ecrã inicial do Suretron Studio para desktop', 'As quatro imagens abaixo mostram temas do ecrã inicial do software de desktop.'],
  nl: ['Desktopthema', 'Themavoorbeeld van het startscherm van Suretron Studio op desktop', 'De vier afbeeldingen hieronder tonen thema’s van het startscherm van de desktopsoftware.'],
  it: ['Tema desktop', 'Anteprima del tema della schermata iniziale di Suretron Studio per desktop', 'Le quattro immagini seguenti mostrano temi della schermata iniziale del software desktop.'],
  el: ['Θέμα υπολογιστή', 'Προεπισκόπηση θέματος της αρχικής οθόνης του Suretron Studio για υπολογιστή', 'Οι τέσσερις εικόνες παρακάτω δείχνουν θέματα της αρχικής οθόνης του λογισμικού υπολογιστή.'],
  et: ['Töölauateema', 'Suretron Studio töölaua tervitusekraani teemavaade', 'Allolevad neli pilti näitavad töölauatarkvara tervitusekraani erinevaid teemasid.'],
  ms: ['Tema desktop', 'Pratonton tema skrin alu-aluan Suretron Studio untuk desktop', 'Empat imej di bawah menunjukkan tema skrin alu-aluan perisian desktop.'],
  fil: ['Tema sa desktop', 'Preview ng tema ng welcome screen ng Suretron Studio sa desktop', 'Ipinapakita ng apat na larawan sa ibaba ang mga tema ng welcome screen ng desktop software.'],
  vi: ['Chủ đề máy tính', 'Bản xem trước chủ đề màn hình chào của Suretron Studio trên máy tính', 'Bốn hình dưới đây thể hiện các chủ đề của màn hình chào trên phần mềm máy tính.'],
  tr: ['Masaüstü teması', 'Suretron Studio masaüstü karşılama ekranı tema önizlemesi', 'Aşağıdaki dört görsel, masaüstü yazılımının karşılama ekranı temalarını gösterir.']
};

for (const [locale, values] of Object.entries(platformThemeTranslations)) {
  if (values.length !== platformThemeKeys.length) throw new Error(`Incomplete ${locale} platform theme copy`);
  Object.assign(globalThis.daliCustomerCopy[locale].home, Object.fromEntries(platformThemeKeys.map((key, index) => [key, values[index]])));
}
