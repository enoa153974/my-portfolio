// 使いたいファイル内でButtonのimport/下記でボタンの呼び出し
/* import Button from "../components/Button"; */
/*<!-- 以下でボタンを呼び出し -->
    <Button
        href="リンク"
        className="上書きしたいクラス名"
        variant="primary"
    >
        <span>ボタンテキスト</span>
    </Button>  */

interface ButtonProps {
    href?: string;
    variant?: 'primary' | 'secondary' | 'link' | 'push';
    fullWidth?: boolean;
    className?: string;
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: 'button' | 'submit' | 'reset';
}

export default function Button({
    href,
    variant = 'primary',
    fullWidth = false,
    className = '',
    children,
    onClick,
    type = 'button'
}: ButtonProps) {
    // ユーティリティクラスの切り替えロジック
    const classes = [
        'btn',
        variant && `btn--${variant}`, // btn--primary 等
        fullWidth && 'btn--full', // btn--full を必要に応じて
        className // 呼び出し側で追加カスタムしたい場合
    ]
        .filter(Boolean)
        .join(' ');

    if (href) {
        return (
            <a href={href} className={classes}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} className={classes} onClick={onClick}>
            {children}
        </button>
    );
}
