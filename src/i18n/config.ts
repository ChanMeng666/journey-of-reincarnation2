import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            title: 'Journey of Reincarnation',
            start: 'Start Journey',
            reincarnate: 'Reincarnate',
            generating: 'Generating...',
            newLife: 'Your New Life',
            country: 'Country',
            gender: 'Gender',
            male: 'Male',
            female: 'Female',
            socialClass: 'Social Class',
            birthplace: 'Birthplace',
            familyStructure: 'Family Structure',
            onlyChild: 'Only Child',
            siblings: 'With Siblings',
            urban: 'Urban',
            suburban: 'Suburban',
            rural: 'Rural',
            low: 'Low Income',
            middle: 'Middle Income',
            high: 'High Income',
            // statistics: 'Statistics',
            globalDistribution: 'Global Distribution',
            socialClassDistribution: 'Social Class Distribution',
            birthplaceDistribution: 'Birthplace Distribution',
            previousLives: 'Previous Lives',
            difficultyLevel: 'Difficulty Level',
            shareResult: 'Share Result',
            shareDescription: 'Share your new life with others',
            shareText: 'I got reincarnated in Journey of Reincarnation!',
            copy: 'Copy',
            copied: 'Copied!',
            share: 'Share',
            tryYourLuck: 'Try your luck in reincarnation!',
            generatingText: 'Finding your next life...',
            birthLocation: 'Birth Location',
            specialEvent: {
                twinBirth: {
                    title: 'Twin Birth!',
                    description: 'You were born as a twin! This is a rare occurrence.'
                },
                prodigy: {
                    title: 'Child Prodigy!',
                    description: 'You were born with exceptional talents!'
                },
                historicalFigure: {
                    title: 'Historical Figure!',
                    description: 'You are destined to make history!'
                },
                continue: 'Continue'
            },
            compareTitle: 'Compare Lives',
            comparisons: 'Life Comparisons',
            worldMap: 'World Map',
            birthCountry: 'Birth Country',
            characteristics: 'Characteristics',
            playerCount: 'Player Count',
            totalLives: 'Total Lives',
            distribution: 'Distribution',
            gameStats: 'Game Statistics',
            loadingTitle: 'Loading',
            sharePlatform: {
                twitter: 'Share on Twitter',
                facebook: 'Share on Facebook',
                whatsapp: 'Share on WhatsApp'
            },
            musicControl: {
                play: 'Play Music',
                pause: 'Pause Music'
            },
            statistics: {
                title: 'Statistics',
                globalDistribution: 'Global distribution of life circumstances',
                socialClassTitle: 'Social Class Distribution',
                birthplaceTitle: 'Birthplace Distribution',
                percentage: 'Percentage',
                population: 'Population',
                urban: 'Urban',
                suburban: 'Suburban',
                rural: 'Rural',
                high: 'High Income',
                middle: 'Middle Income',
                low: 'Low Income'
            }
        }
    },
    zh: {
        translation: {
            title: '轮回之旅',
            start: '开始旅程',
            reincarnate: '重新投胎',
            generating: '生成中...',
            newLife: '你的新人生',
            country: '国家',
            gender: '性别',
            male: '男',
            female: '女',
            socialClass: '社会阶层',
            birthplace: '出生地',
            familyStructure: '家庭结构',
            onlyChild: '独生子女',
            siblings: '有兄弟姐妹',
            urban: '城市',
            suburban: '郊区',
            rural: '农村',
            low: '低收入',
            middle: '中等收入',
            high: '高收入',
            // statistics: '统计数据',
            globalDistribution: '全球分布',
            socialClassDistribution: '社会阶层分布',
            birthplaceDistribution: '出生地分布',
            previousLives: '前世记录',
            difficultyLevel: '人生难度',
            shareResult: '分享结果',
            shareDescription: '与他人分享你的新人生',
            shareText: '我在轮回之旅中重生了！',
            copy: '复制',
            copied: '已复制！',
            share: '分享',
            tryYourLuck: '来试试你的轮回运气吧！',
            generatingText: '寻找你的来世中...',
            birthLocation: '出生地点',
            specialEvent: {
                twinBirth: {
                    title: '双生子！',
                    description: '你出生为双胞胎之一！这是很罕见的。'
                },
                prodigy: {
                    title: '天才儿童！',
                    description: '你天生就拥有非凡的才能！'
                },
                historicalFigure: {
                    title: '历史人物！',
                    description: '你注定要创造历史！'
                },
                continue: '继续'
            },
            compareTitle: '人生对比',
            comparisons: '生命历程对比',
            worldMap: '世界地图',
            birthCountry: '出生国家',
            characteristics: '个人特征',
            playerCount: '玩家数量',
            totalLives: '总转世次数',
            distribution: '分布情况',
            gameStats: '游戏统计',
            loadingTitle: '加载中',
            sharePlatform: {
                twitter: '分享到推特',
                facebook: '分享到脸书',
                whatsapp: '分享到WhatsApp'
            },
            musicControl: {
                play: '播放音乐',
                pause: '暂停音乐'
            },
            statistics: {
                title: '统计数据',
                globalDistribution: '人生环境全球分布',
                socialClassTitle: '社会阶层分布',
                birthplaceTitle: '出生地分布',
                percentage: '百分比',
                population: '人口',
                urban: '城市',
                suburban: '郊区',
                rural: '农村',
                high: '高收入',
                middle: '中等收入',
                low: '低收入'
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // 默认语言
        fallbackLng: 'en', // 备用语言
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false
        }
    });

export default i18n;
