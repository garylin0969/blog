/**
 * GitHub 統計配置介面。
 */
interface GithubStatsConfig {
    [key: string]: string | number | boolean;
}

/** 預設 GitHub 使用者名稱。 */
export const DEFAULT_GITHUB_USERNAME = 'garylin0969';

/**
 * 預設 GitHub 統計配置。
 *
 * 參考: https://github.com/anuraghazra/github-readme-stats/blob/master/themes/README.md
 */
export const DEFAULT_GITHUB_STATS_CONFIG: GithubStatsConfig = {
    light_theme: 'buefy',
    dark_theme: 'jolly',
    bg_color: '00000000',
    hide_border: true,
    disable_animations: true,
};

/**
 * 常用語言統計配置。
 */
export const DEFAULT_TOP_LANGS_CONFIG: GithubStatsConfig = {
    ...DEFAULT_GITHUB_STATS_CONFIG,
    custom_title: 'Most Used in GitHub',
    // layout: 'compact',
    // langs_count: 8,
};

/**
 * GitHub 一般統計參數配置。
 */
export const DEFAULT_GITHUB_STATS_PARAMS: GithubStatsConfig = {
    ...DEFAULT_GITHUB_STATS_CONFIG,
    show_icons: true,
    hide_rank: true,
    count_private: true,
};
