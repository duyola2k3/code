// ==========================================================================
// FILE CẤU HÌNH ÁNH XẠ URL (MAPPING CONFIG)
// Bạn có thể dễ dàng thêm, sửa hoặc xóa các ánh xạ tại đây.
// ==========================================================================

const SEARCH_MAPPING = [
    {
        urlPattern: "49-2",
        keyword: "SUNWIN",
        targetDomain: "sunwin2009.com",
        description: "SUNWIN - Trang chủ chính thức"
    },
    {
        urlPattern: "49-3",
        keyword: "OPEN88",
        targetDomain: "open88a2.com",
        description: "OPEN88 - Trang chủ chính thức"
    },
    {
        urlPattern: "49-4",
        keyword: "IWIN",
        targetDomain: "iwin.app",
        description: "IWIN - Trang chủ chính thức"
    },
    {
        urlPattern: "49-5",
        keyword: "KING88",
        targetDomain: "king88.vip",
        description: "KING88 - Trang chủ chính thức"
    },
    {
        urlPattern: "49-6",
        keyword: "LUCKY88",
        targetDomain: "lucky88.com",
        description: "LUCKY88 - Trang chủ chính thức"
    }
    // Bạn có thể thêm các ánh xạ mới theo mẫu trên tại đây.
];

// Xuất cấu hình để script chính sử dụng
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SEARCH_MAPPING;
}
