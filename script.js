// ========== 프로젝트 데이터 ==========
const projectData = {
    1: {
        title: "안정감과 집중력을 위한 홈 오피스",
        category: "Interior Design",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&h=800&fit=crop",
        description: `
            <div class="modal-header">
                <span class="modal-category">Interior Design</span>
                <h2 class="modal-title">안정감과 집중력을 위한 홈 오피스</h2>
            </div>
            <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&h=800&fit=crop" alt="홈 오피스" style="width: 100%; border-radius: 15px; margin: 30px 0;">
            <div class="modal-body">
                <p>아늑하고 고요하며 고도의 집중력을 위한 홈 오피스/서재. 차분하고 자연적인 색채 팔레트를 활용하여 따뜻하고 매력적이며 깊은 집중을 유도하는 분위기를 조성합니다.</p>

                <h3 style="margin-top: 30px; margin-bottom: 15px; font-size: 24px;">색채 전략</h3>
                <ul style="line-height: 1.8; color: #666;">
                    <li><strong>주조색:</strong> 따뜻한 베이지, 크림색 미색 - 부드럽고 삭막하지 않은 중립적인 배경</li>
                    <li><strong>재료:</strong> 밝은 천연 원목 (밝은 오크 또는 단풍나무) - 책상, 선반, 바닥에 통합</li>
                    <li><strong>악센트:</strong> 세이지 그린, 차분한 노란색 - 정신적 명료함과 차분함을 높이는 포인트</li>
                </ul>

                <h3 style="margin-top: 30px; margin-bottom: 15px; font-size: 24px;">적용 공간</h3>
                <p>벽과 천장에는 따뜻한 베이지와 크림색이 지배적인 색상으로, 부드럽고 삭막하지 않은 중립적인 배경을 제공합니다. 작은 장식 요소나 예술 작품에 부드러운 세이지 그린이나 차분한 노란색의 힌트를 넣어 은은한 악센트를 추가합니다.</p>
            </div>
        `
    },
    2: {
        title: "시간의 중첩",
        category: "Architectural Concept",
        image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&h=800&fit=crop",
        description: `
            <div class="modal-header">
                <span class="modal-category">Architectural Concept</span>
                <h2 class="modal-title">시간의 중첩 (ECHOES OF TOMORROW)</h2>
            </div>
            <img src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&h=800&fit=crop" alt="시간의 중첩" style="width: 100%; border-radius: 15px; margin: 30px 0;">
            <div class="modal-body">
                <p>전통 목조 구조의 단순한 선과 현대적인 투명 유리 또는 금속의 기하학적 면이 겹쳐져 하나의 형태로 나타납니다.</p>

                <h3 style="margin-top: 30px; margin-bottom: 15px; font-size: 24px;">개념</h3>
                <p>배경은 따뜻한 미색이나 흙색의 단색으로 처리됩니다. 건축물은 전통적인 목조 구조의 단순한 선과 현대적인 투명 유리 또는 금속의 기하학적 면이 겹쳐져 하나의 형태로 나타납니다.</p>

                <h3 style="margin-top: 30px; margin-bottom: 15px; font-size: 24px;">키워드</h3>
                <p><strong>선, 면, 여백, 단순함, 구조</strong></p>

                <h3 style="margin-top: 30px; margin-bottom: 15px; font-size: 24px;">메시지</h3>
                <p>시간이 흘러도 변치 않는 본질과 형태의 아름다움</p>

                <h3 style="margin-top: 30px; margin-bottom: 15px; font-size: 24px;">스타일</h3>
                <p>텍스트(제목)는 바우하우스 스타일처럼 간결한 산세리프체로 처리됩니다.</p>
            </div>
        `
    },
    3: {
        title: "미래의 그림자",
        category: "Visual Art",
        image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&h=800&fit=crop",
        description: `
            <div class="modal-header">
                <span class="modal-category">Visual Art</span>
                <h2 class="modal-title">미래의 그림자 (ARCHITECTS OF TOMORROW)</h2>
            </div>
            <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&h=800&fit=crop" alt="미래의 그림자" style="width: 100%; border-radius: 15px; margin: 30px 0;">
            <div class="modal-body">
                <p>전통 건축의 처마와 기와지붕 실루엣이 어둡게 드리워져 있고, 건축물의 현대적인 부분이 네온 블루나 강렬한 마젠타 색상의 빛을 발하는 추상적인 형태로 표현됩니다.</p>

                <h3 style="margin-top: 30px; margin-bottom: 15px; font-size: 24px;">구성 요소</h3>
                <ul style="line-height: 1.8; color: #666;">
                    <li><strong>상단:</strong> 전통 건축의 처마와 기와지붕 실루엣</li>
                    <li><strong>하단:</strong> 네온 블루/마젠타 색상의 현대적 형태</li>
                </ul>

                <h3 style="margin-top: 30px; margin-bottom: 15px; font-size: 24px;">키워드</h3>
                <p><strong>대비, 어둠, 네온, 실루엣, 융합</strong></p>

                <h3 style="margin-top: 30px; margin-bottom: 15px; font-size: 24px;">메시지</h3>
                <p>전통 속에 숨겨진 현대의 비밀 혹은 미스터리한 만남</p>

                <h3 style="margin-top: 30px; margin-bottom: 15px; font-size: 24px;">특징</h3>
                <ul style="line-height: 1.8; color: #666;">
                    <li><strong>전통 요소:</strong> 기와지붕의 곡선, 한옥의 처마, 고전적인 기둥</li>
                    <li><strong>현대 요소:</strong> 추상적 기하학, 대담한 색면 분할, 네온사인</li>
                    <li><strong>효과:</strong> 과거와 미래, 정적과 동적의 경계 허물기, 초현실적인 분위기 조성</li>
                </ul>
            </div>
        `
    },
    4: {
        title: "AI를 활용한 브랜드",
        category: "Brand Identity",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop",
        description: `
            <div class="modal-header">
                <span class="modal-category">Brand Identity</span>
                <h2 class="modal-title">AI를 활용한 로고 시스템</h2>
            </div>
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop" alt="AI를 활용한 과제" style="width: 100%; border-radius: 15px; margin: 30px 0;">
            <div class="modal-body">
                <p>인공지능 기술과 창의적 디자인이 하나의 상징으로 융합된 브랜드 아이덴티티입니다.</p>

                <h3 style="margin-top: 30px; margin-bottom: 15px; font-size: 24px;">디자인 요소</h3>
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                    <tr style="background: #f5f5f5;">
                        <th style="padding: 15px; text-align: left; border: 1px solid #ddd;">요소</th>
                        <th style="padding: 15px; text-align: left; border: 1px solid #ddd;">시각적 특징</th>
                        <th style="padding: 15px; text-align: left; border: 1px solid #ddd;">상징 의미</th>
                    </tr>
                    <tr>
                        <td style="padding: 15px; border: 1px solid #ddd;">기본 형태</td>
                        <td style="padding: 15px; border: 1px solid #ddd;">고전 기둥/아치</td>
                        <td style="padding: 15px; border: 1px solid #ddd;">전통, 견고함, 구조적 안정성</td>
                    </tr>
                    <tr>
                        <td style="padding: 15px; border: 1px solid #ddd;">디지털 질감</td>
                        <td style="padding: 15px; border: 1px solid #ddd;">픽셀, 도트, 회로 기판 패턴</td>
                        <td style="padding: 15px; border: 1px solid #ddd;">현대 기술, 디지털 시대, 정교함</td>
                    </tr>
                    <tr>
                        <td style="padding: 15px; border: 1px solid #ddd;">색상 팔레트</td>
                        <td style="padding: 15px; border: 1px solid #ddd;">블랙/그레이 + 에메랄드/블루</td>
                        <td style="padding: 15px; border: 1px solid #ddd;">전문성, 혁신, 활력</td>
                    </tr>
                    <tr>
                        <td style="padding: 15px; border: 1px solid #ddd;">타이포그래피</td>
                        <td style="padding: 15px; border: 1px solid #ddd;">가늘고 세련된 산세리프체</td>
                        <td style="padding: 15px; border: 1px solid #ddd;">기술과 디자인의 융합</td>
                    </tr>
                </table>
            </div>
        `
    },
    5: {
        title: "광안대교 2050",
        category: "Future Vision",
        image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1600&h=900&fit=crop",
        description: `
            <div class="modal-header">
                <span class="modal-category">Future Vision</span>
                <h2 class="modal-title">광안대교 2050 - 미래 도시 인프라의 재상상</h2>
            </div>
            <img src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1600&h=900&fit=crop" alt="광안대교 2050" style="width: 100%; border-radius: 15px; margin: 30px 0;">
            <div class="modal-body">
                <p>현재의 광안대교를 미래 도시 인프라로 재해석한 프로젝트입니다. 교량이 단순한 이동 수단을 넘어 복합적인 도시 공간으로 진화하는 비전을 제시합니다.</p>

                <h3 style="margin-top: 30px; margin-bottom: 15px; font-size: 24px;">핵심 디자인 요소</h3>

                <h4 style="margin-top: 20px; margin-bottom: 10px; font-size: 20px; color: #00D9B5;">1. 구조적 네온 조명</h4>
                <p>교량의 주탑과 케이블, 그리고 교각의 선들이 선명한 네온(푸른색, 마젠타색) 조명으로 강조되어 있습니다. 이는 단순한 조명이 아니라, 교량의 구조적 뼈대를 시각적인 예술 작품처럼 보이게 합니다.</p>

                <h4 style="margin-top: 20px; margin-bottom: 10px; font-size: 20px; color: #00D9B5;">2. 미래 교통 수단</h4>
                <p>교량 위를 운행하는 차량들은 일반적인 자동차라기보다는 자기 부상 열차나 자율 주행 캡슐 같은 미래형 교통 수단의 형태를 띠고 있으며, 배경에는 드론이나 플라잉카로 보이는 물체들이 떠다니고 있어 교통의 미래를 제시합니다.</p>

                <h4 style="margin-top: 20px; margin-bottom: 10px; font-size: 20px; color: #00D9B5;">3. 홀로그램 인터페이스</h4>
                <p>교량 주변 공중에 떠 있는 투명한 홀로그램 디스플레이는 정보, 광고, 혹은 예술적인 요소를 표시하며, 이는 첨단 기술이 도시에 깊숙이 통합된 모습을 보여줍니다.</p>

                <h4 style="margin-top: 20px; margin-bottom: 10px; font-size: 20px; color: #00D9B5;">4. 수상 도시 플랫폼</h4>
                <p>교량 아래 해수면 위에는 네온 라인으로 구획된 미래적인 플랫폼 또는 수상 도시의 일부가 조성되어 있어, 교량이 단순히 이동 수단이 아닌 복합적인 도시 공간으로 확장되었음을 암시합니다.</p>

                <h3 style="margin-top: 30px; margin-bottom: 15px; font-size: 24px;">비전</h3>
                <p>교량이 단순한 이동 수단을 넘어 미래 도시의 중심 인프라로 진화하는 모습</p>
            </div>
        `
    },
    6: {
        title: "모던 주거 공간",
        category: "Interior Design",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
        description: `
            <div class="modal-header">
                <span class="modal-category">Interior Design</span>
                <h2 class="modal-title">모던 주거 공간</h2>
            </div>
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop" alt="모던 주거 공간" style="width: 100%; border-radius: 15px; margin: 30px 0;">
            <div class="modal-body">
                <p>미니멀리즘과 따뜻함을 동시에 담은 현대적 주거 공간 디자인입니다.</p>

                <h3 style="margin-top: 30px; margin-bottom: 15px; font-size: 24px;">디자인 철학</h3>
                <p>불필요한 요소를 제거하고 본질에 집중하는 미니멀리즘 디자인 철학을 기반으로, 따뜻한 자연 소재와 부드러운 조명을 통해 거주자에게 편안함과 안정감을 제공합니다.</p>

                <h3 style="margin-top: 30px; margin-bottom: 15px; font-size: 24px;">주요 특징</h3>
                <ul style="line-height: 1.8; color: #666;">
                    <li><strong>색상:</strong> 화이트, 그레이 톤의 중립적 배경에 따뜻한 우드 톤 악센트</li>
                    <li><strong>소재:</strong> 천연 목재, 대리석, 패브릭의 조화</li>
                    <li><strong>조명:</strong> 자연광 최대 활용 및 간접 조명 배치</li>
                    <li><strong>가구:</strong> 심플하고 기능적인 디자인</li>
                </ul>
            </div>
        `
    }
};

