const currentProductCopy = {
  'zh-Hans': {
    welcome: '欢迎页 · 开启照明工程工作',
    screens: {
      dashboard: ['仪表盘', '状态、日历与快捷入口', '集中查看控制器健康、设备状态、日历与常用功能入口。'],
      bus: ['DALI 总线', '设备发现与地址组织', '通过总线对象树查看设备，开展扫描、短地址与分组相关操作。'],
      parameters: ['参数信息', '设备状态与 DALI 设置', '查看设备信息与状态，并按所选目标读取和设置常用 DALI 参数。'],
      control: ['实时控制', '选择目标，调节灯光', '面向广播、分组或单地址目标调节亮度，并使用设备支持的色彩控制。'],
      groups: ['分组管理', '成员关系与分组控制', '查看和维护分组成员，按组组织设备并进行灯光控制。'],
      scenes: ['场景管理', '场景值设置与调用', '查看场景列表，维护设备场景值并调用所需的照明场景。']
    },
    platforms: ['种语言可按需定制', '网站现提供 17 种语言；50+ 为定制目标'],
    workflowProof: ['条核心工程流程', '发现 · 寻址 · 分组 · 控制'],
    parameters: ['参数与设备数据', '查看设备数据，并按广播、分组或单地址目标设置常用 DALI 参数。'],
    lifecycle: ['连接与诊断', '通过 Type-C 或局域网接入，结合控制器资料与本地诊断日志支持现场维护。'],
    aboutPlatforms: '规划中的展示形态',
    contact: ['访问圣昌官网 ↗', '产品咨询请使用圣昌官网公布的联系渠道。'],
    aboutPosition: '当前工程软件已组织控制器发现与管理、DALI 寻址、分组与场景、设备读取、按目标设置参数，以及受设备能力约束的实时调光和 DT8 色彩控制。工程文件、批量任务、报告与 AI 仍属于后续工作。',
    privacyLocal: '当前工作流程以 Type-C、受控局域网和本地诊断为主。工程文件导出与备份仍在规划和开发中。本网站仅在浏览器保存语言与主题偏好，当前未使用分析或广告追踪服务。'
  },
  'zh-Hant': {
    welcome: '歡迎頁 · 開始照明工程工作',
    screens: {
      dashboard: ['儀表板', '狀態、行事曆與快捷入口', '集中查看控制器健康、裝置狀態、行事曆與常用功能入口。'],
      bus: ['DALI 匯流排', '裝置搜尋與位址管理', '透過匯流排物件樹查看裝置，進行掃描、短位址與群組相關操作。'],
      parameters: ['參數資訊', '裝置狀態與 DALI 設定', '查看裝置資訊與狀態，並依所選目標讀取和設定常用 DALI 參數。'],
      control: ['即時控制', '選擇目標，調整燈光', '針對廣播、群組或單一位址目標調整亮度，並使用裝置支援的色彩控制。'],
      groups: ['群組管理', '成員關係與群組控制', '查看和維護群組成員，依群組組織裝置並進行燈光控制。'],
      scenes: ['場景管理', '場景值設定與呼叫', '查看場景清單，維護裝置場景值並呼叫所需的照明場景。']
    },
    platforms: ['種語言可按需訂製', '網站現提供 17 種語言；50+ 為訂製目標'],
    workflowProof: ['條核心工程流程', '搜尋 · 定址 · 群組 · 控制'],
    parameters: ['參數與裝置資料', '查看裝置資料，並依廣播、群組或單一位址目標設定常用 DALI 參數。'],
    lifecycle: ['連線與診斷', '透過 Type-C 或區域網路連線，結合控制器資料與本機診斷紀錄支援現場維護。'],
    aboutPlatforms: '規劃中的展示形態',
    contact: ['前往聖昌官網 ↗', '產品諮詢請使用聖昌官網公布的聯絡管道。'],
    aboutPosition: '目前工程軟件已涵蓋控制器搜尋與管理、DALI 定址、群組與場景、裝置讀取、依目標設定參數，以及受裝置能力限制的即時調光和 DT8 色彩控制。工程檔案、批次作業、報告與 AI 仍屬後續工作。',
    privacyLocal: '目前工作流程以 Type-C、受控區域網路和本機診斷為主。工程檔案匯出與備份仍在規劃和開發中。本網站僅在瀏覽器儲存語言與主題偏好，目前未使用分析或廣告追蹤服務。'
  },
  en: {
    welcome: 'Welcome · your engineering starting point',
    screens: {
      dashboard: ['Dashboard', 'Status, calendar & quick access', 'Review controller health, device status, the calendar and shortcuts in one view.'],
      bus: ['DALI bus', 'Discovery & address organization', 'Explore devices in the bus tree, with scanning, short-address and group operations.'],
      parameters: ['Device information & parameters', 'Device status & DALI settings', 'Inspect device information and status, then read and set common DALI parameters for the selected target.'],
      control: ['Live control', 'Select targets, adjust lighting', 'Adjust levels for broadcast, group or single-address targets, with colour controls where supported by the device.'],
      groups: ['Group management', 'Membership & group control', 'Review and maintain group membership, organize devices and control lighting by group.'],
      scenes: ['Scene management', 'Scene values & recall', 'Browse the scene list, maintain device scene values and recall the lighting scene you need.']
    },
    platforms: ['languages by request', '17 site languages now; 50+ through custom scope'],
    workflowProof: ['core engineering workflow', 'Discover · address · group · control'],
    parameters: ['Parameters & device data', 'Inspect device data and set common DALI parameters for broadcast, group or single-address targets.'],
    lifecycle: ['Connect & diagnose', 'Type-C and LAN access, controller records and local diagnostic logs support field service.'],
    aboutPlatforms: 'planned screen formats',
    contact: ['Visit Suretron website ↗', 'For product inquiries, use the contact details on the official Suretron website.'],
    aboutPosition: 'The current engineering software brings together controller discovery and management, DALI addressing, groups and scenes, device readings, scoped parameter settings, and capability-gated dimming and DT8 colour controls. Project files, batch jobs, reports and AI remain future work.',
    privacyLocal: 'Current workflows centre on Type-C, controlled local networks and on-device diagnostics. Project-file export and backup are still in development. This website stores only language and theme preferences in your browser and currently uses no analytics or advertising trackers.'
  },
  ja: {
    welcome: 'ようこそ · 照明エンジニアリングの出発点',
    screens: {
      dashboard: ['ダッシュボード', '状態・カレンダー・クイックアクセス', 'コントローラーの健全性、機器の状態、カレンダー、各機能への入口を一覧できます。'],
      bus: ['DALI バス', '機器検出とアドレス管理', 'バスツリーで機器を確認し、スキャン、ショートアドレス、グループの操作を行えます。'],
      parameters: ['機器情報とパラメータ', '機器の状態と DALI 設定', '機器の情報と状態を確認し、選択した対象の共通 DALI パラメータを読み取り、設定します。'],
      control: ['リアルタイム制御', '対象を選んで照明を調整', 'ブロードキャスト、グループ、単一アドレスの明るさを調整し、対応機器では色も制御できます。'],
      groups: ['グループ管理', 'メンバー構成とグループ制御', 'グループのメンバーを確認・管理し、機器を整理してグループ単位で照明を制御します。'],
      scenes: ['シーン管理', 'シーン値の設定と呼び出し', 'シーン一覧を確認し、機器のシーン値を管理して必要な照明シーンを呼び出します。']
    },
    platforms: ['言語にカスタム対応', 'サイトは現在17言語、50以上は個別対応の目標'],
    workflowProof: ['基本のエンジニアリング手順', '検出 · アドレス · グループ · 制御'],
    parameters: ['パラメータと機器データ', '機器データを確認し、ブロードキャスト、グループ、単一アドレスごとに共通 DALI パラメータを設定します。'],
    lifecycle: ['接続と診断', 'Type-C と LAN の接続、コントローラー情報、ローカル診断ログで現場保守を支えます。'],
    aboutPlatforms: '計画中の画面形式',
    contact: ['Suretron 公式サイト ↗', '製品に関するお問い合わせは Suretron 公式サイトの連絡先をご利用ください。'],
    aboutPosition: '現在のソフトウェアは、コントローラーの検出と管理、DALI アドレス、グループとシーン、機器データの読み取り、対象別パラメータ設定、機器能力に応じた調光と DT8 色制御を備えます。プロジェクトファイル、一括処理、レポート、AI は今後の課題です。',
    privacyLocal: '現在の作業は Type-C、管理されたローカルネットワーク、端末内の診断を中心に行います。プロジェクトファイルの書き出しとバックアップは開発中です。このサイトは言語とテーマの設定だけをブラウザに保存し、現在は解析や広告追跡を使用しません。'
  },
  ko: {
    welcome: '시작 화면 · 조명 엔지니어링의 출발점',
    screens: {
      dashboard: ['대시보드', '상태, 캘린더 및 빠른 접근', '컨트롤러 상태, 장치 상태, 캘린더와 주요 기능 바로가기를 한눈에 확인합니다.'],
      bus: ['DALI 버스', '장치 검색과 주소 관리', '버스 트리에서 장치를 확인하고 검색, 단축 주소 및 그룹 작업을 수행합니다.'],
      parameters: ['장치 정보 및 매개변수', '장치 상태와 DALI 설정', '장치 정보와 상태를 확인하고 선택한 대상의 공통 DALI 매개변수를 읽고 설정합니다.'],
      control: ['실시간 제어', '대상 선택 및 조명 조절', '브로드캐스트, 그룹 또는 단일 주소의 밝기를 조절하고 장치가 지원하는 색상 제어를 사용합니다.'],
      groups: ['그룹 관리', '구성원과 그룹 제어', '그룹 구성원을 확인하고 관리하며 장치를 정리하고 그룹별로 조명을 제어합니다.'],
      scenes: ['장면 관리', '장면 값 설정 및 호출', '장면 목록을 확인하고 장치의 장면 값을 관리하며 필요한 조명 장면을 호출합니다.']
    },
    platforms: ['언어 맞춤 지원', '현재 사이트 17개 언어, 50개 이상은 맞춤 목표'],
    workflowProof: ['핵심 엔지니어링 흐름', '검색 · 주소 지정 · 그룹 · 제어'],
    parameters: ['매개변수와 장치 데이터', '장치 데이터를 확인하고 브로드캐스트, 그룹 또는 단일 주소 대상의 공통 DALI 매개변수를 설정합니다.'],
    lifecycle: ['연결과 진단', 'Type-C 및 LAN 연결, 컨트롤러 정보와 로컬 진단 로그로 현장 유지보수를 지원합니다.'],
    aboutPlatforms: '계획 중인 화면 형식',
    contact: ['Suretron 공식 사이트 ↗', '제품 문의는 Suretron 공식 사이트에 안내된 연락처를 이용하세요.'],
    aboutPosition: '현재 소프트웨어는 컨트롤러 검색과 관리, DALI 주소 지정, 그룹과 장면, 장치 데이터 읽기, 대상별 매개변수 설정, 장치 기능에 따른 디밍과 DT8 색상 제어를 제공합니다. 프로젝트 파일, 일괄 작업, 보고서와 AI는 향후 과제입니다.',
    privacyLocal: '현재 작업은 Type-C, 관리되는 로컬 네트워크 및 기기 내 진단을 중심으로 합니다. 프로젝트 파일 내보내기와 백업은 개발 중입니다. 이 웹사이트는 언어와 테마 설정만 브라우저에 저장하며 현재 분석 또는 광고 추적을 사용하지 않습니다.'
  },
  fr: {
    welcome: 'Bienvenue · le point de départ de votre projet',
    screens: {
      dashboard: ['Tableau de bord', 'État, calendrier et accès rapide', 'Consultez l’état des contrôleurs et des appareils, le calendrier et les raccourcis dans une seule vue.'],
      bus: ['Bus DALI', 'Détection et organisation des adresses', 'Explorez les appareils dans l’arborescence du bus, avec analyse, adresses courtes et opérations de groupe.'],
      parameters: ['Informations et paramètres', 'État des appareils et réglages DALI', 'Consultez les informations et l’état des appareils, puis lisez et réglez les paramètres DALI courants de la cible choisie.'],
      control: ['Commande en temps réel', 'Choisir une cible, régler la lumière', 'Réglez les niveaux par diffusion, groupe ou adresse individuelle, ainsi que la couleur sur les appareils compatibles.'],
      groups: ['Gestion des groupes', 'Membres et commande par groupe', 'Consultez et gérez les membres, organisez les appareils et commandez l’éclairage par groupe.'],
      scenes: ['Gestion des scènes', 'Valeurs et rappel des scènes', 'Parcourez la liste des scènes, gérez les valeurs des appareils et rappelez la scène d’éclairage souhaitée.']
    },
    platforms: ['langues sur mesure', '17 langues sur ce site ; 50+ selon le projet'],
    workflowProof: ['parcours d’ingénierie central', 'Détecter · adresser · grouper · piloter'],
    parameters: ['Paramètres et données des appareils', 'Consultez les données des appareils et réglez les paramètres DALI courants par diffusion, groupe ou adresse individuelle.'],
    lifecycle: ['Connexion et diagnostic', 'Les accès Type-C et LAN, les fiches contrôleur et les journaux locaux facilitent la maintenance sur site.'],
    aboutPlatforms: 'formats d’écran prévus',
    contact: ['Site officiel Suretron ↗', 'Pour toute demande, utilisez les coordonnées publiées sur le site officiel Suretron.'],
    aboutPosition: 'Le logiciel actuel réunit découverte et gestion des contrôleurs, adressage DALI, groupes et scènes, lecture des appareils, réglages par cible, gradation et couleur DT8 selon les capacités. Fichiers projet, tâches par lot, rapports et IA restent à venir.',
    privacyLocal: 'Les flux actuels reposent sur Type-C, les réseaux locaux contrôlés et le diagnostic sur l’appareil. L’export et la sauvegarde des fichiers projet sont encore en développement. Ce site ne conserve que la langue et le thème dans le navigateur et n’utilise actuellement ni analyse ni suivi publicitaire.'
  },
  de: {
    welcome: 'Willkommen · Ihr Einstieg in die Lichtplanung',
    screens: {
      dashboard: ['Dashboard', 'Status, Kalender und Schnellzugriff', 'Controller-Zustand, Gerätestatus, Kalender und Schnellzugriffe in einer Übersicht prüfen.'],
      bus: ['DALI-Bus', 'Geräteerkennung und Adressverwaltung', 'Geräte im Busbaum prüfen sowie Scans, Kurzadressen und Gruppen bearbeiten.'],
      parameters: ['Geräteinformationen und Parameter', 'Gerätestatus und DALI-Einstellungen', 'Geräteinformationen und Status prüfen sowie allgemeine DALI-Parameter für das gewählte Ziel lesen und einstellen.'],
      control: ['Echtzeitsteuerung', 'Ziel wählen, Licht einstellen', 'Helligkeit per Broadcast, Gruppe oder Einzeladresse einstellen und die vom Gerät unterstützten Farbfunktionen nutzen.'],
      groups: ['Gruppenverwaltung', 'Mitglieder und Gruppensteuerung', 'Gruppenmitglieder prüfen und verwalten, Geräte organisieren und Licht gruppenweise steuern.'],
      scenes: ['Szenenverwaltung', 'Szenenwerte und Abruf', 'Szenenliste durchsehen, Szenenwerte der Geräte pflegen und die gewünschte Lichtszene abrufen.']
    },
    platforms: ['Sprachen auf Anfrage', '17 Website-Sprachen; 50+ nach Projektumfang'],
    workflowProof: ['zentraler Engineering-Ablauf', 'Finden · adressieren · gruppieren · steuern'],
    parameters: ['Parameter und Gerätedaten', 'Gerätedaten prüfen und allgemeine DALI-Parameter für Broadcast, Gruppen oder Einzeladressen einstellen.'],
    lifecycle: ['Verbinden und diagnostizieren', 'Type-C und LAN, Controller-Daten und lokale Diagnoseprotokolle unterstützen den Service vor Ort.'],
    aboutPlatforms: 'geplante Bildschirmformate',
    contact: ['Suretron-Website besuchen ↗', 'Für Produktanfragen nutzen Sie die Kontaktdaten auf der offiziellen Suretron-Website.'],
    aboutPosition: 'Die aktuelle Software vereint Controller-Erkennung und -Verwaltung, DALI-Adressierung, Gruppen und Szenen, Geräteabfragen, zielbezogene Parameter sowie Dimmung und DT8-Farbe je nach Gerätefähigkeit. Projektdateien, Stapelaufträge, Berichte und KI sind noch Zukunftsthemen.',
    privacyLocal: 'Aktuelle Abläufe nutzen Type-C, kontrollierte lokale Netze und Diagnose auf dem Gerät. Export und Sicherung von Projektdateien sind noch in Entwicklung. Diese Website speichert nur Sprache und Thema im Browser und verwendet derzeit weder Analyse noch Werbetracker.'
  },
  es: {
    welcome: 'Bienvenido · el inicio de su proyecto de iluminación',
    screens: {
      dashboard: ['Panel de control', 'Estado, calendario y acceso rápido', 'Consulte el estado de los controladores y dispositivos, el calendario y los accesos directos en una sola vista.'],
      bus: ['Bus DALI', 'Detección y organización de direcciones', 'Explore dispositivos en el árbol del bus y realice búsquedas y operaciones de direcciones cortas y grupos.'],
      parameters: ['Información y parámetros', 'Estado del dispositivo y ajustes DALI', 'Consulte la información y el estado del dispositivo y lea o ajuste los parámetros DALI comunes del destino elegido.'],
      control: ['Control en tiempo real', 'Elegir destinos, ajustar la luz', 'Ajuste niveles por difusión, grupo o dirección individual y controle el color en los dispositivos compatibles.'],
      groups: ['Gestión de grupos', 'Miembros y control por grupo', 'Consulte y gestione miembros, organice dispositivos y controle la iluminación por grupo.'],
      scenes: ['Gestión de escenas', 'Valores y recuperación de escenas', 'Explore la lista de escenas, mantenga los valores de los dispositivos y active la escena de iluminación que necesite.']
    },
    platforms: ['idiomas a medida', '17 idiomas en este sitio; 50+ según el proyecto'],
    workflowProof: ['flujo técnico principal', 'Detectar · direccionar · agrupar · controlar'],
    parameters: ['Parámetros y datos del dispositivo', 'Consulte datos del dispositivo y ajuste parámetros DALI comunes para difusión, grupos o direcciones individuales.'],
    lifecycle: ['Conectar y diagnosticar', 'Type-C y LAN, los datos del controlador y los registros locales facilitan el servicio en campo.'],
    aboutPlatforms: 'formatos de pantalla previstos',
    contact: ['Sitio oficial de Suretron ↗', 'Para consultas, use los datos de contacto del sitio oficial de Suretron.'],
    aboutPosition: 'El software actual reúne descubrimiento y gestión de controladores, direccionamiento DALI, grupos y escenas, consultas de dispositivos, parámetros por destino, atenuación y color DT8 según la capacidad. Archivos de proyecto, tareas por lotes, informes e IA siguen pendientes.',
    privacyLocal: 'Los flujos actuales usan Type-C, redes locales controladas y diagnóstico en el dispositivo. La exportación y copia de archivos de proyecto siguen en desarrollo. Este sitio solo guarda idioma y tema en el navegador y actualmente no usa analítica ni seguimiento publicitario.'
  },
  pt: {
    welcome: 'Boas-vindas · o início do seu projeto de iluminação',
    screens: {
      dashboard: ['Painel de controlo', 'Estado, calendário e acesso rápido', 'Consulte o estado dos controladores e dispositivos, o calendário e os atalhos numa única vista.'],
      bus: ['Barramento DALI', 'Deteção e organização de endereços', 'Explore dispositivos na árvore do barramento e execute pesquisas e operações de endereços curtos e grupos.'],
      parameters: ['Informações e parâmetros', 'Estado do dispositivo e definições DALI', 'Consulte as informações e o estado do dispositivo e leia ou ajuste parâmetros DALI comuns para o destino escolhido.'],
      control: ['Controlo em tempo real', 'Escolher destinos, ajustar a luz', 'Ajuste níveis por difusão, grupo ou endereço individual e controle a cor nos dispositivos compatíveis.'],
      groups: ['Gestão de grupos', 'Membros e controlo por grupo', 'Consulte e mantenha os membros, organize dispositivos e controle a iluminação por grupo.'],
      scenes: ['Gestão de cenários', 'Valores e ativação de cenários', 'Explore a lista de cenários, mantenha os valores dos dispositivos e ative o cenário de iluminação pretendido.']
    },
    platforms: ['idiomas por medida', '17 idiomas no site; 50+ conforme o projeto'],
    workflowProof: ['fluxo técnico principal', 'Descobrir · endereçar · agrupar · controlar'],
    parameters: ['Parâmetros e dados do dispositivo', 'Consulte dados do dispositivo e ajuste parâmetros DALI comuns para difusão, grupo ou endereço individual.'],
    lifecycle: ['Ligar e diagnosticar', 'Type-C e LAN, dados do controlador e registos locais apoiam a assistência no local.'],
    aboutPlatforms: 'formatos de ecrã previstos',
    contact: ['Site oficial da Suretron ↗', 'Para questões sobre o produto, use os contactos no site oficial da Suretron.'],
    aboutPosition: 'O software atual reúne descoberta e gestão de controladores, endereçamento DALI, grupos e cenas, leitura de dispositivos, parâmetros por alvo, regulação e cor DT8 conforme as capacidades. Ficheiros de projeto, tarefas em lote, relatórios e IA permanecem futuros.',
    privacyLocal: 'Os fluxos atuais usam Type-C, redes locais controladas e diagnósticos no dispositivo. A exportação e cópia de segurança de ficheiros de projeto ainda estão em desenvolvimento. Este site guarda apenas idioma e tema no navegador e não usa atualmente análise nem rastreio publicitário.'
  },
  nl: {
    welcome: 'Welkom · het startpunt voor uw lichtproject',
    screens: {
      dashboard: ['Dashboard', 'Status, kalender en snelle toegang', 'Bekijk controllerconditie, apparaatstatus, kalender en snelkoppelingen in één overzicht.'],
      bus: ['DALI-bus', 'Apparaten vinden en adressen beheren', 'Bekijk apparaten in de busstructuur en voer scans, korte-adresbewerkingen en groepsbewerkingen uit.'],
      parameters: ['Apparaatinformatie en parameters', 'Apparaatstatus en DALI-instellingen', 'Bekijk apparaatinformatie en status en lees of wijzig algemene DALI-parameters voor het gekozen doel.'],
      control: ['Realtime bediening', 'Doelen kiezen, licht aanpassen', 'Pas lichtniveaus aan via broadcast, groep of afzonderlijk adres en gebruik kleurbediening waar het apparaat dit ondersteunt.'],
      groups: ['Groepsbeheer', 'Leden en groepsbediening', 'Bekijk en beheer groepsleden, organiseer apparaten en bedien verlichting per groep.'],
      scenes: ['Scènebeheer', 'Scènewaarden en oproepen', 'Bekijk de scènelijst, onderhoud scènewaarden van apparaten en roep de gewenste lichtscène op.']
    },
    platforms: ['talen op aanvraag', '17 websitetalen; 50+ volgens projectafspraak'],
    workflowProof: ['kernworkflow voor engineering', 'Vinden · adresseren · groeperen · bedienen'],
    parameters: ['Parameters en apparaatgegevens', 'Bekijk apparaatgegevens en stel algemene DALI-parameters in voor broadcast, groepen of afzonderlijke adressen.'],
    lifecycle: ['Verbinden en diagnosticeren', 'Type-C en LAN, controllergegevens en lokale diagnoselogboeken ondersteunen service op locatie.'],
    aboutPlatforms: 'geplande schermvormen',
    contact: ['Officiële Suretron-site ↗', 'Gebruik voor productvragen de contactgegevens op de officiële Suretron-website.'],
    aboutPosition: 'De huidige software combineert het vinden en beheren van controllers, DALI-adressering, groepen en scènes, apparaatmetingen, doelgerichte parameters, dimmen en DT8-kleur waar de apparatuur dat ondersteunt. Projectbestanden, batchtaken, rapporten en AI volgen later.',
    privacyLocal: 'Huidige workflows gebruiken Type-C, beheerde lokale netwerken en diagnose op het apparaat. Export en back-up van projectbestanden zijn nog in ontwikkeling. Deze website bewaart alleen taal en thema in de browser en gebruikt momenteel geen analyse of advertentietrackers.'
  },
  it: {
    welcome: 'Benvenuto · il punto di partenza del tuo progetto',
    screens: {
      dashboard: ['Pannello di controllo', 'Stato, calendario e accesso rapido', 'Consulta lo stato di controller e dispositivi, il calendario e le scorciatoie in un’unica vista.'],
      bus: ['Bus DALI', 'Rilevamento e gestione degli indirizzi', 'Esplora i dispositivi nell’albero del bus ed esegui scansioni e operazioni su indirizzi brevi e gruppi.'],
      parameters: ['Informazioni e parametri', 'Stato del dispositivo e impostazioni DALI', 'Consulta informazioni e stato dei dispositivi, quindi leggi e imposta i parametri DALI comuni per il destinatario selezionato.'],
      control: ['Controllo in tempo reale', 'Scegli i destinatari, regola la luce', 'Regola i livelli in broadcast, per gruppo o indirizzo singolo e usa il controllo colore sui dispositivi compatibili.'],
      groups: ['Gestione dei gruppi', 'Membri e controllo per gruppo', 'Consulta e gestisci i membri, organizza i dispositivi e controlla l’illuminazione per gruppo.'],
      scenes: ['Gestione delle scene', 'Valori e richiamo delle scene', 'Sfoglia l’elenco delle scene, gestisci i valori dei dispositivi e richiama la scena di illuminazione desiderata.']
    },
    platforms: ['lingue su richiesta', '17 lingue sul sito; 50+ su base progettuale'],
    workflowProof: ['flusso tecnico essenziale', 'Rilevare · indirizzare · raggruppare · controllare'],
    parameters: ['Parametri e dati del dispositivo', 'Consulta i dati del dispositivo e imposta i parametri DALI comuni per broadcast, gruppi o indirizzi singoli.'],
    lifecycle: ['Connessione e diagnostica', 'Type-C e LAN, dati del controller e log diagnostici locali supportano l’assistenza sul campo.'],
    aboutPlatforms: 'formati schermo previsti',
    contact: ['Sito ufficiale Suretron ↗', 'Per informazioni sul prodotto, usa i recapiti sul sito ufficiale Suretron.'],
    aboutPosition: 'Il software attuale unisce rilevamento e gestione dei controller, indirizzamento DALI, gruppi e scene, letture dei dispositivi, parametri per destinazione, dimming e colore DT8 secondo le capacità. File di progetto, attività batch, report e IA sono sviluppi futuri.',
    privacyLocal: 'I flussi attuali usano Type-C, reti locali controllate e diagnostica sul dispositivo. Esportazione e backup dei file di progetto sono ancora in sviluppo. Questo sito salva solo lingua e tema nel browser e attualmente non usa analisi o tracciamento pubblicitario.'
  },
  el: {
    welcome: 'Καλώς ήρθατε · η αφετηρία του έργου φωτισμού σας',
    screens: {
      dashboard: ['Πίνακας ελέγχου', 'Κατάσταση, ημερολόγιο και συντομεύσεις', 'Δείτε την κατάσταση ελεγκτών και συσκευών, το ημερολόγιο και τις συντομεύσεις σε μία προβολή.'],
      bus: ['Δίαυλος DALI', 'Εντοπισμός και οργάνωση διευθύνσεων', 'Δείτε συσκευές στο δέντρο διαύλου και εκτελέστε σαρώσεις και εργασίες σύντομων διευθύνσεων και ομάδων.'],
      parameters: ['Πληροφορίες και παράμετροι', 'Κατάσταση συσκευής και ρυθμίσεις DALI', 'Ελέγξτε πληροφορίες και κατάσταση συσκευών και διαβάστε ή ρυθμίστε κοινές παραμέτρους DALI για τον επιλεγμένο στόχο.'],
      control: ['Έλεγχος σε πραγματικό χρόνο', 'Επιλογή στόχων και ρύθμιση φωτισμού', 'Ρυθμίστε επίπεδα μέσω εκπομπής, ομάδας ή μεμονωμένης διεύθυνσης και το χρώμα όπου υποστηρίζεται από τη συσκευή.'],
      groups: ['Διαχείριση ομάδων', 'Μέλη και έλεγχος ανά ομάδα', 'Ελέγξτε και διαχειριστείτε μέλη, οργανώστε συσκευές και ελέγξτε τον φωτισμό ανά ομάδα.'],
      scenes: ['Διαχείριση σκηνών', 'Τιμές και ανάκληση σκηνών', 'Δείτε τη λίστα σκηνών, διαχειριστείτε τις τιμές των συσκευών και ανακαλέστε την επιθυμητή σκηνή φωτισμού.']
    },
    platforms: ['γλώσσες κατά παραγγελία', '17 γλώσσες στον ιστότοπο· 50+ ανά έργο'],
    workflowProof: ['βασική ροή μηχανικού', 'Εντοπισμός · διεύθυνση · ομάδα · έλεγχος'],
    parameters: ['Παράμετροι και δεδομένα συσκευών', 'Δείτε δεδομένα συσκευών και ρυθμίστε κοινές παραμέτρους DALI για εκπομπή, ομάδες ή μεμονωμένες διευθύνσεις.'],
    lifecycle: ['Σύνδεση και διάγνωση', 'Type-C και LAN, στοιχεία ελεγκτή και τοπικά αρχεία διάγνωσης υποστηρίζουν την εργασία πεδίου.'],
    aboutPlatforms: 'σχεδιαζόμενες μορφές οθόνης',
    contact: ['Επίσημος ιστότοπος Suretron ↗', 'Για ερωτήματα προϊόντος, χρησιμοποιήστε τα στοιχεία επικοινωνίας του επίσημου ιστότοπου Suretron.'],
    aboutPosition: 'Το σημερινό λογισμικό συνδυάζει εντοπισμό και διαχείριση ελεγκτών, διευθυνσιοδότηση DALI, ομάδες και σκηνές, ανάγνωση συσκευών, ρυθμίσεις ανά στόχο, dimming και χρώμα DT8 όπου υποστηρίζονται. Αρχεία έργου, μαζικές εργασίες, αναφορές και AI είναι μελλοντικά.',
    privacyLocal: 'Οι τρέχουσες ροές χρησιμοποιούν Type-C, ελεγχόμενα τοπικά δίκτυα και διάγνωση στη συσκευή. Η εξαγωγή και η δημιουργία αντιγράφων έργου βρίσκονται ακόμη σε ανάπτυξη. Ο ιστότοπος αποθηκεύει μόνο γλώσσα και θέμα στο πρόγραμμα περιήγησης και δεν χρησιμοποιεί σήμερα ανάλυση ή διαφημιστική παρακολούθηση.'
  },
  et: {
    welcome: 'Tere tulemast · teie valgustusprojekti alguspunkt',
    screens: {
      dashboard: ['Töölaud', 'Olek, kalender ja kiirjuurdepääs', 'Vaadake kontrollerite ja seadmete olekut, kalendrit ning otseteid ühes vaates.'],
      bus: ['DALI siin', 'Seadmete leidmine ja aadresside haldus', 'Vaadake seadmeid siinipuus ning tehke otsinguid, lühiaadresside ja rühmade toiminguid.'],
      parameters: ['Seadmeinfo ja parameetrid', 'Seadme olek ja DALI seaded', 'Vaadake seadmeinfot ja olekut ning lugege või muutke valitud sihtmärgi tavalisi DALI parameetreid.'],
      control: ['Reaalajas juhtimine', 'Sihtmärkide valik ja valguse reguleerimine', 'Reguleerige heledust leviedastuse, rühma või üksikaadressi kaupa ning kasutage seadme toetatud värvijuhtimist.'],
      groups: ['Rühmade haldus', 'Liikmed ja rühmajuhtimine', 'Vaadake ja hallake rühmaliikmeid, korraldage seadmeid ja juhtige valgustust rühmade kaupa.'],
      scenes: ['Stseenide haldus', 'Stseeniväärtused ja aktiveerimine', 'Sirvige stseeniloendit, hallake seadmete stseeniväärtusi ja aktiveerige soovitud valgustusstseen.']
    },
    platforms: ['keelt tellimisel', 'Veebis praegu 17 keelt; 50+ projektipõhiselt'],
    workflowProof: ['põhiline töövoog', 'Leia · adresseeri · rühmita · juhi'],
    parameters: ['Parameetrid ja seadmeandmed', 'Vaadake seadmeandmeid ja seadistage tavalisi DALI parameetreid leviedastuse, rühma või üksikaadressi jaoks.'],
    lifecycle: ['Ühendus ja diagnostika', 'Type-C ja LAN, kontrolleri andmed ning kohalikud diagnostikalogid toetavad hooldust kohapeal.'],
    aboutPlatforms: 'kavandatud ekraanivormid',
    contact: ['Suretroni ametlik veebileht ↗', 'Tooteküsimuste korral kasutage Suretroni ametlikul veebilehel olevaid kontakte.'],
    aboutPosition: 'Praegune tarkvara ühendab kontrollerite leidmise ja halduse, DALI aadressimise, rühmad ja stseenid, seadmeandmete lugemise, sihtpõhised parameetrid ning toetatud hämarduse ja DT8 värvijuhtimise. Projektifailid, hulgitööd, aruanded ja AI on tulevased tööd.',
    privacyLocal: 'Praegused töövood kasutavad Type-C-d, kontrollitud kohtvõrke ja seadmesisest diagnostikat. Projektifailide eksport ja varundus on alles arendamisel. See veebileht salvestab brauseris ainult keele ja teema ning ei kasuta praegu analüütikat ega reklaamijälgimist.'
  },
  ms: {
    welcome: 'Selamat datang · titik mula projek pencahayaan anda',
    screens: {
      dashboard: ['Papan pemuka', 'Status, kalendar dan akses pantas', 'Lihat keadaan pengawal, status peranti, kalendar dan pintasan dalam satu paparan.'],
      bus: ['Bas DALI', 'Penemuan dan pengurusan alamat', 'Lihat peranti dalam pepohon bas serta lakukan imbasan, operasi alamat pendek dan kumpulan.'],
      parameters: ['Maklumat dan parameter', 'Status peranti dan tetapan DALI', 'Lihat maklumat serta status peranti, kemudian baca dan tetapkan parameter DALI lazim untuk sasaran dipilih.'],
      control: ['Kawalan masa nyata', 'Pilih sasaran, laraskan cahaya', 'Laraskan aras melalui siaran, kumpulan atau alamat tunggal dan gunakan kawalan warna yang disokong peranti.'],
      groups: ['Pengurusan kumpulan', 'Keahlian dan kawalan kumpulan', 'Lihat dan urus ahli kumpulan, susun peranti dan kawal pencahayaan mengikut kumpulan.'],
      scenes: ['Pengurusan adegan', 'Nilai dan panggilan semula adegan', 'Lihat senarai adegan, urus nilai adegan peranti dan panggil semula adegan pencahayaan yang diperlukan.']
    },
    platforms: ['bahasa mengikut permintaan', '17 bahasa di laman; 50+ mengikut projek'],
    workflowProof: ['aliran kerja teras', 'Cari · alamatkan · kumpulkan · kawal'],
    parameters: ['Parameter dan data peranti', 'Lihat data peranti dan tetapkan parameter DALI lazim untuk siaran, kumpulan atau alamat tunggal.'],
    lifecycle: ['Sambung dan diagnosis', 'Type-C dan LAN, rekod pengawal dan log diagnosis setempat menyokong kerja lapangan.'],
    aboutPlatforms: 'format skrin yang dirancang',
    contact: ['Laman rasmi Suretron ↗', 'Untuk pertanyaan produk, gunakan maklumat hubungan di laman rasmi Suretron.'],
    aboutPosition: 'Perisian semasa menggabungkan penemuan dan pengurusan pengawal, pengalamatan DALI, kumpulan dan adegan, bacaan peranti, parameter mengikut sasaran, pemalapan dan warna DT8 apabila disokong. Fail projek, kerja kelompok, laporan dan AI masih dalam perancangan.',
    privacyLocal: 'Aliran semasa menggunakan Type-C, rangkaian setempat terkawal dan diagnosis pada peranti. Eksport dan sandaran fail projek masih dibangunkan. Laman ini hanya menyimpan bahasa dan tema dalam pelayar dan kini tidak menggunakan analitik atau penjejak iklan.'
  },
  fil: {
    welcome: 'Maligayang pagdating · simula ng iyong proyektong pang-ilaw',
    screens: {
      dashboard: ['Dashboard', 'Katayuan, kalendaryo at mabilis na access', 'Tingnan ang kalagayan ng controller, katayuan ng device, kalendaryo at mga shortcut sa iisang view.'],
      bus: ['DALI bus', 'Pagtuklas at pamamahala ng address', 'Tingnan ang mga device sa bus tree at magsagawa ng scan at mga operasyon sa short address at grupo.'],
      parameters: ['Impormasyon at mga parameter', 'Katayuan ng device at mga setting ng DALI', 'Suriin ang impormasyon at katayuan ng device, at basahin o itakda ang karaniwang DALI parameter ng napiling target.'],
      control: ['Kontrol sa real time', 'Pumili ng target, ayusin ang ilaw', 'Ayusin ang antas para sa broadcast, grupo o iisang address at gamitin ang kontrol sa kulay na suportado ng device.'],
      groups: ['Pamamahala ng grupo', 'Mga miyembro at kontrol ng grupo', 'Tingnan at pamahalaan ang mga miyembro, ayusin ang mga device at kontrolin ang ilaw ayon sa grupo.'],
      scenes: ['Pamamahala ng scene', 'Mga halaga at pagtawag ng scene', 'Tingnan ang listahan ng scene, pamahalaan ang mga halaga ng device at tawagin ang kinakailangang scene ng ilaw.']
    },
    platforms: ['wikang ayon sa pangangailangan', '17 wika sa site; 50+ ayon sa proyekto'],
    workflowProof: ['pangunahing daloy ng trabaho', 'Hanapin · i-address · ipangkat · kontrolin'],
    parameters: ['Mga parameter at datos ng device', 'Tingnan ang datos ng device at itakda ang karaniwang DALI parameter para sa broadcast, grupo o iisang address.'],
    lifecycle: ['Koneksyon at diagnosis', 'Type-C at LAN, tala ng controller at lokal na diagnostic log ang tumutulong sa serbisyo sa lugar.'],
    aboutPlatforms: 'nakaplanong format ng screen',
    contact: ['Opisyal na site ng Suretron ↗', 'Para sa tanong tungkol sa produkto, gamitin ang contact sa opisyal na site ng Suretron.'],
    aboutPosition: 'Pinagsasama ng kasalukuyang software ang paghahanap at pamamahala ng controller, DALI addressing, grupo at scene, pagbabasa ng device, parameter ayon sa target, dimming at DT8 na kulay kapag suportado. Project file, batch job, ulat at AI ay para sa susunod na yugto.',
    privacyLocal: 'Ang kasalukuyang daloy ay gumagamit ng Type-C, kontroladong lokal na network at diagnosis sa device. Binubuo pa ang pag-export at pag-backup ng project file. Wika at tema lamang ang iniimbak ng site sa browser at wala itong analytics o ad tracker sa ngayon.'
  },
  vi: {
    welcome: 'Chào mừng · điểm khởi đầu cho dự án chiếu sáng',
    screens: {
      dashboard: ['Bảng điều khiển', 'Trạng thái, lịch và truy cập nhanh', 'Xem tình trạng bộ điều khiển, trạng thái thiết bị, lịch và lối tắt trong một giao diện.'],
      bus: ['Bus DALI', 'Tìm thiết bị và quản lý địa chỉ', 'Xem thiết bị trong cây bus, thực hiện quét và thao tác với địa chỉ ngắn và nhóm.'],
      parameters: ['Thông tin và thông số', 'Trạng thái thiết bị và cài đặt DALI', 'Xem thông tin và trạng thái thiết bị, sau đó đọc và đặt thông số DALI chung cho đối tượng đã chọn.'],
      control: ['Điều khiển thời gian thực', 'Chọn đối tượng, điều chỉnh ánh sáng', 'Điều chỉnh độ sáng cho toàn tuyến, nhóm hoặc địa chỉ đơn và dùng điều khiển màu khi thiết bị hỗ trợ.'],
      groups: ['Quản lý nhóm', 'Thành viên và điều khiển theo nhóm', 'Xem và quản lý thành viên, sắp xếp thiết bị và điều khiển chiếu sáng theo nhóm.'],
      scenes: ['Quản lý cảnh', 'Giá trị và gọi cảnh', 'Xem danh sách cảnh, quản lý giá trị cảnh của thiết bị và gọi cảnh chiếu sáng cần dùng.']
    },
    platforms: ['ngôn ngữ theo yêu cầu', 'Trang web có 17 ngôn ngữ; 50+ theo dự án'],
    workflowProof: ['quy trình kỹ thuật cốt lõi', 'Tìm · gán địa chỉ · nhóm · điều khiển'],
    parameters: ['Thông số và dữ liệu thiết bị', 'Xem dữ liệu thiết bị và cài đặt thông số DALI chung cho toàn tuyến, nhóm hoặc địa chỉ đơn.'],
    lifecycle: ['Kết nối và chẩn đoán', 'Type-C và LAN, thông tin bộ điều khiển và nhật ký chẩn đoán cục bộ hỗ trợ công việc hiện trường.'],
    aboutPlatforms: 'dạng màn hình dự kiến',
    contact: ['Trang chính thức Suretron ↗', 'Để hỏi về sản phẩm, hãy dùng thông tin liên hệ trên trang chính thức Suretron.'],
    aboutPosition: 'Phần mềm hiện tại kết hợp phát hiện và quản lý bộ điều khiển, gán địa chỉ DALI, nhóm và cảnh, đọc dữ liệu thiết bị, cài đặt theo đối tượng, điều chỉnh sáng và màu DT8 khi thiết bị hỗ trợ. Tệp dự án, tác vụ hàng loạt, báo cáo và AI là công việc tương lai.',
    privacyLocal: 'Quy trình hiện tại dùng Type-C, mạng cục bộ được kiểm soát và chẩn đoán trên thiết bị. Xuất và sao lưu tệp dự án vẫn đang phát triển. Trang web chỉ lưu tùy chọn ngôn ngữ và chủ đề trong trình duyệt, hiện không dùng phân tích hoặc theo dõi quảng cáo.'
  },
  tr: {
    welcome: 'Hoş geldiniz · aydınlatma projenizin başlangıç noktası',
    screens: {
      dashboard: ['Gösterge paneli', 'Durum, takvim ve hızlı erişim', 'Kontrolör sağlığını, cihaz durumunu, takvimi ve kısayolları tek görünümde inceleyin.'],
      bus: ['DALI veri yolu', 'Cihaz keşfi ve adres yönetimi', 'Veri yolu ağacında cihazları inceleyin; tarama, kısa adres ve grup işlemlerini yürütün.'],
      parameters: ['Cihaz bilgileri ve parametreler', 'Cihaz durumu ve DALI ayarları', 'Cihaz bilgilerini ve durumunu inceleyin; seçilen hedef için genel DALI parametrelerini okuyup ayarlayın.'],
      control: ['Gerçek zamanlı kontrol', 'Hedef seçin, ışığı ayarlayın', 'Yayın, grup veya tek adres hedefleri için seviyeleri ayarlayın ve cihazın desteklediği renk denetimlerini kullanın.'],
      groups: ['Grup yönetimi', 'Üyeler ve grup kontrolü', 'Grup üyelerini inceleyip yönetin, cihazları düzenleyin ve aydınlatmayı grup bazında kontrol edin.'],
      scenes: ['Sahne yönetimi', 'Sahne değerleri ve çağırma', 'Sahne listesini inceleyin, cihaz sahne değerlerini yönetin ve gereken aydınlatma sahnesini çağırın.']
    },
    platforms: ['dil isteğe göre', 'Sitede 17 dil; proje kapsamında 50+ hedefi'],
    workflowProof: ['temel mühendislik akışı', 'Bul · adresle · grupla · kontrol et'],
    parameters: ['Parametreler ve cihaz verileri', 'Cihaz verilerini inceleyin ve yayın, grup veya tek adres hedefleri için genel DALI parametrelerini ayarlayın.'],
    lifecycle: ['Bağlan ve tanıla', 'Type-C ve LAN, kontrolör kayıtları ve yerel tanılama günlükleri saha servisini destekler.'],
    aboutPlatforms: 'planlanan ekran biçimleri',
    contact: ['Suretron resmi sitesi ↗', 'Ürün soruları için Suretron resmi sitesindeki iletişim bilgilerini kullanın.'],
    aboutPosition: 'Güncel yazılım; kontrolör keşfi ve yönetimi, DALI adresleme, grup ve sahneler, cihaz okumaları, hedefe göre parametreler, cihaz yeteneğine bağlı karartma ve DT8 renk denetimini birleştirir. Proje dosyaları, toplu işler, raporlar ve AI gelecek çalışmalardır.',
    privacyLocal: 'Güncel iş akışları Type-C, kontrollü yerel ağlar ve cihaz içi tanılamaya dayanır. Proje dosyası dışa aktarma ve yedekleme hâlâ geliştirme aşamasındadır. Bu site tarayıcıda yalnızca dil ve tema tercihlerini saklar; şu anda analiz veya reklam izleme kullanmaz.'
  }
};
