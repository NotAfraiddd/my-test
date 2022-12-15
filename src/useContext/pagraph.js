import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Pagraph() {
    const context = useContext(ThemeContext)
    return (
        <div className={context.theme}>
            Tối 13.12, Thủ tướng Phạm Minh Chính và đoàn đại biểu cấp cao Việt Nam có buổi gặp gỡ đại diện cộng đồng người Việt ở đại sứ quán Việt Nam tại Bỉ.Ngoài bà con kiều bào ở Bỉ còn có người Việt ở Czech, hội sinh viên Việt Nam tại châu Âu, mạng lưới tri thức trẻ Việt Nam tại châu Âu.
        </div>
    );
}

export default Pagraph;