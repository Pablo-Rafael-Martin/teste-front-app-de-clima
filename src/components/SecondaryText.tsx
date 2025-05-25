function SecondaryText(props: { children: React.ReactNode }) {
    const { children } = props;

    return (
            <span style={{ fontSize: '12rem', opacity: .78, color: 'white' }}>{children}</span>
    );
}

export default SecondaryText;