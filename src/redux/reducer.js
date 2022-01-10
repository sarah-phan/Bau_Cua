const initialState = {
    danhSachCuoc:[
        {ma: 'bau', hinhAnh: './image/bau.png', diemCuoc: 0},
        {ma: 'cua', hinhAnh: './image/cua.png', diemCuoc: 0},
        {ma: 'ca', hinhAnh: './image/ca.png', diemCuoc: 0},
        {ma: 'ga', hinhAnh: './image/ga.png', diemCuoc: 0},
        {ma: 'nai', hinhAnh: './image/nai.png', diemCuoc: 0},
        {ma: 'tom', hinhAnh: './image/tom.png', diemCuoc: 0},
    ],
    tongDiem: 1000,
    mangXucXac: [
        {ma: 'bau', hinhAnh: './image/bau.png'},
        {ma: 'bau', hinhAnh: './image/cua.png'},
        {ma: 'bau', hinhAnh: './image/ca.png'},
    ]
}

export const GameBauCuaReducer =  (state = initialState, action) => {
    switch (action.type) {

    case 'DAT_CUOC_BAU_CUA':
        // Tìm trong danhSachCuoc => quân cược nào được click sẽ được tăng hoặc giảm
        const danhSachCuocUpdate = [...state.danhSachCuoc];
        const index = danhSachCuocUpdate.findIndex(qc => qc.ma === action.quanCuoc.ma)
        if(index !== -1){
            if(action.tangGiam){
                danhSachCuocUpdate[index].diemCuoc += 100;
                state.tongDiem -= 100;
            }
            else{
                if(danhSachCuocUpdate[index].diemCuoc > 0){
                    danhSachCuocUpdate[index].diemCuoc -= 100;
                    state.tongDiem += 100;
                }
            }
        }
        state.danhSachCuoc = danhSachCuocUpdate;
        return { ...state}

    case 'PLAY_GAME_BAU_CUA':
        const mangXucXacNgauNhien = []
        for (let i = 0; i < 3; i++){
            // random từ 0 -> 5
            let soNgauNhien = Math.floor(Math.random() * 6)
            // chứa các object random được từ danhSachCuoc để push vào mangXucXac 
            const xucXacNgauNhien = state.danhSachCuoc[soNgauNhien]
            mangXucXacNgauNhien.push(xucXacNgauNhien)
            // console.log(mangXucXacNgauNhien)
        }
        state.mangXucXac = mangXucXacNgauNhien
        // console.log(state.mangXucXac)

        // Xử lý tăng điểm thưởng
        // duyệt mangXucXacNgauNhien để có bao nhiêu thì tăng bấy nhiêu (cược cá 100, ra 3 cá -> tăng 300)
        mangXucXacNgauNhien.forEach((xucXacNN)=>{
            // lúc này mangXucXacNgauNhien = mangXucXac
            // findIndex chỉ duyệt qua 1 lần, tìm thấy thì break ko duyệt nữa
            const index = state.danhSachCuoc.findIndex(qc => qc.ma === xucXacNN.ma);
            if (index !== -1){
                // nếu có đặt cược (giống) thì lấy điểm cược cộng vào tổng điểm
                state.tongDiem += state.danhSachCuoc[index].diemCuoc
            }
        })

        // Xử lý hoàn tiền
        // duyệt mảng danhSachCuoc (cược cá 100, ra 3 cá -> hoàn 100 do cược có 100, nếu duyệt bằng mangXucXacNgauNhien sẽ hoàn 300)
        state.danhSachCuoc.forEach((qc) => {
            const index = mangXucXacNgauNhien.findIndex(xucXacNN => xucXacNN.ma === qc.ma)
            if(index !== -1){
                state.tongDiem += qc.diemCuoc
                console.log(state.tongDiem)
            }
        })

        // reset lại điểm cược sau mỗi lần xốc
        state.danhSachCuoc = state.danhSachCuoc.map((qc)=>{
            return {...qc, diemCuoc: 0}
        })
        return {...state}

        case 'CHOI_LAI':
            state.tongDiem = 1000;
            state.danhSachCuoc = state.danhSachCuoc.map((qc) => {
                return {...qc, diemCuoc:0}
            })
            return {...state}
    default:
        return state
    }
}
