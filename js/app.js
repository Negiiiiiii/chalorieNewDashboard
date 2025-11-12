// アニメーション用のJavaScript
document.addEventListener('DOMContentLoaded', function() {
    // スコアの円形プログレスバーのアニメーション
    const scoreValue = 75; // スコア値（0-100）
    const scoreCircle = document.getElementById('scoreCircle');
    const circumference = 2 * Math.PI * 40.5; // 円周 = 2πr (r=40.5)

    // スコアに基づいてダッシュオフセットを計算
    const offset = circumference - (scoreValue / 100) * circumference;

    // アニメーション開始
    setTimeout(() => {
        scoreCircle.style.strokeDashoffset = offset;
    }, 200);

    // 栄養バーのアニメーション
    const nutritionItems = document.querySelectorAll('.nutrition-item');
    nutritionItems.forEach((item, index) => {
        const progress = item.querySelector('.nutrition-progress');
        const width = progress.style.width;
        progress.style.width = '0';
        setTimeout(() => {
            progress.style.width = width;
        }, 100 * index);
    });

    // ボタンのクリックイベント
    const iconButtons = document.querySelectorAll('.icon-btn');
    iconButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Button clicked:', this.getAttribute('aria-label'));
        });
    });

    // Penneのまばたきアニメーション
    const eyelids = document.querySelectorAll('.eyelid');
    setInterval(() => {
        eyelids.forEach(eyelid => {
            eyelid.style.transition = 'height 0.1s';
            eyelid.style.height = '10px';
            setTimeout(() => {
                eyelid.style.height = '6px';
            }, 100);
        });
    }, 3000);

    // カレンダー日付のタブ切り替え
    const calendarDays = document.querySelectorAll('.calendar-day');
    calendarDays.forEach(day => {
        day.addEventListener('click', function() {
            // すべてのactiveクラスを削除
            calendarDays.forEach(d => d.classList.remove('active'));
            // クリックされた日付にactiveクラスを追加
            this.classList.add('active');

            // ここで選択された日付のデータを読み込む処理を追加できます
            const date = this.querySelector('.day-date').textContent;
            console.log('Selected date:', date);
        });
    });

    // ページネーションドットのクリックイベント
    const paginationDots = document.querySelectorAll('.pagination-dot');
    paginationDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            paginationDots.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
            console.log('Page:', index + 1);
        });
    });
});
