require 'test_helper'

class MusicsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get musics_create_url
    assert_response :success
  end

  test "should get destroy" do
    get musics_destroy_url
    assert_response :success
  end

end
