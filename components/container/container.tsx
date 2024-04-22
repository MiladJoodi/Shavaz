
interface children{
    children: React.ReactNode;
}

const Container = ({children}:children) => {
    return (
        <div className="container mx-auto max-w-7xl px-3 md:px-6 lg:px-10">
            {children}
        </div>
    );
}

export default Container;