import { ApplicationStruct } from "../api/application"
import { FunctionStruct } from "../api/function"
import { Constants } from "../constants"
import { DatabaseAgent } from "./db-agent"


/**
 * Export application definition to json object:
 * - cloud functions
 * - policies
 */
export class ApplicationExporter {
  readonly app: ApplicationStruct

  constructor(app: ApplicationStruct) {
    this.app = app
  }

  async build() {
    const meta = this.buildMeta()
    const functions = await this.buildFunctions()
    const policies = await this.buildPolicies()

    return {
      meta,
      functions,
      policies
    }
  }

  private buildMeta() {
    return {
      name: this.app.name,
      created_at: Date.now()
    }
  }

  private async buildFunctions() {
    const db = DatabaseAgent.sys_db
    const r = await db.collection(Constants.cn.functions)
      .where({ appid: this.app.appid })
      .limit(999)
      .get<FunctionStruct>()

    const functions = r.data
    const ret = functions.map(func => {
      return {
        name: func.name,
        label: func.label,
        code: func.code,
        hash: func.hash,
        tags: func.tags,
        description: func.description,
        enableHTTP: func.enableHTTP,
        status: func.status,
        triggers: func.triggers,
        debugParams: func.debugParams,
        version: func.version
      }
    })

    return ret
  }

  private async buildPolicies() {
    const db = DatabaseAgent.sys_db
    const r = await db.collection(Constants.cn.policies)
      .where({ appid: this.app.appid })
      .get()

    const policies = r.data
    const ret = policies.map(po => {
      return {
        name: po.name,
        description: po.description,
        status: po.status,
        rules: po.rules,
        injector: po.injector ?? null,
        hash: po.hash,
      }
    })

    return ret
  }
}