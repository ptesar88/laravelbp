
const MainLayout = () => {
    return (
        <div>
            <UserSelectedFence />
            <SlopeType />
            <FenceType />
            <Demand />
        </div>
    );
};

//export default MainLayout;

ReactDOM.render(<MainLayout />, document.getElementById("root"));
