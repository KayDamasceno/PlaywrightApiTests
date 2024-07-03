import { test, expect } from '@playwright/test';
import {loginPost} from '../helpers/challengers/challengerRequests'



test.describe('Challenger Login',async() => {

  test("login success", async () => {

    const payload = JSON.stringify({"username":"admin", "password":"password"})

    
    const loginResponse = await loginPost(payload)
    const body = await loginResponse.json()

    expect(loginResponse.status()).toBe(201)
    expect(body.token).not.toBeNull()
    expect(body.token).toContain('Bearer')

  
    
  })

  test("Wrong credentials", async () => {

    const payload = JSON.stringify({"username":"wrongAdmin", "password":"wrongPassword"})

    
    const loginResponse = await loginPost(payload)
    const body = await loginResponse.json()

    expect(loginResponse.status()).toBe(401)
    expect(body.error).toBe("Credenciais inválidas")


  })

  test("Missing payload", async () => {

    const loginResponse = await loginPost()
    const body = await loginResponse.json()

    expect(loginResponse.status()).toBe(401)
    expect(body.error).toBe("Credenciais inválidas")

  })

})