// ========== 초기화 ==========
window.addEventListener('load', () => {
    // 프리로더 숨기기
    setTimeout(() => {
        document.querySelector('.preloader').classList.add('hidden');
    }, 2000);

    // AOS 초기화
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 100
    });

    // Particles.js 초기화
    if (window.particlesJS) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#00D9B5'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.3,
                    random: true
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#00D9B5',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    resize: true
                }
            },
            retina_detect: true
        });
    }

    // 스킬 바 애니메이션
    const observeSkills = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    const progress = bar.getAttribute('data-progress');
                    setTimeout(() => {
                        bar.style.width = progress + '%';
                    }, 200);
                });
                observeSkills.unobserve(entry.target);
            }
        });
    });

    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        observeSkills.observe(skillsSection);
    }
});

// ========== 커스텀 커서 ==========
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

if (cursor && cursorFollower) {
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    setInterval(() => {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
    }, 10);

    // 호버 효과
    const links = document.querySelectorAll('a, button, .project-card');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// ========== 네비게이션 ==========
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// 스크롤 효과
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // 활성 링크 표시
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// 부드러운 스크롤
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });

            // 모바일 메뉴 닫기
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// 모바일 메뉴 토글
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// ========== 프로젝트 필터 ==========
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 활성 버튼 변경
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');

            if (filter === 'all' || category === filter) {
                card.classList.remove('hide');
                setTimeout(() => {
                    card.style.display = 'block';
                }, 100);
            } else {
                card.classList.add('hide');
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ========== 모달 ==========
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');

function openModal(projectId) {
    const project = projectData[projectId];

    if (project) {
        modalContent.innerHTML = project.description;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ========== 연락처 폼 ==========
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        console.log('Form Data:', data);

        // 성공 메시지
        alert('메시지가 성공적으로 전송되었습니다!\n\n곧 연락드리겠습니다. 감사합니다!');

        // 폼 초기화
        contactForm.reset();
    });
}

// ========== Back to Top 버튼 ==========
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========== 로딩 애니메이션 ==========
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ========== 콘솔 메시지 ==========
console.log('%c AI를 활용한 과제 Portfolio ', 'background: linear-gradient(135deg, #00D9B5, #00C8FF); color: white; font-size: 24px; padding: 15px; border-radius: 10px; font-weight: bold;');
console.log('%c 창의적 건축 디자인 ', 'color: #1A1A1A; font-size: 16px; padding: 10px; font-weight: 500;');
console.log('%c 김견우 (2107003) ', 'color: #666; font-size: 14px; padding: 5px;');
console.log('%c 전통과 현대를 잇는 건축 디자인 ', 'color: #00D9B5; font-size: 14px; padding: 5px; font-style: italic;');
