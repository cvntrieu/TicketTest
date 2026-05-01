import "./App.css";

export default function App() {
  return (
    <>

<header className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] sticky top-0 z-50">
<div className="flex items-center justify-between px-6 lg:px-12 h-20 w-full max-w-screen-2xl mx-auto">
<div className="flex items-center gap-12">
<a className="text-2xl font-black tracking-tighter text-indigo-600 dark:text-indigo-400" href="#">TicketRush</a>
<nav className="hidden md:flex items-center gap-8 font-['Inter'] antialiased text-sm font-medium">
<a className="text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 pb-5" href="#">Home</a>
<a className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 transition-all duration-200" href="#">Events</a>
<a className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 transition-all duration-200" href="#">My Tickets</a>
<a className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 transition-all duration-200" href="#">Profile</a>
</nav>
</div>
<div className="flex items-center gap-6">
<button className="hidden lg:flex items-center gap-2 text-slate-400 px-4 py-2 bg-slate-50 dark:bg-slate-800/50 rounded-xl transition-all duration-200 border border-slate-200 dark:border-slate-700">
<span className="material-symbols-outlined" data-icon="search">search</span>
<span>Tìm sự kiện...</span>
</button>
<button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold active:scale-95 transform transition-transform shadow-lg shadow-primary/20">Login</button>
</div>
</div>
</header>
<main className="max-w-screen-2xl mx-auto">

<section className="relative px-6 lg:px-12 pt-8 pb-16">
<div className="relative overflow-hidden rounded-xl h-[600px] flex items-center shadow-xl">
<img className="absolute inset-0 w-full h-full object-cover" data-alt="Cinematic wide shot of a massive music festival stage at night with purple neon lights and a cheering crowd" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9leApRuYDeoMN4tBL6Q8Dq_TqhtPsOBfLXIS3d2uEPZ74tw-tb5Mp3imLBu7jdlojXdyC5G4ZQR8C0bs5SVMDNNdxfcHifgbURIaNiaO4aqH_LVhBnGRd2vc1AEw8EzU8LrdPUubpnu0slSGhR90s1GIqP7H4h1l1F3x06nNPDHjwswi0Pdx_Ipbe4cWcaO6bJVIrWfXoilBMne7P4XPVThKQP_lCsCB1YM7CyRWhITw33arbDTnhdiK9JLpfUoD_vDd009ooKTE9"/>
<div className="absolute inset-0 bg-gradient-to-r from-on-background/90 via-on-background/40 to-transparent"></div>
<div className="relative z-10 px-12 max-w-2xl text-white">
<span className="inline-block bg-primary px-4 py-1 rounded-full text-label-caps mb-6 uppercase tracking-widest">Sự kiện tiêu biểu</span>
<h1 className="font-h1 text-h1 mb-4 leading-tight">Summer Music Festival 2026</h1>
<p className="text-body-lg font-body-lg mb-8 opacity-90">Lễ hội âm nhạc lớn nhất Đông Nam Á trở lại với dàn line-up huyền thoại. Sẵn sàng cho một mùa hè bùng nổ.</p>
<div className="flex gap-4 mb-10">
<div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 text-center min-w-[80px]">
<div className="font-tabular-nums text-2xl font-bold">12</div>
<div className="text-[10px] uppercase opacity-70">Ngày</div>
</div>
<div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 text-center min-w-[80px]">
<div className="font-tabular-nums text-2xl font-bold">08</div>
<div className="text-[10px] uppercase opacity-70">Giờ</div>
</div>
<div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 text-center min-w-[80px]">
<div className="font-tabular-nums text-2xl font-bold">45</div>
<div className="text-[10px] uppercase opacity-70">Phút</div>
</div>
</div>
<div className="flex items-center gap-6">
<button className="bg-primary hover:bg-primary-container text-on-primary px-10 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all active:scale-95 shadow-xl shadow-primary/30">
                            Mua vé ngay
                            <span className="material-symbols-outlined">arrow_forward</span>
</button>
<button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full font-bold text-lg transition-all">
                            Xem chi tiết
                        </button>
</div>
</div>
</div>
</section>

<section className="px-6 lg:px-12 -mt-16 relative z-20">
<div className="bg-white rounded-xl shadow-[0px_10px_30px_rgba(0,0,0,0.08)] p-6 flex flex-col lg:flex-row gap-4 border border-slate-100">
<div className="flex-1 flex items-center gap-3 bg-slate-50 px-4 py-4 rounded-lg border border-slate-200">
<span className="material-symbols-outlined text-slate-400">search</span>
<input className="bg-transparent border-none focus:ring-0 w-full font-body-md" placeholder="Tìm kiếm sự kiện, nghệ sĩ, địa điểm..." type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:w-1/2">
<div className="flex items-center gap-3 bg-slate-50 px-4 py-4 rounded-lg border border-slate-200 cursor-pointer">
<span className="material-symbols-outlined text-slate-400">calendar_month</span>
<select className="bg-transparent border-none focus:ring-0 w-full font-body-sm appearance-none">
<option>Thời gian</option>
<option>Hôm nay</option>
<option>Cuối tuần này</option>
<option>Tháng này</option>
</select>
</div>
<div className="flex items-center gap-3 bg-slate-50 px-4 py-4 rounded-lg border border-slate-200 cursor-pointer">
<span className="material-symbols-outlined text-slate-400">location_on</span>
<select className="bg-transparent border-none focus:ring-0 w-full font-body-sm appearance-none">
<option>Địa điểm</option>
<option>TP. Hồ Chí Minh</option>
<option>Hà Nội</option>
<option>Đà Nẵng</option>
</select>
</div>
<div className="flex items-center gap-3 bg-slate-50 px-4 py-4 rounded-lg border border-slate-200 cursor-pointer">
<span className="material-symbols-outlined text-slate-400">category</span>
<select className="bg-transparent border-none focus:ring-0 w-full font-body-sm appearance-none">
<option>Thể loại</option>
<option>Concert</option>
<option>Kịch nói</option>
<option>Workshop</option>
</select>
</div>
</div>
<button className="bg-on-background text-white px-10 py-4 rounded-lg font-bold hover:bg-slate-800 transition-colors">Tìm kiếm</button>
</div>
</section>

<section className="px-6 lg:px-12 py-20">
<div className="flex justify-between items-end mb-10">
<div>
<span className="text-primary font-bold tracking-widest text-label-caps uppercase block mb-2">Đề xuất cho bạn</span>
<h2 className="font-h2 text-h2 text-on-background">Sự kiện nổi bật</h2>
</div>
<a className="text-primary font-bold flex items-center gap-2 hover:underline" href="#">
                    Xem tất cả
                    <span className="material-symbols-outlined">chevron_right</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[600px]">

<div className="md:col-span-7 relative rounded-xl overflow-hidden group shadow-lg">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Crowded concert venue with thousands of fans glowing under red stage lights and laser beams" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6wjA4_wxdStmfPmnXmVVEm4jR-mqXKF5kIEG7TJiS75ryzhSXdXVxTNReer6CPl8QhveZbxBb3zp_zfjL_o7ouxT2u24NrcmLmHNcJG6QsJtTdQWYfeDpgnaDTi6w3sPt9veFPM_M0vzMwU81XKgHY-nzGGK-Q3Qjm-fkYcu7X-O1UuMtkmlJHHmeHX0WUkTNT43YkeS8PafHOP9IlAdCI5uPewpFpt6m2kEUOOpJWN9WsAY-FyFkzd6NNtD5nbqiTOwRVhQ2a5ov"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
<div className="absolute top-6 left-6 flex gap-2">
<span className="bg-secondary text-on-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Đang bán</span>
</div>
<div className="absolute bottom-8 left-8 right-8 text-white">
<p className="text-indigo-400 font-bold mb-2 uppercase tracking-widest text-xs">V-Pop Special</p>
<h3 className="text-3xl font-bold mb-4">The Show: Modern Legend 2026</h3>
<div className="flex flex-wrap gap-6 text-sm opacity-90">
<span className="flex items-center gap-2"><span className="material-symbols-outlined text-base">calendar_today</span> 15.08.2026</span>
<span className="flex items-center gap-2"><span className="material-symbols-outlined text-base">location_on</span> SVĐ Quân Khu 7, TP.HCM</span>
</div>
</div>
</div>

<div className="md:col-span-5 grid grid-rows-2 gap-6">
<div className="relative rounded-xl overflow-hidden group shadow-lg">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Intimate jazz club performance with warm golden lighting and silhouettes of musicians" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD37IRwuKaAoohHsMk1ia1Ocsrp4nQNtSAZEvQGHFmXqXGSmmEluckG06zRKVOM0hFPSc4by8PdsMy6SE5zBBZMtDB56uNmKs7Twg6mS2EblZmWdg_5RmutHmwXwGlSXB2SfhPiXu07zr3ZCayXj82gV6LanG5pM9uwrijskiX3uFUyCIH_zqRsv3xkzupVHhC0b15oYqzHzgE1mrp-A9gRcNYo236qCPdVkbY8Gz8Sw-297slW2SgZ1UT_OmPiA0yyqBcmyTSjqh8N"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h4 className="text-xl font-bold">Midnight Jazz Night</h4>
<p className="text-sm opacity-80">Từ 450.000đ</p>
</div>
</div>
<div className="relative rounded-xl overflow-hidden group shadow-lg">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Dynamic electronic music event with neon blue and pink geometric lighting patterns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4d4C9AfuOd9nPQI_OB0QMNI84NWTgYnMYEYAEsTA6K_Q7qM2pZt8ZgZhZJZFYeDWpSXS4dmPR1ipMhpdESpL0Wreu6vK7TmhmABt-VFoKW4f9fGk3FcymUu3KESJFiM9KWJLi2Hmxl6cGCq--H5kP4IKtrqz23IwkipLZ4FZrVINmqWXhpZ-1MZpQ9nn-XzEwNI0ZNL25hEYSp4FVCaLaNjrIlWqhXNIWGvIg2vRnZo2iYvoWGQYKSebtniLjBGa5NjtKSkdxyOwl"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h4 className="text-xl font-bold">EDM World Tour</h4>
<p className="text-sm opacity-80">Từ 1.200.000đ</p>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 lg:px-12 py-10 bg-slate-50/50 border-t border-slate-100">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
<h2 className="font-h2 text-h2 text-on-background">Khám phá sự kiện</h2>
<div className="flex gap-2 p-1 bg-white border border-slate-200 rounded-lg">
<button className="p-2 bg-indigo-50 text-indigo-600 rounded">
<span className="material-symbols-outlined">grid_view</span>
</button>
<button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
<span className="material-symbols-outlined">view_list</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 group">
<div className="relative aspect-[4/5] overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Outdoor art festival with colorful installations and people walking around in daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyDXQ-5RmTlMhkL_hLqIVmCQrazluCtS8THBtsCCNYjA9qp4Ruq4cDyn4qKfyOc-FNelhI57HtevC-8XJ1NJR6AdlrSiEQngjdKOyctbvhYq983sg8pObuZtwWf9-J_lx-PKnbEIXeaiHTlCf0iWuHngUUIumVmGbFHBYjbqR-pSKk_NVEKr_d8EDi_Vx1q2H-CskiDDexQniiY9xjOli5SrNxn6L1X7qpCaSl-KQOeDPbO_uGTqf6XFrPjLDxhvI3U49iWYo390hW"/>
<div className="absolute top-4 left-4">
<span className="bg-secondary-container/90 backdrop-blur-md text-on-secondary-container px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">Đang mở bán</span>
</div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full text-on-background shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined" data-icon="favorite" data-weight="fill">favorite</span>
</button>
</div>
<div className="p-6 flex flex-col flex-1">
<p className="text-indigo-600 font-bold text-xs uppercase mb-2">Triển lãm Nghệ Thuật</p>
<h3 className="font-h3 text-xl mb-4 line-clamp-2">Sắc Màu Thành Phố 2026: Đêm Hội Ánh Sáng</h3>
<div className="space-y-3 mb-6 flex-1">
<div className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-lg opacity-60">calendar_today</span>
<span className="text-body-sm">22.09.2026 • 19:00</span>
</div>
<div className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-lg opacity-60">location_on</span>
<span className="text-body-sm line-clamp-1">Trung tâm Triển lãm SECC, Q.7</span>
</div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-100">
<div>
<span className="text-[10px] text-slate-400 uppercase font-bold block">Giá từ</span>
<span className="text-lg font-black text-on-background">500.000đ</span>
</div>
<button className="bg-primary text-on-primary px-4 py-2 rounded font-bold text-sm hover:bg-primary-container transition-colors">Xem chi tiết</button>
</div>
</div>
</div>

<div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 group">
<div className="relative aspect-[4/5] overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Grand theater interior with ornate gold detailing and red velvet seats" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACOaf4syma9Tx3ihfujhFZTDafbDwJX4Ule9JTHnOQ00tXlNsTqmd47yIMDBUzdhdkwLFk-KELlvaoXdl5oV6-YkwhJRpnkQmiLlAjarpCkZLSoLcLphVLONv5jr8E1i2RrZ5OPWnVTzuPYt7eBnJR0Zw5Nh2s3mO6emh7ZALb3tym43g780lNAF3smH-mnVs_dleIro_IVMxoI0hVGQW7hFvfZLG6UisvF6AMFpXRMAgCGnq45XkRxzkOW9L5YILcAJGkuGpXr15Q"/>
<div className="absolute top-4 left-4">
<span className="bg-secondary-container/90 backdrop-blur-md text-on-secondary-container px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">Đang mở bán</span>
</div>
</div>
<div className="p-6 flex flex-col flex-1">
<p className="text-indigo-600 font-bold text-xs uppercase mb-2">Kịch Nói</p>
<h3 className="font-h3 text-xl mb-4 line-clamp-2">Cánh Đồng Bất Tận: Vở Diễn Thế Kỷ</h3>
<div className="space-y-3 mb-6 flex-1">
<div className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-lg opacity-60">calendar_today</span>
<span className="text-body-sm">05.10.2026 • 20:00</span>
</div>
<div className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-lg opacity-60">location_on</span>
<span className="text-body-sm line-clamp-1">Nhà Hát Lớn Hà Nội</span>
</div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-100">
<div>
<span className="text-[10px] text-slate-400 uppercase font-bold block">Giá từ</span>
<span className="text-lg font-black text-on-background">750.000đ</span>
</div>
<button className="bg-primary text-on-primary px-4 py-2 rounded font-bold text-sm hover:bg-primary-container transition-colors">Xem chi tiết</button>
</div>
</div>
</div>

<div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 group">
<div className="relative aspect-[4/5] overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="People interacting at a creative workshop with colorful tools and materials on a long wooden table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP8EYVuBb658tiIn3EHK5oxwoU_Sw2k6G9ev8MdLYhzivM2RzeVBxifOM-wBuG4_r5zPlCEMK0YMlJboH_sqbiNZ58uAbzNHiXdyFFO6oLJOjxzMMTAfQV2J87XOQ1Jbe4oLaXNoaFtt97LCAEO6jzzEQ5xiyybpmbgk1iutR7b_frBIhKkwrtDVPWkGJUxAmaO5VC3mPHY3r6pb0gIFgT0Z_XPjqvN6DBDWTC8ym2MqcfQ2bGtMcaxOlb5tC3XCstfHYmVFrSxVah"/>
<div className="absolute top-4 left-4">
<span className="bg-secondary-container/90 backdrop-blur-md text-on-secondary-container px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">Đang mở bán</span>
</div>
</div>
<div className="p-6 flex flex-col flex-1">
<p className="text-indigo-600 font-bold text-xs uppercase mb-2">Workshop</p>
<h3 className="font-h3 text-xl mb-4 line-clamp-2">Lớp Học Nấu Ăn: Ẩm Thực Fusion Á-Âu</h3>
<div className="space-y-3 mb-6 flex-1">
<div className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-lg opacity-60">calendar_today</span>
<span className="text-body-sm">12.11.2026 • 10:00</span>
</div>
<div className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-lg opacity-60">location_on</span>
<span className="text-body-sm line-clamp-1">Creative Hub, Q.2</span>
</div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-100">
<div>
<span className="text-[10px] text-slate-400 uppercase font-bold block">Giá từ</span>
<span className="text-lg font-black text-on-background">1.500.000đ</span>
</div>
<button className="bg-primary text-on-primary px-4 py-2 rounded font-bold text-sm hover:bg-primary-container transition-colors">Xem chi tiết</button>
</div>
</div>
</div>

<div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 group">
<div className="relative aspect-[4/5] overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Dynamic indie rock band performing on a small stage with atmospheric smoke and backlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXDw3oj0xx7LPF24JxZOP-0f1TWfxq4eP57owteemhERb78FzQEcyBdLkeO7bqltNZ7XFopOFZzj3Z7mDjz7ghJZPePdhte95vx9fDP1b6okYZWaTlkGEaCjTEPGnqqAHNd592nXM4JiRx2TD9iDrgXchew0vzEQJOv1zrBk7qR7kpQk3gw7cHPg8YtSVDC-y2uxQo1Hk1ip9aXM9EpQR_sUNbbu7NFq-xuEPFTu6wympLSyAsTb8I9rZy9Upwsg6KxFt73Tc1PR40"/>
<div className="absolute top-4 left-4">
<span className="bg-tertiary-fixed/90 backdrop-blur-md text-on-tertiary-fixed px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">Sắp diễn ra</span>
</div>
</div>
<div className="p-6 flex flex-col flex-1">
<p className="text-indigo-600 font-bold text-xs uppercase mb-2">Concert</p>
<h3 className="font-h3 text-xl mb-4 line-clamp-2">Indie Night: Chill cùng Da LAB</h3>
<div className="space-y-3 mb-6 flex-1">
<div className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-lg opacity-60">calendar_today</span>
<span className="text-body-sm">24.12.2026 • 19:30</span>
</div>
<div className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-lg opacity-60">location_on</span>
<span className="text-body-sm line-clamp-1">Phố Đi Bộ Nguyễn Huệ</span>
</div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-100">
<div>
<span className="text-[10px] text-slate-400 uppercase font-bold block">Giá từ</span>
<span className="text-lg font-black text-on-background">350.000đ</span>
</div>
<button className="bg-slate-200 text-slate-600 px-4 py-2 rounded font-bold text-sm cursor-not-allowed">Chưa mở bán</button>
</div>
</div>
</div>
</div>

<div className="mt-20 flex justify-center">
<button className="bg-white border-2 border-primary text-primary px-12 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300">
                    Xem thêm sự kiện
                </button>
</div>
</section>

<section className="px-6 lg:px-12 py-20">
<div className="bg-indigo-900 rounded-[2rem] overflow-hidden relative p-12 lg:p-20 text-white flex flex-col lg:flex-row items-center gap-16">
<div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-secondary/10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>
<div className="flex-1 relative z-10">
<h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">Đừng bỏ lỡ bất kỳ khoảnh khắc nào!</h2>
<p className="text-xl text-indigo-100 opacity-80 mb-10 max-w-lg">Nhận thông báo sớm nhất về các sự kiện hot, ưu đãi độc quyền và mã giảm giá dành riêng cho bạn.</p>
<div className="flex flex-col sm:flex-row gap-4 max-w-md">
<input className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Nhập email của bạn" type="email"/>
<button className="bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-colors">Đăng ký ngay</button>
</div>
</div>
<div className="lg:w-1/3 relative z-10 hidden lg:block">
<div className="grid grid-cols-2 gap-4">
<div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center">
<span className="material-symbols-outlined text-4xl text-indigo-300 mb-2">confirmation_number</span>
<div className="text-2xl font-bold">1M+</div>
<div className="text-xs text-indigo-200">Vé đã bán</div>
</div>
<div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center translate-y-8">
<span className="material-symbols-outlined text-4xl text-indigo-300 mb-2">groups</span>
<div className="text-2xl font-bold">500k+</div>
<div className="text-xs text-indigo-200">Thành viên</div>
</div>
<div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center">
<span className="material-symbols-outlined text-4xl text-indigo-300 mb-2">event_available</span>
<div className="text-2xl font-bold">12k+</div>
<div className="text-xs text-indigo-200">Sự kiện</div>
</div>
<div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center translate-y-8">
<span className="material-symbols-outlined text-4xl text-indigo-300 mb-2">verified</span>
<div className="text-2xl font-bold">100%</div>
<div className="text-xs text-indigo-200">Tin cậy</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 pt-20 pb-10">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
<div>
<a className="text-3xl font-black tracking-tighter text-indigo-600 mb-6 block" href="#">TicketRush</a>
<p className="text-slate-500 mb-8 max-w-xs">Nền tảng đặt vé sự kiện hàng đầu Việt Nam, mang đến những trải nghiệm giải trí tuyệt vời nhất.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all" href="#"><span className="material-symbols-outlined">social_leaderboard</span></a>
<a className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all" href="#"><span className="material-symbols-outlined">camera</span></a>
<a className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all" href="#"><span className="material-symbols-outlined">mail</span></a>
</div>
</div>
<div>
<h4 className="font-bold text-lg mb-6">Về TicketRush</h4>
<ul className="space-y-4 text-slate-600">
<li><a className="hover:text-primary transition-colors" href="#">Về chúng tôi</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Tin tức</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Tuyển dụng</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Liên hệ</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-lg mb-6">Chính sách</h4>
<ul className="space-y-4 text-slate-600">
<li><a className="hover:text-primary transition-colors" href="#">Điều khoản sử dụng</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Chính sách bảo mật</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Chính sách hoàn tiền</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Quy định bán vé</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-lg mb-6">Tải ứng dụng</h4>
<p className="text-slate-500 mb-6">Trải nghiệm đặt vé mượt mà trên điện thoại.</p>
<div className="space-y-3">
<button className="bg-on-background text-white w-full px-6 py-3 rounded-lg flex items-center gap-3 hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined">phone_iphone</span>
<div className="text-left">
<div className="text-[10px] uppercase opacity-70 leading-none">Download on</div>
<div className="text-sm font-bold leading-none">App Store</div>
</div>
</button>
<button className="bg-on-background text-white w-full px-6 py-3 rounded-lg flex items-center gap-3 hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined">android</span>
<div className="text-left">
<div className="text-[10px] uppercase opacity-70 leading-none">Get it on</div>
<div className="text-sm font-bold leading-none">Google Play</div>
</div>
</button>
</div>
</div>
</div>
<div className="max-w-screen-2xl mx-auto px-6 lg:px-12 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-slate-400 text-sm">© 2026 TicketRush. All rights reserved. Powered by Entertainment Group.</p>
<div className="flex items-center gap-4">
<img className="h-6 grayscale opacity-50" data-alt="Visa logo graphic with clean blue text on white background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeZXQQJnV4fmcvRanuRTtvaQxZhm6-ePmhjUvhWbSEYzee7sXXTfX0DxBp_UTW2KwNZf_RmZ5e5HVFQpQc_kEyEGworcjOFNVU_rzEnSPguEeY8dyCfEkhtSvR_mfMbPMBl4ndBNaI2t8RUrxXMOTIJtEccuSe7Ku9pAK8TwVjiCxMmUGtuWGRn5M2QuE-7NO1iAgU0W6krsvah-E8jqWm0juRdjyVSd6bTlCf0nstyg8k1a_8YKdsf1v0jbs7sQp8StNGXq59BV_9"/>
<img className="h-6 grayscale opacity-50" data-alt="Mastercard logo graphic with overlapping red and orange circles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcbmEd9QJpiuY6KdwnKL7ByOhOZJhz4W0Nr1C9XaU7Df2sfr-dea0qP4EpziHp3jI32LNq03xqpS1cYfe2VRoK7u0yU_6Pg6gIy8AS7gNNjAegXXej6RefV4yY2Kfg_eak277VakcOzQAKnQwJJv0gfyyKSOhW5iQWkWOeFwV-lf0q-InQtyjOT4Ev0pDPx9nxvAH7pdJ3Dc3vhs2z0azVveFNL6wbkW2QIuASBPxnwcYW7Q73KQQVBnj3tVqmLniisCIAjcq_qQBM"/>
<img className="h-6 grayscale opacity-50" data-alt="Momo e-wallet logo with pink and white branding" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa-rT2P1P4_7sKjL-tKow60kO53P7Ml9qCWaXxYC46zBWXcepQcFoYddBLmni6tTICJRXRhvNiGjsugfV2EzsaFKwCXMb_qH72EZo-cHVFaP8dIPTcEy2ROAc0VUmqrhI4h0r7_d7N50gqiIG0yZXmKZIUfMVdDJeCwXRymPL1bcHGko2kSSQWzJVDu6OIXenKVdCDEcchRDx3YloHP9uCej-UO-Mwli73nLeXJLh0w4KSegw39qAzJ_92MZ1AMOR1jhGsiVJtTt7e"/>
</div>
</div>
</footer>
    </>
  );
}
