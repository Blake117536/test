"use client"

import {
  Search,
  Bell,
  User,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  Upload,
  MessageSquare,
  Mail,
  Calendar,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r">
        <div className="p-6">
          <h1 className="text-xl font-bold text-orange-600">XROMEDA</h1>
        </div>

        <nav className="mt-6">
          <div className="px-4 mb-2">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">메뉴</span>
          </div>

          <div className="space-y-1 px-2">
            <Button variant="default" className="w-full justify-start bg-orange-500 hover:bg-orange-600">
              대시보드
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-600">
              통계
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-600">
              콘텐츠 관리
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-600">
              설정 & 도구
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-600">
              커뮤니티
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-600">
              통계
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-600">
              계정 설정
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-600">
              고객 센터
            </Button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="AI 어시스턴트 대화 검색" className="pl-10 w-80" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="h-5 w-5 text-gray-500" />
              <User className="h-5 w-5 text-gray-500" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">대시보드</h2>
            <p className="text-gray-600">내 계정의 모든 정보 현황을 확인해 보세요</p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-6 mb-6 border-b">
            <button className="pb-2 border-b-2 border-orange-500 text-orange-600 font-medium">기본</button>
            <button className="pb-2 text-gray-500">수익</button>
            <button className="pb-2 text-gray-500">통계</button>
            <button className="pb-2 text-gray-500">작업관리</button>
          </div>

          {/* Stats Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">핵심 지표</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">총 방문수</p>
                      <p className="text-2xl font-bold">1,284</p>
                      <p className="text-xs text-gray-500">어제 대비 증가한 방문 수</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">신규 회원</p>
                      <p className="text-2xl font-bold">24</p>
                      <p className="text-xs text-gray-500">최근 7일간 신규 가입자 수</p>
                    </div>
                    <Users className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">매출 현황</p>
                      <p className="text-2xl font-bold">342</p>
                      <p className="text-xs text-gray-500">총 매출액 기준 수치 및 증감</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Revenue Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">수익 현황</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-600">이번 달 수익</p>
                      <p className="text-2xl font-bold">₩ 2,450,000</p>
                      <p className="text-xs text-gray-500">지난 달 대비 수익 현황</p>
                    </div>
                    <TrendingUp className="h-6 w-6 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-600">전월 대비 증가율</p>
                      <p className="text-2xl font-bold text-green-600">+22%</p>
                      <p className="text-xs text-gray-500">지난 달 대비 수익 증가율</p>
                    </div>
                    <Activity className="h-6 w-6 text-green-500" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">콘텐츠 성과</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">총 조회수</p>
                      <p className="text-2xl font-bold">45,231</p>
                      <p className="text-xs text-gray-500">전체 콘텐츠 조회 수</p>
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      조회수 상승 ↗
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">참여 점수</p>
                      <p className="text-2xl font-bold">8.4%</p>
                      <p className="text-xs text-gray-500">전체 방문 중 참여 비율 평균</p>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      참여율 증가
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Analytics Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">커뮤니티 활동</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">댓글 수</p>
                      <p className="text-2xl font-bold">1,847</p>
                      <p className="text-xs text-gray-500">전체 댓글 수 및 활동 지수</p>
                    </div>
                    <MessageSquare className="h-8 w-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">팔로워 수</p>
                      <p className="text-2xl font-bold">156</p>
                      <p className="text-xs text-gray-500">현재 팔로워 수 및 증감 현황</p>
                    </div>
                    <Users className="h-8 w-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Real-time Activity */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">실시간 활동</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="mb-2">
                    <p className="text-sm text-gray-600">새로운 알림</p>
                    <p className="text-xl font-bold">3개</p>
                    <p className="text-xs text-gray-500">확인하지 않은 새로운 알림(메시지)</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 text-center">
                  <div className="mb-2">
                    <p className="text-sm text-gray-600">새로운 후기/댓글</p>
                    <p className="text-xl font-bold">₩ 45,000</p>
                    <p className="text-xs text-gray-500">새로운 후기 및 댓글 활동(메시지)</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 text-center">
                  <div className="mb-2">
                    <p className="text-sm text-gray-600">경품 당첨자</p>
                    <p className="text-xl font-bold">2명</p>
                    <p className="text-xs text-gray-500">경품 당첨자 및 이벤트 참여(메시지)</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 text-center">
                  <div className="mb-2">
                    <p className="text-sm text-gray-600">예약된 업로드</p>
                    <p className="text-xl font-bold">5개</p>
                    <p className="text-xs text-gray-500">예약된 콘텐츠 업로드 및 게시 일정(메시지)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">빠른 실행</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                  <p className="font-medium">새 콘텐츠 업로드</p>
                  <p className="text-xs text-gray-500">새로운 콘텐츠 업로드 및 게시</p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <Bell className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                  <p className="font-medium">공지사항 작성</p>
                  <p className="text-xs text-gray-500">공지사항 및 알림 작성 및 발송</p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 mx-auto mb-2 text-green-500" />
                  <p className="font-medium">메시지 메시지</p>
                  <p className="text-xs text-gray-500">메시지 및 메시지 작성 및 발송</p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                  <p className="font-medium">이벤트 생성</p>
                  <p className="text-xs text-gray-500">이벤트 및 프로모션 생성 및 관리</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>최근 및 그룹</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">기간별 활동 및 수익 그룹별 분석</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>수익 트렌드</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">수익 트렌드 및 예측 분석 시각화</p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
